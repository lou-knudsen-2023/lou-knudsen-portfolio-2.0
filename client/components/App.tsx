import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'
import ProjectCard from './ProjectCard'
import ProjectBuddy from './ProjectBuddy'
import ProjectDevDeals from './ProjectDevDeals'
import ProjectWeeMan from './ProjectWeeMan'
import ProjectLostandFound from './ProjectLostandFound'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-buddy" element={<ProjectBuddy />} />
        <Route path="/project-devdeals" element={<ProjectDevDeals />} />
        <Route path="/project-lostandfound" element={<ProjectLostandFound />} />
        <Route path="/project-weeman" element={<ProjectWeeMan />} />
      </Routes>
      <ProjectCard />
      <Footer />
    </>
  )
}

{
}
