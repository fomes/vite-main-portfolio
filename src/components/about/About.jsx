/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import "./About.css";

import profile from "../../assets/profile.jpeg";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Olá mundo!";
  const aboutme = `Meu nome é ${FirstName} ${LastName}, desenvolvedor Full Stack em formação. Atualmente estudando Node.js. Experiência com Javascript, React, MongoDB, Bootstrap, Materialize entre outras. Eu gosto de resolver problemas e ajudar a melhorar a vida das pessoas de alguma forma! 😁 Atualmente meu maior passatempo é codar e aprender novas tecnologias de desenvolvimento. 🙃`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div
            className="_img"
            style={{
              background: "url(" + profile + ")",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="_content_wrapper">
            <Typography component="h2" variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">{aboutme}</p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component="span"> Deixe uma mensagem.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
