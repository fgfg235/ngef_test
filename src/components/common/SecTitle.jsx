import React from 'react';
import { Styles } from "./styles/secTitle.jsx";

export class SecTitle extends React.Component {
    render() {
        return (
            <Styles>
                <div className="sec-title text-center">
                    <p>{this.props.title}</p>
                    <h3>{this.props.subTitle}</h3>
                </div>
            </Styles>
        )
    }
}