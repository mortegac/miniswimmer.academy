import React, { useState, useEffect, useRef, useReducer } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import emailjs, { init } from "emailjs-com";

import { SliceFactory } from "../../../../common/Containers";
import { PageContainer, ButtonContainer, SectionContainer, FormContainer } from "../default/defaultStyles";
import { RichText } from "prismic-reactjs";

const SERVICE = "service_1ufc0ju";
const TEMPLATE = "template_vk47fc7";
init("PIMyrgWnw02fMs0zj");

const Base = slice => {
  const { title, subtitle, email, message, name } = slice.primary;
  const [isSentEmail, setIsSentEmail] = useState({
    sentEmail: false,
    isFailure: false,
    title: "Page not found 😭",
    text: "We can't seem to find the page you're looking for ",
  });
  const [emailValue, setEmailValue] = useState("");

  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    setIsSentEmail({
      sentEmail: true,
      isFailure: false,
      title: "Please wait a moment ⌛",
      text: "We are sending your request.",
    });

    const templateParams = {
      from_name: data.firstname,
      to_email: data.email,
      to_name: data.firstname,
      message: data.message,
      reply_to: data.email,
    };





    // emailjs.send(SERVICE, TEMPLATE, { ...templateParams }).then(
    emailjs.send("service_1ufc0ju", "template_vk47fc7", templateParams).then(
      function (response) {
        setIsSentEmail({
          sentEmail: true,
          isFailure: false,
          title: "Thank you 🎉",
          text: "We'll be in touch as soon as possible.",
          response: response || "",
        });
      },
      function (error) {
        setIsSentEmail({
          sentEmail: true,
          isFailure: true,
          title: "Page not found 😭",
          text: "It looks like we can't find the page you're looking for.",
          response: response || '',
        });
        console.log("FAILED...", error);
      }
    ).catch(err => setIsSentEmail({
      sentEmail: true,
      isFailure: true,
      title: "Page not found 😭",
      text: "It looks like we can't find the page you're looking for.",
      response: response || '',
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

  return (
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
                {"Take me home"}
              </ButtonContainer>
            </Link>
          </SectionContainer>
        </>


      ) : (

        <SectionContainer>
          {/* {console.log('>>>>contact>>>', slice)} */}

          <FormContainer noValidate onSubmit={handleSubmit(onSubmit)}>

            <h2>{title[0].text || "Contactanos"}</h2>
            {/* <p>
              {subtitle && subtitle[0].text ||
                ""}
            </p> */}

            {/* --------  NAME --------- */}
            <label htmlFor="firstname">
              {name[0].text || "Name"}
            </label>
            <input
              {...register("firstname", {
                required: true,
                minLength: 2,
              })}
              type="text"
              name="firstname"
              id="firstname"
              className={errors.firstname && "error"}
            />
            <span className="error">
              {errors.firstname && "Please enter your name"}
            </span>

            {/* --------  EMAIl --------- */}
            <label htmlFor="email">
              {email[0].text || "Email"}
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
              {errors.email && "Please enter your email"}
            </span>


            {/* --------  MESSAGE --------- */}
            <label htmlFor="message">
              {message[0].text || "How can we help?"}
            </label>
            <textarea
              {...register("message", {
                required: true,
                minLength: 5,
              })}
              rows="4" cols="50"
              type="text"
              name="message"
              defaultValue=""
              id="message"
              className={errors.message && "error"}
            />
            <span className="error">
              {errors.message && "Please enter your concern"}
            </span>

            <input
              type="submit"
              name="Contact Us"
              value="Send email"
            // value={contactCtaText[0].text || "Contact us"}
            />

          </FormContainer>

        </SectionContainer>
      )}
    </PageContainer >
  );
};

export const Default = SliceFactory(Base, {
  sectionContainerProps: {
    style: {
      backgroundColor: "#FFFFFF",
    }
  }
});
