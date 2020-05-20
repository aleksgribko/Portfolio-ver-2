import React from "react";
import Reveal from "react-reveal/Reveal";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { skills } from "./infoForCV.js";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import "../sass/technologies.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: "5vh",
    paddingBottom: "5vh",
  },
  title: {
    marginLeft: theme.spacing(1),
    width: "100%",
    fontSize: "4.5vmax",
    color: "white",
  },
  subtitle: {
    margin: theme.spacing(1),
    paddingTop: "2vh",
    color: "black",
  },
  chips: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  chip: {
    margin: theme.spacing(1),
    backgroundColor: "#f50057",
    color: "white",
  },
  bar: {
    marginTop: theme.spacing(2),
    height: "4.5vmax",
    width: "100%",
    backgroundColor: "#00AA98",
  },
  underline: {
    transform: "translateX(0)",
    border: "solid #f50057",
    borderWidth: "0 0 15px 0",
    width: "15vw",
    marginTop: "3vh",
    marginBottom: theme.spacing(4),
  },
  wrapper: {
    maxWidth: "850px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Technologies() {
  const classes = useStyles();
  let keyInd = 1;
  let keyInd1 = 1;
  let keyInd2 = 1;
  return (
    <Container maxWidth="xl" className={classes.root}>
      <div className={classes.wrapper}>
        <>
          <div className={classes.bar}>
            <Typography variant="h2" component="h3" className={classes.title}>
              Technologies
            </Typography>
          </div>
          <div className={classes.underline}></div>
        </>
        <Reveal effect="fadeInUp">
          <Typography variant="h5" component="h5" className={classes.subtitle}>
            Front-end
          </Typography>
          <div className={classes.chips}>
            {skills.front.map((oneSkill) => (
              <Chip
                key={++keyInd}
                label={oneSkill.skill}
                className={classes.chip}
              />
            ))}
          </div>
        </Reveal>
        <Reveal effect="fadeInUp">
          <Typography variant="h5" component="h5" className={classes.subtitle}>
            Styling
          </Typography>
          <div className={classes.chips}>
            {skills.styles.map((oneSkill) => (
              <Chip
                key={++keyInd1}
                label={oneSkill.skill}
                className={classes.chip}
              />
            ))}
          </div>
        </Reveal>
        <Reveal effect="fadeInUp">
          <Typography variant="h5" component="h5" className={classes.subtitle}>
            Back-end
          </Typography>
          <div className={classes.chips}>
            {skills.back.map((oneSkill) => (
              <Chip
                key={++keyInd2}
                label={oneSkill.skill}
                className={classes.chip}
              />
            ))}
          </div>
        </Reveal>
        <Reveal effect="fadeInUp">
          <Typography variant="h5" component="h5" className={classes.subtitle}>
            VR and modeling
          </Typography>
          <div className={classes.chips}>
            {skills.vr.map((oneSkill) => (
              <Chip
                key={++keyInd1}
                label={oneSkill.skill}
                className={classes.chip}
              />
            ))}
          </div>
        </Reveal>
        <Reveal effect="fadeInUp">
          <Typography variant="h5" component="h5" className={classes.subtitle}>
            Teamwork
          </Typography>
          <div className={classes.chips}>
            {skills.teamwork.map((oneSkill) => (
              <Chip
                key={++keyInd1}
                label={oneSkill.skill}
                className={classes.chip}
              />
            ))}
          </div>
        </Reveal>
        <Reveal effect="fadeInUp">
          <Typography variant="h5" component="h5" className={classes.subtitle}>
            Content Management
          </Typography>
          <div className={classes.chips}>
            {skills.contentManagement.map((oneSkill) => (
              <Chip
                key={++keyInd1}
                label={oneSkill.skill}
                className={classes.chip}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
