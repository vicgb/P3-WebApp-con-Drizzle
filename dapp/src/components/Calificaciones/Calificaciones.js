import {newContextComponents} from "@drizzle/react-components";

import CalificacionesHead from "./CalificacionesHead";
import CalificacionesBody from "./CalificacionesBody";
import Calificar from "./Calificar";
import CalificacionEvaluacion from "./CalificacionEvaluacion";
import SelectEvaluacion from "./SelectEvaluacion";
import { render ,unmountComponentAtNode} from "react-dom";
const {ContractData} = newContextComponents;

var shown = false;
var evaluacionIndex = "None";

const Calificaciones = (props) => {

    function searchCalificacionEvaluacion(event){
        const value = event.target.value
        if (value == "None"){
            shown = false;
            
        }
        else{
            shown = true;
        }
        
        evaluacionIndex = value;
    }

    return <section className="AppCalificaciones">
        <h2>Calificaciones</h2>

        <ContractData drizzle={props.drizzle}
                      drizzleState={props.drizzleState}
                      contract={"Asignatura"}
                      method={"matriculasLength"}
                      render={ml => <ContractData
                          drizzle={props.drizzle}
                          drizzleState={props.drizzleState}
                          contract={"Asignatura"}
                          method={"evaluacionesLength"}
                          render={el => <table>
                              <CalificacionesHead evaluacionesLength={el}/>
                              <CalificacionesBody drizzle={props.drizzle}
                                                  drizzleState={props.drizzleState}
                                                  matriculasLength={ml}
                                                  evaluacionesLength={el}/>
                          </table>}
                      />}
        />

        <h3>Calificaciones por Evaluación</h3>
        Selecciona la evaluación para ver las calificaciones:&emsp; 
        <ContractData drizzle={props.drizzle}
                      drizzleState={props.drizzleState}
                      contract={"Asignatura"}
                      method={"evaluacionesLength"}
                      render={el => 
                        <select id="evaluacionSelect" onChange={searchCalificacionEvaluacion}>
                        <SelectEvaluacion drizzle={props.drizzle}
                            drizzleState={props.drizzleState}
                            evaluacionesLength={el}/>
                        </select>
                    }

        />

        <CalificacionEvaluacion drizzle={props.drizzle}
                        drizzleState={props.drizzleState}
                        evaluacionIndex = {evaluacionIndex}
                        shown = {shown}/>
        
        
        
         
        

        <Calificar drizzle={props.drizzle}
                   drizzleState={props.drizzleState} />
    </section>

}

export default Calificaciones;
