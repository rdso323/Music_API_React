import React, { Component } from 'react'

export class Search extends Component {

    render() {
        return (
            <div>
                <input data-test="search_button" type= "submit" name = "submit" value="Search" onClick={this.props.handleSubmit}/>
            </div>
        )
    }
}

export default Search
