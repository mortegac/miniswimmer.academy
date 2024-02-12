import React, { useState, useEffect, useMemo, useRef, useReducer } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import emailjs, { init } from "emailjs-com";

import { SliceFactory } from "../../../../common/Containers";
import {
  Container, TableContainer, TableHeader, ModalContainer, PageContainer, ButtonContainer, SectionContainer, FormContainer, IconContainer, IconList, ButtonBox,
  Tooltip
} from "../cotizarForm/indexStyles";




import { Amplify } from "aws-amplify";
// import { config } from "../../../../../utils/config";
Amplify.configure({
  "aws_project_region": "us-east-2",
  "aws_appsync_graphqlEndpoint": "https://vqopb4otsvfwnpnpbyb4htnayq.appsync-api.us-east-2.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-2",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-rwnq3acc5nfxngzrrpef6exb4e",
  "aws_cognito_identity_pool_id": "us-east-2:02401fe2-b21c-446f-ac98-4b4232943f12",
  "aws_cognito_region": "us-east-2",
  "aws_user_pools_id": "us-east-2_Lt6ymzNhR",
  "aws_user_pools_web_client_id": "7f2033ie70bdv5u1gl69vldu23",
  "oauth": {},
  "aws_cognito_username_attributes": [
    "EMAIL"
  ],
  "aws_cognito_social_providers": [],
  "aws_cognito_signup_attributes": [
    "EMAIL"
  ],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [
    "SMS"
  ],
  "aws_cognito_password_protection_settings": {
    "passwordPolicyMinLength": "8",
    "passwordPolicyCharacters": []
  },
  "aws_cognito_verification_mechanisms": [
    "EMAIL"
  ],
  "aws_user_files_s3_bucket": "greta-rutas225909-production",
  "aws_user_files_s3_bucket_region": "us-east-2"
});
// Amplify.configure({
//   "aws_project_region": "us-east-2",
//   "aws_appsync_graphqlEndpoint": "https://kcju7rbzdvh3flyya2dhuivtam.appsync-api.us-east-2.amazonaws.com/graphql",
//   "aws_appsync_region": "us-east-2",
//   "aws_appsync_authenticationType": "API_KEY",
//   "aws_appsync_apiKey": "da2-lche7ds5kzdhrie6ktlseu6juu",
//   "aws_cognito_identity_pool_id": "us-east-2:d835f3e3-9c72-4e1b-b2ec-5b651ed5d5ea",
//   "aws_cognito_region": "us-east-2",
//   "aws_user_pools_id": "us-east-2_xje9uxuka",
//   "aws_user_pools_web_client_id": "7ms16i5om62sm60sp5va7oe5qc",
//   "oauth": {},
//   "aws_cognito_username_attributes": [
//     "EMAIL"
//   ],
//   "aws_cognito_social_providers": [],
//   "aws_cognito_signup_attributes": [
//     "EMAIL"
//   ],
//   "aws_cognito_mfa_configuration": "OFF",
//   "aws_cognito_mfa_types": [
//     "SMS"
//   ],
//   "aws_cognito_password_protection_settings": {
//     "passwordPolicyMinLength": "8",
//     "passwordPolicyCharacters": []
//   },
//   "aws_cognito_verification_mechanisms": [
//     "EMAIL"
//   ],
//   "aws_user_files_s3_bucket": "greta-rutas215605-prod",
//   "aws_user_files_s3_bucket_region": "us-east-2"
// });
// Amplify.configure({
//   aws_project_region: "us-east-2",
//   aws_appsync_graphqlEndpoint:
//     "https://gwgcqfoeefejhfysdbjd7qamiq.appsync-api.us-east-2.amazonaws.com/graphql",
//   aws_appsync_region: "us-east-2",
//   aws_appsync_authenticationType: "API_KEY",
//   aws_appsync_apiKey: "da2-esq2ljzb2zcoheoj63klt255ii",
//   aws_cognito_identity_pool_id:
//     "us-east-2:82973723-518e-4cf4-9ded-58c8ada24c4b",
//   aws_cognito_region: "us-east-2",
//   aws_user_pools_id: "us-east-2_lIMGxQVOJ",
//   aws_user_pools_web_client_id: "2bhg4fmmas2j5v32jrps3397d5",
//   oauth: {},
//   aws_cognito_username_attributes: ["EMAIL"],
//   aws_cognito_social_providers: [],
//   aws_cognito_signup_attributes: ["EMAIL"],
//   aws_cognito_mfa_configuration: "OFF",
//   aws_cognito_mfa_types: ["SMS"],
//   aws_cognito_password_protection_settings: {
//     passwordPolicyMinLength: 8,
//     passwordPolicyCharacters: [
//       "REQUIRES_LOWERCASE",
//       "REQUIRES_UPPERCASE",
//       "REQUIRES_NUMBERS",
//       "REQUIRES_SYMBOLS",
//     ],
//   },
//   aws_cognito_verification_mechanisms: ["EMAIL"],
//   aws_user_files_s3_bucket: "greta-rutas45816-desarrollo",
//   aws_user_files_s3_bucket_region: "us-east-2",
// });

