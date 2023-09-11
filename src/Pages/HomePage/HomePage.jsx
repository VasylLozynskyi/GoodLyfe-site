import { HeroSliderBlock } from "./components/heroSliderBlock/HeroSliderBlock"
import { MeetYourNewBodyBlock } from "./components/meetYourNewBody/MeetYourNewBodyBlock"


export const HomePage = ({ data }) => {
  return (
    <>
    <HeroSliderBlock data={data.heroSliderBlock} />
    <MeetYourNewBodyBlock data={data.meetyournewbodyblock} />
    </>
  )
}