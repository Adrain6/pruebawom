import React, { Component } from "react";

export default class Map extends Component {
    render() {
        let url = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDHBgd0U8zuuKRsi13iFRsUpoiBs06S5PY&q={place}';
        return (
            <div>
                <iframe title={this.props.name}
                    width="800"
                    height="400"
                    frameBorder="0"
                    src={url.replace('{place}', this.props.name)} allowFullScreen>
                </iframe>
            </div>
        )
    }
}