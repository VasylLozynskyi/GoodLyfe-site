import { Route, Routes } from "react-router-dom"

import { Header } from "Components/Header/Header"
import { HomePage } from "./HomePage/HomePage"
import { SearchPageContainer } from "./SearchPage/SearchPageContainer"
import { routerLinks } from "data/siteData/routerLinks"
import { Footer } from "Components/Footer/Footer"

export const RoutersContainer = ({ data }) => {
  return (
    <div className="wrapper_site">
     <Header data={data.header} />
      <main>
        <Routes>
          <Route path={routerLinks.homepage.link} element={<HomePage data={data.homePage} />} />
          <Route path={routerLinks.searchpage.link} element={<SearchPageContainer />} />
          {/* <Route path="/contacts" element={<ContactUsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/FAQ" element={<FaqPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/licenses" element={<LicensesPage />} />
          <Route path="*" element={<Error404Page />} /> */}
        </Routes>
      </main>
      <Footer data={data.footer} />
    </div>
  )
}