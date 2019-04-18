import React from 'react';
import Profile from './Profile';
import PeopleList from './PeopleList';

class ProfileControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      profileVisible: false,
      clickedProfile: ""
    };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleOtherSwitch = this.handleOtherSwitch.bind(this);
  }

  handleSwitch(){
    this.setState({profileVisible: true});
    this.setState({clickedProfile: "targ"});
  }
  handleOtherSwitch(){
    this.setState({profileVisible: false});
    this.setState({clickedProfile: ""});
  }

  render(){
    let currentVisible = null;
    if (this.state.profileVisible) {
      currentVisible = <Profile onSwitchClick={this.handleOtherSwitch}/>;
    } else {
      currentVisible = <PeopleList onSwitchClick={this.handleSwitch}/>
    };
    return (
      <div>
        {currentVisible}
      </div>
    );
  }
}

export default ProfileControl;
