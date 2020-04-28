import React, { Component } from 'react'

export class Search extends Component {

    // fetchData() {
    //     fetch("https://jsonplaceholder.typicode.com/albums")
    //       .then((response) => response.json())
    //       .then((json) => console.log(json))
    //       .then((data) => this.setState({ this.props.data : data }));
    // }

    render() {
        return (
            <div>
                <input type= "submit" name = "submit" value="Search" onClick={this.props.handleSubmit}/>
            </div>
        )
    }
}

export default Search
