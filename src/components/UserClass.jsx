import React from "react";

import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      users: {
        name: "Dummy",
        location: "Dummy"
      }
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://api.github.com/users/aryaman2412"
    );
    const data = await response.json();

    this.setState({
      users: data
    });
  }

  render() {
    const { name, location } = this.state.users;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
};

export default UserClass;