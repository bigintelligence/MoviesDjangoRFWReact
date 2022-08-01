import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import Alert from '@mui/material/Alert';
import { createMovie, getMovies, getActors } from '../actions/movies';

class CreateMovie extends Component {
    state = {
        title: "",
        category: "",
        cast: [],
    };
    static propTypes = {
        actorRegs: PropTypes.array.isRequired,
        response: PropTypes.object.isRequired,
        createMovie: PropTypes.func.isRequired,
        getMovies: PropTypes.func.isRequired,
        getActors: PropTypes.func.isRequired,
    }
    componentDidMount(){
        this.props.getActors();
    }
    onChange = (e) =>
        this.setState({
            [e.target.title]: e.target.value,
    });
    onSubmit = (e) => {
        e.preventDefault();
        const { title, category, cast } = this.state;
        const movie = { title, category, cast };
        this.props.createMovie(movie);
        this.setState({
            title: "",
            category: "",
            cast: [],
        });
    };
    createMovieMsg = () =>{
        if (this.props.response.typealert === 'success'){
            return(
                <div> 
                    <Alert severity="success" onClose={() => {}}>{this.props.response.text}</Alert>
                </div> 
            );
        }
        if (this.props.response.typealert === 'error'){
            return(
                <div> 
                    <Alert severity="error" onClose={() => {}}>{this.props.response.text}</Alert>
                </div> 
            );
        }
    };
    handleTitleChange = (event) => {
        let {target: { value },} = event;
        let { title, category, cast } = this.state;
        title = value;
        this.setState({
            title: title,
            category: category,
            cast: cast,
        });
    };
    
    handleCategoryChange = (event) => {
        let {target: { value },} = event;
        let { title, category, cast } = this.state;
        category = value;
        this.setState({
            title: title,
            category: category,
            cast: cast,
        });
    };
    
    handleCastChange = (event) => {
        let {target: { value },} = event;
        let { title, category, cast } = this.state;
        cast = typeof value === 'string' ? value.split(',') : value;
        this.setState({
            title: title,
            category: category,
            cast: cast,
        });
    };
    render() {
        let { title, category, cast } = this.state;
        return (
            <div>
                <div> 
                    <h3>Create Movie</h3>
                    <div>{this.createMovieMsg()}</div>
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <FormControl required sx={{ m: 1, minWidth: 120 }} size="small">
                        <TextField required 
                        id="outlined-title" label="Title" 
                        variant="outlined" size="small" 
                        value={title} 
                        onChange={this.handleTitleChange}/>
                        <TextField required 
                        id="outlined-category" label="Category" 
                        variant="outlined" size="small" 
                        value={category} 
                        onChange={this.handleCategoryChange}/>
                    </FormControl>
                    <FormControl required sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="multiple-select-required-label">Cast</InputLabel>
                        <Select
                            labelId="multiple-select-required-label"
                            id="multiple-select-required"
                            multiple
                            value={cast}
                            label="Cast *"
                            onChange={this.handleCastChange}
                            input={<OutlinedInput label="Cast" />}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {this.props.actorRegs.map((actor)=>(
                                <MenuItem key={actor.name} value={actor.name}>
                                    <Checkbox checked={cast.indexOf(actor.name) > -1} />
                                    <ListItemText primary={actor.name} />{actor.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        endIcon={<CreateIcon />}
                        onClick={this.onSubmit}
                    >
                        Create
                    </Button>
                </Box>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    actorRegs: state.movies.actorRegs,
    response: state.movies.response,
})

export default connect(mapStateToProps,{ createMovie, getMovies, getActors })(CreateMovie)