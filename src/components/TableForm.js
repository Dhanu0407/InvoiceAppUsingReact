import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import {v4 as uuidv4} from "uuid"
import React, { useState,useEffect } from "react"
export default function TableForm({description,setDescription,quantity,setQuantity,price,setPrice,amount,setAmount,list,setList,total,setTotal}){
      const[isEditing, setIsEditing]=useState(false)
      //submit form function
      const handleSubmit=(e)=>{
      e.preventDefault()
      if(!description||!quantity||!price){
          alert("Please fill in all input ")
      }else{
            const newItems={
                  id:uuidv4(),
                  description,
                  quantity,
                  price,
                  amount,
            }
            setDescription("")
            setQuantity("")
            setPrice("")
            setAmount("")
            setList([...list,newItems])
            setIsEditing(false)
            //console.log(list.description)
           }
      }
     
     //calculate amount
      useEffect(()=>{
            const calculateAmount=(amount)=>{
                  setAmount(quantity*price)   
               }
               calculateAmount(amount)
      },[amount,price,quantity,setAmount])

       //calculate total amount of item in table
      useEffect(()=>{
            let rows = document.querySelectorAll(".amount")
            let sum = 0
     
            for(let i=0; i<rows.length; i++){
                 if(rows[i].className==="amount" ){
                       sum += isNaN(rows[i].innerHTML)?0:parseInt(rows[i].innerHTML)
                       setTotal(sum)
                 }
            }
      })
      //edit button
        const editRow=(id)=>{
          const editingRow = list.find((row)=>row.id===id) 
          setList(list.filter((row)=>row.id!==id))
          setIsEditing(true)
          setDescription(editingRow.description)
          setQuantity(editingRow.quantity)
          setPrice(editingRow.price) 
        }

      //delete button
      const deleteRow=(id)=>setList(list.filter((row)=>row.id !== id))
            
      
    return(

        <>
         <form onSubmit={handleSubmit}>
         <div className="flex flex-col md:mt-20">
                <label htmlFor="description">Item Description:</label>
                <input type="text" name="description" id="description" placeholder="item decription" value={description} onChange={(e)=>setDescription(e.target.value)}/>
          </div> 

         <div className="md: grid grid-cols-3 gap-10 ">
         <div className="flex flex-col">
                <label htmlFor="quantity">Item Quantity:</label>
                <input type="text" name="quantity" id="quantity" placeholder="item quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
          </div> 

          <div className="flex flex-col">
                <label htmlFor="price">Item Price:</label>
                <input type="text" name="price" id="price" placeholder="item price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          </div> 

          <div className="flex flex-col">
                <label htmlFor="amount">Item Amount:</label>
                <p>{amount}</p>
          </div> 
         </div>
         <button type="submit" className="mb-5 bg-darkgoldenrod-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-darkgoldenrod-500 hover:bg-transparent hover:text-darkgoldenrod-500 transition-all duration-300">{isEditing?"Edit Item":"Add Item"}</button>
         </form>

         <table width="100%" className="mb-10">
         <thead>
                <tr className="bg-gray-200 p-1 ">
                    <td className="font font-bold">Description</td>
                    <td className="font font-bold">Quantity</td>
                    <td className="font font-bold">Price</td>
                    <td className="font font-bold">Amount</td>
                </tr>
            </thead>
            {list.map(({id,description,quantity,price,amount})=>( 
            <React.Fragment key={id}>
            

            <tbody>
                <tr>
                    <td>{description}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td className="amount">{amount}</td>
                    <td><button onClick={()=>deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl"/></button></td>
                    <td><button onClick={()=>editRow(id)}><AiOutlineEdit className="text-green-500 font-bold text-xl"/></button></td>
                </tr>
            </tbody>
          
              </React.Fragment> 
            ))}
            </table>
         <div>
            <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">Total:{total.toLocaleString()}</h2>
         </div>
        </>
    )
}