import React, { useEffect } from 'react'
const googleId = process.env.REACT_APP_GOOGLE_ID;
const SignIn = ({ signedIn, setSignedIn }) => {

  const initGapiSignin = () => {
    const gapi = window.gapi
    gapi.load('auth2', function () {
      gapi.auth2.init({
        client_id: googleId,
      }).then(function () {
        // setSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get())
      })
      gapi.load('signin2', () => {
        gapi.signin2.render('loginButton', {
          // scope: 'email',
          // width: 200,
          // height: 50,
          longtitle: true,
          theme: 'dark',
          onsuccess: (r) => {
            console.log(r)
            console.log('signed in')
          }
          // onfailure: handleFailure
        })
      })
    })
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://apis.google.com/js/api.js"
    script.onload = initGapiSignin
    document.body.appendChild(script)
  })


  return (

    <div>
      <p>You are not signed in. Click here to sign in.</p>
      <div id="loginButton">Login with Google</div>
    </div>
  )
}

export default SignIn
