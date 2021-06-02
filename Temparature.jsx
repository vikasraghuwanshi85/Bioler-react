import React, { Component } from 'react';

class Temparature extends Component {
    constructor(props){
        super(props);
        this.state = {scale:'c',temparature: '' };
        this.handleConvert2 = this.handleConvert2.bind(this);
    }
    handleConvert2 = (e) => {
        this.props.onChangeTemp(e.target.value);
    }
    render() { 
        return  <div>
        <div className="scaleWrapper">
            <input  scale= "c" type="text" value={this.props.temp} onChange = {this.handleConvert2} placeholder={this.props.label} />
        </div>

        
    </div>;
    }
}
 
export default Temparature;