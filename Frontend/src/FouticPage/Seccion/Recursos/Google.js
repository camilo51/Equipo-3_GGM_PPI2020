import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import './recursos.css';

 class Google extends Component {
   render() {
     const respuestaGoogle=()=>{
       console.log('respuesta');
     }
     return(
       <div>
       <GoogleLogin
         clientId="986954554651-3orf3meio45k6a5cqrkeenlcfvab4mjf.apps.googleusercontent.com"
         buttonText="Google"
         onSuccess={respuestaGoogle}
         onFailure={respuestaGoogle}
         cookiePolicy={'single_host_origin'}
       />
       </div>
     );
   }
 }

export default Google;
