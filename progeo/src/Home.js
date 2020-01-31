import React from 'react';
import { Grid, Card, CardMedia, Typography} from '@material-ui/core';
import './Home.css';
import HomeProject from './HomeProject'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import Slide from '@material-ui/core/Slide';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const styles = {
    neutral: {
        color: 'black'
    },
    liked: {
        color: 'red'
    }
}


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      projects: [
        { id: 1, cardMedia: "CardMedia1", title:"Des légumes frais pour tous", like:"false", description:"Nous voulons planter un potager dans notre école pour avoir des légumes frais plus souvent ! "},
        { id: 2, cardMedia: "CardMedia2", title:"Construire un terrain de foot", like:"false"},
        { id: 3, cardMedia: "CardMedia3", title:"Manifester pour le climat", like:"false"},
        { id: 4, cardMedia: "CardMedia1", like:"false"},
        { id: 5, cardMedia: "CardMedia2", like:"false"},
        { id: 6, cardMedia: "CardMedia3", like:"false"},
        { id: 7, cardMedia: "CardMedia1", like:"false"},
        { id: 8, cardMedia: "CardMedia2", like:"false"},
        { id: 9 ,cardMedia: "CardMedia3", like:"false"}
      ],
      isOpen: false,
      maxWidth: 'xl'
    }
  }

  handleLike = (cardId) => {
    console.log("HENDLELI")
    const liked = [ ...this.state.projects].map(project => {
      if(project.id === cardId) {
        project.liked = true
        return project
      } else {
        return project
      }
    })

    this.setState({ projects : liked})

  }

  handleClick = (cardId) => {
    this.setState({
        isOpen: cardId
    })
  }

  handleClose = () => {
      this.setState({ isOpen: false })
  }

  Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  render() {
    return (
      <>
    
      <Grid container spacing={3}
        style={{padding: "20px", backgroundColor: '#F1E8DB' }}
        justify="center"
        direction="row"
        >

        {this.state.projects.map((project, index) => (
          <HomeProject
            key={index}
            props={project}
            onClick={this.handleClick}
            like={this.handleLike} />
        ))}

      </Grid>

        {this.state.isOpen ?
          <Dialog
          open={this.state.isOpen}
          TransitionComponent={this.Transition}
          maxWidth={this.state.maxWidth}
          onClose={this.handleClose}
          aria-labelledby="reponsive-dialog-title"
        >
            <DialogContent style={{padding: 0, marginTop: 0}}>
              <Card style={{ maxWidth: '100%'}}>
                  <CardMedia
                    component="iframe"
                    objectFit="cover"
                    frameBorder="0"
                    width="100%"
                    image="https://www.youtube.com/embed/OROZXDJFX4Q"
                  >
                  </CardMedia>
              </Card>
              <Typography>
                <h2 style={{ padding: 16 }}>
                    {this.state.projects[this.state.isOpen -1].title}
                </h2>
                <div style={{ padding : 16 }}>
                    {this.state.projects[this.state.isOpen -1].description}
                </div>
              </Typography>

            </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="green">
                CONTRIBUER AU PROJET
            </Button>
            <WhatsAppIcon style={{ color: "green"}} />
            <InstagramIcon style={{ color: "purple"}}/>
            <FavoriteBorderIcon style={{ color: 'red' }} />
          </DialogActions>
        </Dialog>:
        null}
      </>
    )
  }
}

export default Home;
