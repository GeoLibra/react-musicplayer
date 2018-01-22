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
                            mp3:this.state.currentMusicItem.file
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
                <div id="player"></div>
                <Player currentMusicItem={this.state.currentMusicItem}/>
            </div>
        );
    }

}
export default Main;