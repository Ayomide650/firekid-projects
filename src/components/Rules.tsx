import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MessageSquare, 
  Hash, 
  Code, 
  Shield, 
  Users, 
  Sparkles,
  ExternalLink,
  Flame,
  Zap,
  Star
} from 'lucide-react';

const Rules: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({length: 20}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4
    }));
    setParticles(newParticles);
  }, []);

  const rulesSections = [
    {
      title: 'GENERAL CONDUCT',
      icon: Heart,
      color: 'blue',
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
      rules: [
        {
          title: 'Respect Everyone',
          description: 'Be kind, no harassment or bullying'
        },
        {
          title: 'Keep It Clean',
          description: 'No NSFW content or excessive profanity'
        },
        {
          title: 'No Spam',
          description: 'Don\'t flood chat or send repetitive messages'
        },
        {
          title: 'Stay On Topic',
          description: 'Use appropriate channels, #general for off-topic'
        },
        {
          title: 'English Only',
          description: 'Main conversations in English'
        }
      ]
    },
    {
      title: 'PROJECTS',
      icon: Code,
      color: 'green',
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      rules: [
        {
          title: 'Give Context',
          description: 'Explain your projects when sharing/asking for help'
        },
        {
          title: 'No Plagiarism',
          description: 'Credit others\' work, don\'t steal code'
        },
        {
          title: 'Help Beginners',
          description: 'Be patient and educational'
        },
        {
          title: 'Beta Testing',
          description: 'Provide detailed feedback, don\'t leak content'
        }
      ]
    },
    {
      title: 'COMMUNICATION',
      icon: MessageSquare,
      color: 'purple',
      gradient: 'from-purple-400 via-pink-500 to-red-500',
      rules: [
        {
          title: 'Correct Channels',
          description: 'Read descriptions, post appropriately'
        },
        {
          title: 'No DM Spam',
          description: 'Don\'t message members unsolicited'
        },
        {
          title: 'Smart Mentions',
          description: 'Don\'t abuse @everyone/@here'
        },
        {
          title: 'Voice Etiquette',
          description: 'Use push-to-talk, respect speaking time'
        }
      ]
    },
    {
      title: 'SECURITY',
      icon: Shield,
      color: 'red',
      gradient: 'from-red-400 via-orange-500 to-yellow-500',
      rules: [
        {
          title: 'Privacy First',
          description: 'Don\'t share personal info publicly'
        },
        {
          title: 'No Malicious Links',
          description: 'Report suspicious content immediately'
        },
        {
          title: 'Protect Credentials',
          description: 'Don\'t share passwords/API keys publicly'
        }
      ]
    },
    {
      title: 'MODERATION',
      icon: Users,
      color: 'yellow',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      rules: [
        {
          title: 'Respect Staff',
          description: 'Follow mod instructions, appeal privately'
        },
        {
          title: 'No Drama',
          description: 'Handle conflicts privately, no public callouts'
        },
        {
          title: 'Report Properly',
          description: 'Use correct channels, don\'t mini-mod'
        },
        {
          title: 'No Ban Evasion',
          description: 'Alts result in permanent bans'
        }
      ]
    },
    {
      title: 'COMMUNITY',
      icon: Sparkles,
      color: 'pink',
      gradient: 'from-pink-400 via-purple-500 to-indigo-600',
      rules: [
        {
          title: 'Celebrate Wins',
          description: 'Share milestones and support others'
        },
        {
          title: 'Stay Active',
          description: 'Participate when possible (inactive = removal after 30+ days)'
        }
      ]
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20',
      border: 'border-cyan-500/30',
      text: 'text-cyan-300',
      icon: 'text-cyan-400',
      glow: 'shadow-cyan-500/25'
    },
    green: {
      bg: 'bg-gradient-to-br from-emerald-600/20 via-green-600/20 to-teal-600/20',
      border: 'border-emerald-500/30',
      text: 'text-emerald-300',
      icon: 'text-emerald-400',
      glow: 'shadow-emerald-500/25'
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-red-600/20',
      border: 'border-purple-500/30',
      text: 'text-purple-300',
      icon: 'text-purple-400',
      glow: 'shadow-purple-500/25'
    },
    red: {
      bg: 'bg-gradient-to-br from-red-600/20 via-orange-600/20 to-yellow-600/20',
      border: 'border-red-500/30',
      text: 'text-red-300',
      icon: 'text-red-400',
      glow: 'shadow-red-500/25'
    },
    yellow: {
      bg: 'bg-gradient-to-br from-yellow-600/20 via-orange-600/20 to-red-600/20',
      border: 'border-yellow-500/30',
      text: 'text-yellow-300',
      icon: 'text-yellow-400',
      glow: 'shadow-yellow-500/25'
    },
    pink: {
      bg: 'bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-indigo-600/20',
      border: 'border-pink-500/30',
      text: 'text-pink-300',
      icon: 'text-pink-400',
      glow: 'shadow-pink-500/25'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float 6s ease-in-out infinite ${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-yellow-500/20 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 border border-emerald-500/20 rotate-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
            <div className="relative p-6 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-3xl shadow-2xl">
              <Flame className="h-16 w-16 text-white animate-bounce" />
            </div>
          </div>
          
          <p className="text-xl text-gray-300 mb-4">
            Welcome to the Sensitivity Website
          </p>
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4 animate-pulse">
            🔥 FIREKID PROJECT SERVER
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-yellow-400 animate-spin" />
            <h2 className="text-3xl font-bold text-white">SERVER RULES</h2>
            <Star className="h-6 w-6 text-yellow-400 animate-spin" style={{ animationDirection: 'reverse' }} />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Server Rules & Guidelines for our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold">amazing community</span>
          </p>
        </div>

        {/* Rules Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {rulesSections.map((section, index) => {
            const colors = colorClasses[section.color as keyof typeof colorClasses];
            const IconComponent = section.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div 
                key={index} 
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 transition-all duration-300 transform hover:scale-105 ${colors.glow} ${isHovered ? 'shadow-2xl' : 'shadow-lg'} backdrop-blur-sm`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: isHovered ? `linear-gradient(135deg, ${colors.bg.includes('cyan') ? 'rgba(6, 182, 212, 0.1)' : colors.bg.includes('emerald') ? 'rgba(16, 185, 129, 0.1)' : colors.bg.includes('purple') ? 'rgba(147, 51, 234, 0.1)' : colors.bg.includes('red') ? 'rgba(239, 68, 68, 0.1)' : colors.bg.includes('yellow') ? 'rgba(245, 158, 11, 0.1)' : 'rgba(236, 72, 153, 0.1)'}, rgba(17, 24, 39, 0.8))` : undefined
                }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-${section.gradient} shadow-lg transform ${isHovered ? 'rotate-12 scale-110' : ''} transition-all duration-300`}>
                    <IconComponent className={`h-7 w-7 text-white`} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${colors.text} flex items-center space-x-2`}>
                      <Zap className="h-5 w-5" />
                      <span>{section.title}</span>
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {section.rules.map((rule, ruleIndex) => (
                    <div key={ruleIndex} className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200 hover:bg-gray-800/60">
                      <h4 className="text-white font-semibold mb-2 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                        <span>{rule.title}</span>
                      </h4>
                      <p className="text-gray-300 pl-4 border-l-2 border-gray-600/50">
                        {rule.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Footer */}
        <div className="bg-gradient-to-r from-gray-800/60 via-gray-900/60 to-gray-800/60 backdrop-blur-lg rounded-3xl p-8 border-2 border-gray-700/50 text-center shadow-2xl">
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-3 h-3 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>

          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            Rules may evolve with our community - stay updated via <span className="text-cyan-400 font-semibold">#announcements</span>
            <br />
            Join Discord for questions and support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Let's build the future together! 🚀✨
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://discord.gg/4P6yaNHg" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Hash className="h-5 w-5" />
              <span className="font-semibold">View #announcements</span>
              <ExternalLink className="h-4 w-4" />
            </a>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span className="text-sm">Discord Community</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default Rules;
