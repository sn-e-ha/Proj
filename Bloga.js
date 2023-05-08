import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

const CourseAdd = () => {
    const {register,handleSubmit }= useForm();

    const createCourse =(val) => {
        axios.post("https://jsonplaceholder.typicode.com/posts",val)
        .then((response) => {
            console.log(response.data);
            alert("Blog Successfully Created");
        })
    }
  return (
    <div>
      <Typography variant = 'h3'>Add Blog</Typography>
      <TextField name='Name' {...register('cName')} id="outlined-basic" label="Course Name" variant="outlined" />
      <TextField name='Description' {...register('cDesc')} id="outlined-basic" label="Course Description" variant="outlined" />
      <TextField name='AuthorName' {...register('cDur')} id="outlined-basic" label="Course Duration" variant="outlined" />
      
      <Button onClick = {handleSubmit(createCourse)} variant ='contained'>Create Blog</Button>
    </div>
  )
}

export default CourseAdd