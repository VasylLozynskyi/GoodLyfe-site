import { HeroSliderBlock } from "./components/heroSliderBlock/HeroSliderBlock"
import { MeetYourNewBodyBlock } from "./components/meetYourNewBody/MeetYourNewBodyBlock"
import { SlidingPanelBlock } from "./components/slidingPanelBlock/SlidingPanelBlock"


export const HomePage = ({ data }) => {
  return (
    <>
    <HeroSliderBlock data={data.heroSliderBlock} />
    <MeetYourNewBodyBlock data={data.meetyournewbodyblock} />
    <SlidingPanelBlock data={data.slidingpanelblock} />
    </>
  )
}