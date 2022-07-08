import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export const ShareSocial = [
  {
    component: EmailShareButton,
    label: "Email",
    icon: EmailIcon,
  },
  {
    component: TwitterShareButton,
    label: "Twitter",
    icon: TwitterIcon,
  },
  {
    component: LinkedinShareButton,
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    component: WhatsappShareButton,
    label: "WhatsApp",
    icon: WhatsappIcon,
  },
];
