import React, {Component} from "react";
import {api} from "../../services/api";
import {Styles} from "./styles";
import {Divider, List, ListItemText, withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Moment from "moment";

class ReportOrdered extends Component {
    state = {
        ags: []
    };

    componentDidMount() {
        this.handleAccountGroups();
    }

    handleAccountGroups = () => {
        api.get("/api/accountGroups")
            .then(response => {
                    const {ags} = this.state;
                    response.data.forEach(accountGroup => {
                        ags[accountGroup.id - 1] = {name: accountGroup.name, responses: [], transports: []};
                        this.setState(ags);
                        this.handleReport(accountGroup);
                    });
                }
            );
    };

    handleReport = (accountGroup) => {
        api.get(`/api/report/getByAccountGroupId/${accountGroup.id}`)
            .then(response => {
                this.handleSetReport(accountGroup, response.data, "report");
                response.data.events.forEach(t => t["type"] = "transport");
                this.handleSetReport(accountGroup, response.data.events, "transports");
            });

        api.get(`/api/report/getQuestionsByAccountGroupId/${accountGroup.id}`)
            .then(response => {
                this.handleSetReport(accountGroup, response.data, "questions");
                const responses = Object.keys(response.data).map((environment, eI) => {
                    return response.data[environment].map(q => {
                        q.responses.forEach(r => {
                            r["question"] = q.question;
                            r["type"] = "response";
                        });
                        return q.responses;
                    });
                }).flat().flat().sort((a, b) =>
                    this.compare(a, b))

                this.handleSetReport(accountGroup, responses, "responses");
            });
    }

    handleSetReport = (accountGroup, data, key) => {
        const {ags} = this.state;
        ags[accountGroup.id - 1][key] = data;
        this.setState(ags);
    };

    compare = (a, b) => {
        if (a.timestamp > b.timestamp) return 1;
        else if (a.timestamp < b.timestamp) return -1;
        return 0;
    };

    formatDate = (ts) => {
        const dt = new Date(ts);
        return Moment(dt).format('DD/MM/yyyy HH:mm');
    };

    formatHour = (duration) => {
        const hours = Math.floor(duration / 3600000);
        const minutes = Math.floor((duration - (hours * 3600000)) / 60000);
        return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`;
    };

    render() {
        const {classes} = this.props;
        const {ags} = this.state;

        return (
            <Container maxWidth="lg" className={classes.container}>
                <Grid container>
                    <Grid item xs={12}>
                        {ags.filter(value => !!value.report).map((ag, index) => {
                            return <div key={`ag-${index}`}>
                                <h2>Grupo: {ag.name}</h2>
                                <h3>Alunos: </h3>
                                <List className={classes.root}>
                                    {Object.keys(ag.report.accounts).map((ra, raI) => {
                                        return <ListItemText key={`ra-${index}-${ra}`}>
                                            RA {ra}: {ag.report.accounts[ra]}
                                        </ListItemText>;
                                    })}
                                </List>

                                <Divider/>

                                <h3>Tempo: </h3>
                                <p>Início: ~{this.formatDate(ag.report.startTime)}</p>
                                <p>Fim: ~{this.formatDate(ag.report.endTime)}</p>
                                <p>Duração: ~{this.formatHour(ag.report.duration)}</p>

                                <Divider/>

                                <h3>Eventos: </h3>
                                {ag.responses.concat(ag.transports).sort((a, b) => this.compare(a, b))
                                    .map((e, eI) => {
                                        return <div key={`event-${index}-${eI}`}>
                                            {e.type === "transport" &&
                                            <div className={classes.transportDiv}>
                                                <p><span className={classes.span}>Saiu do(a):</span> {e.from}</p>
                                                <p><span className={classes.span}>Foi para o(a):</span> {e.to}</p>
                                                <p><span
                                                    className={classes.span}>As:</span> {this.formatDate(e.timestamp)}
                                                </p>
                                                <p><span className={classes.span}>Levou:</span>
                                                    {e.tools.reduce((result, item) => {
                                                        return `${result} ${item};`
                                                    }, "")}
                                                </p>
                                                <p><span className={classes.span}>Quem foi:</span>
                                                    {e.accounts.reduce((result, item) => {
                                                        return `${result} ${item};`
                                                    }, "")}
                                                </p>
                                            </div>}
                                            {e.type === "response" &&
                                            <div>
                                                <p>Q.: {e.question}</p>
                                                <span className={classes.response}>
                                                R.: ({e.account})
                                                - {this.formatDate(e.timestamp)}:
                                                </span> {e.response}
                                            </div>
                                            }
                                        </div>;
                                    })}

                                <Divider className={classes.dividerAG}/>
                            </div>;
                        })}
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default withStyles(Styles)(ReportOrdered)

