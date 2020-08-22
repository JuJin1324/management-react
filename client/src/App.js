import React, {Component} from 'react';
import './App.css';
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import CustomerAdd from "./components/CustomerAdd";
import axios from 'axios';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: "auto",
    },
    table: {
        minWidth: 1080
    },
    progress: {
        margin: theme.spacing(2),
    }
})

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: null,
            completed: 0
        }
    }

    stateRefresh = () => {
        this.setState({
            customers: null,
            completed: 0
        });
        this.callApi()
            .then(res => this.setState({customers: res}))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.timer = setInterval(this.progress, 20);
        this.stateRefresh();
    }

    callApi = async () => {
        const response = await axios.get('/api/customers');
        return await response.data;
    }

    progress = () => {
        const {completed} = this.state;
        this.setState({completed: completed >= 100 ? 0 : completed + 1})
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell>이미지</TableCell>
                                <TableCell>이름</TableCell>
                                <TableCell>생년월일</TableCell>
                                <TableCell>성별</TableCell>
                                <TableCell>직업</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.customers ? this.state.customers.map(c => {
                                    return (
                                        <Customer
                                            key={c.id}
                                            id={c.id}
                                            image={c.image}
                                            name={c.name}
                                            birthday={c.birthday}
                                            gender={c.gender}
                                            job={c.job}/>
                                    )
                                }) : <TableRow>
                                    <TableCell colSpan='6' align='center'>
                                        <CircularProgress className={classes.progress} variant="determinate"
                                                          value={this.state.completed}/>
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>
                </Paper>
                <CustomerAdd stateRefresh={this.stateRefresh}/>
            </div>
        )
    }
}

export default withStyles(styles)(App);