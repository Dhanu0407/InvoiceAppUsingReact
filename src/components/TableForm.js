export default function TableForm({description,setDescription,quantity,setQuantity,price,setPrice,amount,setAmount}){
    return(

        <>
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
                <input type="text" name="amount" id="amount" placeholder="item amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
          </div> 
         </div>
        </>
    )
}