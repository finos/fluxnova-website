import LocationIcon from "/img/icons/location.svg";
import ContactUsForm from "../components/hubspot-form";
import OpenBookIcon from "/img/icons/open-book.svg";
import PeopleExchangeIcon from "/img/icons/people-exchange.svg";
import GroupsIcon from "/img/icons/groups.svg";

export const ContactUsConfig = {
  sectionOne: {
    className: "bg-primary color-white",
    image: {
      content: <LocationIcon fill="currentColor" />,
      side: "right",
    },
    elements: [
      <h1>Contact Us</h1>,
      <div>
        <ContactUsForm />
      </div>,
    ],
  },
};
