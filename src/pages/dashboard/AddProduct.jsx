import axios from "axios";
import { toast } from "react-toastify";


const AddProduct = () => {

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
        alert("are you sure want to add the product")
        toast("Product is Added!");
        
    } 

    return (
        <div>
            <form onSubmit={handleAddProduct}>
                <h1 className="text-center text-4xl text-teal-600 my-5">Add Your Product</h1>
                <div>
                    <div>
                    <label htmlFor="">Id</label>
                    <input type="text" name="id" className="w-full py-3 px-5 mb-3 border"/>
                    </div>

                    <div>
                    <label htmlFor="">Name</label>
                        <input type="text" name="name" className="w-full py-3 px-5 border"/>
                    </div>

                   <div>
                   <label htmlFor="">Price</label>
                    <input type="number" name="price" className="w-full py-3 px-5 border"/>
                   </div>

                 <div>
                 <label htmlFor="">Category</label>
                    <input type="text" name="category" className="w-full py-3 px-5 border"/>
                 </div>

                 <div>
                 <label htmlFor="">Description</label>
                    <textarea type="text" name="description" className="w-full py-3 px-5 border"/>
                 </div>

                   
                   <div>
                   <input type="submit" value={'add product'} className=" btn w-52 py-2 px-5 border bg-purple-600 text-violet-50"/>
                   </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;