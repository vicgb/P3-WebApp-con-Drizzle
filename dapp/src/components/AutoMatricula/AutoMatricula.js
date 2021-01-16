import {newContextComponents} from "@drizzle/react-components";
import AutoMatriculaForm from "./AutoMatriculaForm";

const {AccountData, ContractForm} = newContextComponents;

var addr;
const AutoMatricula = (props) => {
    const {drizzle, drizzleState} = props;

    return(
    <section className="AppAutoMatricula">
        <h2>Auto matrícula</h2>
        <p>Introduce tus datos para matricularte en este curso:</p>
        <br></br>
        <AccountData
            drizzle={drizzle}
            drizzleState={drizzleState}
            accountIndex="0"
            units="ether"
            precision="3"
            render={({address}) => <>
                <AutoMatriculaForm drizzle={drizzle}
                                    drizzleState={drizzleState}
                                    addr={addr}/>

            </>}
        />

        

        
    </section>
    )
}

export default AutoMatricula