import React, { Component } from "react";
import CountryDetail from "./CountryDetail";
import Map from "./Map";
export default class DetailInfo extends Component {
    render() {
        return (<div>
            {
                this.props.show
                    ? <span>
                        <CountryDetail data={this.props.country} />
                        <Map name={this.props.country.name.common} />
                    </span>
                    : ''
            }
        </div>)
    }

}