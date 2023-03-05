import React, { Component } from "react";
import './Form.css'

import Swal from 'sweetalert2'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      gender: ''
    }
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleName (event) {
    this.setState({name: event.target.value})
  }

  handleEmail (event) {
    this.setState({email: event.target.value})
  }

  handleSelect (event) {
    console.log(event.target.value);
    this.setState({gender: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    Swal.fire(
      `Recebemos seus dados ${this.state.name}!`,
      'Obrigado!',
    )

  }
    render() {
        return (
          <form>
            <h1>Receba minha newsletter</h1>
            <div>
              <input placeholder="Digite seu nome" name="name" type="text" onChange={this.handleName} value={this.state.name}></input>
              <input placeholder="Email" name="name" type="email" onChange={this.handleEmail} value={this.state.email}></input>
              <select onChange={this.handleSelect}>
                <option value="null">...</option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
                <option value="undentify">Prefiro não me identificar</option>
              </select>
            </div>
            <textarea></textarea>
            <button type="submit" onClick={this.handleSubmit}>Enviar Informações</button>
          </form>
        )
    }
}

export default Form