
import React, { Component } from "react";
import DetailInfo from "./DetailInfo";

export default class CountryInList extends Component {
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
