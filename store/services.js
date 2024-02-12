import { Amplify, API, Auth, graphqlOperation } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import axios from "axios";
import emailjs, { init } from "emailjs-com";

export const fetchEve = async (idEve) => {
    // console.log("--Auth.configure----- ", Auth.configure())
    // console.log("--idEve----- ", idEve.toUpperCase())
    const res = await API.graphql(
        graphqlOperation(getThings, { id: idEve.toUpperCase() }), {
        authMode: GRAPHQL_AUTH_MODE.API_KEY
    }
    );

    console.log('DATA EVE: ', res.data.getThings)

    const hasdata = res?.data?.getThings ? true : false;

    if (!hasdata) {

        console.log('>>>>>  FALSO')
        return null
        //  {
        //     "id": null,
        //     "activeChargeEvent": "",
        //     "currentConsumedNow": 0,
        //     "pricePerHour": 0,
        //     "state": "",
        //     "createdAt": "",
        //     "updatedAt": "",
        //     "usersThingId": "",
        //     "diffTime": 0,
        //     "minutes": 0,
        //     "status": "",
        //     "isOperative": false,
        //     "stepCheckEve": 0
        // }
    }
    console.log('hasdata: ', hasdata)

    const dataProcess = { ...res.data.getThings };
    const diffTime = Math.abs(new Date(dataProcess.updatedAt) - new Date());
    const minutes = Math.floor((diffTime / 1000) / 60);
    const eve = {
        ...dataProcess,
        diffTime,
        minutes,
        status: Number(minutes) >= Number(TIME_OFFLINE) ? (
            //OFFLINE
            typeOfName["offline"]
        ) : (
            dataProcess.state === "on" ? (
                // ON
                // CARGANDO
                dataProcess?.currentConsumedNow > 0 || 0 ? (
                    typeOfName["on" || ""]
                ) : (
                    // CARGADOR HABILITADO (NO HAY CONSUMO)
                    typeOfName["finish"]
                )
            ) : (
                //OFF
                typeOfName[typeOfName["habilitado"]]
                // typeOfName[dataProcess?.state || ""]
            )
        ),
    }
    const checkStatus = {
        isOperative: eve && (eve.status === "habilitado") ? true : false,
        stepCheckEve: validateStepCheckEve(eve.status)
    }

    console.log('--eve--', eve)

    return { ...eve, ...checkStatus };
}



export const sendEmail = async (objEmail) => {
    // export const sendEmail = ({ glosa, total, to_email, order, typePay, card }) => {

    try {

        const SERVICE = "service_56ebg58";
        const TEMPLATE = "template_o36lzyb";
        init("lUerPXXiKXnrvLlVw");

        await emailjs.send(SERVICE, TEMPLATE, { ...objEmail }).then(
            function (response) {
                console.log('EMail enviado', { ...objEmail })
            }
        )
        return true

    } catch (error) {
        console.log('Error: en el envio del Email: ', error)
        return false
    }
}