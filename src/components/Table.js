import React from "react";

export default function Table({ list, subtotal, taxRate, discount, total,currency }) {
  // Calculating tax and discount amounts
  const taxAmount = (subtotal * taxRate) / 100;
  const discountAmount = discount ? (subtotal * discount) / 100 : 0;
  const finalTotal = subtotal + taxAmount - discountAmount;

  
  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-200 p-1">
            <td className="font font-bold">Description</td>
            <td className="font font-bold">Quantity</td>
            <td className="font font-bold">Price</td>
            <td className="font font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      {/* Subtotal, Tax, Discount, and Total */}
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2 className="text-gray-800 font-bold">Subtotal:</h2>
          <h2 className="text-gray-800">{subtotal.toFixed(2)}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-gray-800 font-bold">Tax ({taxRate}%):</h2>
          <h2 className="text-gray-800">{taxAmount.toFixed(2)}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-gray-800 font-bold">Discount ({discount}%):</h2>
          <h2 className="text-gray-800">{discountAmount.toFixed(2)}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-gray-800 font-bold">Total:</h2>
          <h2 className="text-gray-800">Total. {finalTotal.toFixed(2)}</h2>
        </div>
      </div>
    </>
  );
}
