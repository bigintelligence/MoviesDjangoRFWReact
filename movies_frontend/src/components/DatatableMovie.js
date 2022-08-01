import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MoviesToolbar from "./MoviesToolbar";
import { getMovies, selectedMoviesEvent } from '../actions/movies';

class DatatableMovie extends Component {
    state = {
        moviesSelected: [],
    }
    static propTypes = {
        regs: PropTypes.array.isRequired,
        columnsMovie: PropTypes.array.isRequired,
        response: PropTypes.object.isRequired,
        getMovies: PropTypes.func.isRequired,
        selectedMoviesEvent: PropTypes.func.isRequired,
    }
    componentDidMount(){
        this.props.getMovies();
    }
    handleMoviesSelectChange = (value) => {
        this.props.selectedMoviesEvent(value);
        this.setState({
            moviesSelected: value,
        });
    };
    render() {
        let { moviesSelected } = this.state
        return (
            <Fragment>
                <CssBaseline />
                <Container maxWidth="md">
                    <Tooltip title="Movies">
                        <h2>Movies</h2>
                    </Tooltip>
                    <MoviesToolbar />
                    <div style={{ height: 650 }}>
                        <DataGrid getRowId={(row) => row.title} rows={this.props.regs} 
                        columns={this.props.columnsMovie} 
                        pageSize={10} 
                        checkboxSelection
                        value={moviesSelected}
                        onSelectionModelChange={this.handleMoviesSelectChange}/>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    regs: state.movies.regs,
    response: state.movies.response,
    columnsMovie: state.movies.columnsMovie,
})

export default connect(mapStateToProps,{ getMovies, selectedMoviesEvent })(DatatableMovie);