
import { useState } from "react"
import Footer from "./components/Footer"
import Notes from "./components/Notes"
import ClientDetails from "./components/ClientDetails"
import Dates from "./components/Dates"
import Header from "./components/Header"
import Table from "./components/Table"
import TableForm from "./components/TableForm"
import MainDetails from "./components/MainDetails"
function App() {

 const[showInvoice,setShoInvoice]=useState(true)
 const[name,setName]=useState("Dhanashri Ghadage")
 const[address,setAddress]=useState("pune")
 const[email,setEmail]=useState("ghadagedhanashri@gmail.com")
 const[phone,setPhone]=useState("9504559728")
 const[bankName,setBankName]=useState("bank of india")
 const[bankAcc,setBankAcc]=useState("130910510001710")
 const[website,setWebsite]=useState("https://website.com")
 const[clientName,setClientName]=useState("dhanu")
 const[clientAddress,setClientAddress]=useState("mumbai")
 const[invoiceNumber,setInvoiceNumber]=useState("1234")
 const[invoiceDate,setInvoiceDate]=useState("11/10/2024")
 const[dueDate,setDueDate]=useState("12/10/2024")
 const[notes,setNotes]=useState("pay to the bank acc indicated above")
 const[description,setDescription] = useState("")
 const[quantity,setQuantity]=useState("")
 const[price,setPrice]=useState("")
 const[amount,setAmount]=useState("")




  const handlePrint = () => {
    window.print()
  }
  return (
    <>
     <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
     
     {showInvoice ? (<div>
     <Header handlePrint={handlePrint}/>
     <MainDetails name={name} address={address}/>
     <ClientDetails clientName={clientName} clientAddress={clientAddress}/>
     <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate}/>
     <Table description={description} quantity={quantity} price={price} amount={amount}/>
     <Notes notes={notes}/>
     <Footer name={name} address={address} website={website} email={email} phone={phone} bankAcc={bankAcc} bankName={bankName}/>
     <button onClick={()=>setShoInvoice(false)}className=" mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit</button>
     </div>):(
      <>
      {/*name,address, */}
 <div className="flex flex-col justify-center">
      <article className="md:grid grid-cols-2 gap-10"> 
         <div className="flex flex-col">
           <label htmlFor="name">Enter your name</label>
         <input type="text" name="text" id="name" placeholder="Enter your name" autoComplete="off" value={name} onChange={(e)=> setName(e.target.value)}/>
         </div>
          <div className="flex flex-col">
            <label htmlFor="address">Enter your Address</label>
          <input type="text" name="address" id="address" placeholder="Enter your add" autoComplete="off" value={address} onChange={(e)=> setAddress(e.target.value)}/>
          </div>
     </article>
          
          
         <article className="md:grid grid-cols-3 gap-10 ">
         <div className="flex flex-col">
         <label htmlFor="email">Enter your email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete="off" value={email} onChange={(e)=> setEmail(e.target.value)}/>
         </div>
         
         <div className="flex flex-col">
         <label htmlFor="website">Enter your Website </label>
          <input type="url" name="website" id="website" placeholder="Enter your WebAdd" autoComplete="off" value={website} onChange={(e)=> setWebsite(e.target.value)}/>
         </div>

         <div className="flex flex-col">
         <label htmlFor="phone">Enter your phoneNo</label>
          <input type="text" name="phone" id="phone" placeholder="Enter your phoneNo" autoComplete="off" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
          </div>
         </article>

       <article className="md:grid grid-cols-2 gap-10 ">
       <div className="flex flex-col">
        <label htmlFor="bankName">Enter your bank name</label>
         <input type="text" name="bankName" id="bankName" placeholder="Enter your bank name" autoComplete="off" value={bankName} onChange={(e)=> setBankName(e.target.value)}/>
          
        </div>
          
          <div className="flex flex-col">
          <label htmlFor="backAcc">Enter your Bank Acc No</label>
          <input type="text" name="bankAcc" id="bankAcc" placeholder="Enter your Bank Acc No" autoComplete="off" value={bankAcc} onChange={(e)=> setBankAcc(e.target.value)}/>

          </div>
       </article>
          
          <article className="md:grid grid-cols-2 gap-10 md:mt-20">
            <div className="flex flex-col">
              <label htmlFor="clientName">Client Name: </label>
              <input type="text" name="clientName" id="clientName" placeholder="client Name" autoComplete="off" value={clientName} onChange={(e)=> setClientName(e.target.value)}/>
              </div>
            <div className="flex flex-col">
              <label htmlFor="clientAddress">Client Address: </label>
              <input type="text" name="clientAddress" id="clientAddress" placeholder="client Address" autoComplete="off" value={clientAddress} onChange={(e)=> setClientAddress(e.target.value)}/> 
            </div>
          </article>

         <article className="md:grid grid-cols-3 ">
          <div className="flex flex-col">
              <label htmlFor="invoiceNumber">invoice Number: </label>
              <input type="text" name="invoiceNumber" id="invoiceNumber" placeholder="Invoice No" autoComplete="off" value={invoiceNumber} onChange={(e)=> setInvoiceNumber(e.target.value)}/>
            </div>

            <div className="flex flex-col">
              <label htmlFor="invoiceDate">Invoice Date: </label>
              <input type="date" name="invoiceDate" id="invoiceDate" placeholder="invoice Date" autoComplete="off" value={invoiceDate} onChange={(e)=> setInvoiceDate(e.target.value)}/>
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="dueDate">Due Date: </label>
              <input type="date" name="dueDate" id="dueDate" placeholder="Due Date" autoComplete="off" value={dueDate} onChange={(e)=> setDueDate(e.target.value)}/>
            </div>

         </article>
                 
             <article>
               <TableForm description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount}/>
              </article>  

          <label htmlFor="notes">Notes: </label>
          <textarea  name="notes" id="notes" cols="30" rows="10" placeholder="Add Notes"  value={notes} onChange={(e)=> setNotes(e.target.value)}></textarea>

           <button onClick={()=>setShoInvoice(true)}className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
      </div>
     </>
     )
     }


      
     </main>
    </>
  );
}

export default App;
