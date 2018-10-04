import React from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";

// Component
import Book from './Book';

class Books extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(e, state) {
    if (e.key === 'Enter') {
      const { updateBook } = this.props;
      updateBook(state);
    }
  }

  renderBooks() {
    const { books } = this.props;
    return Object.keys(books).map(prop => {
      return (
        <div key={prop}>
          <Book 
            name={books[prop].name}
            initialDate={books[prop].initialDate}
            endDate={books[prop].endDate}
            id={prop}
            onSubmit={this.onUpdate}
          />
        </div>
      )
    });
  }

  onSubmit(e, data) {
    if (e.key === 'Enter') {
      const { addBook } = this.props;
      addBook(data);
    }
  }

  componentWillMount() {
    this.props.fetchBooks();
  }

  render() {
    return (
      <div>
        <Book 
          name=''
          initialDate=''
          endDate=''
          onSubmit={this.onSubmit}
        />
        <div>
          {this.renderBooks()}
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