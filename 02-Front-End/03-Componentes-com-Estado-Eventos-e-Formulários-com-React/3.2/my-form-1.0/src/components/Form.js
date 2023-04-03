import React, { Component } from "react";
import './Form.css'

import Swal from 'sweetalert2'
import ReactFileReader from 'react-file-reader';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      poder: '',
      service: '',
      obs: '',
      data: '',
      img: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFiles = this.handleFiles.bind(this)
  }

  handleChange (event) {
    const { target } = event
    const type = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [target.name]: type})
    console.log(event.target.files)
  }

  handleFiles = files => {
    console.log(files.fileList);
    this.setState({img: 'a'})
  }

  

  handleSubmit (event) {
    event.preventDefault()
    Swal.fire(
      `${this.state.name} seu horário para ${this.state.service} está agendado:`,
      `${this.state.obs}`,
    )

  }
    render() {
        return (
          <div>
          <form>
            <h1>Agende seu horário</h1>
              
            <div>
              <input placeholder="Digite o nome da carta" name="name" type="text" onChange={this.handleChange} value={this.state.name}></input>
              <input placeholder="Digite o poder" name="poder" type="text" onChange={this.handleChange} value={this.state.email}></input>
              <select onChange={this.handleChange} name="service">
                <option value="null">...</option>
                <option value="Alongamento fio-a-fio">Alongamento fio-a-fio</option>
                <option value="Alongamento Hibrido">Alongamento Hibrido</option>
                <option value="Alongamento  Volume Russo">Alongamento  Volume Russo</option>
              </select>
            </div>
            <textarea name="obs" onChange={this.handleChange} value={this.state.description} placeholder="Digite o dia e hora."></textarea>
            <button type="submit" onClick={this.handleSubmit}>Agendar horário</button>
            <img src={this.state.img} alt={this.state.img}></img>
          </form>
          <ReactFileReader base64={true} multipleFiles={true} handleFiles={this.handleFiles}>
          <button className='btn'>Upload</button>
        </ReactFileReader>
        </div>
        )
    }
}

export default Form