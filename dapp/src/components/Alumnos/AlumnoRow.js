import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const AlumnoRow = (props) => {
    const {drizzle, drizzleState, alumnoIndex, alumnoAddr} = props;
    return <tr key={"ALU-" + alumnoIndex}>
        <th>A<sub>{alumnoIndex}</sub></th>
        <td>{alumnoAddr}</td>
        <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Asignatura"}
            method={"datosAlumno"}
            methodArgs={[alumnoAddr]}
            render={datos => <>
                <td>{datos.nombre}</td>
                <td>{datos.email}</td>
            </>}
        />

        
    </tr>;
};

export default AlumnoRow;
