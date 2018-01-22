import React from 'react';
import $ from 'jquery';
import 'jplayer';
import Progress from '../components/progress';
import '../css/player.less';
class Player extends React.Component{
    constructor(props){
        super(props);
        this.state={
            progress:'-',
            duration:0
        };
    }
    componentDidMount(){
        $('#player').bind($.jPlayer.event.timeupdate,(e)=>{

            this.setState({
                progress:e.jPlayer.status.currentPercentAbsolute,
                duration:e.jPlayer.status.duration
            });
        });
    }
    componentWillUnmount(){
        $('#player').unbind($.jPlayer.event.timeupdate);
    }
    progressChangeHandler(progress){
        $('#player').jPlayer('play',this.state.duration*progress);
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
                            <div className="volume-wrapper">音量控制部分</div>
                        </div>
                    </div>
                    <div style={{height:10,lineHeight:'10px'}}>
                        播放进度
                    </div>
                    <div className="mt35 row">
                        <div>
                            <i className="icon prev"></i>
                            <i className="icon ml20 play"></i>
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