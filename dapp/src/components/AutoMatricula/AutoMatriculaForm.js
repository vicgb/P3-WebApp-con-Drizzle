import {newContextComponents} from "@drizzle/react-components";

const { ContractForm} = newContextComponents;

const AutoMatriculaForm = (props) => {
    const {drizzle, drizzleState, addr} = props;

    return(
        <ContractForm
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Asignatura"}
            method={"automatricula"}
            sendArgs={{from:addr}}
            labels={["Nombre","Email"]}
            //Better approach with render
        />
    )
}
export default AutoMatriculaForm