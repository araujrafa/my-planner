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
      const { addData } = this.props;
      data.ref = 'books';
      addData(data);
    }
  }

  componentWillMount() {
    this.props.fetchData('books');
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