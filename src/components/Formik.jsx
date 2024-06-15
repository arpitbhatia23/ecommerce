import React from 'react'
import { Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup';

const signupSchema=Yup.object({
  username:Yup.string().required(),
  email:Yup.string().required(),
  pass:Yup.string().required().min("2","enter 2 characters")
})
function Gallery() {

  return (
    <>
    <h1>This is Gallery page</h1>
    <hr />
    <br />
    <Formik 

    initialValues={{username:"",email:"",pass:"",address:"",state:""}}
    validationSchema={signupSchema}

    onSubmit={(values)=>{
      alert("name:"+values.username +"\nEmail:"+values.email +"\npassword:" +values.pass +"\nAddress:"+values.address +"\nState:" +values.state) }}

    >
      <Form>
        <label htmlFor="">Name:</label>
        <Field type ="text" placeholder="Enter your name" name="username"/>
        <ErrorMessage name='username'/>
        <br />
        <br />

        <label htmlFor="">Email:</label>
        <Field type ="email" placeholder="Enter your email" name="email"/>
        <ErrorMessage name='email'/>
        <br /><br />

        <label htmlFor="">Password</label>
        <Field type ="password" placeholder="Enter your password" name="pass"/>
        <ErrorMessage name='pass'/>
        <br /><br />
        <label htmlFor="">Address</label>
        <Field as="textarea" placeholder="enter your Address" name ="address"/>
        <br /><br />
        <label htmlFor="">--select state--</label>
        <Field as ="select" name="state">
          <option value="defaul">--select state--</option>
        <option value="HP">HP</option>
        <option value="UP">UP</option>
        <option value="MP">MP</option>
        <option value="j&k">j&K</option>
        <ErrorMessage name='state'/>
        </Field>
        <br /><br />
        <button>Submit</button>
      </Form>
    </Formik>

    </>
  )
}

export default Gallery