import { fetchBudgets, createBudget, createType } from "../../../../../services/budget.services"

// console, log(">>>>>> Amplify", Amplify)

const typeOfNameVehicle = {
  // eslint-disable-next-line no-useless-computed-key
  [""]: "",
  ["bus"]: "Bus",
  ["minibus"]: "MiniBus",
  ["taxibus"]: "TaxiBus",
  ["passengervan"]: "Van Pasajeros",
  ["suv"]: "SUV",
  ["sedancar"]: "Sedan",
  ["cargovan"]: "Van Carga",
  ["cargoutility"]: "Utilitario carga",
  ["truck"]: "Camioneta",
  ["truckless3500"]: "Camión -3500 KG",
  ["truckmore3500"]: "Camión +3500 KG",
  ["tractortruck"]: "Tracto camión",
};


const calculateCurrentDate = () => {

  // const date = new Date();
  const date = new Date(Date.now()).toString();
  const year = new Date(Date.now()).getFullYear();
  const month = new Date(Date.now()).getMonth() + 1;
  const day = new Date(Date.now()).getDate().toString();
  const hour = new Date(Date.now()).getHours();
  const minutes = new Date(Date.now()).getMinutes();

  return {
    now: date,
    day: Number(day) < 10 ? '0' + day?.toString() : day?.toString(),
    month: month < 10 ? '0' + month?.toString() : month?.toString(),
    year: year?.toString(),
    hourFull: `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`,
    hour: hour < 10 ? '0' + hour : hour,
    minutes: minutes < 10 ? '0' + minutes : minutes,
  }
}

// import "./styleTable.css";
const SERVICE = "service_0geks8p";    //plataforma.proyectos.verdes
const TEMPLATE = "template_6j234ia";  //Template cotizar-greta
init("uiMeiBfjZSOF3Ep1K");


