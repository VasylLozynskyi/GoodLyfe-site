import { HeroSliderBlock } from "./components/heroSliderBlock/HeroSliderBlock"


export const HomePage = ({ data }) => {
  return (
    <>
    <HeroSliderBlock data={data.heroSliderBlock} />
    </>
  )
}