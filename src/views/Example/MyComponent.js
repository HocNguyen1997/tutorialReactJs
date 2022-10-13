import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrayJobs: [
      { id: "123", title: "Developer", salary: "500" },
      { id: "345", title: "Testers", salary: "400" },
      { id: "567", title: "Project managers", salary: "1000" },
    ],
  };
  addNewJob = (job) => {
    console.log(job);
    this.setState({
      arrayJobs: [...this.state.arrayJobs, job],
    });
  };
  
  deleteAJob = (job) => {
    let currentJob = this.state.arrayJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrayJobs: currentJob,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log('>> run didupdate: ', 'prev state: ', prevState, ' current state: ', this.state)
  }
  
  componentDidMount() {
    console.log('>>>>> check component did mount')
  }
  
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <div>
          <ChildComponent
            arrayJobs={this.state.arrayJobs}
            deleteAJob={this.deleteAJob}
          />
        </div>
      </>
    );
  }
}

export default MyComponent;
