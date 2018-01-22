import React,{Component} from 'react';
import $ from 'jquery';
import 'jplayer';

import Header from './header';
import Player from "../page/player";

import {MUSIC_LIST} from '../data/musiclist';
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            currentMusicItem:MUSIC_LIST[0]
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
    }
    render(){
        return (
            <div>
                <Header/>
                <Player currentMusicItem={this.state.currentMusicItem}/>
            </div>
        );
    }

}
export default Main;