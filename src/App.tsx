import React, { useState } from 'react';
import './App.css';
import * as yup from 'yup';
import InputField from './inputField';
import MultiStepForm, { FormStep } from './MultiStepForm';
import DateOfBirth from './datepicker'
import TextEditor from './TextEditor';
import CountrySelect from './Autocomplete';
import FileUpload from './fileUpload';


const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  contact: yup.number().required('Contact is required')
})

function App(){
  const [selectedAddress, setSelectedAddress] = useState<string>(''); // Local state for selected location
  const [textEditorText, setTextEditorText] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Function to handle location change
  const handleAddressChange = (address: string) => {
    setSelectedAddress(address);
  };

  const handleTextEditorChange = (text: string) => {
    setTextEditorText(text);
  };

  const handleFileChange = (file: File) => {
    setSelectedFile(file);
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
            const alertMessage = {
              name: values.name,
              email: values.email,
              contact: values.contact,
              address: selectedAddress,
              dob: values.dob,
              photo: selectedFile?.name, 
              about: textEditorText,
            };

            
            const jsonOutput = JSON.stringify(alertMessage, null, 2);

            alert(jsonOutput)
            // const blob = new Blob([jsonOutput], { type: "application/json" });

            // const url = URL.createObjectURL(blob);
            // window.open(url);

            // URL.revokeObjectURL(url);
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
          >
            <FileUpload onFileChange={handleFileChange} />
          </FormStep>

          <FormStep
            stepName= "About Yourself"
            onSubmit={() => console.log('Step4 Submit')}
          >
            <TextEditor onTextChange={handleTextEditorChange}/>
          </FormStep>
        </MultiStepForm>
      </header>
    </div>
  );
}

export default App;