import DatatableMovie from '../components/DatatableMovie';
import NavMenu from "../components/NavMenu";

export default function Movies() {
    return (
        <div>
            <NavMenu/>
            <main style={{ padding: "1rem 0" }}>
            <DatatableMovie />
            </main>
        </div>
    );
}