import { logo_header } from "./importImages";
import { search_icon } from "./importIcons";

export const siteData = {
  header: {
    logoBar: {
      logoUrl: logo_header,
      altLogoHeader: "logo company",
    },
    navBar:[
      {id: 1, name: "Classess", linkUrl: "/classess"},
      {id: 2, name: "Timetable", linkUrl: "/timetable"},
      {id: 3, name: "Clubs", linkUrl: "/clubs"},
      {id: 4, name: "Nutrition", linkUrl: "/nutrition"},
      {id: 5, name: "Free Trial", linkUrl: "/freetrial"}
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