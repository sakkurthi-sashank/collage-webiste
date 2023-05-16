import { Blockquote } from "./components/Blockquote"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { NewsAndEvents } from "./components/NewsAndEvents"
import { ScheduleVisit } from "./components/ScheduleVisit"
import { SmallHeader } from "./components/SmallHeader"
import { SubHero } from "./components/SubHero"
import { WhoWeAre } from "./components/WhoWeAre"

export const App = () => {
  return (
    <div className="bg-gray-50 relative">
      <SmallHeader />
      <Header />
      <Hero />
      <SubHero />
      <WhoWeAre />
      <Blockquote />
      <NewsAndEvents />
      <ScheduleVisit />
      <Footer />
    </div>
  )
}
