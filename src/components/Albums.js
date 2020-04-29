import React, { Component } from "react";

export class Albums extends Component {
  printAlbum() {
    if (this.props.data_albums != null && this.props.data_users != null) {
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
                  <p>User: {users.name}</p>
                  <p>UserId: {albums.userId}</p>
                  <p>Id: {albums.id}</p>
                  <p>Title: {albums.title}</p>
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
