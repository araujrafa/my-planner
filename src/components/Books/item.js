import React from 'react';

// Components
import Input from '../common/Input'

class Book extends React.Component {
  state = {
    endDate: '',
    id: '',
    initialDate: '',
    name: '',
  }

  handleState = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  componentWillMount() {
    this.setState({
      ...this.props,
    });
  }

  render() {
    return (
      <div>
        <Input 
          label="Nome"
          name="name"
          value={this.state.name}
          onChange={this.handleState}
          onKeyPress={(e) => this.props.onSubmit(e, this.state)}
        />
        <Input 
          label="Data Inicial"
          name="initialDate"
          value={this.state.initialDate}
          onChange={this.handleState}
          onKeyPress={(e) => this.props.onSubmit(e, this.state)}
        />
        <Input 
          label="Data que terminou"
          name="endDate"
          value={this.state.endDate}
          onChange={this.handleState}
          onKeyPress={(e) => this.props.onSubmit(e, this.state)}
        />
      </div>
    )
  }
}

export default Book;