import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if(!this.state.title || !this.state.salary){
        alert('Missing required params')
        return;
    } 
    console.log(JSON.stringify(this.state));
    this.props.addNewJob({
        id: Math.floor(Math.random() * 10000),
        title: this.state.title,
        salary: this.state.salary
    })
    this.setState({
        title: '',
        salary: ''
    });
  };

  render() {
    return (
      <form>
        <label>Job's title:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangeTitleJob(event)}
        />
        <br />
        <label>Salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />
        <br />
        <input
          type="Submit"
          onClick={(event) => {
            this.handleSubmit(event);
          }}
        />
      </form>
    );
  }
}

export default AddComponent;
