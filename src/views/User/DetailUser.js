import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class DetailUser extends React.Component {
  state = {
    user: [],
  };
  async componentDidMount() {
    if (this.props.router && this.props.router.params) {
      let id = this.props.router.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : [],
      });
    }
  }
  handleBackButton = () => {
    this.props.router.navigate("/user/");
  }

  render() {
    let { user } = this.state;
    let isEmptyObject = Object.keys(user).length === 0;
    return (
     <> 
        <div> Hello world from detail user with id: {this.props.router.params.id}</div>
        {!isEmptyObject && 
            <>
                <div> User's name: {user.first_name} - {user.last_name} </div>
                <div> User's email: {user.email}</div>
                <>
                    <img src={user.avatar} />
                </>
                <div>
                    <button onClick={() => this.handleBackButton()}>Back</button>
                </div>
            </>
        }
        
     </>
    );
  }
}

export default withRouter(DetailUser);
