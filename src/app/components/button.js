
const Button = ({children, className, onClick}) => {
    return (
      <>
          <button className={`p-3 rounded-xl ${className}`} onClick={onClick}>{children}</button>
      </>
    )
  }
  
  export default Button