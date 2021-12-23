import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      password:'',
      submitBtn: ''
    },
    onSubmit: values=>{
      console.log ('form:', values);
    },
    validate: values=>{
      let errors ={};
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!values.email) errors.email ='Field Required';
      if(!values.password) errors.password ='Field Required';
      if(!values.email.match(mailformat)) errors.email ='Username should be an email';
      if(values.email && values.email.match(mailformat)) errors.submit = 'Login Successfull';
      return errors;
    }
  });
  return (
    <div >
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="email" type= "text" onChange={formik.handleChange} value={formik.values.email}></input>
              {formik.errors.email ? <div style= {{color:'red'}}>{formik.errors.email}</div>:null}
        <div>Password</div>
        <input name="password" type= "text" onChange={formik.handleChange} value={formik.values.password}></input>
              {formik.errors.password ? <div style= {{color:'red'}}>{formik.errors.password}</div>:null}
        <button name= 'submitBtn'type="submit" onClick={formik.handleChange} value={formik.values.submit}>Submit</button>
              {formik.errors.submit ? <div style= {{color:'green'}}>{formik.errors.submit}</div>:null}
      </form>
     
    </div>
  );
}

export default App;
