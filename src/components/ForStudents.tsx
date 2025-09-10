import { 
  Download, 
  Star, 
  Shield, 
  Gift,
  BookOpen,
  Smartphone,
  Trophy,
  Badge,
  CheckCircle,
  QrCode,
  GraduationCap,
  Play,
  ArrowDown,
  Coins,
  Lock,
  Heart
} from 'lucide-react'

const ForStudents = () => {
  return (
    <div className="bg-white">

      {/* Hero Section with Split Layout */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 text-yellow-300" />
                <span>Powered by Coins for College</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Learning That
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Rewards You!
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                At Coins for College, we believe your hard work deserves recognition! 
                Turn your effort into something amazing—rack up points, hit milestones, and score awesome rewards!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-purple-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Download className="w-5 h-5 mr-2" />
                  Download App Now
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border-2 border-white/30 text-white hover:bg-white/10 rounded-lg transition-colors">
                  <Play className="w-5 h-5 mr-2" />
                  See How It Works
                </button>
              </div>
            </div>
            
            {/* Children running positioned at bottom of right column */}
            <div className="relative flex items-end justify-center lg:justify-end h-64 lg:h-80">
              <img 
                src="/images/children-running-transparent-bg.png" 
                alt="Children Running" 
                className="h-full w-auto object-bottom"
              />
              {/* Floating badges */}
              <div className="absolute top-10 left-10 animate-bounce">
                <div className="bg-yellow-400 text-yellow-800 rounded-full p-2 shadow-lg">
                  <Coins className="w-5 h-5" />
                </div>
              </div>
              <div className="absolute top-20 right-10 animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="bg-green-400 text-green-800 rounded-full p-2 shadow-lg">
                  <Trophy className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* Scholarship Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Scholarship Points
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike the SAT which is just one test, Scholarship Points tell your complete story—tracking your progress, 
              participation, and achievements from Kindergarten through 12th grade.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 mb-12 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Full Story Matters</h3>
                <p className="text-gray-600 mb-6">
                  Scholarship Points (SPs) celebrate your hard work in school beyond just grades and test scores. 
                  They showcase your dedication and help colleges see the full picture of who you are as a student.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Every class you attend earns points</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Completing challenges and goals</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Participating in activities</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Building your college portfolio</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-8 mb-4">
                  <GraduationCap className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">College Recognition</h4>
                <p className="text-gray-600">
                  Colleges get a complete picture of your commitment, helping them consider you for scholarships, 
                  grants, and special opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Have Something To Love For Everyone!
            </h2>
            <p className="text-xl text-gray-600">
              Use your points to get amazing rewards and benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Instant Rewards Card */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Instant Rewards</h3>
                  <p className="text-green-100 text-sm">Available to all students</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-colors">
                  <div className="text-3xl mb-3">🎁</div>
                  <div className="font-medium">Gift Cards</div>
                  <div className="text-xs text-green-100 mt-1">Amazon, iTunes & more</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-colors">
                  <div className="text-3xl mb-3">📚</div>
                  <div className="font-medium">Learning Tools</div>
                  <div className="text-xs text-green-100 mt-1">Study aids & resources</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-colors">
                  <div className="text-3xl mb-3">🎮</div>
                  <div className="font-medium">Games & Apps</div>
                  <div className="text-xs text-green-100 mt-1">Educational & fun</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-colors">
                  <div className="text-3xl mb-3">🏪</div>
                  <div className="font-medium">Local Discounts</div>
                  <div className="text-xs text-green-100 mt-1">Restaurants & stores</div>
                </div>
              </div>
            </div>

            {/* Premium Rewards Card */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Premium Rewards</h3>
                  <p className="text-purple-100 text-sm">For partnered schools</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 hover:bg-white/30 transition-colors">
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-yellow-300 mr-2" />
                    <div className="font-semibold">Enhanced Prizes</div>
                  </div>
                  <div className="text-sm text-purple-100">Special incentives tailored to your school</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 hover:bg-white/30 transition-colors">
                  <div className="flex items-center mb-2">
                    <Lock className="w-5 h-5 text-yellow-300 mr-2" />
                    <div className="font-semibold">Exclusive Access</div>
                  </div>
                  <div className="text-sm text-purple-100">Unique rewards from school partners</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 hover:bg-white/30 transition-colors">
                  <div className="flex items-center mb-2">
                    <Gift className="w-5 h-5 text-yellow-300 mr-2" />
                    <div className="font-semibold">Surprise Rewards</div>
                  </div>
                  <div className="text-sm text-purple-100">From our amazing sponsors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learn, Grow, and Earn
            </h2>
            <p className="text-xl text-gray-600">
              Participate in meaningful activities designed for your grade level and interests
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Tasks</h3>
              <p className="text-gray-600">Finish lessons on Khan Academy and Duolingo, engage in wellness programs, or help out at home with life skills.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Earn Points</h3>
              <p className="text-gray-600">Every completed task, class attendance, and extracurricular activity earns you Scholarship Points.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Claim Rewards</h3>
              <p className="text-gray-600">Use your points for gift cards, learning tools, discounts, or save up for scholarships!</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Academic Activities</h3>
                  <div className="text-sm font-medium text-blue-600 mb-2">Designed for Your Grade</div>
                  <p className="text-gray-600 leading-relaxed">Complete lessons on platforms like Khan Academy and Duolingo. Engage in subjects like math, science, and programming challenges that develop your skills.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wellness & Life Skills</h3>
                  <div className="text-sm font-medium text-blue-600 mb-2">Build Character</div>
                  <p className="text-gray-600 leading-relaxed">Participate in mental health programs, help out at home with responsibilities, and take part in community service and extracurricular activities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Track Your Progress
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">See How Far You've Come</h3>
                      <p className="text-gray-600 leading-relaxed">Easily monitor your points, completed tasks, and unlocked rewards in the app to stay on top of your achievements.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Badge className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Earn Badges</h3>
                      <p className="text-gray-600 leading-relaxed">Hit milestones and collect digital badges to celebrate your progress and showcase your dedication!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img src="/images/app-rewards-cards.png" alt="Rewards Cards" className="w-full max-w-md mx-auto" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center">
              <img src="/images/blockchain-1.png" alt="DocuLocker" className="w-full max-w-md mx-auto" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Keep Your School Stuff Safe
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Your Digital Locker</h3>
                      <p className="text-gray-600 leading-relaxed">With DocuLocker – Powered by Coins for College, you can securely store your report cards, attendance records, and other important school documents all in one place.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <QrCode className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Quick and Easy Verification</h3>
                      <p className="text-gray-600 leading-relaxed">Each stored document includes a QR code for instant verification, ensuring that your records are always accessible and protected.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              You Are Protected
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your Privacy Matters</h3>
              <p className="text-gray-600">
                We prioritize your safety by ensuring that no personal contact information, 
                such as phone numbers or emails, is collected.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Made Just for Students</h3>
              <p className="text-gray-600">
                Our app is designed specifically for students—no distractions, no ads, 
                just a fun and engaging way to learn and earn rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Earning Rewards Today!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Make learning more exciting with Rewards for Education. Start earning points 
            and unlocking amazing prizes for your achievements TODAY!
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-purple-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Smartphone className="w-5 h-5 mr-2" />
            Download App - iOS & Android
          </button>
        </div>
      </section>

    </div>
  )
}

export default ForStudents
