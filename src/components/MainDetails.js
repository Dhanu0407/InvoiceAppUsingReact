import React from "react"
export default function MainDetails({name,address}){
    return(
        <>
        {/* your details */}
      <section className="flex flex-col items-end justify-end">
         <h2 className="font-bold text-xl uppercase md:text-4xl mb-1">{name}</h2> 
         <p>{address}</p>
      </section>
      {/* end of details */}
        </>
    )
}

