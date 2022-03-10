import React, { Component } from "react";
import DetailInfo from "./detailInfo";

class NoSearchSelected extends Component {
    render() {
        return <p>Debe ingresar un criterio de búsqueda para ver los resultados.</p>
    }

}
class NoFindedRecords extends Component {
    render() {
        return <p>No se han encontrado coincidencias para la búsqueda.</p>
    }
}

class CountryInList extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    detailInfo = () => {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <li className="element-country" onClick={this.detailInfo}>
                <img className="img-flag" alt="flag..." src={this.props.country.flags.png}></img>
                <span className="country-name">{this.props.country.name.common}</span>
                <DetailInfo country={this.props.country} show={this.state.show} />
            </li>
        )
    }
}

class CountryList extends Component {
    render() {
        return (<ul className="list-countries">
            {
                Object.keys(this.props.data).length > 0 &&
                this.props.data.map((country, index) => {
                    return (
                        <CountryInList
                            key={index}
                            country={country}
                        />
                    )
                })
            }
        </ul>)
    }
}

class Records extends Component {
    render() {
        return (<div>
            {
                this.props.data.status && this.props.data.status === 404
                    ? <NoFindedRecords />
                    : <CountryList data={this.props.data} />}
        </div>)
    }
}

export default class ResultContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }
    componentDidUpdate(previousProps) {
        this.getData(previousProps);
    }

    async getData(previousProps) {
        const url = 'https://restcountries.com/v3.1/name/{text}?fullText=false'
        try {
            const res = await fetch(url.replace('{text}', this.props.searchKeys));
            const data = await res.json();
            if (previousProps.searchKeys !== this.props.searchKeys) {
                this.setState({ data });
            }
        } catch (err) {
            console.error(err);
        }
    }
    render() {
        return (
            <div className="resultList">
                {
                    this.props.showRecords
                        ? <Records data={this.state.data} />
                        : <NoSearchSelected />
                }
            </div>
        )
    }
}