import React, { Component } from "react";

export class Photos extends Component {
  constructor() {
    super();
    this.state = {
      data_photos: null,
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/albums/" +
        this.props.match.params.topic +
        "/photos"
    )
      .then((res) => res.json())
      .then((data_photos) => this.setState({ data_photos }));

    this.setState({ isLoaded: true });
  }

  render() {
    return (
      <div>
        {this.state.isLoaded && this.state.data_photos != null ? (
          this.state.data_photos.map((pictures) => {
              return (
                <React.Fragment>
                  <div style = {{outline: "1px solid black", padding: "2px", width: "33%", float:"left"}}>
                  <a href={pictures.url}>
                    <img src={pictures.thumbnailUrl} alt="pic" /></a>
                    <p>{pictures.title} </p>
                    </div>                
                </React.Fragment>
              );
            }
          )
        ) : (
          <h2>Sorry, currently not working</h2>
        )}
      </div>
    );
  }
}

export default Photos;