const ContentBase = ({ slice, setBudget, budget, modal, setModal, setReloadAPI, reloadAPI, cleanStorage }) => {
  const nowObj = calculateCurrentDate();
  const { title, subtitle, email, message, name } = slice.primary;
  const [data, setData] = useState([]);
  const [emailValue, setEmailValue] = useState("");
  const [isSentEmail, setIsSentEmail] = useState({
    sentEmail: false,
    isFailure: false,
    title: "Información enviada 🥳",
    text: "Procesaremos su información y no pondremos en contacto",
  });



  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (form) => {
    setIsSentEmail({
      sentEmail: true,
      isFailure: false,
      title: "Espera por un momento ⌛",
      text: "Estamos enviando su solicitud.",
    });

    const dataTableHTMl = data?.items?.map((item) => `<tr><th style="border: 1px solid #3FBB49;">${typeOfNameVehicle[item.type]}</th><th style="border: 1px solid #3FBB49;">${item.amount}</th><th style="border: 1px solid #3FBB49;">${item.anualSpent} CLP</th><th style="border: 1px solid #3FBB49;">${item.averageDistance} Kms</th><th style="border: 1px solid #3FBB49;">${item.dayDetention} Hrs</th><th style="border: 1px solid #3FBB49;">${item.nightDetention} Hrs</th></tr>`)
    const tableHTML = `
  <table style="width:100%;">
    <tr>
      <th style="background: #3FBB49; color: white;">Vehículo</th>
      <th style="background: #3FBB49; color: white;">Cantidad</th>
      <th style="background: #3FBB49; color: white;">Gasto Anual</th>
      <th style="background: #3FBB49; color: white;">Distancia Promedio</th>
      <th style="background: #3FBB49; color: white;">Detención Diurno</th>
      <th style="background: #3FBB49; color: white;">Detención Nocturno</th>
    </tr>${dataTableHTMl}
  </table>
`;

    const templateParams = {
      from_name: budget.n,
      to_email: budget.e,
      to_id: budget.s,
      table: tableHTML,
      to_name: budget.n,
      message: JSON.stringify(data.items),  // ARRAY DE TIPOS DE VEHICULOS
      reply_to: budget.e,
    };

    emailjs.send(SERVICE, TEMPLATE, { ...templateParams }).then(
      // emailjs.send("service_1ufc0ju", "template_vk47fc7", templateParams).then(
      function (response) {
        setIsSentEmail({
          sentEmail: true,
          isFailure: false,
          title: "Gracias 🎉",
          text: "Nos pondremos en contacto lo antes posible.",
          response: response && "",
        });
      },
      function (error) {
        setIsSentEmail({
          sentEmail: true,
          isFailure: true,
          title: "Página no encontrada 😭",
          text: "Parece que no podemos encontrar la página que estás buscando.",
          response: response && '',
        });
        console.log("FAILED...", error);
      }
    ).catch(err => setIsSentEmail({
      sentEmail: true,
      isFailure: true,
      title: "Página no encontrada 😭",
      text: "Parece que no podemos encontrar la página que estás buscando.",
      response: response && '',
    })
    );



  }
  const emailValidation = (e, errors) => {
    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        e.target.value
      );
    setEmailValue(e.target.value);
    if (emailPattern) {
      delete errors?.email;
    } else {
    }
  };


  async function setStorage({ s, n, e }) {
    // !budget.s &&
    localStorage.setItem('budget', JSON.stringify({
      s,
      n,
      e,
    }));
  }



  const handlerAddNewCar = async (e) => {
    e.preventDefault();


    const values = getValues();
    window.console.log(">>>>>values   ", values)
    window.console.log(">>>>>isValid   ", isValid)

    if (budget.s === "") {


      const response = await createBudget({
        name: values.firstname,
        email: values.email,
        date: nowObj.now,
        day: nowObj.day,
        month: nowObj.month,
        year: nowObj.year
      })

      setStorage({
        s: response?.data?.createBudgetProject?.id || "",
        n: response?.data?.createBudgetProject?.name || "",
        e: response?.data?.createBudgetProject?.email || ""
      })
      setData({
        s: response?.data?.createBudgetProject?.id || "",
        n: response?.data?.createBudgetProject?.name || "",
        e: response?.data?.createBudgetProject?.email || ""
      })

    }

    // window.console.log(">>>>>response   ", s, n, e)
    setModal(!modal);
    // }


  }


  async function fetchAPI(idBudget) {
    let response = idBudget && await fetchBudgets(idBudget)
    const items = response?.typeOfVehicle?.items || [];
    setData({ items: [...items], name: response.name, email: response.email })
    window.console.log(">>> response >>", response)
  }


  useEffect(() => {
    fetchAPI(budget.s);
    return () => { };
  }, [budget.s]);

  useEffect(() => {
    fetchAPI(budget.s);
    setReloadAPI(false)
    return () => { };
  }, [reloadAPI]);



  return (
    <>
      {isSentEmail.sentEmail ? (
        <>
          <SectionContainer>
            <h2>{isSentEmail.title}</h2>
            <p> {isSentEmail.text}</p>
            <Link
              key={`top-nav-contactButton`}
              href={"/"}
              passHref
              prefetch
            >
              <ButtonContainer fullwidth={true}>
                {"Ir a la página de inicio"}
              </ButtonContainer>
            </Link>
          </SectionContainer>
        </>


      ) : (

        <SectionContainer>


          {/* {console.log('>>>>contact>>>', slice)} */}
          {/* <pre>{JSON.stringify(budget, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(data.items, null, 2)}</pre> */}
          <FormContainer noValidate onSubmit={handleSubmit(onSubmit)}>

            {/* <h2>{budget.id}</h2> */}
            <h3>{"Levantamiento preliminar de información"}</h3>

            <p>
              {subtitle[0].text || ""}
            </p>

            {/* --------  NAME --------- */}
            <div className="box-input" style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <label htmlFor="firstname" >
                {name[0].text || "Nombre"}
              </label>
              {budget.s !== "" ? <h2 className="textInput">{budget.n}</h2>
                :
                <>
                  <input
                    {...register("firstname", {
                      required: true,
                      minLength: 2,
                    })}
                    type="text"
                    name="firstname"
                    id="firstname"
                    className={`${errors.firstname && "error"}`}
                  />
                  <span style={{ color: "red", margin: 0, fontSize: 14 }}>
                    {errors.firstname && "Por favor ingrese su nombre"}
                  </span>
                </>
              }
            </div>
            {/* --------  EMAIl --------- */}

            <br />
            <div className="box-input" style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <label htmlFor="email" style={{ marginTop: "14px" }}>
                {email[0].text || "Email"}
              </label>
              {budget.s !== "" ? <h2 className="textInput">{budget.e}</h2>
                :
                <>
                  <input
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                      minLenght: {
                        value: 2,
                      },
                    })}
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => emailValidation(e, errors)}
                    className={` ${errors.email && "error"}`}
                  />
                  <span style={{ color: "red", margin: 0, fontSize: 14 }}>
                    {errors.email && "Por favor ingrese su email"}
                  </span>
                </>
              }
            </div>
            <TableHeader>
              <span className='rg-dek'>Listado de Vehículos ingresados.</span>
              <button className="bottomModal" onClick={e => handlerAddNewCar(e)}

              > Nuevo tipo de vehículo</button>




            </TableHeader>
            <TableContainer>
              <table className='rg-table' summary='Hed'>
                {/* <caption className='rg-header'>
                  </caption> */}
                <thead>
                  <tr>
                    <th className='text '>Vehículo</th>
                    <th className='text '>Cantidad</th>
                    <th className='number '>Gasto Anual</th>
                    <th className='number '>Distancia Promedio</th>
                    <th className='number '>Detención Diurno</th>
                    <th className='number '>Detención Nocturno</th>
                  </tr>
                </thead>
                <tbody>

                  {Array.isArray(data.items) && data.items.length === 0 && (
                    <tr className=''>
                      <td colspan="6" className='text ' data-title='Vehículo'>😭 Sin datos ingresados</td>
                    </tr>
                  )}



                  {data?.items?.map((item, i) =>
                    <tr className=''>
                      <td className='text ' data-title='Vehículo'>{typeOfNameVehicle[item.type]}</td>
                      <td className='text ' data-title='Cantidad'>{item.amount}</td>
                      <td className='number ' data-title='Gasto Anual'>$ {item.anualSpent}</td>
                      <td className='number ' data-title='Distancia Promedio'>{item.averageDistance} kms</td>
                      <td className='number ' data-title='Detención Diurno'>{item.dayDetention} hrs</td>
                      <td className='number ' data-title='Detención Nocturno'>{item.nightDetention} hrs</td>
                    </tr>
                  )}
                </tbody>
              </table>

            </TableContainer>

            <ButtonBox>
              <button className="buttonStyle"
                // onClick={e => cleanStorage(e)}
                onClick={cleanStorage}
              > Limpiar</button>
              <input
                type="submit"
                className="buttonStyle"
                name="Contact Us"
                value="Enviar información"
              />

            </ButtonBox>
          </FormContainer>

        </SectionContainer>
      )}
    </>
  );
};



