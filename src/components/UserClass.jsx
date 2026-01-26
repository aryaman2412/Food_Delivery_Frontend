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

    this.interval = setInterval(()=>{
        console.log("I am an interval")
    },1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render() {
    const { name, location } = this.state.users;

    return (
      <div className="p-4">
        <h2 className=" font-semibold text-xl">Name: {name}</h2>
        <h3 className=" font-semibold text-xl">Location: {location}</h3>
      </div>
    );
  }
};

export default UserClass;