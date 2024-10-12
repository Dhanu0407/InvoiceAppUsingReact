export default function Footer({name,email,address,website}){
    return(
        <>
        {/*footer */}
      <footer>
        <ul className="flex flex-wrap items-center justify-center">
          <li><span className="font-bold">Your Name:</span>{name}</li>
          <li><span className="font-bold">Your Email:</span>{email}</li>
          <li><span className="font-bold">Phone number:</span>9504559728</li>
          <li><span className="font-bold">Bank:</span>Bank of India</li>
          <li><span className="font-bold">Account holder:</span>{name}</li>
          <li><span className="font-bold">Account Number:</span>130910510001710</li>
          <li><span className="font-bold">Website:</span>{" "}<a href={website} target="_blank" rel="noopener noreferrer">{website}</a></li>
        </ul>
      </footer>
        </>
    )
}
