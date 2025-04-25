import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// MUI imports
import AddIcon from '@mui/icons-material/Add';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar with MUI */}
      <AppBar position='static' color='primary' sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Stride App with MUI
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth='md'>
        {/* Logo section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <a
            href='https://vite.dev'
            target='_blank'
            style={{ margin: '0 16px' }}
          >
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a
            href='https://react.dev'
            target='_blank'
            style={{ margin: '0 16px' }}
          >
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </Box>

        <Typography variant='h4' component='h1' gutterBottom align='center'>
          Vite + React + MUI
        </Typography>

        {/* Card with counter */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Stack spacing={2} alignItems='center'>
              <Typography variant='h6' component='div'>
                Counter Example
              </Typography>
              <Button
                variant='contained'
                startIcon={<AddIcon />}
                onClick={() => setCount((count) => count + 1)}
              >
                Count is {count}
              </Button>
              <Typography variant='body1'>
                Edit <code>src/App.tsx</code> and save to test HMR
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <Divider sx={{ my: 4 }} />

        <Typography variant='body2' color='text.secondary' align='center'>
          Click on the Vite and React logos to learn more
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
