import React from 'react'
import { Grid, Card } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Home.css'

const HomeProject = ({ props, onClick, like }) => {
  console.log(props.image)
  return (
    <Grid 
        item xs={12} 
        sm={4} 
    >
      <Card onClick={() => onClick(props.id)}>
        <div className={props.cardMedia} style={{ position:'relative', opacity: 0.7, height: '240px' }}>
          <div style={{ position: "absolute", bottom: 10, right:'16px' }}>
             <FavoriteBorderIcon onClick={() => like(props.id)} />
          </div>
        </div>
      </Card>
    </Grid>    
  )
}

export default HomeProject;