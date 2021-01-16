
const SelectEvaluacion = (props) => {
    const {evaluacionesLength} = props;
    let rows = [];
    rows.push(
        <option value={"None"}>Ninguna</option>
    );
    for (let i = 0; i < evaluacionesLength; i++) {
        rows.push(
            <option value={i}>Evaluación #{i}</option>
        );
    }
    return rows;
    

}

export default SelectEvaluacion