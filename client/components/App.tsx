import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import ProjectCard from './ProjectCardHC'
// import ProjectBuddy from './ProjectBuddy'
// import ProjectDevDeals from './ProjectDevDeals'
// import ProjectWeeMan from './ProjectWeeMan'
// import ProjectLostandFound from './ProjectLostandFound'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectCard />} />
        {/* <Route path="/projects/1" element={<ProjectBuddy />} />
      <Route path="/projects/2" element={<ProjectWeeMan />} /> */}
        {/* <Route path="/projects/3" element={<ProjectLostandFound />} />
        <Route path="/projects/4" element={<ProjectDevDeals />} /> */}
      </Routes>
      <ProjectCard />
      <Footer />
    </>
  )
}
