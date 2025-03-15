import React, { useState, useEffect, useRef, useReducer } from "react";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import emailjs, { init } from "emailjs-com";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
// import {DatePicker} from "@nextui-org/date-picker";
// import {DatePicker} from "@nextui-org/react";
// import {parseDate, getLocalTimeZone} from "@internationalized/date";
// import {useDateFormatter} from "@react-aria/i18n";
import DatePicker from 'react-date-picker';

import { SliceFactory } from "../../../../common/Containers";
import { SampleContainer, PageContainer, ButtonContainer, SectionContainer, FormContainer } from "../default/defaultStyles";

import { createEnroll } from "../../../../../services/enroll.services"



import { Amplify } from "aws-amplify";
// import { config } from "../../../../../utils/config";
Amplify.configure({ "aws_project_region": "us-east-2",
  "aws_appsync_graphqlEndpoint": "https://m2hmnszh4je2rk3mdemcrudxw4.appsync-api.us-east-2.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-2",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-ccnqqjpecvc33ijvwiphn2gjku",
  "aws_cognito_identity_pool_id": "us-east-2:70055e20-cfe6-4cef-9b1c-4a0649c450d5",
  "aws_cognito_region": "us-east-2",
  "aws_user_pools_id": "us-east-2_RnbT7nPr9",
  "aws_user_pools_web_client_id": "3c7425phukqjelo0mt3833h6kj",
  "oauth": {
      "domain": "apiclientsbb306568-bb306568-prod.auth.us-east-2.amazoncognito.com",
      "scope": [
          "phone",
          "email",
          "openid",
          "profile",
          "aws.cognito.signin.user.admin"
      ],
      "redirectSignIn": "http://localhost:5173/",
      "redirectSignOut": "http://localhost:5173/",
      "responseType": "code"
  },
  "federationTarget": "COGNITO_USER_POOLS",
  "aws_cognito_username_attributes": [],
  "aws_cognito_social_providers": [
      "GOOGLE"
  ],
  "aws_cognito_signup_attributes": [
      "EMAIL"
  ],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [
      "SMS"
  ],
  "aws_cognito_password_protection_settings": {
      "passwordPolicyMinLength": 8,
      "passwordPolicyCharacters": []
  },
  "aws_cognito_verification_mechanisms": [
      "EMAIL"
  ]
});
const SERVICE = "service_1ufc0ju";  // welcome@mini..
const TEMPLATE = "template_az151im";
init("PIMyrgWnw02fMs0zj");

