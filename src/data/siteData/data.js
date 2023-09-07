import { logo_header } from "./importImages";
import { search_icon } from "./importIcons";
import { routerLinks } from "./routerLinks";

export const siteData = {
  header: {
    logoBar: {
      logoUrl: logo_header,
      altLogoHeader: "logo company",
    },
    navBar:[
      {id: 1, name: "Classess", linkUrl: routerLinks.classesspage.link},
      {id: 2, name: "Timetable", linkUrl: routerLinks.timetablepage.link},
      {id: 3, name: "Clubs", linkUrl: routerLinks.clubspage.link},
      {id: 4, name: "Nutrition", linkUrl: routerLinks.nutritionpage.link},
      {id: 5, name: "Free Trial", linkUrl: routerLinks.freetrialpage.link}
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
    }
  },
}