import React from 'react';
import { Styles } from "./styles/search.jsx";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchBtn: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {
                searchBtn: !prevState.searchBtn,
            }
        });
    }

    render() {
        let sidebarBody = (this.state.searchBtn ? ' active' : '');

        return (
            <Styles>
                {/* Search Box */}
                <a href="/" className="nav-link nav-search" onClick={this.handleClick}>
                    <i className="las la-search"></i>
                </a>
                {/* Fullscreen search */}
                <div className={`search-wrap${sidebarBody}`} id="search-wrap">
                    <div className="search-overlay custom-overlay" onClick={this.handleClick}></div>
                    <div className="search-inner">
                        <form method="get" className="search-form">
                            <input type="search" name="search" placeholder="Type and hit enter...." />
                            <a onClick={this.handleClick} className="close-search" href="/"><i className="las la-times"></i></a>
                        </form>
                    </div>
                </div>
            </Styles>
        )
    }
}

export default Search
