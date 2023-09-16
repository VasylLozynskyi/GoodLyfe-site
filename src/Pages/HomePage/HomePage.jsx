import { HeroSliderBlock } from "./components/heroSliderBlock/HeroSliderBlock"
import { MeetYourNewBodyBlock } from "./components/meetYourNewBody/MeetYourNewBodyBlock"
import { PremiumFacilitiesBlock } from "./components/premiumFacilitiesBlock/PremiumFacilitiesBlock"
import { RealStoriesBlock } from "./components/realStoriesBlock/RealStoriesBlock"
import { SlidingPanelBlock } from "./components/slidingPanelBlock/SlidingPanelBlock"


export const HomePage = ({ data }) => {
  return (
    <>
    <HeroSliderBlock data={data.heroSliderBlock} />
    <MeetYourNewBodyBlock data={data.meetyournewbodyblock} />
    <SlidingPanelBlock data={data.slidingpanelblock} />
    <PremiumFacilitiesBlock data={data.premiumfacilitiesblock} />
    <RealStoriesBlock data={data.realstoriesblock} />
    </>
  )
}