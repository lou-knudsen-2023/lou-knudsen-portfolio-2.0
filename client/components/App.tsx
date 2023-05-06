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
        <Route path="/ProjectBuddy" element={<ProjectBuddy />} />
        <Route path="/ProjectDevDeals" element={<ProjectDevDeals />} />
        <Route path="/ProjectLostandFound" element={<ProjectLostandFound />} />
        <Route path="/ProjectWeeMan" element={<ProjectWeeMan />} />
      </Routes>
      <ProjectCard />
      <Footer />
    </>
  )
}
