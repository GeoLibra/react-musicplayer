import React from 'react';
import $ from 'jquery';
import 'jplayer';
import Progress from '../components/progress';
import '../css/player.less';
class Player extends React.Component{
    constructor(props){
        super(props);
        this.state={
            progress:0,
            duration:0,
            barColor:'#2f9842',
            volume:0,
            isPlay:true
        };
    }
    componentDidMount(){

        $('#player').bind($.jPlayer.event.timeupdate,(e)=>{
            this.setState({
                volume:e.jPlayer.options.volume*100,
                progress:e.jPlayer.status.currentPercentAbsolute,
                duration:e.jPlayer.status.duration
            });
        });


    }
    componentWillUnmount(){
        $('#player').unbind($.jPlayer.event.timeupdate);
    }
    progressChangeHandler(progress){

        $('#player').jPlayer(this.state.isPlay?'play':'pause',this.state.duration * progress);
    }
    changeVolumeHandler(progress){
        this.setState({
            volume: progress * 100,
        });
        $("#player").jPlayer('volume',progress);
    }
    play(){
        if(this.state.isPlay){
            $("#player").jPlayer('pause');
        }else {
            $("#player").jPlayer('play');
        }
        this.setState({
            isPlay:!this.state.isPlay
        });
    }
    render(){
        return (
        <div className="player-page">
            <h1 className="caption">音乐收藏夹 &gt;</h1>
            <div className="mt20 row">
                <div className="controll-wrapper">
                    <h2 className="music-title">{this.props.currentMusicItem.title}</h2>
                    <h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
                    <div className="row mt20">
                        <div className="left-time -col-auto">-2:00</div>
                        <div className="volume-container">
                            <i className="icon-volume rt" style={{top:5,left:-5}}></i>
                            <div className="volume-wrapper">
                                <Progress progress={this.state.volume} onProgressChange={this.changeVolumeHandler.bind(this)} barColor="#aaa"/>
                            </div>
                        </div>
                    </div>
                    <div style={{height:10,lineHeight:'10px'}}>
                        <Progress progress={this.state.progress} onProgressChange={this.progressChangeHandler.bind(this)} barColor={this.state.barColor}/>
                    </div>
                    <div className="mt35 row">
                        <div>
                            <i className="icon prev"></i>
                            <i className={`icon ml20 ${this.state.isPlay?'pause':'play'}`} onClick={this.play.bind(this)}></i>
                            <i className="icon next ml20"></i>
                        </div>
                        <div className="-col-auto">
                            <i className="icon repeat-cycle"></i>
                        </div>
                    </div>
                </div>
                <div className="-col-auto cover">
                    <img src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title}/>
                </div>
            </div>
        </div>
        );
    }
}

export default Player;