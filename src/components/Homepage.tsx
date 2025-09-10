import { 
  Download, 
  Users, 
  GraduationCap, 
  Building, 
  Star, 
  Shield, 
  Gift,
  ChevronRight,
  BookOpen,
  Award,
  Smartphone,
  Sparkles,
  Zap,
  Brain,
  Target,
  TrendingUp,
  Globe,
  Lock,
  Heart
} from 'lucide-react'
import { cn } from '@/lib/utils'

const Homepage = () => {

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

  const Card = ({ 
    children, 
    className = '', 
    hover = true,
    glowing = false 
  }: {
    children: React.ReactNode
    className?: string
    hover?: boolean
    glowing?: boolean
  }) => (
    <div className={cn(
      'relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm overflow-hidden',
      hover && 'hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105',
      glowing && 'before:absolute before:inset-0 before:rounded-xl before:p-[1px] before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:animate-pulse',
      className
    )}>
      {glowing && (
        <div className="absolute inset-[1px] rounded-xl bg-white z-10"></div>
      )}
      <div className="relative z-20">{children}</div>
    </div>
  )

  const AnimatedBackground = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -inset-10 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  )

  const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
    <div 
      className="animate-bounce"
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      {children}
    </div>
  )

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                  <Sparkles className="w-4 h-4" />
                  <span>Revolutionary Education Rewards Platform</span>
                  <Sparkles className="w-4 h-4" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Transform
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                    Education Through
                  </span>
                  <span className="block bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                    Gamified Rewards
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Experience the future of education with our revolutionary platform that turns learning into an adventure. 
                  Students earn digital rewards, parents stay engaged, and schools track progress with unprecedented insight.
                  <span className="block mt-3 text-lg text-blue-600 font-medium">
                    🎯 Boost attendance by 40% • 📈 Increase engagement by 60% • 🏆 Reward achievements instantly
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <Button size="lg" className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition duration-200 hover:scale-105">
                    <Download className="w-5 h-5 mr-2 animate-bounce" />
                    Download App Now
                    <Sparkles className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <Button variant="outline" size="lg" className="border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 transform transition duration-200 hover:scale-105">
                  <Zap className="w-5 h-5 mr-2" />
                  See Demo
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <FloatingElement>
                <div className="relative z-10 group">
                  <img 
                    src="/images/iPhone-15-Pro-Black-Titanium-Mockup-Portrait.svg" 
                    alt="RFE Mobile App" 
                    className="w-full max-w-md mx-auto transform transition duration-500 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
                </div>
              </FloatingElement>
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 left-10 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedBackground />
      
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-bounce">
              <Brain className="w-5 h-5" />
              <span>AI-Powered Educational Ecosystem</span>
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              Learning Experience
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Step into the future of education where every action counts, every achievement matters, 
              and every student thrives through intelligent reward mechanisms and real-time analytics.
            </p>
            <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span>10M+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <span>1M+ Rewards Earned</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card glowing hover className="group">
              <div className="space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                    <GraduationCap className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-yellow-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Students</h3>
                  <div className="text-sm text-blue-600 font-medium mb-3">Ages 5-18 • K-12 Education</div>
                  <p className="text-gray-600 leading-relaxed">
                    Transform your educational journey with gamified learning. Earn cryptocurrency rewards, 
                    unlock achievements, and compete with friends while mastering subjects.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-green-600">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>Instant reward notifications</span>
                    </div>
                    <div className="flex items-center text-sm text-purple-600">
                      <Brain className="w-4 h-4 mr-2" />
                      <span>AI-powered study recommendations</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                  Start Learning
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            <Card glowing hover className="group">
              <div className="space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                    <Heart className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center animate-pulse">
                    <Users className="w-3 h-3 text-pink-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Caring Guardians</h3>
                  <div className="text-sm text-green-600 font-medium mb-3">Parents • Social Workers • Families</div>
                  <p className="text-gray-600 leading-relaxed">
                    Stay connected to your child's educational adventure with real-time insights, 
                    milestone celebrations, and collaborative goal-setting tools.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-green-600">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span>Real-time progress tracking</span>
                    </div>
                    <div className="flex items-center text-sm text-purple-600">
                      <Gift className="w-4 h-4 mr-2" />
                      <span>Family reward challenges</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 transition-all duration-300">
                  Join Community
                  <Heart className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </Card>

            <Card glowing hover className="group">
              <div className="space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                    <Building className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                    <Target className="w-3 h-3 text-blue-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Elite Institutions</h3>
                  <div className="text-sm text-purple-600 font-medium mb-3">Schools • Universities • Organizations</div>
                  <p className="text-gray-600 leading-relaxed">
                    Transform your institution with cutting-edge analytics, automated reward systems, 
                    and comprehensive student engagement monitoring.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-green-600">
                      <Brain className="w-4 h-4 mr-2" />
                      <span>AI-powered analytics dashboard</span>
                    </div>
                    <div className="flex items-center text-sm text-purple-600">
                      <span className="w-4 h-4 mr-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
                      <span>Custom reward programs</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all duration-300">
                  Get Enterprise
                  <Building className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </Card>

            <Card glowing hover className="group">
              <div className="space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                    <Star className="w-8 h-8 text-white group-hover:scale-110 transition-transform group-hover:rotate-12" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                    <TrendingUp className="w-3 h-3 text-green-800" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Visionary Partners</h3>
                  <div className="text-sm text-orange-600 font-medium mb-3">Businesses • Sponsors • Foundations</div>
                  <p className="text-gray-600 leading-relaxed">
                    Invest in the future of education while building brand loyalty. Sponsor student achievements 
                    and track your social impact with detailed community analytics.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm text-green-600">
                      <Globe className="w-4 h-4 mr-2" />
                      <span>Global impact measurement</span>
                    </div>
                    <div className="flex items-center text-sm text-purple-600">
                      <Sparkles className="w-4 h-4 mr-2" />
                      <span>Brand visibility rewards</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                  Become Sponsor
                  <Star className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                Experience the Magic
              </span>
              <br />
              of Gamified Education
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <Card glowing hover className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
              <div className="space-y-6 text-center relative z-10">
                <FloatingElement delay={0}>
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:scale-110">
                    <Gift className="w-10 h-10 text-white group-hover:rotate-12 transition-transform" />
                  </div>
                </FloatingElement>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart Rewards System</h3>
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    <Zap className="w-3 h-3" />
                    <span>Blockchain-Powered</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Revolutionary cryptocurrency-based reward system where students earn TUIT tokens for educational achievements. 
                    Redeem for scholarships, premium study materials, tech gadgets, and exclusive educational experiences.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-center text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span>Instant token rewards</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-purple-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span>Global marketplace access</span>
                    </div>
                  </div>
                </div>
                <FloatingElement delay={1}>
                  <img src="/images/trophy.png" alt="Trophy" className="w-28 h-28 mx-auto opacity-90 group-hover:scale-110 transition-transform duration-500" />
                </FloatingElement>
              </div>
            </Card>

            <Card glowing hover className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5 group-hover:from-green-500/10 group-hover:to-teal-500/10 transition-all duration-500"></div>
              <div className="space-y-6 text-center relative z-10">
                <FloatingElement delay={0.5}>
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-green-500/50 transition-all duration-500 group-hover:scale-110">
                    <Heart className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </FloatingElement>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Family Connection Hub</h3>
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-teal-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    <Heart className="w-3 h-3" />
                    <span>AI-Enhanced Insights</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Advanced parental dashboard with real-time notifications, predictive analytics for academic performance, 
                    and collaborative goal-setting tools that strengthen family bonds through education.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-center text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span>Live progress updates</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-purple-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span>Family achievement badges</span>
                    </div>
                  </div>
                </div>
                <FloatingElement delay={1.5}>
                  <img src="/images/family-insurance.png" alt="Family" className="w-28 h-28 mx-auto opacity-90 group-hover:scale-110 transition-transform duration-500" />
                </FloatingElement>
              </div>
            </Card>

            <Card glowing hover className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
              <div className="space-y-6 text-center relative z-10">
                <FloatingElement delay={1}>
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-110">
                    <Brain className="w-10 h-10 text-white group-hover:rotate-6 transition-transform" />
                  </div>
                </FloatingElement>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">AI-Powered Analytics</h3>
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    <Brain className="w-3 h-3" />
                    <span>Machine Learning</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive administrative suite with predictive analytics, automated report generation, 
                    behavioral pattern recognition, and seamless integration with existing school information systems.
                  </p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-center text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span>Predictive analytics dashboard</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-purple-600">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <span>Automated intervention alerts</span>
                    </div>
                  </div>
                </div>
                <FloatingElement delay={2}>
                  <img src="/images/time-planning-1.png" alt="Planning" className="w-28 h-28 mx-auto opacity-90 group-hover:scale-110 transition-transform duration-500" />
                </FloatingElement>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-bounce">
              <Gift className="w-5 h-5" />
              <span>Global Reward Marketplace</span>
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Unlimited Rewards
              </span>
              <br />
              Endless Possibilities
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Access an ever-expanding universe of rewards, from cutting-edge technology to exclusive experiences. 
              Our platform connects students with a global network of partners offering life-changing opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <Card glowing hover className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                    <Lock className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Next-Gen Security</h3>
                    <div className="text-sm text-blue-600 font-medium mb-3">Blockchain • Zero-Knowledge Proofs • Military-Grade Encryption</div>
                    <p className="text-gray-600 leading-relaxed">
                      Revolutionary blockchain-based document storage with quantum-resistant security. 
                      Students maintain complete ownership of their academic records with instant global verification via QR codes.
                    </p>
                    <div className="mt-4 flex items-center space-x-4 text-sm">
                      <div className="flex items-center text-green-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        <span>99.99% Uptime</span>
                      </div>
                      <div className="flex items-center text-blue-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <span>Global Verification</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card glowing hover className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                    <Heart className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">Social Impact Network</h3>
                    <div className="text-sm text-purple-600 font-medium mb-3">Global Partnerships • Micro-Scholarships • Community Building</div>
                    <p className="text-gray-600 leading-relaxed">
                      Creating pathways for underprivileged children through our global network of sponsors, businesses, and educational institutions. 
                      Every reward earned contributes to a larger ecosystem of positive change.
                    </p>
                    <div className="mt-4 flex items-center space-x-4 text-sm">
                      <div className="flex items-center text-green-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        <span>$2M+ Distributed</span>
                      </div>
                      <div className="flex items-center text-purple-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <span>500+ Partners</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="relative">
              <FloatingElement>
                <div className="relative group">
                  <img src="/images/blockchain-1.png" alt="Blockchain Technology" className="w-full max-w-lg mx-auto transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
                </div>
              </FloatingElement>
              <FloatingElement delay={1}>
                <img src="/images/technology.png" alt="Technology" className="absolute -bottom-12 -right-12 w-40 h-40 opacity-80 animate-float" />
              </FloatingElement>
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 -right-4 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg">
              <Smartphone className="w-5 h-5 mr-2" />
              Download App - iOS & Android
            </Button>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Data Protection</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The only student data we hold is provided by the schools, such as attendance records and task participation. 
              The app does not include any communication or social functionalities for children, except where parents and teachers interact responsibly.
            </p>
            <Button variant="outline">
              Read More
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-pink-600/80"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium animate-pulse">
                <Sparkles className="w-5 h-5" />
                <span>Ready to Transform Education?</span>
                <Zap className="w-5 h-5" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block">Let's Build the Future</span>
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-gradient-x">
                  of Learning Together
                </span>
              </h2>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Join thousands of educators, students, and innovators who are revolutionizing education. 
                Experience the power of gamified learning and see immediate results in engagement and achievement.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Button variant="secondary" size="lg" className="relative bg-white text-purple-600 hover:bg-gray-100 transform transition duration-200 hover:scale-105 font-bold">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                  <Sparkles className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 transform transition duration-200 hover:scale-105 backdrop-blur-sm">
                <Globe className="w-5 h-5 mr-2" />
                Schedule Demo
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="text-lg opacity-90">
                📧 Ready to get started? Reach out to our team:
              </div>
              <div className="text-xl font-medium bg-white/20 backdrop-blur-sm inline-block px-6 py-3 rounded-full">
                info@rewardsforeducation.com
              </div>
              <div className="text-sm opacity-70">
                🚀 Response time: Under 24 hours • 🌍 Available globally • 📞 24/7 support
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Homepage
