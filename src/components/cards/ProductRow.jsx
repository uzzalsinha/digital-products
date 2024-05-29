import axios from "axios";
import { Link } from "react-router-dom";
import {toast } from 'react-toastify';

const ProductRow = ({product, onDelete}) => {
    // const notify = () => toast("Wow so easy!");

    const handleDelete = async ()=>{
        await axios.delete(`http://localhost:3000/products/${product.id}`)
        console.log(product.id);
        onDelete(product.id)
        alert("Are you sure want to delete it")
        toast("Product is deleted!");
        
    }

    
    return (
        <>
        <tr>
        <th>{product.id}</th>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.category}</td>
        <td className="flex gap-3">
            <Link to ={`/dashboard/edit-product/${product.id}`} className="btn btn-xs btn-neutral">Edit</Link>
            <button onClick={handleDelete} className="btn btn-xs btn-error">Delete</button>
        </td>
      </tr>
        </>
    );
};

export default ProductRow;