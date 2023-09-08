import React from 'react';
import './App.css';
import * as yup from 'yup';
import InputField from './inputField';
import MultiStepForm, { FormStep } from './MultiStepForm';
import DateOfBirth from './datepicker'
import TextEditor from './TextEditor';
import AutoComplete from './Autocomplete';


const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  contact: yup.number().required('Contact is required')
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MultiStepForm 
          initialValues={{
            name:'',
            email:'',
            contact:'',
            dob:null,
            location:'',
            photo:'',
            about: ''
          }}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2))
          }}
        >
          <FormStep 
            stepName="Person" 
            onSubmit={() => console.log('Step1 Submit')}
            validationSchema={validationSchema}
          >
            <InputField name="name" label="Name"/>
            <InputField name="email" label="Email"/>
            <InputField name="contact" label="Contact"/>
            <AutoComplete />
            <DateOfBirth/>
          </FormStep>

          <FormStep 
            stepName="Address" 
            onSubmit={() => console.log('Step2 Submit')}
            validationSchema={yup.object({
              location: yup.string().required('Location is required'),
            })}
          >
            <InputField name="location" label="Location"/>
          </FormStep>

          <FormStep 
            stepName="Profile Picture" 
            onSubmit={() => console.log('Step3 Submit')}
            validationSchema={yup.object({
              photo: yup.string().required('Photo is required'),
            })}
          >
            <InputField name="photo" label="Photo"/>
          </FormStep>

          <FormStep
            stepName= "About Yourself"
            onSubmit={() => console.log('Step4 Submit')}
          >
            <TextEditor/>
          </FormStep>
        </MultiStepForm>
      </header>
    </div>
  );
}

export default App;
