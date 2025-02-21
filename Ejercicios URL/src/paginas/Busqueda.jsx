import { useParams } from "react-router-dom";

export function BuscarUsuario(){
    const personas = [{id: 1, nombre: "David"}, {id: 2, nombre: "Carlos"}];
    //Los parametros que le pasamos
    const {id} = useParams();

    const persona_datos = personas.filter((persona) => persona.id == id);

    const Recorrer = () =>{

        if(persona_datos.length==0){
            return <p>No hay datos con el id {id}</p>
        }else{
            //El primer return lo usamos para poder devolver el array
            return persona_datos.map(persona => {
                //Este segundo lo usamos para devolver los datos del array que hemos devuelto anteriormente
                return <ul key={id}>
                    <li>{persona.id}</li>
                    <li>{persona.nombre}</li>
                </ul>
            })
        }

    }

    return (
        <>
            <Recorrer/>
        </>
    );

}