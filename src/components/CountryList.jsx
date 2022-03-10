import React, { Component } from "react";
import CountryInList from "./CountryInList";

export default class CountryList extends Component {
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