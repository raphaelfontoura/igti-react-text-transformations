import React, { Component } from 'react';
import Input from './components/Text/Input';
import Transformation from './components/Text/Transformation';
import Transformations from './components/Text/Transformations';
import { defaultState, MY_TRANSFORMATIONS } from './states/app.states';



export default class App extends Component {

  constructor() {
    super();
    this.state = { ...defaultState };
  };

  componentDidMount() {
    document.title = 'React Text Transformer';
  }

  handleInput = (newText) => {
    this.setState({
      userInput: newText
    });
  };

  render() {
    const { userInput } = this.state;

    return (
      <>
        <div className="container">

          <h1 className="center">React Text Transformer</h1>
          <Input
            autoFocus
            id="userInput"
            description="Digite o texto aqui"
            value={userInput}
            onChange={this.handleInput}
          />

          <h3 className="center">Transformações</h3>
          <Transformations>
            {MY_TRANSFORMATIONS.map(({ id, description, transformFunction }) => {

              const value = transformFunction(userInput);
              return (
                <Transformation
                  key={id}
                  id={id}
                  description={description}
                  value={value}
                />)
            })}
          </Transformations>

        </div>

      </>
    );
  }
}
