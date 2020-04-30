import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Albums extends Component {
  printAlbum() {
    var onclick = false;
    if (
      this.props.data_albums != null &&
      this.props.data_users != null &&
      !onclick
    ) {
      return this.props.data_albums.map((albums) => {
        return this.props.data_users.map((users) => {
          // if (albums.id === 1) {
          //console.log(albums.id);
          if (users.id === albums.userId)
            return (
              <React.Fragment>
                <div
                  style={{
                    width: "20%",
                    outline: "1px solid black",
                    textAlign: "left",
                  }}
                >
                  <h3>User: {users.name} </h3>
                  <h4>
                    Title: <Link to={"/pics/"+ albums.userId}>{albums.title}</Link>
                  </h4>
                  <p>UserId: {albums.userId}</p>
                  <p>Id: {albums.id}</p>
                </div>
              </React.Fragment>
            );
          // } else {
          //   return (
          //     <React.Fragment>
          //       <p>Sup</p>
          //     </React.Fragment>
          //   );
          // }
        });
      });
    } else {
      return (
        <React.Fragment>
          <p>Click Search To Begin</p>
        </React.Fragment>
      );
    }
  }

  render() {
    return <div>{this.printAlbum()}</div>;
  }
}

export default Albums;
