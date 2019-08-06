import React from "react";
import Reveal from 'react-reveal/Reveal';
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";

import projectsData from "./projectsData.js";
import "../css/projectGrid.css";

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '5vh',
    paddingBottom: '5vh',
  },
  gridList: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', 
  },
  card: {
    maxWidth: 300,
  },
  media: {
    height: 120,
  },
  title: {
    marginLeft: theme.spacing(1),
    width: '100%',
    fontSize: '7vmax',
    color: 'white',
  }, 
  bar: {
    marginTop: theme.spacing(2),
    height: '7vmax',
    width: '100%',
    backgroundColor: '#00AA98',
  },
  underline: {
    transform: 'translateX(0)',
    border: 'solid #f50057',
    borderWidth: '0 0 15px 0',
    width: '15vw',
    marginTop: '3vh',
    marginBottom: theme.spacing(4),
  },
}));

const GreenSwitch = withStyles({
  switchBase: {
    color: lighten('#f50057', 0.5),
    '&$checked': {
      color: '#f50057',
    },
    '&$checked + $track': {
      backgroundColor: '#f50057',
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function ProjectsSector() {
  const [showAll, setShowAll] = React.useState(false);
  const [openInfo, setOpenInfo] = React.useState({
    isOpen: false,
    proj: {}
  });
  const classes = useStyles();
  let projects;

  if (!showAll) {
    projects = projectsData.filter(proj => proj.id === 'project1' || proj.id === 'project2' || proj.id === 'project3')
  } else {
    projects = projectsData
  }

  function openInfoHandler(proj) {
    setOpenInfo({ ...openInfo, isOpen: true, proj: proj })
  }

  return (
    <React.Fragment>
      <Container maxWidth="xl" className={classes.root} id='projectsSector'>
        <React.Fragment>
          <div className={classes.bar}>
            <Typography variant="h2" component="h3" className={classes.title}>
              Projects
            </Typography>
          </div>
          <div className={classes.underline}></div>
        </React.Fragment>
        <Reveal effect="fadeInUp">
        <Grid container justify="center">
          <Grid item>
            <FormControlLabel
              className={classes.switcher}
              control={
                <GreenSwitch
                  checked={showAll}
                  onChange={event => setShowAll(event.target.checked)}
                  value="showAll"
                />
              }
              label="Show all projects"
            />
          </Grid>
        </Grid>
        <GridList className={classes.gridList}>

          {projects.map(project => (
            <Card className={classes.card} style={{ 'height': 'auto', 'margin': '20px', 'width': '300px', 'padding': '0' }}>
              <CardActionArea onClick={() => openInfoHandler(project)}>
                <CardMedia
                  className={classes.media}
                  image={require(`./../materials/${project.id}/mainCut.jpg`)}
                  title={project.id}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {project.technologies.slice(0, project.technologies.length - 1).join(', ') + ", " + project.technologies.slice(-1)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Grid container alignItems="flex-end">
                <Grid item >
                  <CardActions>                    
                    <Button size="small" href={project.site} style={{ display: `${project.site ? "" : "none"}`, 'color': "#00AA98" }}>
                      website link
                    </Button>
                    <Button size="small" href={project.git} style={{ display: `${project.git ? "" : "none"}`, 'color': "#00AA98" }}>
                      git link
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          ))}
        </GridList>
        </Reveal>
      </Container>

      <Dialog
        open={openInfo.isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpenInfo({ ...openInfo, isOpen: false, name: null })}
        aria-labelledby="info-about-project"
        aria-describedby="description-of-a-project"
      >
        <DialogTitle id="info-about-project">{`${openInfo.proj.name}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="description-of-a-project">            
            {openInfo.proj.description}
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenInfo({ ...openInfo, isOpen: false, name: null })} color="secondary">
            Got it
      </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
