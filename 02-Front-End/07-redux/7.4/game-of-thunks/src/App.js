import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Form from './components/Form/form';
import Header from './components/Header/header';
import Result from './components/Result/Result';

class App extends Component {
  render() {
    return (
      <>
    <Header />
    <Form />
    <Result />
    </>
    );
  }
}

export default connect()(App);
