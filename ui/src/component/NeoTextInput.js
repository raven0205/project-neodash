import React from "react";
import TextInput from "react-materialize/lib/TextInput";


class NeoTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (this.props.numeric) {
            if (isNaN(e.target.value)) {
                return
            } else {
                this.state.value = e.target.value;
                let value = this.state.value.length > 0 ? this.state.value : "0";
                this.props.onChange({label: this.props.changeEventLabel, value: Math.max(0, parseFloat(value))})
                this.setState(this.state);
            }
        } else {
            this.state.value = e.target.value;
            this.setState(this.state);
            this.props.onChange({label: this.props.changeEventLabel, value: e.target.value})
        }
    }

    render() {
        let textInput = <><TextInput onChange={this.onChange}
                                     value={this.state.value}
                                     password={this.props.password}
                                     style={this.props.style} label={this.props.label}
                                     placeholder={this.props.placeholder}
                                     id="TextInput-4"/></>;
        return textInput;
    }
}

export default (NeoTextInput);