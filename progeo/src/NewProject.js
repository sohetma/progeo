import React from 'react';
// import MD5 from '../../../node_modules/crypto-js/md5.js';
import {
  NavLink,
} from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import './Button.css';



// const Verifier = require("email-verifier");

class NewProject extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     dataForm : '',
     flash : {},
     password : '',
     confirmPassword : '',
     colorPassword : 'inherit'
   }

 }

 handleChange = (event) => {

   const {target} = event;

   this.setState({
     [target.name] : target.value
   })

   // Strategie : encadrer en rouge tant que les deux mots de passes ne sont pas identiques
   let isSamePassword = this.confirmationPassword(this.state.password, this.state.confirmPassword);
   if (isSamePassword){
     console.log("ok password");
     this.setState({
       colorPassword : 'black'
     })
     // enlever le cadre rouge
   }
   else{
     console.log("password not same");
     this.setState({
       colorPassword : 'red'
     })
     // cadre rouge
   }
 }
 confirmationPassword = (password1, password2) => {
   return password1===password2;
 }

 // checkEmail = (email) => {
 //   let apiKey = 'at_hFnuhd5N4m3VtPXZy5OyWHmDft1Hn';
 //   let your_email_verification_api_key = `https://emailverification.whoisxmlapi.com/api/v1?apiKey=${apiKey}&emailAddress=${email}`;
 //   console.log("api url : ", your_email_verification_api_key);
 //   let verifier = new Verifier(your_email_verification_api_key);
 //   verifier.verify(email, (err, data) => {
 //     if (err) throw err;
 //     console.log("email verification : ", data);
 //   });
 // }

 handleSubmit = (event) => {
   event.preventDefault();
   const data = new FormData(event.target);

   const firstname = data.get("firstname");
   const lastname = data.get("lastname");
   const email = data.get("email");
   const company = data.get("company");
   const password = data.get("password");
   // const confirmPassword= data.get("confirmPassword");
  const customCheck2 = data.get("customCheck2");

   // CRYPT Password
  //  var hash = MD5(password).toString();


   // Check verification email
   // this.checkEmail(email);

   const dataForm = {
     firstname : firstname,
     lastname : lastname,
     email : email,
     company : company,
     password : password,
    legal : customCheck2
   }

   const options = {
     method : 'POST',
     headers : {
       'Accept' : 'application/json',
       'Content-Type' : 'application/json'
     },
     options : {
       mode : 'no-cors'// res.sendStatus(200);
     },
     body : JSON.stringify(dataForm)
   };

   const urlApi = 'http://localhost:5000/auth/signup';

   fetch(urlApi, options)
   .then(res  =>  res.json())
   .then(
       res  =>  this.setState({"flash":  res.flash}),
       err  =>  this.setState({"flash":  err.flash})
   )
   // this.props.history.push('/sign-in');
 }

 render(){
   return (
     <div className="hero-header">
     <div className="SignIn"></div>
       <form onSubmit={this.handleSubmit} className="auth-wrapper">
        <h2>LANCE TON PROJET</h2>
       <div className="auth-inner">
       <input name="titre" className="inputForm" type="text" required></input>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label htmlFor="lastname" className="labelForm">Titre</label>
       </div>

       <div className="auth-inner">
       <input name="description" className="inputForm" type="text" required></input>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label htmlFor="description" className="labelForm">Description</label>
       </div>

       <div className="auth-inner">
       <input name="createurs" className="inputForm" type="text" required></input>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label htmlFor="createurs" className="labelForm">Créateurs</label>
       </div>

       <div className="auth-inner">
       <input name="images" className="inputForm" type="text" required></input>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label htmlFor="images" className="labelForm">Télécharge des images</label>
       </div>

       <div className="auth-inner">
       <input name="createurs" className="inputForm" type="text" required></input>
        <span className="highlight"></span>
        <span className="bar"></span>
        <label htmlFor="createurs" className="labelForm">Télécharge une vidéo</label>
       </div>


        <button className="button--submit"
                type="submit">
                <span className="button--submit__label button--submit__default">
                  FONCE
                </span>
        </button>

     </form>
     </div>
   )
 }
}


export default NewProject;
