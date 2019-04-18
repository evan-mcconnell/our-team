import React from 'react';

class ProfileControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profileVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log("there will be routing to" + this.state.profileVisible);
    this.setState({profileVisible: true});
    this.setState({clickedProfile: "targ"});
    console.log("there will be routing to" + this.state.profileVisible);
  }

  render(){
    return (
      <div>
        <p>a component</p>
        <p onClick={this.handleClick}><em>Click to change state!</em></p>

      </div>
    );
  }
}

export default ProfileControl;
