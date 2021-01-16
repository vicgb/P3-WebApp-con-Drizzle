import {newContextComponents} from "@drizzle/react-components";

import EvaluacionesHead from "./EvaluacionesHead";
import EvaluacionesBody from "./EvaluacionesBody";


import EvaluacionesSinComponentes from "./EvaluacionesSinComponentes";

const {ContractData,ContractForm} = newContextComponents;

const Evaluaciones = (props) => (
    <section className="AppEvaluaciones">
        <h2>Evaluaciones</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"evaluacionesLength"}
            render={el => (
                <table>
                    <EvaluacionesHead/>
                    <EvaluacionesBody drizzle={props.drizzle}
                                      drizzleState={props.drizzleState}
                                      evaluacionesLength={el}/>
                </table>
            )}
        />


        <h3>Crear evaluacion</h3>
        <ContractForm
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"creaEvaluacion"}
            labels={["Nombre","Fecha", "Puntos"]}
        />


    </section>
);

export default Evaluaciones;
