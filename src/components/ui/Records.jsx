import React, { Component } from "react";
import NoFindedRecords from "./NoFindedRecords";
import CountryList from "./../CountryList"

export default class Records extends Component {
    render() {
        return (<div>
            {
                this.props.data.status && this.props.data.status === 404
                    ? <NoFindedRecords />
                    : <CountryList data={this.props.data} />}
        </div>)
    }
}