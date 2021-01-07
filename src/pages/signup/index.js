import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {Styles} from "./styles";
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Container} from "@material-ui/core";
import Logo from "../../assets/nuclear.svg"
import {isRequired, resetForm, validate, validateFields, validateForm} from "../../utils/form";
import api from "../../services/api";
import {Copyright} from "../../utils/app";

class SignIn extends Component {
    state = {
        fields: {
            name: {
                value: "",
                error: "",
                validation: [isRequired]
            },
            email: {
                value: "",
                error: "",
                validation: [isRequired]
            },
            password: {
                value: "",
                error: "",
                validation: [isRequired]
            }
        }
    };

    changeValue = (e) => {
        const value = e.target.value;
        const name = e.target.id;
        const nextState = this.state["fields"];

        nextState[name]["value"] = value;
        nextState[name]["error"] = validate(nextState[name]["validation"], value);
        this.setState(nextState);
    }

    handleSignUp = async e => {
        e.preventDefault();
        const {fields} = this.state;

        const updatedFields = validateFields(fields);
        if (validateForm(updatedFields)) {
            try {
                await api.post("/api/accounts", {
                    "name": fields.name.value,
                    "email": fields.email.value,
                    "number": fields.password.value,
                    "environment": {
                        "id": 1
                    }
                });
                this.setState(resetForm(fields));
            } catch (err) {
                console.log(err);
            }
        } else {
            this.setState(updatedFields);
        }
    };

    render() {
        const {classes} = this.props;
        const {fields} = this.state;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <img src={Logo} alt="Logo" className={classes.logo}/>
                    <form className={classes.form} noValidate onSubmit={this.handleSignUp}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Nome"
                            name="name"
                            autoComplete="Nome"
                            autoFocus
                            value={fields.name.value}
                            error={fields.name.error !== ""}
                            helperText={fields.name.error}
                            onChange={this.changeValue}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            value={fields.email.value}
                            error={fields.email.error !== ""}
                            helperText={fields.email.error}
                            onChange={this.changeValue}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="CPF"
                            type="text"
                            id="password"
                            autoComplete="current-password"
                            value={fields.password.value}
                            error={fields.password.error !== ""}
                            helperText={fields.password.error}
                            onChange={this.changeValue}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Cadastrar
                        </Button>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright/>
                </Box>
            </Container>
        );
    }
}

export default withStyles(Styles)(SignIn)

