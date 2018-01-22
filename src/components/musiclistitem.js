import React,{Component} from 'react';
class MusicListItem extends Component{
    render(){
        let musicItem=this.props.musicItem;
        return (
            <li className="components-musiclistitem row">
                <p><strong>{musicItem.title}</strong> - {musicItem.artist}
                </p>
                <p className="-col-auto delete"></p>
            </li>
        );
    }
}
export default MusicListItem;