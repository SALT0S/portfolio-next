import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export const ShareSocial = [
  {
    component: FacebookShareButton,
    label: "Facebook",
    icon: FacebookIcon,
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
