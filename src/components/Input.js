const Input = ({label, value, onChange}) => {
    return(
        <>
            <p>{label}: <input value={value} onChange={onChange}/></p>
        </>
    )
}

export default Input