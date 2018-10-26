import React from 'react';
import { connect } from 'react-redux';
import * as actions from "../../actions";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      month: '',
      height: 0,
      weigth: 0,
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchData('body');
  }

  getIMC = () => this.state.weigth / (this.state.height * this.state.height);

  onSubmit(e) {
    const { addData } = this.props;
    addData({
      ...this.state,
      imc: this.getIMC(),
      ref: 'body',
    });
  }

  handleState = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Saúde Física</h3>

        <div className="form-group">
          <div className="form-row">
            <div className="form-group col-md-2">
              <label>Mês / Ano</label>
              <input
                className="form-control"
                name="month"
                type="text"
                onChange={this.handleState}
                value={this.state.month}>
              </input>
            </div>
            <div className="form-group col-md-2">
              <label>Peso</label>
              <input
                className="form-control"
                name="weigth"
                type="text"
                onChange={this.handleState}
                value={this.state.weigth}>
              </input>
            </div>
            <div className="form-group col-md-2">
              <label>Altura</label>
              <input
                className="form-control"
                name="height"
                type="text"
                onChange={this.handleState}
                value={this.state.height}>
              </input>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary md-2"
            onClick={this.onSubmit}
            >Adicionar
          </button>
        </div>

        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>Mês / Ano</th>
                <th>Peso</th>
                <th>Altura</th>
                <th>IMC</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Outubro / 2018</td>
                <td>88</td>
                <td>1.80</td>
                <td>27.8</td>
                <td>Sobrepeso</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ body }) => {
  return {
    body
  };
}

export default connect(mapStateToProps, actions)(Body);