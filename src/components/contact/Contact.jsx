/* eslint-disable no-unused-vars */
import React from "react";
import { useRef, useState } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from "sweetalert2/dist/sweetalert2.all";

import emailjs from "@emailjs/browser";

import "./Contact.css";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "3em",
  },
  form: {
    width: "100%",
  },
  formfield: {
    width: "100%",
    marginBottom: "2rem",
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "Até a próxima.";
  const form = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Preencha todos os campos!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // Public_Key
      emailjs.init("CFoFzxPdATzY8vF4R");

      // Service_ID, Template_ID,
      emailjs
        .sendForm("service_ot25l9r", "template_870tv4j", form.current)
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mensagem enviada!",
        showConfirmButton: false,
        timer: 1500,
      });

      e.target.reset();
    }
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              <TextField
                id="outlined-name-input"
                label="Nome"
                type="text"
                size="small"
                variant="filled"
                name="name"
                className={classes.formfield}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                className={classes.formfield}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-password-input"
                label="Mensagem"
                type="textarea"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message"
                className={classes.formfield}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                <Typography component="span"> Enviar</Typography>
              </button>
            </form>
          </div>
          <h1 className="contact_msg">
            <TextDecrypt text={greetings} />
          </h1>
        </div>
      </Container>
    </section>
  );
};
