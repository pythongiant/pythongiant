import React,{Component} from "react";
import Switch from "react-switch";
import {DarkMode,LightMode} from "@mui/icons-material/";
import "./switch.scss"
import globals from "../../_globals.scss";
export default class DarkModeSwitch extends Component{
    constructor(){
        super();
        this.state = {checked:false};
        this.handleChange = this.handleChange.bind(this)
        this.sliderBackgroundColorLight = globals.sliderBackgroundColorLight
        this.sliderButtonColor = globals.sliderButtonColor
        this.sliderBackgroundColorDark = globals.sliderBackgroundColorDark

    }
    handleChange(checked){
        
        this.setState({checked})
    }
    componentDidMount(){
        console.log()
        console.log("variables", globals.sliderBackgroundColorDark)
    }
    render(){
        return(
            <Switch 
                width={90}
                height={30}
                onColor={this.sliderBackgroundColorDark}
                onHandleColor={this.sliderButtonColor}
                offHandleColor={this.sliderButtonColor}
                offColor={this.sliderBackgroundColorLight}
                onClick={this.func}
                onChange={this.handleChange}
                className="switch"
                checked={this.state.checked}
                uncheckedIcon={
                    <div className="IconButtonLight">
                <LightMode/>
                </div>}
                checkedIcon={
            <div className="IconButtonDark"><DarkMode/></div>
            }
                />
        )
    }
}