import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, } from '@fortawesome/free-solid-svg-icons';
import './grid.css'; 


 function ItensListaPessoas(props) {
// function ItensListaPessoas() {

    //Recebo os itens no array vazio
    const [itens, setItens] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch('https:jsonplaceholder.typicode.com/todos')
            .then(Response => Response.json())
            .then(data => setItens(data))
        }

  
    return (

        <div>

        </div>
       
        // props.listaPessoas.map(cadastros => 
           
        //     <tr key={cadastros.id} >
        //         <td width="90%"  >
            
        //         {cadastros.nome}
        //         {cadastros.descricao}
        //         {cadastros.contato}
               
        //         </td>
        //         <td className='text-right'>
                
        //             < a href={"/atualizar/" + cadastros.id} className="btn btn-warning">
        //                 <FontAwesomeIcon icon={faEdit}/>
        //                 {/* &nbsp;&nbsp; */}
        //                 {/* <FontAwesomeIcon icon={faUpload }/> */}
                        
        //             </a>
        //         </td>
                
        //     </tr>
          
           
        // )
    );

}

ItensListaPessoas.propTypes = {
    listaPessoas: PropTypes.array.isRequered,
    recarregarListaPessoas: PropTypes.func.isRequired
};


export default ItensListaPessoas;