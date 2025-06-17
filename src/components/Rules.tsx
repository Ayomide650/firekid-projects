import React from 'react';
import { 
  Heart, 
  MessageSquare, 
  Hash, 
  Code, 
  Shield, 
  Users, 
  Sparkles,
  Dice1,
  ExternalLink
} from 'lucide-react';

const Rules: React.FC = () => {
  const rulesSections = [
    {
      title: 'GENERAL CONDUCT',
      icon: Heart,
      color: 'blue',
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
      bg: 'bg-blue-600/20',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      icon: 'text-blue-400'
    },
    green: {
      bg: 'bg-green-600/20',
      border: 'border-green-500/30',
      text: 'text-green-400',
      icon: 'text-green-400'
    },
    purple: {
      bg: 'bg-purple-600/20',
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      icon: 'text-purple-400'
    },
    red: {
      bg: 'bg-red-600/20',
      border: 'border-red-500/30',
      text: 'text-red-400',
      icon: 'text-red-400'
    },
    yellow: {
      bg: 'bg-yellow-600/20',
      border: 'border-yellow-500/30',
      text: 'text-yellow-400',
      icon: 'text-yellow-400'
    },
    pink: {
      bg: 'bg-pink-600/20',
      border: 'border-pink-500/30',
      text: 'text-pink-400',
      icon: 'text-pink-400'
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl mb-4">
          <Shield className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">🔥 Firekid Projects Server Rules</h1>
        <p className="text-gray-400 text-lg">Guidelines for our community</p>
      </div>

      {/* Special Rule Highlight */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-xl p-6 mb-8">
        <div className="flex items-center space-x-3 mb-3">
          <Dice1 className="h-6 w-6 text-orange-400" />
          <h3 className="text-lg font-semibold text-orange-300">⚠️ SPECIAL RULE</h3>
        </div>
        <p className="text-gray-300 text-lg">
          <strong>DON'T SEND MESSAGES IN THE GAME CHANNEL</strong> - Just use <code className="bg-gray-700 px-2 py-1 rounded text-orange-300">/dice</code> to play the dice game!
        </p>
      </div>

      {/* Rules Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {rulesSections.map((section, index) => {
          const colors = colorClasses[section.color as keyof typeof colorClasses];
          const IconComponent = section.icon;
          
          return (
            <div key={index} className={`${colors.bg} ${colors.border} border rounded-xl p-6`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${colors.bg}`}>
                  <IconComponent className={`h-5 w-5 ${colors.icon}`} />
                </div>
                <h3 className={`text-lg font-semibold ${colors.text}`}>📋 {section.title}</h3>
              </div>
              
              <div className="space-y-3">
                {section.rules.map((rule, ruleIndex) => (
                  <div key={ruleIndex} className="bg-gray-800/30 rounded-lg p-3">
                    <h4 className="text-white font-medium mb-1">{rule.title}</h4>
                    <p className="text-gray-300 text-sm">- {rule.description}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
        <p className="text-gray-300 mb-4">
          Rules may update - check <span className="text-blue-400">#announcements</span> for changes. 
          Have questions? Create a ticket or ask in the website world chat.
        </p>
        <p className="text-lg font-medium text-white mb-4">
          Welcome to Firekid Projects! Let's build amazing things together! 🔥🚀
        </p>
        <a 
          href="#announcements" 
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
        >
          <Hash className="h-4 w-4" />
          <span>View #announcements</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default Rules;