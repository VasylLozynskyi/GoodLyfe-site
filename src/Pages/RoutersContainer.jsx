import { Route, Routes } from "react-router-dom"

import { Header } from "Components/Header/Header"

export const RoutersContainer = ({ data }) => {
  return (
    <div className="wrapper_site">
     <Header data={data.header} />
      <main>
        {/* <Routes> */}
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contacts" element={<ContactUsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/FAQ" element={<FaqPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/licenses" element={<LicensesPage />} />
          <Route path="*" element={<Error404Page />} /> */}
        {/* </Routes> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}