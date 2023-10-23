import Pagination from "react-bootstrap/Pagination";
import { PropTypes } from "prop-types";


function Paginacao(props) {
    
    
    function gerarPrimeiroItem(){
        return (

            <Pagination.First 
                key="pagFirst"
                onClick={() => props.mudarPagina(1)}
                disabled={props.paginaAtual === 1}/>
            );
    }   


        
    function gerarItemAnterior() {
        return (
                   <Paginacao.Prev
                       key="pagPrev"
                       onClick={() => props.mudarPagina(props.paginaAtual - 1)}
                       disabled={props.paginaAtual === 1} />
        );
       }

               
       function gerarItemNumerico(pagina){

        return (
          <Pagination.Item
                key={pagina}
                active={pagina === props.paginaAtual}
                onClick={() => props.mudarPagina(pagina)}>
                {pagina}
          </Pagination.Item>
        );
    }

           
    function gerarProximoItem(numeroPaginas){
        return(
            <Pagination.Last
            key="pagNext"
            onClick={() => props.mudarPagina(props.paginaAtual + 1)}
            disabled={props.paginaAtual === numeroPaginas}/>
        );
    }



    function gerarUltimoItem(numeroPaginas){
        return(
            <Pagination.Next
            key="pagLast"
            onClick={() => props.mudarPagina(numeroPaginas)}
            disabled={props.paginaAtual === numeroPaginas}/>
        );
    }

    function obterPaginacao() {
        const numPaginas = Math.ceil(props.totalItems / props.itemsPorPagina);
        let items = [];
        items.push(gerarPrimeiroItem());
        items.push(gerarItemAnterior());

        for (let pagina = 1; pagina <=  numPaginas; pagina++){
            items.push(gerarItemNumerico(pagina));
        }

        items.push(gerarProximoItem(numPaginas));
        items.push(gerarUltimoItem(numPaginas));
        return  items;

    }
    return(
        <div>
            <Pagination data-testid= "paginacao">
                {obterPaginacao()}  
            </Pagination>
        </div>
    );
}


Paginacao.prototypes = {
    totalItems: PropTypes.number.isRequired,
    itemsPorPagina: PropTypes.number.isRequired,
    paginaAtual: PropTypes.number.isRequired,
    mudarPagina: PropTypes.func.isRequired
}


export default Paginacao;