import React, { Component } from 'react';
import  './css/Convert.css';
import Temparature from "./Temparature";
function Boilwater(props){
    const willboil = props.temparature;
    return willboil >= 100?'Will boil':'Will not boil';
}
class Convert extends Component {
    constructor(props){
        super(props);
        this.state = {scale:'c',temparature: '' };
    }

    tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
      }
    toCelsius = (fahrenheit) =>{
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit = (celsius) =>{
        return (celsius * 9 / 5) + 32;
    }


    handleCTemp = (temparature) => {
        this.setState({scale:'c',temp: temparature});
    }
    handleFTemp = (temparature) => {
        this.setState({scale:'f',temp: temparature});
    }
    render() { 
        const scale = this.state.scale;
        const temperature = this.state.temp;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
       
        return (
            <div>
                <div className="scaleWrapper">
                    <Temparature scale= "c" temp= {celsius} label="Enter Celsious" onChangeTemp={this.handleCTemp}/>
                </div>
                <div className="scaleWrapper">
                    <Temparature scale= "f" temp= {fahrenheit}   label="Enter Fahrenheit" onChangeTemp={this.handleFTemp} />
                </div>
                <Boilwater temparature={celsius}/>
                
            </div>
        )
    }
}
export default Convert;