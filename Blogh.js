import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useForm } from 'react-hook-form';


const Courseview = () => {
    var [value,setvalue] = useState([])
    useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        setvalue(response.data)

    })},[])
  return (
    <div>
    
    <Typography variant = 'h5'>Add Blog</Typography>

      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Description" variant="outlined" />
      <TextField id="outlined-basic" label="AuthorName" variant="outlined" />

      <Button onClick = {handleSubmit(createBlog)} variant ='contained'>Create Blog</Button>

    </div>
  )
}

export default Courseview