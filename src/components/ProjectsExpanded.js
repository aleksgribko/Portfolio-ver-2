import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import projectsData from "./projectsData.js";
import "../sass/projectGrid.scss";
import GridList from "@material-ui/core/GridList";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "90px",
    paddingBottom: "90px",
  },
  gridList: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  card: {
    maxWidth: 300,
  },
  media: {
    height: 120,
  },
  title: {
    color: "#00AA98",
    width: "100%",
    maxWidth: 1000,
  },
}));

export default function ProjectsExpanded() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Container maxWidth="lg" className={classes.root} id="projectsSector">
      <Typography variant="h2" component="h3" className={classes.title}>
        Projects
      </Typography>
      <GridList className={classes.gridList}>
        {projectsData.map((project) => (
          <Card
            className={classes.card}
            style={{
              height: "260px",
              margin: "20px",
              width: "300px",
              padding: "0",
            }}
          >
            <CardActionArea>
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
                  {project.technologies
                    .slice(0, project.technologies.length - 1)
                    .join(", ") +
                    ", " +
                    project.technologies.slice(-1)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </GridList>
    </Container>
  );
}
