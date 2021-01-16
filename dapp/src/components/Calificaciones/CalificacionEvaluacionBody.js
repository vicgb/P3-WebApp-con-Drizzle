import {newContextComponents} from "@drizzle/react-components";

import CalificacionEvaluacionRow from "./CalificacionEvaluacionRow";

const {ContractData} = newContextComponents;
const CalificacionEvaluacionBody = (props) => {
    const {drizzle, drizzleState, matriculasLength, evaluacionIndex} = props;
    let rows = [];
    for (let i = 0; i < matriculasLength; i++) {
        rows.push(<ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract={"Asignatura"}
            method={"matriculas"}
            methodArgs={[i]}
            render={addr => <CalificacionEvaluacionRow drizzle={drizzle}
                                       drizzleState={drizzleState}
                                       alumnoIndex={i}
                                       alumnoAddr={addr}
                                       evaluacionIndex={evaluacionIndex}/>
            }
        />);
    }
    return <tbody>{rows}</tbody>;

}

export default CalificacionEvaluacionBody