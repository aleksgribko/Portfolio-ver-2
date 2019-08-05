import React from "react";
import Reveal from 'react-reveal/Reveal';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles(theme => ({
    title: {
        marginLeft: theme.spacing(1),
        width: '100%',
        fontSize: '7vmax',
        color: 'white',
    },
    root: {
        paddingTop: '5vh',
        paddingBottom: '5vh',
        minHeight: '90vh',
        width: '100%',
        zIndex: '1',
    },
    card: {
        minWidth: 230,
        height: 230,
    },
    cardContent: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    nameCard: {
        color: '#f50057',
    },
    progress: {
        color: '#f50057',
    },
    country: {
        display: 'inline',
    },
    pictureOfCounty: {
        height: '1.5rem',
        transform: 'translate(100%, 5%)',
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    avatar: {
        backgroundColor: '#f50057',
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
    },
    gridItem: {
        width: '100%'
    },
    textAboutMe: {
        fontSize: '2.5vh',
        paddingBottom: '3vh'
    },
}));


export default function AboutMe() {
    const classes = useStyles();

    document.addEventListener('aos:in', ({ detail }) => {
        console.log('animated in', detail);
    });

    document.addEventListener('aos:out', ({ detail }) => {
        console.log('animated out', detail);
    });

    function countExperience() {
        let monthBase = 10
        let yearBase = 2018
        let today = new Date();
        let monthNow = parseInt(String(today.getMonth() + 1).padStart(2, '0'));
        let yearNow = today.getFullYear();
        let experience
        if (yearNow - yearBase === 1 && monthNow - monthBase < 0) {
            experience = `${(12 - monthBase) + monthNow} months`
        } else if (monthNow - monthBase < 0) {
            let yearExp = yearNow - yearBase - 1
            let monthExp = (12 - monthBase) + monthNow
            experience = `${yearExp} ${yearExp > 1 ? 'years' : 'year'} ${monthExp} ${monthExp > 1 ? 'months' : 'month'}`
        } else {
            let yearExp = yearNow - yearBase
            let monthExp = monthNow - monthBase
            experience = `${yearExp} ${yearExp > 1 ? 'years' : 'year'} ${monthExp} ${monthExp > 1 ? 'months' : 'month'}`
        }
        return experience;
    }

    return (
        <Container maxWidth='xl' id='aboutSection' className={classes.root}>
            <div className="aboutMe">
                <Grid container direction="column" justify="space-between" >
                    <Grid item className={classes.gridItem}>
                        <React.Fragment>
                            <div className={classes.bar}>
                                <Typography variant="h2" component="h3" className={classes.title}>
                                    About me
                        </Typography>
                            </div>
                            <div className={classes.underline}></div>
                        </React.Fragment>
                    </Grid>
                    <Reveal effect="fadeInUp">
                    <Grid item className={classes.gridItem}>
                        <p className={classes.textAboutMe}>
                            Being devoted and motivated with ever-lasting curiosity
                                to learn something new, my experience has always been connected to the technical field. 
                                As I became more familiar with new technologies, my drive to acquire and master technical skills increased.
                                I am thrilled to work in a team of bright people who work with modern frameworks on challenging projects.                                  
                                I have successfully earned my bachelor’s degree equivalent as a Front-End Developer and am ready to be part of a development team. 
                                My favorite tools are JS ES6, ReactJS, CSS and different design libraries.
					</p>

                        <p className={classes.textAboutMe}>
                            Full of ideas, working both within a team and on my own, autonomous.
                            The priority for me is the best UX and responsive design. I want to share
                            with my team my help, devotion, and interest in making innovations in web
                            development. In the IT world changes are happening every day and I feel
                                excited to follow these changes and keep this fast pace in acquiring new technical skills. That is why last year I was so excited to start my
                                career change by working on front-end projects under mentors' control.
					</p>
                    </Grid>
                    </Reveal>
                    <Grid item className={classes.gridItem}>
                    <Reveal effect="fadeInUp">
                        <Grid container spacing={2}>

                            <Grid item xs={12} sm={4}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Grid container wrap="nowrap" spacing={2} direction="column">
                                            <Grid item xs={12}>
                                                <Typography variant="body2" component="p">
                                                    Education
                            </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h5" component="h2" className={classes.nameCard}>
                                                    Bachelor
                            </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body1" component="h4">
                                                    Front-end developer
                            </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h5" component="h2" className={classes.nameCard}>
                                                    Master of law
                            </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body1" component="h4">
                                                    IT and intellectual property
                            </Typography>
                                            </Grid>

                                        </Grid>
                                    </CardContent>
                                </Card>

                            </Grid>

                            <Grid item xs={12} sm={4}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Grid
                                            justify="space-evenly"

                                            container wrap="nowrap"
                                            spacing={2}
                                            direction="column">
                                            <Grid item xs={12}>
                                                <Typography variant="body2" component="p">
                                                    Experience
                            </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h5" component="h2" className={classes.nameCard}>
                                                    {countExperience()}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body1" component="h4">
                                                    Front-end developer
                            </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="h5" component="h2" className={classes.nameCard}>
                                                    6 years 1 month
                            </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body1" component="h4">
                                                    IT legal counsel
                            </Typography>
                                            </Grid>

                                        </Grid>
                                    </CardContent>
                                </Card>

                            </Grid>
                            <Grid item xs={12} sm={4}>

                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Grid container wrap="nowrap" spacing={2} direction="column">
                                            <Grid item xs={12}>
                                                <Typography variant="body2" component="p">
                                                    Languages
                            </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container direction="column">

                                                    <Grid item>
                                                        <Chip label="Native Russian" className={classes.chip} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Chip
                                                            avatar={<Avatar className={classes.avatar}>C1</Avatar>}
                                                            label="English"
                                                            className={classes.chip}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <Chip
                                                            avatar={<Avatar className={classes.avatar}>B1</Avatar>}
                                                            label='German'
                                                            className={classes.chip}
                                                        />
                                                    </Grid>
                                                    <Grid item>
                                                        <Chip
                                                            avatar={<Avatar className={classes.avatar}>A2</Avatar>}
                                                            label="French"
                                                            className={classes.chip}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        </Reveal>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}



