import React, { useEffect, useState } from 'react';
import { MessageCircle, ExternalLink, Zap, Crown, Sparkles, Bot, Gamepad2 } from 'lucide-react';

const AboutOwner: React.FC = () => {
  const [colorIndex, setColorIndex] = useState(0);
  
  const gradientColors = [
    'from-purple-900 via-blue-900 to-indigo-900',
    'from-blue-900 via-cyan-900 to-teal-900',
    'from-teal-900 via-green-900 to-emerald-900',
    'from-emerald-900 via-yellow-900 to-orange-900',
    'from-orange-900 via-red-900 to-pink-900',
    'from-pink-900 via-purple-900 to-violet-900',
    'from-violet-900 via-indigo-900 to-blue-900'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % gradientColors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://youtube.com/@firekidffx?si=xiM5a_ZRnk6ecSlM',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg',
      color: 'red',
      description: 'Epic gaming content & fire tutorials await! 🎮'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/jZ6B6b9X',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg',
      color: 'purple',
      description: 'Join the legendary crew! Where the magic happens ✨'
    },
    {
      name: 'WhatsApp',
      url: 'https://whatsapp.com/channel/0029VaT1YDxFsn0oKfK81n2R',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg',
      color: 'green',
      description: 'Exclusive drops & behind-the-scenes content 📱'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@firekid846?_t=ZM-8vTQwM6EpQz&_r=1',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg',
      color: 'pink',
      description: 'Short fire clips that hit different 🔥'
    }
  ];

  const SocialCard: React.FC<{
    name: string;
    url: string;
    logo: string;
    color: string;
    description: string;
  }> = ({ name, url, logo, color, description }) => {
    const colorClasses = {
      red: {
        bg: 'bg-gradient-to-br from-red-600/30 to-orange-600/20',
        border: 'border-red-500/50',
        text: 'text-red-300',
        button: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800',
        glow: 'shadow-red-500/30'
      },
      green: {
        bg: 'bg-gradient-to-br from-green-600/30 to-emerald-600/20',
        border: 'border-green-500/50',
        text: 'text-green-300',
        button: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
        glow: 'shadow-green-500/30'
      },
      pink: {
        bg: 'bg-gradient-to-br from-pink-600/30 to-purple-600/20',
        border: 'border-pink-500/50',
        text: 'text-pink-300',
        button: 'bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800',
        glow: 'shadow-pink-500/30'
      },
      purple: {
        bg: 'bg-gradient-to-br from-purple-600/30 to-indigo-600/20',
        border: 'border-purple-500/50',
        text: 'text-purple-300',
        button: 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800',
        glow: 'shadow-purple-500/30'
      }
    };

    const colors = colorClasses[color as keyof typeof colorClasses];

    return (
      <div className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl ${colors.glow} transition-all duration-500 backdrop-blur-lg relative overflow-hidden group`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-4 mb-4">
            <div className={`p-4 rounded-xl ${colors.bg} border ${colors.border} shadow-lg`}>
              <img src={logo} alt={`${name} logo`} className={`h-7 w-7 ${colors.text} filter brightness-0 invert`} />
            </div>
            <h3 className={`text-xl font-bold ${colors.text} tracking-wide`}>{name}</h3>
          </div>
          <p className="text-gray-200 mb-6 leading-relaxed">{description}</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-3 px-6 py-3 ${colors.button} text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
          >
            <span>Connect Now</span>
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${gradientColors[colorIndex]} relative overflow-hidden transition-all duration-[4000ms] ease-in-out`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 space-y-12">
        {/* Epic Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur-lg opacity-75 animate-pulse"></div>
            <div className="relative p-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl border-2 border-orange-400/50 shadow-2xl">
              <img 
                src="https://i.ibb.co/VFC95kF/c8b107b41a4eaa67c1dabfaf817ae529.webp" 
                alt="Firekid846 Avatar" 
                className="w-24 h-24 rounded-2xl object-cover shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl font-black bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight">
              🔥 FIREKID846
            </h1>
            <div className="flex items-center justify-center space-x-3 text-2xl flex-wrap">
              <Crown className="h-8 w-8 text-yellow-400" />
              <p className="text-white font-bold tracking-wide">CONTENT KING & FREE FIRE LEGEND</p>
              <Gamepad2 className="h-8 w-8 text-cyan-400" />
            </div>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <p className="text-gray-200 font-medium">Creator of Sensitivity Web Tool</p>
              <Sparkles className="h-6 w-6 text-purple-400" />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border-2 border-white/20 shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <Zap className="h-8 w-8 text-yellow-400 mr-3" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">THE LEGEND BEHIND THE BRAND</h2>
              <Zap className="h-8 w-8 text-yellow-400 ml-3" />
            </div>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-white text-xl leading-relaxed font-medium">
                Yo! Welcome to my universe 🌟 I'm Firekid846, the mastermind behind FireKid Projects and creator of the legendary Sensitivity Web Tool. 
                As a Free Fire pro player, I live and breathe gaming content, turning ordinary moments into extraordinary experiences 
                that leave people saying "damn, that's fire!" 🔥
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                From epic Free Fire gameplay to mind-blowing tutorials and custom bot development, I'm here to serve you content 
                that hits different. Join the movement and let's create some legendary memories together! 
                This ain't just content - this is ART! ✨
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            CONNECT WITH THE KING 👑
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialLinks.map((link, index) => (
              <SocialCard key={index} {...link} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-3xl blur-2xl animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-12 text-center shadow-2xl">
            <div className="space-y-6">
              <h3 className="text-4xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                READY TO LEVEL UP? 🚀
              </h3>
              <p className="text-white text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                Stop scrolling and start LIVING! Join the most fire community on the internet. 
                We don't just create content - we create LEGENDS! 💎
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <a 
                  href="https://discord.gg/jZ6B6b9X"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 border-2 border-purple-400/30"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <MessageCircle className="h-6 w-6" />
                    <span>JOIN THE EMPIRE</span>
                    <Sparkles className="h-6 w-6 group-hover:animate-spin" />
                  </span>
                </a>
                <a 
                  href="https://t.me/unikruzng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 border-2 border-cyan-400/30"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <Bot className="h-6 w-6" />
                    <span>BOT CREATION (BUY)</span>
                    <Zap className="h-6 w-6 group-hover:animate-bounce" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOwner;
