import React, { Component } from 'react';
import M from 'materialize-css';

export default class Input extends Component {

    componentDidMount() {
        M.AutoInit();
    }

    componentDidUpdate() {
        M.updateTextFields();
    }

    handleCopy = () => {
        const {id} = this.props;
        const inputId = `input_${id}`;
        const inputElement = document.querySelector(`#${inputId}`);
        inputElement.select();
        document.execCommand('copy');
    }

    handleInputChange = ({target}) => {
        const newText = target.value;
        this.props.onChange(newText)
    }

    cleanInput = ({target}) => {
        if(!target.readOnly){
            target.value = '';
        };
    }

    render() {
        const {
            id,
            description,
            value,
            autoFocus = false,
            readOnly = false,
            allowCopy = false,
        } = this.props;

        const inputId = `input_${id}`;

        const { inputStyle, inputFlex, button } = styles;

        return (
            <div style={inputStyle}>
                <div className="input-field" style={inputFlex}>
                    
                    <input
                        id={inputId}
                        type="text"
                        value={value}
                        onChange={this.handleInputChange}
                        onFocus={this.cleanInput}
                        className="input-field"
                        autoFocus={autoFocus}
                        readOnly={readOnly}
                    />
                    <label htmlFor={inputId} className="active">
                        {description}
                    </label>

                </div>
                {allowCopy && (
                    <i onClick={this.handleCopy} className="material-icons" style={button} >content_copy</i>
                )}
            </div>
        )
    }
}

const styles = {
    inputStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputFlex: {
        flex: 7,
    },
    button: {
        marginLeft: '10px',
        cursor: 'pointer'
    },
};