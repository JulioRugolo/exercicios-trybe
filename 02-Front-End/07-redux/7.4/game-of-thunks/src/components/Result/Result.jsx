import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'

class Result extends Component {
  render() {
    const { name, gender, born, titles, tvSeries} = this.props
    return (
        (name && gender && born && titles && tvSeries) && 
          (
          <div className='result'>
            <h2>Resultados de {name}</h2>
            <ul>
              <h3>Nome:</h3>
              <li>{name}</li>
              <h3>Sexo:</h3>
              <li>{gender}</li>
              <h3>Nascimento:</h3>
              <li>{born}</li>
              <h3>Titulo:</h3>
              <li>{titles}</li>
              <h3>
                Temporadas em que {name} aparece:
              </h3>
                {tvSeries.map((season, index) => <li key={index} className='seasons'>{season}</li>)}
            </ul>
          </div>
          )
    );
  }
}

const mapStateToProps = (state) => {
  const {fullName: {name, gender, born, titles, tvSeries}} = state;
  return ({
    name,
    gender,
    born,
    titles: titles[0],
    tvSeries,
  })
}

export default connect(mapStateToProps)(Result);