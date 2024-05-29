import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {

    const {id} = useParams()
    const [productEditData, setProductEditData] = useState()

  useEffect(()=>{
    async function load () {
        const productDataEdit = await axios.get(`http://localhost:3000/products/${id}`)
        if(productDataEdit?.status == 200){

        setProductEditData(productDataEdit?.data)
    }
}
    load()
  }, [])
    

  
   
    const handleAddProduct = async (e)=> {
        e.preventDefault()
        const form = e.target;
        const id = form.id.value;
        const name = form.name.value;
        const price = form.price.value;
        const category = form.category.value;
        const description = form.description.value;
        const productData = {
            id, 
            name, 
            description,
            price, 
            category
            
        }
        await axios.post("http://localhost:3000/products", productData)
        
    } 

    return (
        <div>
            <form onSubmit={handleAddProduct}>
                <div>
                    <label htmlFor="">Id</label>
                    <input type="text" name="id" className="w-full py-7 px-5 mb-3 border"/>

                    <label htmlFor="">Name</label>
                    <input defaultValue = {productEditData?.name} type="text" name="name" className="w-full py-7 px-5 border"/>

                    <label htmlFor="">Price</label>
                    <input defaultValue = {productEditData?.price} type="number" name="price" className="w-full py-7 px-5 border"/>

                    <label htmlFor="">Category</label>
                    <input defaultValue = {productEditData?.category}  type="text" name="category" className="w-full py-7 px-5 border"/>

                    <label htmlFor="">Description</label>
                    <textarea defaultValue = {productEditData?.description} type="text" name="description" className="w-full py-7 px-5 border"/>

                   
                    <input type="submit" value={'add product'} className="w-full py-7 px-5 border bg-neutral text-violet-50"/>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;