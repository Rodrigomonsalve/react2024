import React,{Component} from 'react';

function Pokemon(props) {
    return(
        <figure>
            <img src={props.avatar} alt={props.name}></img>
            <figcaptin>{props.name}</figcaptin>
        </figure>
    )
    
}

export default class ClaseFetch extends Component{

    state={
        pokemons:[]
    };

    //¡IMPORTANTE! fetch() y json() DEVUELVEN UNA PROMESA. POR ESO SE LES PUEDE EJECUTAR EL MÉTODO then O CON await
    componentDidMount(){
        let url="https://pokeapi.co/api/v2/pokemon";
        fetch(url)                                      //Siempre la función fetch va a servir para realizar una conexión a una URL.
        .then((res)=>res.json())                        //Después el resultado,en caso de que la conexion haya sido exitosa, lo conviertes a  json. Fecth es una promesa y por eso usa el método then
        .then((json)=>{         //¡¡¡El valor de json ES ÚNICO POR FUNCION!!!                 //Es recomendable ir imprimiendo en consola los resultados que vayamos obtenniendo para saber qué consultar
            console.log(json);
            json.results.forEach((el)=>{                //Después, si son muchos los resultados a imprimir en pantalla, tendriamos que iterarlos
                fetch(el.url)                                       //En este caso, cada iteración traía una url para consultar. Sólo fue en este caso
                .then((res)=>res.json())
                .then((json)=>{
                    console.log(json)
                
                    let pokemon={                                   //El resultado de cada iteración se va guardando en un objeto. Se van sumando(juntando) en el arreglo "pokemons"
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default
                    
                    }
                    let pokemons=[...this.state.pokemons,pokemon];

                    this.setState({pokemons})                  //La variable pokemons del state, se iguala al array resultante de la suma de objetos     
                    //this.setState({pokemons:pokemons})             
                
                });
                    

                   

            })
        });
    }

    render(){
        return(
            <>
            <h1>Ejemplo de un fetch:</h1>
            {this.state.pokemons.map((el)=><Pokemon key={el.id} name={el.name}  avatar={el.avatar}> </Pokemon>)}
            </>
        )
    }
}