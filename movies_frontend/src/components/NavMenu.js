import { Link } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';

export default function NavMenu() {
    return (
        <header className="App-header">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" to="/movies">Movies</Link>
                <Link underline="hover" color="inherit" to="/addmovie">Create Movie</Link>
            </Breadcrumbs>
        </header>
    );
}