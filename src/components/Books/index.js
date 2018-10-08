import React from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions";

// Component
import Book from './item';

class Books extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(e, data) {
    if (e.key === 'Enter') {
      const { updateData } = this.props;
      data.ref = 'books';
      updateData(data);
    }
  }

  renderBooks() {
    const { books } = this.props;
    return Object.keys(books).map((prop, i) => {
      return (
        <div key={prop} className="col-lg-6 col-sm-12" style={{marginBottom: 10}}>
          <div className="card-header">
            {i + 1}
          </div>
          <div className="card-body">
            <Book 
              name={books[prop].name}
              author={books[prop].author}
              numberChapters={books[prop].numberChapters}
              rating={books[prop].rating}
              initialDate={books[prop].initialDate}
              endDate={books[prop].endDate}
              id={prop}
              onSubmit={this.onUpdate}
            />
            <button type="button" className="btn btn-danger" onClick={() => this.onDelete(books[prop], prop)}>Deletar</button>
          </div>
        </div>
      )
    });
  }

  onDelete(data, id) {
    const { removeData } = this.props;
    data.id = id;
    data.ref = 'books';
    removeData(data);
  }

  onSubmit(e, data) {
    const { addData } = this.props;
    data.ref = 'books';
    addData(data);
  }

  componentWillMount() {
    this.props.fetchData('books');
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{marginBottom: 10}}>
          <h3>Organizador de Livros</h3>
          <Book 
            name=''
            author=''
            numberChapters=''
            rating=''
            initialDate=''
            endDate=''
            onSubmit={this.onSubmit}
          />
        </div>
        <div className="row" style={{marginBottom: 10}}>
          <h4>Livros lidos</h4>
          <div className="row">
            {this.renderBooks()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return {
    books
  };
}

export default connect(mapStateToProps, actions)(Books);