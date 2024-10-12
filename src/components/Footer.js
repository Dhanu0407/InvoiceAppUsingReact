export default function Footer({name,email,website,phone,bankAcc,bankName}){
    return(
        <>
        {/*footer */}
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li><span className="font-bold">Your Name:</span>{name}</li>
          <li><span className="font-bold">Your Email:</span>{email}</li>
          <li><span className="font-bold">Phone number:</span>{phone}</li>
          <li><span className="font-bold">Bank:</span>{bankName}</li>
          <li><span className="font-bold">Account holder:</span>{name}</li>
          <li><span className="font-bold">Account Number:</span>{bankAcc}</li>
          <li><span className="font-bold">Website:</span>{" "}<a href={website} target="_blank" rel="noopener noreferrer">{website}</a></li>
        </ul>
      </footer>
        </>
    )
}
