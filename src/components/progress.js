import React,{Component} from 'react';
import '../css/progress.less';
class Progress extends Component{

    render(){
        let barStyle = {
            width: `${this.props.progress}%`
        };
        return (
            <div className="components-progress" >
                <div className="progress" style={barStyle}></div>
            </div>
        );
    }
}
export default Progress;