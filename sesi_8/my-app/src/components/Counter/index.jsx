import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    
    
    return (
        <div>
            <Grid 
                container 
                direction={'column'}
            >
                <Grid 
                    container
                    justifyContent='center'
                >
                    <Grid item s={12}>{counter}</Grid>
                </Grid>
                <Grid
                    container
                    justifyContent='center'
                    spacing={2}
                >
                    <Grid item >
                        <Button 
                            variant='outlined' 
                            color='success'
                            onClick={() => setCounter(c => c + 1)}
                        >
                            +
                        </Button>
                    </Grid>
                    <Grid item >
                        <Button 
                            variant='outlined' 
                            color='error'
                            onClick={() => setCounter(c => c - 1)}
                        >
                            -
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Counter