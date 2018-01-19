import React,{Component} from 'react';
import logo from '../images/logo.png';
import '../css/header.less';
class Header extends Component{
    render(){
        return (
            <div className="components-header row">
                <img src={logo} width="40" alt="musicplayer logo" className="-col-auto"/>
                <h1 className="caption">React Music Player</h1>
            </div>
        );
    }
}
export default Header;