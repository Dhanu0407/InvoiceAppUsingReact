
import { useState } from "react"
import Footer from "./components/Footer"
import Notes from "./components/Notes"
import ClientDetails from "./components/ClientDetails"
import Dates from "./components/Dates"
import Header from "./components/Header"
import Table from "./components/Table"
import MainDetails from "./components/MainDetails"
function App() {

 const[showInvoice,setShoInvoice]=useState(false)
 const[name,setName]=useState("")
 const[address,setAddress]=useState("")
 const[email,setEmail]=useState("")
 const[phone,setPhone]=useState("")
 const[bankName,setBankName]=useState("")
 const[bankAcc,setBankAcc]=useState("")
 const[website,setWebsite]=useState("")
 const[clientName,setClientName]=useState("")
 const[clientAddress,setClientAddress]=useState("")
 const[invoiceNumber,setInvoiceNumber]=useState("")
 const[invoiceDate,setInvoiceDate]=useState("")
 const[dueDate,setDueDate]=useState("")
 const[notes,setNotes]=useState("")




  const handlePrint = () => {
    window.print()
  }
  return (
    <>
     <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
     
     {showInvoice ? (<div>
     <Header handlePrint={handlePrint}/>
     <MainDetails name={name} address={address}/>
     <ClientDetails/>
     <Dates/>
     <Table/>
     <Notes/>
     <Footer name={name} address={address} website={website} email={email}/>
     <button onClick={()=>setShoInvoice(false)}className=" mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit</button>
     </div>):(
      <>
      {/*name,address, */}
      <div className="flex flex-col justify-center">
          <label htmlFor="name">Enter your name</label>
          <input type="text" name="text" id="name" placeholder="Enter your name" autoComplete="off" value={name} onChange={(e)=> setName(e.target.value)}/>


          <label htmlFor="address">Enter your Address</label>
          <input type="text" name="address" id="address" placeholder="Enter your add" autoComplete="off" value={address} onChange={(e)=> setAddress(e.target.value)}/>

          <label htmlFor="email">Enter your email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete="off" value={email} onChange={(e)=> setEmail(e.target.value)}/>

          <label htmlFor="phone">Enter your phoneNo</label>
          <input type="text" name="text" id="phone" placeholder="Enter your phoneNo" autoComplete="off" value={phone} onChange={(e)=> setPhone(e.target.value)}/>

          <label htmlFor="bankName">Enter your bank name</label>
          <input type="text" name="text" id="bankName" placeholder="Enter your bank name" autoComplete="off" value={bankName} onChange={(e)=> setBankName(e.target.value)}/>

          <label htmlFor="backAcc">Enter your Bank Acc No</label>
          <input type="text" name="text" id="bankAcc" placeholder="Enter your Bank Acc No" autoComplete="off" value={bankAcc} onChange={(e)=> setBankAcc(e.target.value)}/>

          <label htmlFor="website">Enter your Website </label>
          <input type="url" name="website" id="website" placeholder="Enter your WebAdd" autoComplete="off" value={website} onChange={(e)=> setWebsite(e.target.value)}/>



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
