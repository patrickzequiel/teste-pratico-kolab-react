import React, { Component } from 'react';

import * as S from './styles'

import Header from '../../components/Header';


export default class Home extends Component {


render() {
    return (
        <S.Container>
            <Header />

        </S.Container>
    )
}
}
/*
import React, { Component } from 'react';
import api from '../../services/api';

class Home extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('/');

    this.setState({ filmes: response.data });
  }

  render() {

    const { filmes } = this.state;

    return (
      <div>
        <h1>Listar os Filmes</h1>
        {filmes.map(filme => (
          <li key={filme.title.id}>
            <h2>
              <strong>Título: </strong>
              {filme.title.name}
            </h2>
            <p>
              {filme.title.url}
            </p>

          </li>
        ))}
      </div>
    );
  };
};

export default Home;
*/