function transformDate(isoDate) {
  const date = new Date(isoDate);
  
  const day = date.getUTCDate().toString().padStart(2, '0');
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

// function convertirFecha(fechaString) {
//   // Asumimos que la fecha viene en formato "dd/mm/yyyy"
//   console.log("---fechaString--", fechaString)
  
//   const [day, month, year] = fechaString.split('/');
  
//   // Creamos una nueva fecha en formato "yyyy-mm-dd"
//   return new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
// }

function calcularEdad(fechaNacimiento) {
  // Parseamos la fecha de nacimiento
  const nacimiento = new Date(fechaNacimiento);
  
  // Obtenemos la fecha actual
  const hoy = new Date();
  // window && window.console.log("hoy=", hoy, " nacimiento=", nacimiento);
  // window && window.console.log("---edad---", edad, " hoy=", hoy.getFullYear(), " nacimiento=", nacimiento.getFullYear());
  
  // Calculamos la diferencia en años
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  
  // window && window.console.log("---edad---", edad, " hoy=", hoy.getFullYear(), " nacimiento=", nacimiento.getFullYear());
    
  
  // Ajustamos la edad si aún no ha llegado el cumpleaños este año
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  
  return edad;
}

// function calcularEdad(fechaNacimientoString) {
//   const fechaNacimiento = convertirFecha(fechaNacimientoString);
  
//   console.log("---fechaNacimiento--", fechaNacimiento)
  
//   const hoy = new Date();
//   let años = hoy.getFullYear() - fechaNacimiento.getFullYear();
//   let meses = hoy.getMonth() - fechaNacimiento.getMonth();

//   if (meses < 0 || (meses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
//     años--;
//     meses += 12;
//   }

//   meses = meses % 12;

//   return { años, meses };
// }

const Base = slice => {
  const [date, setDate] = React.useState(null);
  const [years, setYears] = React.useState("");
  const { title, subtitle, email, birthday, name, address, phone, profession, studyinthearea, medicalhistory, emergencycontact } = slice.primary;
  const [isSentEmail, setIsSentEmail] = useState({
    sentEmail: false,
    isFailure: false,
    title: "Página no encontrada 😭",
    text: "No encontramos la página solicitada ",
  });
  const [emailValue, setEmailValue] = useState("");

  const {
    register,
    control,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm();

  
  // function edad(dateChild) { return calcularEdad(dateChild)}
  
  const handleChange = (dateChange) => {
    if (!dateChange) {
      setDate(null);
      setYears("");
      setValue("birthday", null);
      return;
    }
    
    try {
      const date = new Date(dateChange);
      if (isNaN(date.getTime())) {
        throw new Error('Fecha inválida');
      }
      
      const newDate = transformDate(date);
      const getBirthday = calcularEdad(dateChange);
      
      setValue("birthday", dateChange, {
        shouldDirty: true
      });
      setDate(dateChange);
      setYears(getBirthday);
    } catch (error) {
      console.error('Error al procesar la fecha:', error);
      setDate(null);
      setYears("");
    }
  };
  
  const onSubmit = async (data) => {
    await handlerAddNewEnroll(data);
    setIsSentEmail({
      sentEmail: true,
      isFailure: false,
      title: "Registro ingresado 🎉",
      text: "Te enviamos un email, responde y adjunta tu comprobante de pago para finalizar el proceso",
    });

    const templateParams = {
      // reply_to: "hola@miniswimmer.cl",
      from_name: data.name,
      reply_to: data.email,
      to_name: data.name,
      to_email: data.email,
      to_birthday: date,
      to_years: years,
      to_address: data.address,
      to_phone: data.phone,
      to_profession: data.profession,
      to_studyinthearea: data.studyinthearea,
      to_medicalhistory: data.medicalhistory,
      to_emergencycontact: data.emergencycontact,
    };





    // emailjs.send(SERVICE, TEMPLATE, { ...templateParams }).then(
    emailjs.send(SERVICE, TEMPLATE, templateParams).then(
      function (response) {
        setIsSentEmail({
          sentEmail: true,
          isFailure: false,
          title: "Registro ingresado 🎉",
          text: "Te enviamos un email, responde y adjunta tu comprobante de pago para finalizar el proceso",
          response: response || "",
        });
      },
      function (error) {
        setIsSentEmail({
          sentEmail: true,
          isFailure: true,
          title: "Página no encontrada 😭",
          text: "No encontramos la página solicitada ",
          response: response || '',
        });
        console.log("FAILED...", error);
      }
    ).catch(err => setIsSentEmail({
      sentEmail: true,
      isFailure: true,
      title: "Página no encontrada 😭",
      text: "No encontramos la página solicitada ",
      response: response || '',
    })
    );

    
    
  }
  
  const handlerAddNewEnroll = async (data) => await createEnroll({
    // ...data,
    birthdate: date ? new Date(date).toISOString() : null,
    years: years,
    address: data.address,
    phone: data.phone,
    urlImage:"",
    profession: data.profession,
    studiesRelated: data.studyinthearea,
    medicalHistory: data.medicalhistory,
    emergencyContact: data.emergencycontact,
    isPaid: false,
    isSponsored: false,
    status: "WEB_FORM_ENTRY",
    presence: "HYBRID",
    name: data?.name,
    email: data?.email,
  })
  
  
  
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

 
  return (
    <>
      <PageContainer bgColor={"white"}>
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
                  {"Ir al home"}
                </ButtonContainer>
              </Link>
            </SectionContainer>
          </>


        ) : (

          <SectionContainer>
            {/* {console.log('>>>>contact>>>', slice)} */}

            <FormContainer noValidate onSubmit={handleSubmit(onSubmit)}>
{/* <pre>{JSON.stringify(slice.primary, null, 2)}</pre> */}
              <h2>{title[0].text || ""}</h2>
              <p>
                {subtitle && subtitle[0].text ||
                  ""}
              </p>

              {/* --------  NAME --------- */}
              <label htmlFor="name">
                {name || ""}
              </label>
              <input
                {...register("name", {
                  required: true,
                  minLength: 2,
                })}
                type="text"
                name="name"
                id="name"
                className={errors.name && "error"}
              />
              <span className="error">
                {errors.name && "Campo obligatorio"}
              </span>

              {/* --------  EMAIl --------- */}
              <label htmlFor="email">
                {email || ""}
              </label>
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
                value={emailValue}
                onChange={(e) => emailValidation(e, errors)}
                className={errors.email && "error"}
              />
              <span className="error">
                {errors.email && "Campo obligatorio"}
              </span>
              
              {/* --------  FECHA DE NACIMIENTO  --------- */}
              <label htmlFor="birthday">
                {birthday || ""}
              </label>
              {/* <pre>{JSON.stringify(date, null, 2 )}</pre> */}
              <SampleContainer>
              <div className="Sample__container__content">
                <DatePicker 
                 calendarAriaLabel="Toggle calendar"
                 clearAriaLabel="Clear value"
                 dayAriaLabel="Day"
                 monthAriaLabel="Month"
                 nativeInputAriaLabel="Date"
                 
                 yearAriaLabel="Year"
                 
                // onChange={setDate} 
                onChange={handleChange} 
                value={date} 
                />
                <span 
                id="years"
                  className="date"
                >{years} años</span>
              </div>
              </SampleContainer>
              {/* <Controller
                name="dateOfBirth"
                control={control}
                defaultValue={date}
                render={() => (
                  


              <DatePicker 
                label="Birth date" 
                className="max-w-[284px]" 
                isRequired
                value={date} 
                onChange={setDate} 
              />
                )}
              /> */}
        
        

              {/* <div className="dateText">
                <span style={{
                        height: "48px",
                        width: "40 !important",
                        border: "1px solid rgba(0,17,51,0.15)",
                        borderRadius: "6px",
                        // padding: "13px",
                        padding: "0px",
                        margin: "0px",
                        color: "rgba(0,17,51,0.8)",
                        fontFamily: "Quicksand,sans-serif",
                        fontWeight: "400",
                        fontSize: "14px",
                  }}>
                  <TuiDatePicker
                      // handleChange={handleChange}
                      // {...register("birthday", {
                      //   required: true,
                      //   required: true,
                      //   minLength: 8,
                      // })}
                      date={new Date('1980-01-01')}
                      // inputWidth={120}
                      fontSize={16}
                      options={options}
                      // className={errors.email && "error"}
                      
                     
                  />
                  
                </span> 
                {/* <input
                  {...register("birthday", {
                    required: true,
                    required: true,
                    minLength: 8,
                  })}
                  type="birthday"
                  name="birthday"
                  id="birthday"
                  className={errors.birthday && "error"}
                /> 
                 
              </div> */}
              {/* <span className="error">
                {errors.birthday && "Campo obligatorio"}
              </span> */}

              
              {/* --------  ADDRESS  --------- */}
              <label htmlFor="address">
                {address || ""}
              </label>
              <input
                {...register("address", {
                  required: true,
                  required: true,
                  minLength: 6,
                })}
                type="address"
                name="address"
                id="address"
                // value={emailValue}
                // onChange={(e) => emailValidation(e, errors)}
                className={errors.address && "error"}
              />
              <span className="error">
                {errors.address && "Campo obligatorio"}
              </span>


              {/* --------  TELEFONO  --------- */}
              <label htmlFor="phone">
                {phone || ""}
              </label>
              <input
                {...register("phone", {
                  required: true,
                  required: true,
                  minLength: 9,
                })}
                type="phone"
                name="phone"
                id="phone"
                // value={emailValue}
                // onChange={(e) => emailValidation(e, errors)}
                className={errors.phone && "error"}
              />
              <span className="error">
                {errors.phone && "Campo obligatorio"}
              </span>

              
              {/* --------  PROFESION  --------- */}
              <label htmlFor="profession">
                {profession || ""}
              </label>
              <input
                {...register("profession", {
                  required: true,
                  required: true,
                  minLength: 3,
                })}
                type="profession"
                name="profession"
                id="profession"
                // value={emailValue}
                // onChange={(e) => emailValidation(e, errors)}
                className={errors.profession && "error"}
              />
              <span className="error">
                {errors.profession && "Campo obligatorio"}
              </span>
          
              
              {/* --------  ESTUDIOS EN EL AREA  --------- */}
              <label htmlFor="studyinthearea">
                {studyinthearea || ""}
              </label>
              <input
                {...register("studyinthearea", {
                  required: true,
                  required: true,
                  minLength: 2,
                })}
                type="studyinthearea"
                name="studyinthearea"
                id="studyinthearea"
                // value={emailValue}
                // onChange={(e) => emailValidation(e, errors)}
                className={errors.studyinthearea && "error"}
              />
              <span className="error">
                {errors.studyinthearea && "Campo obligatorio"}
              </span>


              {/* --------  Antecedentes médicos que mencionar  --------- */}
              <label htmlFor="medicalhistory">
                {medicalhistory || ""}
              </label>
              <input
                {...register("medicalhistory", {
                  required: true,
                  required: true,
                  minLength: 2,
                })}
                type="medicalhistory"
                name="medicalhistory"
                id="medicalhistory"
                // value={emailValue}
                // onChange={(e) => emailValidation(e, errors)}
                className={errors.medicalhistory && "error"}
              />
              <span className="error">
                {errors.medicalhistory && "Campo obligatorio"}
              </span>

              
              {/* --------  Antecedentes médicos que mencionar  --------- */}
              <label htmlFor="medicalhistory">
                {emergencycontact || ""}
              </label>
              <input
                {...register("emergencycontact", {
                  required: true,
                  required: true,
                  minLength: 2,
                })}
                type="emergencycontact"
                name="emergencycontact"
                id="emergencycontact"
                // value={emailValue}
                // onChange={(e) => emailValidation(e, errors)}
                className={errors.emergencycontact && "error"}
              />
              <span className="error">
                {errors.emergencycontact && "Campo obligatorio"}
              </span>




              <input
                type="submit"
                name="Contact Us"
                value="Enviar Inscripción"
              // value={contactCtaText[0].text || "Contact us"}
              />

            </FormContainer>

          </SectionContainer>
        )}
      </PageContainer >
    </>
  );
};

export const Enroll = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "#FFFFFF",
    }
  }
});
