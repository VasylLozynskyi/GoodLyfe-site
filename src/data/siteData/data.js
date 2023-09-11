import { logo_header } from "./importImages";
import { search_icon } from "./importIcons";
import { routerLinks } from "./routerLinks";

export const siteData = {
  header: {
    logoBar: {
      logoUrl: logo_header,
      altLogoHeader: "logo company",
    },
    navBar: [
      { id: 1, name: "Classess", linkUrl: routerLinks.classesspage.link },
      { id: 2, name: "Timetable", linkUrl: routerLinks.timetablepage.link },
      { id: 3, name: "Clubs", linkUrl: routerLinks.clubspage.link },
      { id: 4, name: "Nutrition", linkUrl: routerLinks.nutritionpage.link },
      { id: 5, name: "Free Trial", linkUrl: routerLinks.freetrialpage.link },
    ],
    searchBar: {
      name: "Search",
      iconUrl: search_icon,
    },
    searchInputBar: {
      namePlaceHolder: "search",
      name: "Search",
      typeBtn: "3",
    },
    loginBtnBar: {
      name: "Login",
      typeBtn: "2",
    },
  },
  homePage: {
    heroSliderBlock: {
      titleStart: "Welcome to Good",
      spanTitle: "lyfe",
      titleEnd: "Gyms",
      button: {
        name: "See the benefits",
        typeBtn: "1",
      },
    },
    meetyournewbodyblock: {
      title: "Meet your new body",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec felis. Sed id egestasegestas risus, ut imperdiet augue.",
      button:{
        name: "View the FAQ",
        typeBtn: "2",
      },
    },
    slidingpanelblock: {
      title: "Become more than you are.",
      subTitle: "Staying active is great fun and keeps you healthy. Check out how you can join in.",
      button:{
        name: "Let's do it!",
        typeBtn: "1",
      }
    },
  },
};
