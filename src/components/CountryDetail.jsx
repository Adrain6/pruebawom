import React, { Component } from "react";

export default class CountryDetail extends Component {
    render() {
        let langs = '';
        let currencies = '';
        const langsEntries = Object.entries(this.props.data.languages);
        const currenciesEntries = Object.entries(this.props.data.currencies);
        langsEntries.forEach(langsArr => {
            langs = langs + ' ' + langsArr[1] + ',';
        })
        langs = langs.substring(0, langs.length - 1);
        
        currenciesEntries.forEach(currencArr => {
            currencies = currencies + ' ' + currencArr[0] + ',';
        })
        currencies = currencies.substring(0, currencies.length - 1);
        return (<table>
            <thead>
                <tr>
                    <th>Bandera</th>
                    <th>Nombre</th>
                    <th>Capital</th>
                    <th>Continente</th>
                    <th>Población</th>
                    <th>Idioma</th>
                    <th>Moneda</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img className="img-flag" alt="flag..." src={this.props.data.flags.png}></img></td>
                    <td>{this.props.data.name.common}</td>
                    <td>{this.props.data.capital}</td>
                    <td>{this.props.data.continents}</td>
                    <td>{ new Intl.NumberFormat().format(this.props.data.population)}</td>
                    <td>{langs}</td>
                    <td>{currencies}</td>
                </tr>
            </tbody>
        </table>)
    }
}