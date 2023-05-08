import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              
            </IconButton>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
             Blog
            </Typography>
            <Button color= 'inherit'><Link to ="/">Add Blog</Link>Add Blog</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }