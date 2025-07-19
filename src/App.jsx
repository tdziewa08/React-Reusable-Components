import React from "react"
import Badge from "./Components/Badge/Badge.jsx"
import Banners from "./Components/Banners/Banners.jsx"
import Cards from "./Components/Cards/Cards.jsx"
import Testimonials from "./Components/Testimonials/Testimonials.jsx"
import { DiAndroid } from "react-icons/di"

export default function App() {
  return (
    <>
      <Badge />

      <Banners status="neutral">
        <h2>Important Update</h2>
        <p>You have kind of made a reusable component and removing this line if you want kinda counts as multi or single line rendering.</p>
      </Banners>

      <Cards icon={<DiAndroid />} color="blue"/>

      <Testimonials
        img="../testImage.jpg"
        name="May Andersons"
        company="Workcation"
        title="CTO"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
      />
    </>
  )
}

