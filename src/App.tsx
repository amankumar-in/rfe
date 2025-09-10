import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import ForStudents from './components/ForStudents'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Update URL when page changes
  useEffect(() => {
    const basePath = import.meta.env.PROD ? '/rfe' : ''
    const path = currentPage === 'home' ? `${basePath}/` : `${basePath}/${currentPage}`
    window.history.pushState({}, '', path)
  }, [currentPage])

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const basePath = import.meta.env.PROD ? '/rfe' : ''
      const path = window.location.pathname.replace(basePath, '') || '/'
      if (path === '/students') {
        setCurrentPage('students')
      } else if (path === '/parents') {
        setCurrentPage('parents')
      } else if (path === '/schools') {
        setCurrentPage('schools')
      } else if (path === '/sponsors') {
        setCurrentPage('sponsors')
      } else {
        setCurrentPage('home')
      }
    }

    window.addEventListener('popstate', handlePopState)
    
    // Set initial page based on URL
    handlePopState()
    
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'students':
        return <ForStudents />
      case 'parents':
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-gray-600">For Parents - Coming Soon</h1></div>
      case 'schools':
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-gray-600">For Schools - Coming Soon</h1></div>
      case 'sponsors':
        return <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl text-gray-600">For Sponsors - Coming Soon</h1></div>
      default:
        return <Homepage />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
