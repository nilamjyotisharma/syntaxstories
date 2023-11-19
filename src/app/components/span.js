const Span = ({children, className, onClick}) => {
    return (
      <>
          <span className={`mx-2 inline whitespace-nowrap bg-[#5a5a68] border-[0.05px] border-neutral-400 text-neutral-200 px-2 py-1 rounded-[4px] ${className}`} onClick={onClick}>{children}</span>
      </>
    )
  }
  
  export default Span