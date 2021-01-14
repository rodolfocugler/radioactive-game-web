import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import {Styles} from "./styles";
import {withStyles} from "@material-ui/core/styles";
import {Box, Button, Container} from "@material-ui/core";
import Logo from "../../assets/nuclear.svg"
import {isRequired, validate, validateFields, validateForm} from "../../utils/form";
import {login} from "../../services/auth";
import {Copyright} from "../../utils/app";

class SignIn extends Component {
    state = {
        fields: {
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

    handleSignIn = async e => {
        e.preventDefault();
        const {fields} = this.state;

        const updatedFields = validateFields(fields);
        if (validateForm(updatedFields)) {
            try {
                await login(fields.email.value, fields.password.value);
                this.props.history.push("/app");
            } catch (err) {
                fields.email.error = "E-mail ou RA inválidos."
                fields.password.error = "E-mail ou RA inválidos."
                this.setState(fields);
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
                    <form className={classes.form} noValidate onSubmit={this.handleSignIn}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
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
                            label="RA"
                            type="password"
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
                            Entrar
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

