import React,{Component} from 'react';
import $ from 'jquery';
import 'jplayer';
import Progress from './progress';
import Header from './header';

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            progress:'-',
            duration:0,
            barColor:'#2f9842'
        };
    }
    componentDidMount(){
        $('#player').jPlayer(
            {
                ready:()=>{
                    $('#player').jPlayer(
                        'setMedia',{
                            mp3:'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
                        }
                    ).jPlayer('play');
                },
                supplied:'mp3',
                wmode:'window'
            }
        );
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
            <div>
                <Header/>
                <div id="player"></div>
                <Progress progress={this.state.progress} onProgressChange={this.progressChangeHandler.bind(this)}/>
            </div>
        );
    }
}
export default Main;