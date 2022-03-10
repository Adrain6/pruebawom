import React, { Component } from "react";

export default class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            inputSearch: ''
        }
    }
    search = (e) => {
        e.preventDefault();
        this.props.onChangeSearch({
            showRecords: true,
            searchKeys: this.state.inputSearch
        });
    }
    render() {
        return (
            <form className="head-form" onSubmit={this.search}>
                <p className="title">Buscador de países</p>
                <label htmlFor="search">Buscar Países: </label>
                <input
                    id='search'
                    ref={inputElement => this.inputSearch = inputElement}
                    type="text"
                    className="wom-input-text"
                    placeholder='Escriba algo...'
                    value={this.state.inputSearch}
                    onChange={e => this.setState({ inputSearch: e.target.value })}
                />

                <button disabled={this.state.inputSearch.trim() === ''} className="wom-button button-search">Buscar</button>
            </form>
        )
    }
}