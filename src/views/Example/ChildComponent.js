import React from "react";
import "./Demo.scss";

class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handelOnClickDelete = (job) => {
    console.log(">>>>> handel conditional job: ", job);
    this.props.deleteAJob(job);
  };

  render() {
    let { arrayJobs } = this.props;
    let { showJobs } = this.state;
    return (
      <>
        {showJobs === false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}> Show </button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {arrayJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} $ <></>{" "}
                    <span onClick={() => this.handelOnClickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}> Hide </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
