/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import { Input } from './styles';

import CardMovie from '../../components/CardMovie'

import api from '../../services/api'

import $ from 'jquery'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log('Meu inicializador')


    //     const movie = [
    //         {id: 0, poster_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FMovie-Poster-Marvel-Holographic-Authenticity%2Fdp%2FB07Q1YWKD9&psig=AOvVaw3gXjPkLQ8TZzBWUGyYoL0N&ust=1597463404502000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCatYjlmesCFQAAAAAdAAAAABAD",
    //          title: "Filme1", overview: "Sinopse do filme"},
    //         {id: 1, title: "Filme2", overview: "Sinopse do filme 2"},
    //     ]

    //     let movieRows = []
    //     movie.forEach((movie) => {
    //     console.log(movie.title)
    //     const movieRow = <CardMovie movie={movie}/>
    // movieRows.push(movieRow)
// })

//     this.state = { rows: movieRows }
this.performSearch("ant man")
}

  performSearch(searchTerm) {
    console.log("Performance da Busca moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=e2e6c0526e3737f2381684d2fd63d354&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Dados buscados com sucesso")
        const results = searchResults.results

        let movieRows = []

        results.forEach((movie) => {

          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          console.log(movie.title)
          const movieRow = <CardMovie key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.error("Falha na busca dos dados")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <Input onChange={this.searchChangeHandler.bind(this)} placeholder="Pesquisar" />
        {this.state.rows}
      </div>
    );
  }
}
