import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import './recursos.css';


class Facebook extends Component{
  render() {
    const responseFacebook = (response) => {
      console.log(response);
    }
    return(
      <div>
        <FacebookLogin
          appId="358614058629409"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          textButton="Facebook"
          icon="fa-facebook"
        />
      </div>
    );
  }
}
export default Facebook;
