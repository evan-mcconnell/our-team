import React from 'React';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



function Profile(props){
  return (
    <div>
      <button onClick={props.onSwitchClick}>Yes</button>
      <p>Profile is working</p>
    </div>
  )
}

Profile.propTypes= {
  onSwitchClick: PropTypes.func
}

export default Profile;
