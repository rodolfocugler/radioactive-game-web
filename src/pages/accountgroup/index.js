import React, {Component} from "react";
import {Styles} from "./styles";
import {withStyles} from "@material-ui/core/styles";
import {Button, Container, ListItemText, TextField} from "@material-ui/core";
import api from "../../services/api";
import {Autocomplete} from "@material-ui/lab";
import ListItem from "@material-ui/core/ListItem";

class AccountGroup extends Component {
    state = {
        accounts: [],
        selected: [],
        name: ""
    };

    componentDidMount() {
        this.handleAccounts();
    }

    handleAccounts = () => {
        api.get("/api/accounts")
            .then(response => this.setState({accounts: response.data}));
    };

    save = () => {
        const {name, selected} = this.state;
        const nameTrim = name.trim();
        if (!!nameTrim && selected.length > 0) {
            api.post("/api/accountGroups", {
                name: nameTrim,
                accounts: selected
            }).then(() => {
                this.handleAccounts();
                this.setState({
                    name: "",
                    selected: []
                })
            }).catch(reason => alert(reason));
        }
    }

    render() {
        const {classes} = this.props;
        const {accounts, selected, name} = this.state;

        return (
            <Container component="main" maxWidth="xs">
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="name"
                    label="Nome"
                    type="text"
                    id="name"
                    focused={true}
                    value={name}
                    onChange={event => this.setState({name: event.target.value})}
                />

                <Autocomplete
                    options={accounts.filter(value => !value.accountGroup)}
                    fullWidth
                    renderOption={(option) => (
                        <React.Fragment>
                            {`${option.number} - ${option.name}`}
                        </React.Fragment>
                    )}
                    value={selected}
                    multiple={true}
                    onChange={(event, value) =>
                        this.setState({selected: value})}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) =>
                        <TextField {...params} label="Aluno" variant="outlined"
                                   inputProps={{...params.inputProps}}/>}
                />
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.save}
                >
                    Salvar
                </Button>

                <h3>Grupos: {name}</h3>

                <h3>Alunos:</h3>
                {selected.map((value, index) => {
                    return <ListItem>
                        <ListItemText primary={`${value.number} - ${value.name} ${index === 0 ? "(líder)" : ""}`}/>
                    </ListItem>
                })}
            </Container>
        );
    }
}

export default withStyles(Styles)(AccountGroup)