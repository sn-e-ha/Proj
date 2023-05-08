import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Add_emp = () => {
  const {register,handleSubmit} = useForm();
 const getVal=(val) => {
      
      alert('Form Submitted')
      axios.post('https://reqres.in/api/users',val).then((res)=>{
       alert(`The data is posted with id ${res.data.id}`)
      })
  }
  return (
    <div>
      <center>
      <h1>Add Employee Details</h1>
      
      <Stack
      component="form"
      sx={{
    
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField name='empname' {...register('empname')} id="outlined-basic" label="Name" variant="outlined" />
       
      
      <TextField  name='emplocation' {...register('emplocation')} id="outlined-basic" label="Location" variant="outlined" />
      <TextField  name='empdesignation' {...register('empdesignation')} id="outlined-basic" label="Designation" variant="outlined" />
      <Button onClick={handleSubmit(getVal)} variant="contained">Submit</Button>
    </Stack>
    </center>
    </div>
  )
}

export default Add_emp
