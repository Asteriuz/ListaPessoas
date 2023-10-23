import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";



function ListarPessoas() {

    // const ITENS_POR_PAG=3;

    // const [cadastros, setCadastros] = useState([]);
    // const [carregarCadastros, setCarregarCadastros]= useState(true);

    // // const [totalItems, setTotalItems]= useState(0);
    // // const [paginaAtual, setPaginaAtual]= useState(1);


    /*
    * recebo os itens para o grid
    */
    const [itens, setItens] = useState([]);
    /*
    * Numero de itens por pagina
    */
    const [itensPorPagina, setItensPorPagina] = useState(5);

    /*
    * Pagina atual - selecionada
    */
    const [currentPage, setCurrentPage] = useState(0);

    /*
    * Numero de pagina do Grid
    * usando metodo Math.ceil  para arredondar p/ inteiro
    */
    const pages = Math.ceil(itens.length / itensPorPagina);

    /*
    * Filtrar os itens baseado na seleção da pagina
    */
    const startIndex = currentPage * itensPorPagina;
    const endIndex = startIndex + itensPorPagina;
    const currentItens = itens.slice(startIndex, endIndex);


    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch('https:jsonplaceholder.typicode.com/todos')
                .then(Response => Response.json())
                .then(data => data);
            setItens(result);

        };
        fetchData();
    }, []);


    useEffect(() => {
        setCurrentPage(0);
    }, [itensPorPagina]);

    return (
        <Table>
            <thead>
                <h3 className="text-center">Lista Pessoas</h3>
                <tr>
                    <th>
                        <select value={itensPorPagina} onChange={(e) => setItensPorPagina(Number(e.target.value))}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </th>
                    <th>
                        <a href="/Cadastro"
                            className="btn btn-primary">
                            <FontAwesomeIcon icon={faAdd} />
                        </a>
                    </th>
                </tr>
                <th></th>
                <tr>
                    <th>Nome</th>
                    <th>Descricao</th>
                    <th>Telefone</th>
                </tr>
                <th></th>


            </thead>

            <tbody>


                {currentItens.map(item => {
                    return <tr key={item}>

                        <th>  {item.id}</th>


                        <th>{item.title}</th>

                        <th>{item.title}</th>
                    </tr>;
                })}


                <tr>
                    {"Páginas:"}
                    {Array.from(Array(pages), (item, index) => {
                        return <button key={item} value={index} onClick={(e) => setCurrentPage(e.target.value)}>{index + 1}</button>;
                    })}

                </tr>

            </tbody>
        </Table>
    );
}

export default ListarPessoas;