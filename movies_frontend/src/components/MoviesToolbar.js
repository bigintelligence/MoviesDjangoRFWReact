import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { getCommonActorsMovies } from '../actions/movies';
import DatatableActors from "./DatatableActors";

class MoviesToolbar extends Component {
    state = {
        open:false,
    }
    static propTypes = {
        actorRegs: PropTypes.array.isRequired,
        moviesSelected: PropTypes.array.isRequired,
        columnsMovie: PropTypes.array.isRequired,
        response: PropTypes.object.isRequired,
        getCommonActorsMovies: PropTypes.func.isRequired,
    }
    handleOpen = () => {
        this.setState({
            open: true,
        });
    }
    handleClose = () =>{
        this.setState({
            open: false,
        });
    }
    getCommonActors = () => {
        this.handleOpen();
        if(this.props.moviesSelected){
            this.props.getCommonActorsMovies(this.props.moviesSelected);
        }
    }
    render (){
        let { open } = this.state;
        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          };
        return (
        <div>
            <Button variant="outlined" 
            onClick={this.getCommonActors}>See Common Actors</Button>
            <Modal
                open={open}
                onClose={this.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Common Actors in movies:&nbsp;<br />
                        {this.props.moviesSelected.join(", ")}
                    </Typography>
                    <DatatableActors />
                </Box>
            </Modal>
        </div>);
    }
}

const mapStateToProps = (state) => ({
    actorRegs: state.movies.regs,
    moviesSelected: state.movies.moviesSelected,
    response: state.movies.response,
    columnsMovie: state.movies.columnsMovie,
})

export default connect(mapStateToProps,{ getCommonActorsMovies })(MoviesToolbar);