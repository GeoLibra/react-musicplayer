import React from 'react';
import $ from 'jquery';
// import 'jplayer';
import Progress from '../components/progress';
import '../css/player.less';
import {Link} from 'react-router-dom';
import Pubsub from 'pubsub-js';
class Player extends React.Component{
    constructor(props){
        super(props);
        this.state={
            progress:0,
            duration:0,
            barColor:'#2f9842',
            volume:0,
            isPlay:true,
            leftTime:''
        };
    }
    componentDidMount(){
        $('#player').bind('timeupdate',(e)=>{
            /**
             * duration 返回音频的长度(秒)
             * currentTime 设置或返回音频中的当前播放位置(秒)
             * volume	设置或返回音频的音量
             */
            let percent = Math.floor(100*(e.target.currentTime / e.target.duration));
            this.setState({
                volume:e.target.volume*100,
                progress:percent,
                duration:e.target.duration,
                leftTime:this.formattime(this.state.duration*(1-e.target.currentTime / e.target.duration))
            });
        });
    }
    componentWillUnmount(){
        $('#player').unbind('timeupdate');
    }
    progressChangeHandler(progress){
        let player=$('#player')[0];
        player.currentTime=this.state.duration * progress;
    }
    changeVolumeHandler(progress){
        this.setState({
            volume: progress * 100,
        });
        $("#player")[0].volume=progress;
    }
    play(){
        let player=$('#player')[0];
        // 获取转圈的封面图片
        let imgAnimation = this.refs.imgAnimation;
        if(this.state.isPlay){
            player.pause();
            imgAnimation.style = 'animation-play-state: paused';
        }else {
            player.play();
            imgAnimation.style = 'animation-play-state: running';
        }
        this.setState({
            isPlay:!this.state.isPlay
        });
    }
    playNext(){
        Pubsub.publish('PLAY_NEXT');
    }
    playPrev(){
        Pubsub.publish('PLAY_PREV');
    }
    formattime(time){
        if(time){
            time=Math.floor(time);
            let minutes=Math.floor(time/60);
            let seconds=Math.floor(time%60);
            seconds=seconds<10?`0${seconds}`:seconds;
            return `-${minutes}:${seconds}`;
        }
    }
    render(){
        return (
        <div className="player-page">
            <h1 className="caption"><Link to="/list">音乐收藏夹 &gt;</Link></h1>
            <div className="mt20 row">
                <div className="controll-wrapper">
                    <h2 className="music-title">{this.props.currentMusicItem.title}</h2>
                    <h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
                    <div className="row mt20">
                        <div className="left-time -col-auto">{this.state.leftTime}</div>
                        <div className="volume-container">
                            <i className="icon-volume rt" style={{top:5,left:-5}}></i>
                            <div className="volume-wrapper">
                                <Progress progress={this.state.volume} onProgressChange={this.changeVolumeHandler.bind(this)} barColor="#aaa"/>
                            </div>
                        </div>
                    </div>
                    <div style={{height:10,lineHeight:'10px',marginTop:'10px'}}>
                        <Progress progress={this.state.progress} onProgressChange={this.progressChangeHandler.bind(this)} barColor={this.state.barColor}/>
                    </div>
                    <div className="mt35 row">
                        <div>
                            <i className="icon prev" onClick={this.playPrev.bind(this)}></i>
                            <i className={`icon ml20 ${this.state.isPlay?'pause':'play'}`} onClick={this.play.bind(this)}></i>
                            <i className="icon next ml20" onClick={this.playNext.bind(this)}></i>
                        </div>
                        <div className="-col-auto">
                            <i className="icon repeat-cycle"></i>
                        </div>
                    </div>
                </div>
                <div className="-col-auto cover">
                    <img ref="imgAnimation" src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title}/>
                </div>
            </div>
        </div>
        );
    }
}
export default Player;