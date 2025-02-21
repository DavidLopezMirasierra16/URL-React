import { Link } from "react-router-dom";

export function Enlaces(){
    return (
        <>
            <nav>
                {/** Estos enlaces no tienen que ir dentro de los route */}
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contacto'>Contacto</Link>
            </nav>
        </>
    );
}