const Logo = () => {

  const memoizedLogo = useMemo(() => <picture>
    <source srcSet={"loading.gif"} media="(max-width: 500px)" />
    <source srcSet={"loading.gif"} media="(max-width: 960px)" />
    <img className="fadeIn" src={"loading.gif"} alt="Greta" />
  </picture>, []);

  return memoizedLogo;
}



const dataVehicles = [
  { id: "bus", name: "Bus", img: "ico-bus.png", width: "32", height: "25" },
  { id: "minibus", name: "MiniBus", img: "ico-minibus.png", width: "32", height: "25" },
  { id: "taxibus", name: "TaxiBus", img: "ico-taxibus.png", width: "32", height: "25" },
  { id: "passengervan", name: "Van Pasajeros", img: "ico-van.png", width: "32", height: "25" },
  { id: "suv", name: "SUV", img: "ico-sedan.png", width: "32", height: "25" },
  { id: "sedancar", name: "Sedan", img: "ico-bus.png", width: "32", height: "25" },
  { id: "cargovan", name: "Van Carga", img: "ico-van-carga.png", width: "32", height: "25" },
  { id: "cargoutility", name: "Utilitario carga", img: "ico-utilitario-carga.png", width: "32", height: "25" },
  { id: "truck", name: "Camioneta", img: "ico-camioneta.png", width: "40", height: "40" },
  { id: "truckless3500", name: "Camión -3500 KG", img: "ico-camion-menos.png", width: "32", height: "25" },
  { id: "truckmore3500", name: "Camión +3500 KG", img: "ico-tracto-camion.png", width: "32", height: "25" },
  { id: "tractortruck", name: "Tracto camión", img: "ico-camion-mas.png", width: "32", height: "25" },
]
export const Base = (slice) => {
  const [budget, setBudget] = useState({ s: "", n: "", e: "", });
  const [reloadAPI, setReloadAPI] = useState(false);
  const [vehicle, setVehicle] = useState({
    id: "bus",
    name: "Bus",
    img: "ico-bus.png",
    width: "",
    height: "",
    type: "",
    amount: 0,
    anualSpent: 0,
    averageDistance: 0,
    dayDetention: 0,
    nightDetention: 0,
    budgetProjectTypeOfVehicleId: budget?.s || "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);


  async function cleanStorage() {
    // setIsLoading(true)

    try {
      await localStorage.clear();
      window.location.replace('/cotizar');
      // setData([])
      // setBudget({})
      // reset();
      // setIsLoading(false)

    } catch (error) {
      window.console.log(">>>> error>>>> ", error)
    }
    // e.preventDefault();
  }

  async function fetchStorage() {
    // setIsLoading(true)
    const items = await JSON.parse(localStorage.getItem('budget'));
    if (items) {
      setBudget(items);
    } else { setBudget({ s: "", n: "", e: "", }); }
    setIsLoading(false)
  }

  const handlerAddType = async (e) => {
    e.preventDefault();

    const response = await createType({
      type: vehicle.id,
      amount: vehicle.amount,
      anualSpent: vehicle.anualSpent,
      averageDistance: vehicle.averageDistance,
      dayDetention: vehicle.dayDetention,
      nightDetention: vehicle.nightDetention,
      budgetProjectTypeOfVehicleId: budget.s,
    })
    // setBudget({ s: budget.s, n: budget.n, e: budget.e })
    setReloadAPI(true)
    setModal(!modal);
  }


  useEffect(() => {
    budget && fetchStorage()

    return () => { };
  }, [budget]);

  return (
    <>

      {/* <pre>{JSON.stringify(budget.s)}</pre> */}
      <ModalContainer isVisible={modal === true ? "block" : "none"}>
        <label for="modal" className="modal-background"></label>

        <div className="modal">
          <div className="modal-header">
            <label for="modal">
              <button onClick={e => { setModal(!modal); }}>
                <svg xmlns="http://www.w3.org/2000/motion.svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </label>
          </div>
          <h3>Seleccione el tipo de Vehículo</h3>
          {/* <pre>{JSON.stringify(vehicle, null, 2)}</pre> */}
          <IconList>
            {dataVehicles.map((item, i) => {
              const filtered = dataVehicles.filter(item => item.id === vehicle.id);
              return (
                <>
                  {/* <span>{item.id} = {JSON.stringify(filtered[0].id)}</span> */}
                  <a onClick={() => setVehicle({ ...vehicle, ...item })}>
                    <IconContainer key={i} selected={filtered[0].id && filtered[0].id === item.id ? true : false}>
                      <img src={item.img} width={item.width} height={item.height} alt="" />
                      <span>{item.name}</span>
                    </IconContainer>
                  </a>
                </>
              )
            }
            )}
          </IconList>
          <FormContainer
            noValidate onSubmit={() => alert("sending")}
            style={{ padding: "20px" }}
          >

            <div className="box">
              <div className="boxSeparateA">

                {/* --------  NAME --------- */}
                <label htmlFor="amount">Cantidad</label>
                <div className="box-input">
                  <input
                    style={{ width: "90px" }}
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    type="text"
                    name="amount"
                    id="amount"
                    onChange={(e) => setVehicle({ ...vehicle, amount: e.target.value })}
                  />
                </div>

                {/* --------  GASTO ANUAL --------- */}
                <div className="box-input" >
                  <Tooltip>
                    <div className="tooltip">
                      <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75 12.75C9.75 13.1642 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.1642 8.25 12.75C8.25 12.3358 8.58579 12 9 12C9.41421 12 9.75 12.3358 9.75 12.75Z" fill="#AEAEAE" />
                        <path d="M7.6875 7.21875C7.6875 6.57815 8.24186 6 9 6C9.75814 6 10.3125 6.57815 10.3125 7.21875C10.3125 7.6587 10.0584 8.06129 9.64844 8.27853C9.45204 8.3826 9.16538 8.53704 8.9195 8.77828C8.49127 9.19843 8.25 9.77315 8.25 10.3731V10.5C8.25 10.9142 8.58579 11.25 9 11.25C9.41421 11.25 9.75 10.9142 9.75 10.5V10.3731C9.75 10.1759 9.82928 9.98706 9.97001 9.849C10.0436 9.77675 10.1516 9.70946 10.3508 9.60394C11.2086 9.14938 11.8125 8.26103 11.8125 7.21875C11.8125 5.68473 10.52 4.5 9 4.5C7.47996 4.5 6.1875 5.68473 6.1875 7.21875C6.1875 7.63296 6.52329 7.96875 6.9375 7.96875C7.35171 7.96875 7.6875 7.63296 7.6875 7.21875Z" fill="#AEAEAE" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9ZM9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3Z" fill="#AEAEAE" />
                      </svg>
                      <span className="tooltip-text">
                        <span>
                          <p>Corresponde a la distancia promedio diaria recorrida por el vehículo</p>
                        </span>
                      </span>
                    </div>
                  </Tooltip>
                  <label htmlFor="averageDistance">Distancia Promedio</label>
                </div>
                <div className="box-input">
                  <input
                    style={{ width: "90px" }}
                    onKeyPress={(event) => {
                      if (!/^[0-9]*\.?[0-9]*$/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    type="text"
                    name="averageDistance"
                    id="averageDistance"
                    onChange={(e) => setVehicle({ ...vehicle, averageDistance: e.target.value })}
                  /> <span>Kms</span>
                </div>


                {/* --------  DETENCION NOCTURNO --------- */}
                <div className="box-input" style={{ visibility: 'hidden' }}>
                  <label htmlFor="nightDetention">Detención Nocturno</label>
                </div>
                <div className="box-input" style={{ visibility: 'hidden' }}>
                  <span>Hrs</span>
                </div>




              </div>
              <div className="boxSeparateA">
                {/* --------  GASTO ANUAL --------- */}
                <label htmlFor="anualSpent">Gasto anual</label>
                <div className="box-input">
                  <input
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    style={{ width: "90px" }}
                    type="text"
                    name="anualSpent"
                    id="anualSpent"
                    onChange={(e) => setVehicle({ ...vehicle, anualSpent: e.target.value })}
                  /> <span>CLP</span>
                </div>

                {/* --------  DETENCION DIURNO --------- */}
                <div className="box-input">
                  <Tooltip>
                    <div className="tooltip">
                      <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75 12.75C9.75 13.1642 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.1642 8.25 12.75C8.25 12.3358 8.58579 12 9 12C9.41421 12 9.75 12.3358 9.75 12.75Z" fill="#AEAEAE" />
                        <path d="M7.6875 7.21875C7.6875 6.57815 8.24186 6 9 6C9.75814 6 10.3125 6.57815 10.3125 7.21875C10.3125 7.6587 10.0584 8.06129 9.64844 8.27853C9.45204 8.3826 9.16538 8.53704 8.9195 8.77828C8.49127 9.19843 8.25 9.77315 8.25 10.3731V10.5C8.25 10.9142 8.58579 11.25 9 11.25C9.41421 11.25 9.75 10.9142 9.75 10.5V10.3731C9.75 10.1759 9.82928 9.98706 9.97001 9.849C10.0436 9.77675 10.1516 9.70946 10.3508 9.60394C11.2086 9.14938 11.8125 8.26103 11.8125 7.21875C11.8125 5.68473 10.52 4.5 9 4.5C7.47996 4.5 6.1875 5.68473 6.1875 7.21875C6.1875 7.63296 6.52329 7.96875 6.9375 7.96875C7.35171 7.96875 7.6875 7.63296 7.6875 7.21875Z" fill="#AEAEAE" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9ZM9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3Z" fill="#AEAEAE" />
                      </svg>
                      <span className="tooltip-text">
                        <span>
                          <p>Corresponde al tiempo promedio en que el vehículo estuvo detenido en horario nocturno</p>
                        </span>
                      </span>
                    </div>
                  </Tooltip>
                  <label htmlFor="dayDetention">Detención Diurno</label>
                </div>
                <div className="box-input">
                  <input
                    style={{ width: "90px" }}
                    onKeyPress={(event) => {
                      if (!/^[0-9]*\.?[0-9]*$/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    type="text"
                    name="dayDetention"
                    id="dayDetention"
                    onChange={(e) => setVehicle({ ...vehicle, dayDetention: e.target.value })}
                  /> <span>Hrs</span>
                </div>

                {/* --------  DETENCION NOCTURNO --------- */}
                <div className="box-input" >
                  <Tooltip>
                    <div className="tooltip">
                      <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.75 12.75C9.75 13.1642 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.1642 8.25 12.75C8.25 12.3358 8.58579 12 9 12C9.41421 12 9.75 12.3358 9.75 12.75Z" fill="#AEAEAE" />
                        <path d="M7.6875 7.21875C7.6875 6.57815 8.24186 6 9 6C9.75814 6 10.3125 6.57815 10.3125 7.21875C10.3125 7.6587 10.0584 8.06129 9.64844 8.27853C9.45204 8.3826 9.16538 8.53704 8.9195 8.77828C8.49127 9.19843 8.25 9.77315 8.25 10.3731V10.5C8.25 10.9142 8.58579 11.25 9 11.25C9.41421 11.25 9.75 10.9142 9.75 10.5V10.3731C9.75 10.1759 9.82928 9.98706 9.97001 9.849C10.0436 9.77675 10.1516 9.70946 10.3508 9.60394C11.2086 9.14938 11.8125 8.26103 11.8125 7.21875C11.8125 5.68473 10.52 4.5 9 4.5C7.47996 4.5 6.1875 5.68473 6.1875 7.21875C6.1875 7.63296 6.52329 7.96875 6.9375 7.96875C7.35171 7.96875 7.6875 7.63296 7.6875 7.21875Z" fill="#AEAEAE" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9ZM9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3Z" fill="#AEAEAE" />
                      </svg>
                      <span className="tooltip-text">
                        <span>
                          <p>Corresponde al tiempo promedio en que el vehículo estuvo detenido en horario nocturno</p>
                        </span>
                      </span>
                    </div>
                  </Tooltip>
                  <label htmlFor="nightDetention">Detención Nocturno</label>
                </div>
                <div className="box-input">
                  <input
                    style={{ width: "90px" }}
                    onKeyPress={(event) => {
                      if (!/^[0-9]*\.?[0-9]*$/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    type="text"
                    name="nightDetention"
                    id="nightDetention"
                    onChange={(e) => setVehicle({ ...vehicle, nightDetention: e.target.value })}
                  /> <span>Hrs</span>
                </div>




              </div>
              <div className="boxSeparateB">
                <button className="bottomModal-simple" onClick={e => {
                  e.preventDefault();
                  setModal(!modal);
                }}> Cancelar</button>
                <button className="bottomModal" onClick={e => handlerAddType(e)}
                > Grabar</button>
              </div>
            </div>

          </FormContainer>


        </div>

      </ModalContainer>

      <PageContainer bgColor={"white"}>
        <SectionContainer>
          <Container >
            {/* <pre>{JSON.stringify(isLoading)}</pre> */}

            {isLoading == true ? <Logo />
              :
              <>
                <ContentBase
                  budget={budget}
                  setBudget={setBudget}
                  slice={slice}
                  modal={modal}
                  setModal={setModal}
                  reloadAPI={reloadAPI}
                  setReloadAPI={setReloadAPI}
                  cleanStorage={cleanStorage}
                />
              </>}
          </Container>
        </SectionContainer>
      </PageContainer>
    </>
  );
}


export const CotizarForm = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "#F4F4F4",
    }
  }
});
