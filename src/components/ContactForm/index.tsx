import React from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAll,
  nameSet,
  emailSet,
  subjectSet,
  messageSet,
  selectMessage,
} from "../../app/contactFormSlice";
import classNames from "./ContactForm.module.scss";

function ContactForm(): JSX.Element {
  const dispatch = useDispatch();
  const msg = useSelector(selectMessage);

  const formSubmit = () => {
    let formData = new FormData();
    formData.append("entry.1534649597", msg.name);
    formData.append("entry.1564222794", msg.email);
    formData.append("entry.1034811362", msg.subject);
    formData.append("entry.1182816775", msg.message);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post(
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLSeQnSMoNuU80uKBYG-7wYyeAnSRQsQVukwxJKX0f-M6vS1oQg/formResponse",
        formData,
        config
      )
      .then((response) => {})
      .catch((error) => {})
      .finally(() => {
        toast.success("Message Send!");
        dispatch(clearAll());
      });
  };

  const validate = (onValidate) => {
    switch (false) {
      case Boolean(msg.name):
        toast.error("Name is Required!");
        break;
      case Boolean(msg.email):
        toast.error("Email is Required!");
        break;
      case Boolean(
        msg.email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ):
        toast.error("Invalid Mail Id!");
        break;
      case Boolean(msg.subject):
        toast.error("Subject is Required!");
        break;
      case Boolean(msg.message):
        toast.error("Message is Required!");
        break;
      default:
        onValidate();
        break;
    }
  };

  return (
    <form
      className={classNames.contactForm}
      onSubmit={(e) => {
        e.preventDefault();
        validate(formSubmit);
      }}
    >
      <input
        type="text"
        className={classNames.inpHalf}
        placeholder="YOUR NAME"
        value={msg.name}
        onChange={(e) => dispatch(nameSet(e.target.value))}
      />
      <input
        type="text"
        className={classNames.inpHalf}
        placeholder="YOUR EMAIL"
        value={msg.email}
        onChange={(e) => dispatch(emailSet(e.target.value))}
      />
      <input
        type="text"
        className={classNames.inpFull}
        placeholder="SUBJECT"
        value={msg.subject}
        onChange={(e) => dispatch(subjectSet(e.target.value))}
      />
      <textarea
        className={classNames.inpTextArea}
        placeholder="YOUR MESSAGE"
        rows={7}
        value={msg.message}
        onChange={(e) => dispatch(messageSet(e.target.value))}
      ></textarea>
      <label className={`link ${classNames.button}`}>
        <input
          type="submit"
          value="SEND MESSAGE"
          className={classNames.btnText}
        />
        <div className={classNames.btnIcon}>
          <Image
            src="/assets/icons/download.png"
            alt=""
            width={256}
            height={256}
            layout="responsive"
          />
        </div>
      </label>
    </form>
  );
}

export default ContactForm;
