import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    ...props 
  }: {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    [key: string]: any
  }) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
    
    const variants = {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }
    
    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'students', label: 'For Students' },
    { id: 'parents', label: 'For Parents' },
    { id: 'schools', label: 'For Schools' },
    { id: 'sponsors', label: 'For Sponsors' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="relative">
              <img src="/images/RFE-logo-black-by-cfc.svg" alt="RFE Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  'transition-colors',
                  currentPage === item.id
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-700 hover:text-blue-600'
                )}
              >
                {item.label}
              </button>
            ))}
            <Button size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={cn(
                    'text-left transition-colors',
                    currentPage === item.id
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-700 hover:text-blue-600'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <Button size="sm" className="w-fit">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
