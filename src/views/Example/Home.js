import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class Home extends React.Component {
  componentDidMount() {
      setTimeout(() => {
        this.props.router.navigate('/todo')
      }, 3000)
  }
  //HOC: higher order component
  render() {
    console.log(">>> check props: ", this.props);
    return <div>Hello world from Homepage with GauMap</div>;
  }
}
export default withRouter(Home);
