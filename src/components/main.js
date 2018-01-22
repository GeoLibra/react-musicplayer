import React,{Component} from 'react';
import $ from 'jquery';
import 'jplayer';

import Header from './header';
import Player from "../page/player";

import {MUSIC_LIST} from '../data/musiclist';
import MusicList from '../page/musiclist';
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            musicList:MUSIC_LIST,
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
                {/*<Player currentMusicItem={this.state.currentMusicItem}/>*/}
                <MusicList currentMusicItem={this.state.currentMusicItem}
                           musicList={this.state.musicList}
                />
            </div>
        );
    }

}
export default Main;