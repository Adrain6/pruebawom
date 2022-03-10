import React, { Component } from "react";
import NoSearchSelected from "./ui/NoSearchSelected";
import Records from "./ui/Records";
import { getData } from './../utilities/api'

export default class ResultContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }
    }
    componentDidUpdate(previousProps) {
        getData(this.props.searchKeys).then(res => {
            res.json().then(data => {
                if(previousProps.searchKeys !== this.props.searchKeys) this.setState({data})
            })
        });
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