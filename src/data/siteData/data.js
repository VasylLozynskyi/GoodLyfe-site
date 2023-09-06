import { logo_header } from "./importImages";

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
      iconUrl: "assets/icons/Search Icon.png",
      altIcon: "search icon",
    },
    loginBtnBar: {
      name: "Login",
      typeBtn: "2",
    }
  },
}