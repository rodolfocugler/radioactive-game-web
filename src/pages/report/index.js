import React, {Component} from "react";
import {api} from "../../services/api";
import {Styles} from "./styles";
import {Divider, List, ListItemText, withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Moment from "moment";

class Report extends Component {
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
                        ags[accountGroup.id - 1] = {name: accountGroup.name};
                        this.setState(ags);
                        this.handleReport(accountGroup);
                    });
                }
            );
    };

    handleReport = (accountGroup) => {
        api.get(`/api/report/getByAccountGroupId/${accountGroup.id}`)
            .then(response => this.handleSetReport(accountGroup, response, "report"));

        api.get(`/api/report/getQuestionsByAccountGroupId/${accountGroup.id}`)
            .then(response => this.handleSetReport(accountGroup, response, "questions"));
    }

    handleSetReport = (accountGroup, response, key) => {
        const {ags} = this.state;
        ags[accountGroup.id - 1][key] = response.data;
        this.setState(ags);
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

                                <h3>Questões: </h3>
                                {Object.keys(ag.questions).map((environment, eI) => {
                                    return <div key={`env-${index}-${eI}`}>
                                        <h4>{environment}:</h4>
                                        {ag.questions[environment].map((q, qI) => {
                                            return <div key={`question-${index}-${qI}`}>
                                                Q.: <p dangerouslySetInnerHTML={{__html: q.question}}/>
                                                {q.responses.map((r, rI) => {
                                                    return <div key={`response-${index}-${rI}`}>
                                                        <span className={classes.response}>
                                                            R.: ({r.account})
                                                        - {this.formatDate(r.timestamp)}:
                                                        </span> {r.response}
                                                    </div>;
                                                })}
                                            </div>;
                                        })}
                                    </div>;
                                })}

                                <Divider/>

                                <h3>Mensagens: </h3>
                                {Object.keys(ag.report.messages).map((environment, eI) => {
                                    return <div key={`env-message-${index}-${eI}`}>
                                        <h4>{environment}:</h4>
                                        {ag.report.messages[environment].map((m, mI) => {
                                            return <div key={`message-${index}-${mI}`}>
                                                {m.accounts} - {this.formatDate(m.timestamp)}: {m.text}
                                            </div>;
                                        })}
                                    </div>;
                                })}

                                <Divider/>

                                <h3>Movimentação: </h3>
                                {ag.report.events.map((e, evI) => {
                                    return <div key={`event-${index}-${evI}`} className={classes.transportDiv}>
                                        <p><span className={classes.span}>Carro:</span> {e.carIndex}</p>
                                        <p><span className={classes.span}>Saiu do(a):</span> {e.from}</p>
                                        <p><span className={classes.span}>Foi para o(a):</span> {e.to}</p>
                                        <p><span className={classes.span}>As:</span> {this.formatDate(e.timestamp)}</p>
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

export default withStyles(Styles)(Report)