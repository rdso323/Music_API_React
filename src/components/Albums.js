import React, { Component } from "react";

export class Albums extends Component {
  printAlbum() {
    if (this.props.data!=null) {
      this.props.data.map((flight) => {
        if (flight.id === 1) {
          console.log(flight.id);
          return (
            <React.Fragment>
              <p>hi</p>
              <p>id:{flight.id}</p>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment>
              <p>Sup</p>
            </React.Fragment>
          );
        }
      });
    } else {
      return (
        <React.Fragment>
          <p>hi no data</p>
        </React.Fragment>
      );
    }
  }

  render() {
    return <div>
        {this.printAlbum()}
    </div>;
  }
}

export default Albums;
