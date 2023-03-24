function CustomImput() {


    function handleChange(event) {
        console.log("Valor cambiado: ", event.target.value);
    }



    return (
        <>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" onChange={handleChange}/>
            </div>
        </>
    );
}

export default CustomImput;