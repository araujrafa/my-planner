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

  getStatus(imc) {
    let result = '';

    if (imc < 18.5) {
      result = 'BAIXO PESO';
    } else if (imc < 24.9) {
      result = 'PESO IDEAL';
    } else if (imc < 29.9) {
      result = 'SOBREPESO';
    } else if (imc < 34.9) {
      result = 'OBESIDADE I';
    } else if (imc < 39.9) {
      result = 'OBESIDADE II';
    } else {
      result = 'OBESIDADE III'
    }

    return result;
  }

  renderInfos() {
    const body = this.props.body;
    return Object.keys(body).map(key => {
      return (
        <tr key={key}>
          <td>{body[key].month}</td>
          <td>{body[key].weigth}</td>
          <td>{body[key].height}</td>
          <td>{(body[key].imc).toFixed(1)}</td>
          <td>{this.getStatus(body[key].imc)}</td>
        </tr>
      )
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
              {this.renderInfos()}
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