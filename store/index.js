/* eslint-disable no-useless-computed-key */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'
import addHours from 'date-fns/addHours'

import { cleanStore } from './utils';
import { fetchEve, fetchWPStart, fetchWPStatus, fetchWPCommit, sendEmail } from './services';


export const getRealTime = (hours) => {
    const currentTime = new Date();
    const hourStart = currentTime.getHours() < 10 ? `0${currentTime.getHours()}` : currentTime.getHours();
    const minutesStart = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();

    const newHour = addHours(currentTime, hours)
    const hoursFinish = newHour.getHours() < 10 ? `0${newHour.getHours()}` : newHour.getHours();
    const minutesFinish = newHour.getMinutes() < 10 ? `0${newHour.getMinutes()}` : newHour.getMinutes();


    return {
        start: `${hourStart}:${minutesStart}`,
        finish: `${hoursFinish}:${minutesFinish}`,
    }

    // const newHour = addHours(currentTime, 1)
    // const hoursFinish = newHour.getHours() < 10 ? `0${newHour.getHours()}` : newHour.getHours();
    // const minutesFinish = newHour.getMinutes() < 10 ? `0${newHour.getMinutes()}` : newHour.getMinutes();

    // let hour = currentTime.getHours();
    // const hourStart = hour.getHours() < 10 ? `0${hour.getHours()}` : hour.getHours();
    // const minutesStart = hour.getMinutes() < 10 ? `0${hour.getMinutes()}` : hour.getMinutes();

}

const timeObj = getRealTime(0)
export const INITIAL_STATE = {
    // eve: { "id": "", "status": false, stepCheckEve: 1, "pricePerHour": 0 },
    eve: {
        "id": "",
        "activeChargeEvent": "",
        "currentConsumedNow": 0,
        "pricePerHour": 0,
        "state": "",
        "createdAt": "",
        "updatedAt": "",
        "usersThingId": "",
        "diffTime": 0,
        "minutes": 0,
        "status": false,
        "isOperative": false,
        "ifExist": null,
        "stepCheckEve": 1
    },
    valuePerhour: 0,
    chargeDetail: {
        "amount": "",
        "horaOn": `${timeObj.start}`,
        "horaOff": `${timeObj.finish}`,
        "chargingHours": 1,
        "userId": "",  //Email
        "idEve": "",
        "glosa": "",
        "token": "",
        "urlForm": "#",
        "status": "",
        "buyOrder": "",
        // "typePay": "",
        // "numCuotas": "",
        // "card": "",
        // "_typePay": "",
        // "_numCuotas": "",
        // "_card": "",
        // "_step": 0,
        // "_apiError": false,
        // "_msg": ""
    },
    transaction: {
        "step": 0,
        "msg": "",
        "apiError": false,
        "tbk_token": "",
        "token_ws": "",
        "accounting_date": "",
        "amount": 0,
        "buy_order": "",
        "card_number": "",
        "payment_type_code": "",
        "status": "",
        "glosa": "",
        "numCuotas": 0,
        "card": "",
        "emailWasSent": false,
    },
}

export const useStore = create(
    persist(
        (set, get) => ({
            eve: { ...INITIAL_STATE.eve },
            valuePerhour: 0,
            chargeDetail: { ...INITIAL_STATE.chargeDetail },
            transaction: { ...INITIAL_STATE.transaction },

            setState: value => set(state => ({ ...state, ...value })),
            setResumePay: async value => {
                // const newHour = addHours(currentTime, value.duration)
                // const hoursFinish = newHour.getHours() < 10 ? `0${newHour.getHours()}` : newHour.getHours();
                // const minutesFinish = newHour.getMinutes() < 10 ? `0${newHour.getMinutes()}` : newHour.getMinutes();
                const timeObj = getRealTime(value.duration)
                const chargeDetailPrevious = get().chargeDetail
                const evePrevious = get().eve
                const idEve = get().eve.id

                set(state => (
                    {
                        // ...state,
                        chargeDetail: {
                            ...chargeDetailPrevious,
                            ...value,
                            "idEve": idEve,
                            "amount": parseInt(evePrevious.pricePerHour) * parseInt(value.duration),
                            "chargingHours": parseInt(value.duration) * 60,
                            "horaOn": `${timeObj.start}`,
                            "horaOff": `${timeObj.finish}`,
                            "glosa": `${value.duration} hrs de carga electrica Estacionamiento ${idEve}`,
                        }
                    }
                ))
            },
            setCleanStore: async () => {
                cleanStore();
                set({ ...INITIAL_STATE });

            },
            setCleanTransaction: async () => {
                const EvePrevious = get().eve
                set({
                    ...INITIAL_STATE,
                    eve: { ...EvePrevious },

                });
            },

            clean: () => cleanStore(),
            sendEmailReceipt: async () => {
                // const chargeDetailPrevious = get().chargeDetail;
                const evePrevious = get().eve;
                const chargeDetailPrevious = get().chargeDetail;
                const transactionPrevious = get().transaction;
                const objEmail = {
                    "glosa": transactionPrevious.glosa,
                    "total": transactionPrevious.amount,
                    "order": transactionPrevious.buy_order,
                    "card": transactionPrevious.card,
                    "typePay": transactionPrevious.payment_type_code,
                    "to_email": transactionPrevious.userId,
                }

                const wasSent = await sendEmail({ ...objEmail }) || false

                console.log('wasSent>>>>> ', wasSent)

                set(state => (
                    {
                        // ...state,
                        transaction: {
                            ...transactionPrevious,
                            "emailWasSent": wasSent
                        }
                    }
                ))

            },

            getStatusEve: async idEve => {
                cleanStore();
                const hasData = await fetchEve(idEve);
                console.log('>>>getStatusEve>>>> ', hasData)

                set({
                    ...INITIAL_STATE,
                    eve: hasData ? { ...hasData, ifExist: true } : { ...INITIAL_STATE.eve, ifExist: false },
                });

            },
            getWPStart: async () => {
                const chargeDetailPrevious = get().chargeDetail;
                const fetchWP = await fetchWPStart({ ...chargeDetailPrevious });

                set({
                    chargeDetail: {
                        ...chargeDetailPrevious,
                        ...fetchWP
                    }
                });
            },
            getWPStatus: async (token) => {
                console.log("token recibido ", token)
                const transactionPrevious = get().transaction;
                const fetchWP = await fetchWPStatus(token);

                set({
                    transaction: {
                        ...transactionPrevious,
                        ...fetchWP
                    }
                });
            },
            getWPCommit: async (token) => {
                const chargeDetailPrevious = get().chargeDetail;
                const fetchWP = await fetchWPCommit(token);

                set({
                    chargeDetail: {
                        ...chargeDetailPrevious,
                        ...fetchWP
                    }
                });
            },

        }),
        {
            name: 'eve', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage),
        }

    )
)

export default useStore;