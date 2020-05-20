import React, { useState, useEffect } from "react";
import "../sass/firstPage.scss";
import $ from "jquery";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

import Clipboard from "clipboard";

import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(3, 2),
  },
}));

export default function FirstPage() {
  const classes = useStyles();
  const [snackbar, setSnackbar] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = snackbar;

  const openSnackbar = (newState) => () => {
    setSnackbar({ open: true, ...newState });
  };

  function closeSnackbar() {
    setSnackbar({ ...snackbar, open: false });
  }

  useEffect(() => {
    let btns = document.getElementById("btnCopy2");
    new Clipboard(btns);
  });

  return (
    <div id="firstPage">
      <div className="mainPageBackground"></div>
      <div className="mainPageBackground secondPartBackground">
        <span id="specChar">
          &#32; &#33; &#34; &#35; &#36; &#37; &#38; &#39; &#40; &#41; &#42;
          &#43; &#44; &#45; &#46; &#47; &#58; &#59; &#60; &#61; &#62; &#63;
          &#32; &#33; &#34; &#35; &#36; &#37; &#38; &#39; &#40; &#41; &#42;
          &#43; &#44; &#45; &#46; &#47; &#58; &#59; &#60; &#61; &#62; &#63;
          &#34; &#35; &#36; &#37; &#38; &#39; &#40; &#41; &#42; &#43; &#44;
          &#45; &#46; &#47; &#58; &#59; &#60; &#61; &#62; &#63;
        </span>
      </div>
      <div id="firstPageText" style={{ color: "white" }}>
        <div style={{ paddingTop: "auto", paddingBottom: "auto" }}>
          <p className="animated slideInLeft nameMain">Aleksandr Gribko</p>
          <p
            className="animated slideInLeft helloText"
            style={{ marginBottom: "10px" }}
          >
            Software developer
          </p>
          <p
            className="animated slideInLeft helloText"
            style={{ marginTop: "10px" }}
          >
            based in France
          </p>

          <div className="animated slideInLeft">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              target="_blank"
              rel="noopener noreferrer"
              href={require("../materials/CV_AleksandrGribko.pdf")}
            >
              Download my CV
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                window.scrollTo({
                  top: $("#projectsSector").position().top - 30,
                  behavior: "smooth",
                })
              }
            >
              projects
            </Button>
          </div>
          <div className="contactField animated slideInLeft">
            <p className="animated slideInLeft helloText">My contacts:</p>

            <a
              className="contactButton animated slideInRight"
              href="https://www.facebook.com/aleksandr.gribko"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="contactButton animated slideInRight"
              href="https://www.linkedin.com/in/aleksandrgribko/"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              className="contactButton animated slideInRight"
              href="https://twitter.com/Alezh89"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="contactButton animated slideInRight"
              href="https://github.com/Alezh89"
            >
              <i className="fab fa-github" />
            </a>

            <div>
              <Tooltip
                placement="right"
                disableFocusListener
                title="Click to copy"
              >
                <Button
                  id="btnCopy2"
                  data-clipboard-text="aleks.gribko@gmail.com"
                  onClick={openSnackbar({
                    vertical: "bottom",
                    horizontal: "center",
                  })}
                  className=" animated slideInRight contactButton"
                >
                  aleks.gribko@gmail.com
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={closeSnackbar}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={
          <span id="message-id">aleks.gribko@gmail.com has been copied</span>
        }
      />
      <div id="firstPagePhoto" className="animated slideInRight">
        <img
          id="photoOfMeMain"
          src={require("./../materials/mainGreen.png")}
          alt="Aleksandr Gribko"
        />
      </div>
    </div>
  );
}
