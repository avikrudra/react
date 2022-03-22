import React, { Component } from "react";
class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      email: "",
    };
  }
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <div className="ui main">
          <h2>Add contacts</h2>

          <form className="ui form" onSubmit={this.add}>
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email Id"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div>
              <button className="ui button blue">Add</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
