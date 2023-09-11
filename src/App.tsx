import React, { useState } from 'react';
import './App.css';
import * as yup from 'yup';
import InputField from './inputField';
import MultiStepForm, { FormStep } from './MultiStepForm';
import DateOfBirth from './datepicker'
import TextEditor from './TextEditor';
import AutoComplete from './Autocomplete';
import CountrySelect from './Autocomplete';


const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  contact: yup.number().required('Contact is required')
})

function App(){
  const [selectedAddress, setSelectedAddress] = useState<string>(''); // Local state for selected location

  // Function to handle location change
  const handleAddressChange = (address: string) => {
    setSelectedAddress(address);
  };
  return (
    <div className="App">
      <header className="App-header">
        <MultiStepForm 
          initialValues={{
            name:'',
            email:'',
            contact:'',
            dob:null,
            address:'',
            photo:'',
            about: ''
          }}
          onSubmit={(values) => {
            const alertMessage = 
            `Name: ${values.name}\nEmail: ${values.email}\nContact: ${values.contact}\nAddress: ${selectedAddress}\nDOB: ${values.dob}\nPhoto: ${values.photo}\nAbout: ${values.about}`;
            alert(alertMessage);
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

            <DateOfBirth/>
          </FormStep>

          <FormStep 
            stepName="Address" 
            onSubmit={() => console.log('Step2 Submit')}
          >
            <CountrySelect onAddressChange={handleAddressChange} />
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