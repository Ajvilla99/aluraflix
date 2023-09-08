import React from "react"


const ButtonForm = ({ text, type = 'button', onClick }) => {

    const lower = text.toLowerCase()

    return (
      <div>
          <button type={type} onClick={onClick}
                  className={`text-[18px] h-[50px] w-[180px] rounded-[4px] duration-300 hover:bg-[#78b1fcc1] max-[450px]:text-[16px] max-[450px]:w-[150px]
            ${ lower === 'limpiar' ? 'bg-[#9e9e9e] text-[#000] hover:bg-[#cececed7]' : 'bg-primary text-white' }`}>
              { text }
          </button>
      </div>
  
    )
  }
  
  export default ButtonForm