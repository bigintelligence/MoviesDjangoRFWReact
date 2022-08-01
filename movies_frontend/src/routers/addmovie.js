import CreateMovie from '../components/CreateMovie';
import NavMenu from "../components/NavMenu";

export default function AddMovie() {
    return (
        <div>
            <NavMenu/>
            <main style={{ padding: "1rem 0" }}>
                <CreateMovie />
            </main>
        </div>
    );
}