import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCharacter from '../../redux/actions';
import './style.css'

class Form extends Component {
  state = {
    name: '',
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    })
  }
  render() {
    const {dispatch} = this.props;
    const {name} = this.state
    return (
      <form>
        <input
          type='text'
          name='name'
          onChange={this.handleChange}
          value={name}
          placeholder='Digite o nome completo'
        />
        <button
          onClick={() => dispatch(fetchCharacter(name))}
          type='button'
        >
          Procurar personagem
        </button>
      </form>
    );
  }
}

export default connect()(Form);