import {newContextComponents} from "@drizzle/react-components";

import CalificacionEvaluacionBody from "./CalificacionEvaluacionBody";
import CalificaEvaluacionHeader from "./CalificaEvaluacionHeader";
const {ContractData} = newContextComponents;

const CalificacionEvaluacion = (props) => {

    if(!props.shown){
        return null
    }
    return <section className="AppCalificacionEvaluacion">
        <h4>Calificaciones de la evaluacion {props.evaluacionIndex}</h4>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"matriculasLength"}
            render={ml => (
                <table>
                    <CalificaEvaluacionHeader></CalificaEvaluacionHeader>
                    <CalificacionEvaluacionBody drizzle={props.drizzle}
                                 drizzleState={props.drizzleState}
                                 matriculasLength={ml}
                                 evaluacionIndex={props.evaluacionIndex}/>
                </table>
            )}
        />
    </section>
}

export default CalificacionEvaluacion;
