import Image from "next/image"
import react from "react"

function Navbar({  onCtaClick}) {
    return (
    <nav className="flex justify-between items-center text-white mx-6">
      
        <div className="transition-all duration-300 hover:translate-y-[-4px]">
          <Image
              src="/appLogo.svg"
              width={200}
              height = {100}
            />
        </div>
            <div className="transition-all duration-300 hover:translate-y-[-4px]">
              <button className="text-md font-regular cursor-pointer  " onClick={onCtaClick}  >
              <p className="decoration-solid">Contact Us</p> 
                </button> 
            </div>

           
      </nav>
    )
  }

export default Navbar