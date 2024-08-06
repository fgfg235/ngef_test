import React from 'react';
import { Styles } from "./styles/preLoader.jsx";

class PreLoader extends React.Component {
    state = {
        loading: true,
    };

    componentDidMount() {
        this.isLoading = setTimeout(() => { this.setState({ loading: false }) }, 2300);
    }
    componentWillUnmount() {
        clearTimeout(this.isLoading);
    }

    timer = () => setTimeout(() => {
        this.setState({ loading: false })
    }, 2300);

    render() {
        const { loading } = this.state;
        return (
            loading ? (
                <Styles>
                    <div className="preloader">
                        <div className="load-list">
                            <div className="load"></div>
                            <div className="load load2"></div>
                        </div>
                    </div>
                </Styles>
            ) : ""
        )
    }
}

export default PreLoader