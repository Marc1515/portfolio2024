"use client";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import "./ContactComponent.scss";
import { useScrollReveal } from "../../hooks/useRevealHooks";
import { ContactTypes } from "./Types";

export const ContactComponent = ({ translations }: ContactTypes) => {
  const { contact_title, contact_intro, contact_send_btn } = translations;

  useScrollReveal(
    ".contactTittleContainer, .contactTextContainer, .contactCards__Card"
  );

  return (
    <>
      <div className="spacer layer4"></div>
      <section id="contact" className="contactSection">
        <div className="contactSectionWrapper">
          <div className="contactTittleContainer">
            <h1 className="contactTittleContainer__Title">{contact_title}</h1>
          </div>
          <div className="contactTextContainer">
            <span className="contactTitle__Text">{contact_intro}</span>
          </div>
          <div className="contactCards">
            <div className="contactCards__Card">
              <BsWhatsapp className="contactCards__Icon" />
              <span className="contactCards__IconName">WhatsApp</span>
              <span className="contactCards__Info">0451 565 137</span>
              <a
                className="contactCards__Link"
                href="whatsapp://send?phone=+61451565137"
                target="_blank"
                rel="noreferrer"
              >
                {contact_send_btn}
              </a>
            </div>

            <div className="contactCards__Card">
              <MdOutlineMail className="contactCards__Icon" />
              <span className="contactCards__IconName">Mail</span>
              <span className="contactCards__Info">meq.1515@gmail.com</span>
              <a
                className="contactCards__Link"
                href="mailto:meq.1515@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {contact_send_btn}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
