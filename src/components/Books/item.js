import React from 'react';

// Components
import Input from '../common/Input'

class Book extends React.Component {
  state = {
    author: '',
    endDate: '',
    id: '',
    initialDate: '',
    name: '',
    numberChapters: '',
    rating: '',
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

  onEnter(e) {
    if (e.key === 'Enter') {
      this.props.onSubmit(e, this.state);
      this.setState({
        author: '',
        endDate: '',
        id: '',
        initialDate: '',
        name: '',
        numberChapters: '',
        rating: '',
      });
    }
  }

  render() {
    return (
      <div className="form-row">
        <Input 
          label="Título"
          name="name"
          classContainer="form-group col-md-6"
          classInput="form-control"
          value={this.state.name}
          onChange={this.handleState}
          onKeyPress={(e) => this.onEnter(e)}
        />
        <Input 
          label="Autor"
          name="author"
          classContainer="form-group col-md-6"
          classInput="form-control"
          value={this.state.author}
          onChange={this.handleState}
          onKeyPress={(e) => this.props.onSubmit(e, this.state)}
        />
        <Input 
          label="Quantidade de capitulos"
          type="number"
          name="numberChapters"
          classContainer="form-group col-md-6"
          classInput="form-control"
          value={this.state.numberChapters}
          onChange={this.handleState}
          onKeyPress={(e) => this.props.onSubmit(e, this.state)}
        />
        <Input 
          label="Avaliação"
          name="rating"
          classContainer="form-group col-md-6"
          classInput="form-control"
          value={this.state.rating}
          onChange={this.handleState}
          onKeyPress={(e) => this.props.onSubmit(e, this.state)}
        />
        <Input
          label="Início da leitura"
          name="initialDate"
          classContainer="form-group col-md-6"
          classInput="form-control"
          value={this.state.initialDate}
          onChange={this.handleState}
          onKeyPress={(e) => this.props.onSubmit(e, this.state)}
        />
        <Input 
          label="Fim"
          name="endDate"
          classContainer="form-group col-md-6"
          classInput="form-control"
          value={this.state.endDate}
          onChange={this.handleState}
          onKeyPress={(e) => this.props.onSubmit(e, this.state)}
        />
      </div>
    )
  }
}

export default Book;