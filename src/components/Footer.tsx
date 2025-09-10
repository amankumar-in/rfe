import { Globe, Heart, Sparkles } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center group">
              <div className="relative">
                <img src="images/RFE-logo-black-by-cfc.svg" alt="RFE Logo" className="h-10 w-auto filter invert transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Revolutionizing education through innovative reward systems, 
              creating a brighter future for students worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Partners</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Coins For College</li>
              <li>SIAS International</li>
              <li>TUIT</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Data Protection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms Of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-400">
              info@rewardsforeducation.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
