import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const CalificacionEvaluacionRow = (props) => {

    const {drizzle, drizzleState, alumnoIndex, alumnoAddr, evaluacionIndex} = props;
    return <tr key={"ALU-" + alumnoIndex}>
        <th>A<sub>{alumnoIndex}</sub></th>
        <td>{alumnoAddr}</td>
        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Asignatura"}
            method={"calificaciones"}
            methodArgs={[alumnoAddr,evaluacionIndex]}
            render={nota => <>
                <td>{nota.tipo}</td> 
                <td>
                {nota.tipo === "0" ? "N.P." : ""}
                {nota.tipo === "1" ? (nota.calificacion / 10).toFixed(1) : ""}
                {nota.tipo === "2" ? (nota.calificacion / 10).toFixed(1) + "(M.H.)" : ""}</td>
                
            </>}
        />

        
    </tr>;
};

export default CalificacionEvaluacionRow;