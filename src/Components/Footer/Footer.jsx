import { LogoBar } from "Components/Header/components/LogoBar"
import "./footer.scss"

export const Footer = ({ data }) => {
  return (
    <div className="wrapper_footer">
      <div className="container">
        <LogoBar data={data.logoBar} />
        <p>{data.subTitle}</p>
      </div>
    </div>
  )
}