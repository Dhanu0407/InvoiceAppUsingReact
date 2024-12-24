import React, { useState, useRef } from "react";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Header from "./components/Header";
import Table from "./components/Table";
import TableForm from "./components/TableForm";
import MainDetails from "./components/MainDetails";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAcc, setBankAcc] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0); // Subtotal state
  const [taxRate, setTaxRate] = useState(0); // Tax rate state
  const [discount, setDiscount] = useState(0); // Discount state
  const componentRef = useRef();
  const [logo, setLogo] = useState(null); // State for the uploaded logo


  // Calculate subtotal from the list of items
  const calculateSubtotal = () => {
    const subtotalValue = list.reduce((acc, item) => acc + item.amount, 0);
    setSubtotal(subtotalValue);
  };
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result); // Store the logo as a base64 URL
      };
      reader.readAsDataURL(file);
    }
  };
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
        {showInvoice ? (
          <>
            <button
              onClick={handlePrint}
              className="mb-5 bg-darkgoldenrod-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-darkgoldenrod-500 hover:bg-transparent hover:text-darkgoldenrod-500 transition-all duration-300 no-print"
            >
              Print/Download
            </button>

       <div ref={componentRef}>
        <Header logo={logo} setLogo={setLogo}/>
              <MainDetails name={name} address={address} />
              <ClientDetails clientName={clientName} clientAddress={clientAddress} />
              <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
              <Table list={list} subtotal={subtotal} taxRate={taxRate} discount={discount} total={total} />
              <Notes notes={notes} />
              <Footer name={name} address={address} website={website} email={email} phone={phone} bankAcc={bankAcc} bankName={bankName} />
            </div>
            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-darkgoldenrod-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-darkgoldenrod-500 hover:bg-transparent hover:text-darkgoldenrod-500 transition-all duration-300 no-print"
            >            Edit
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
               value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address">Enter your Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="address-input"
                  />
                </div>
              </article>
               {/* Add Logo Upload Field */}
               <article className="flex flex-col mb-5">
                <label htmlFor="logo">Upload Company Logo:</label>
                <input type="file" id="logo" accept="image/*" onChange={handleLogoUpload} />
              </article>
      <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                                <div className="flex flex-col">
                  <label htmlFor="website">Enter your Website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your WebAdd"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phoneNo</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phoneNo"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 ">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter your bank name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank name"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAcc">Enter your Bank Acc No</label>
                  <input
                    type="text"
                    name="bankAcc"
                    id="bankAcc"
                    placeholder="Enter your Bank Acc No"
                    autoComplete="off"
                    value={bankAcc}
                    onChange={(e) => setBankAcc(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-20">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Client Name: </label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Client Name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Client Address: </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Client Address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10 ">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number: </label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice No"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date: </label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date: </label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Due Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                  calculateSubtotal={calculateSubtotal}
                />
              </article>

              <label htmlFor="notes">Notes: </label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Add Notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>

              <div className="md:grid grid-cols-3 gap-10 mt-5">
                <div className="flex flex-col">
                  <label htmlFor="taxRate">Tax Rate (%):</label>
                  <input
                    type="number"
                    name="taxRate"
                    id="taxRate"
                    placeholder="Enter tax rate"
                    autoComplete="off"
                    value={taxRate}
                    onChange={(e) => setTaxRate(Number(e.target.value))}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="discount">Discount (%):</label>
                  <input
                    type="number"
                    name="discount"
                    id="discount"
                    placeholder="Enter discount"
                    autoComplete="off"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  calculateSubtotal();
                  const taxAmount = (subtotal * taxRate) / 100;
                  const discountAmount = (subtotal * discount) / 100;
                  setTotal(subtotal + taxAmount - discountAmount);
                  setShowInvoice(true);
                }}
                className="bg-darkgoldenrod-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-darkgoldenrod-500 hover:bg-transparent hover:text-darkgoldenrod-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
      <style jsx="true">{`
  @media print {
    .no-print {
      display: none;
    }

    
    @page {
      margin: 0;
    }

    
    body {
      -webkit-print-color-adjust: exact; /* Ensures colors are printed accurately */
      margin: 0;
    }

  

   
    .page-break::after {
      content: "";
    }
  }
`}</style>

    </>
  );
}

export default App;
