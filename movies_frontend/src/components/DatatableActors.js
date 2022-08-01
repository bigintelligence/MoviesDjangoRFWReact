import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class DatatableActors extends Component {
    static propTypes = {
        actorRegs: PropTypes.array.isRequired,
        columnsActor: PropTypes.array.isRequired,
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.actorRegs.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">{row.gender}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    actorRegs: state.movies.actorRegs,
    columnsActor: state.movies.columnsMovie,
})

export default connect(mapStateToProps,)(DatatableActors);