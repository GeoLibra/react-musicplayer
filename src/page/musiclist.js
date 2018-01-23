import React,{Component} from 'react';
import '../css/musiclistitem.less';
import MusicListItem from "../components/musiclistitem";
class MusicList extends Component{
    render(){
        let listFile=this.props.musicList.map((item,index)=>{
            return (
                <MusicListItem key={index} musicItem={item} focus={item===this.props.currentMusicItem}>{item.title}</MusicListItem>
            );
        });
        return (
            <ul>
                {listFile}
            </ul>
        );
    }
}
export default MusicList;