import React from 'react';
import { 
  Coins, 
  Wallet, 
  ShoppingCart, 
  Trophy, 
  Gamepad2, 
  Dice1, 
  Users, 
  Settings, 
  Info, 
  Shield,
  Zap,
  Gift,
  Crown,
  Target,
  Lock,
  User
} from 'lucide-react';

const Commands: React.FC = () => {
  const commandCategories = [
    {
      title: 'ECONOMY COMMANDS',
      icon: Coins,
      color: 'yellow',
      description: 'Manage your coins and economy features',
      commands: [
        {
          name: '/daily',
          description: 'Get your daily 500 coins reward',
          usage: '/daily',
          cooldown: '24 hours',
          permission: 'Everyone'
        },
        {
          name: '/wallet',
          description: 'Check your current coin balance',
          usage: '/wallet [user]',
          cooldown: 'None',
          permission: 'Everyone'
        },
        {
          name: '/addcoins',
          description: 'Add coins to a user',
          usage: '/addcoins <user> <amount>',
          cooldown: 'None',
          permission: 'Admin Only'
        },
        {
          name: '/shop',
          description: 'Browse the server shop',
          usage: '/shop',
          cooldown: '5 seconds',
          permission: 'Everyone'
        },
        {
          name: '/buy',
          description: 'Purchase items from the shop',
          usage: '/buy <item>',
          cooldown: '10 seconds',
          permission: 'Everyone'
        },
        {
          name: '/inventory',
          description: 'View your purchased items',
          usage: '/inventory [user]',
          cooldown: 'None',
          permission: 'Everyone'
        },
        {
          name: '/leaderboard',
          description: 'View the richest members',
          usage: '/leaderboard',
          cooldown: '30 seconds',
          permission: 'Everyone'
        },
        {
          name: '/changecolor',
          description: 'Change your role color',
          usage: '/changecolor <color>',
          cooldown: '1 hour',
          permission: 'Everyone'
        },
        {
          name: '/emojiadd',
          description: 'Add custom emojis to the server',
          usage: '/emojiadd <emoji> <name>',
          cooldown: '5 minutes',
          permission: 'Moderator+'
        },
        {
          name: '/usexpboost',
          description: 'Use an XP boost from your inventory',
          usage: '/usexpboost',
          cooldown: 'None',
          permission: 'Everyone'
        }
      ]
    },
    {
      title: 'GAME COMMANDS',
      icon: Gamepad2,
      color: 'green',
      description: 'Fun games to play and earn coins',
      commands: [
        {
          name: '/dice',
          description: 'Roll a dice and try your luck',
          usage: '/dice <bet>',
          cooldown: '10 seconds',
          permission: 'Everyone'
        },
        {
          name: '/coinflip',
          description: 'Flip a coin and bet on the outcome',
          usage: '/coinflip <bet> <heads/tails>',
          cooldown: '15 seconds',
          permission: 'Everyone'
        },
        {
          name: '/dicebattle',
          description: 'Challenge another user to a dice battle',
          usage: '/dicebattle <user> <bet>',
          cooldown: '30 seconds',
          permission: 'Everyone'
        },
        {
          name: '/accept',
          description: 'Accept a game challenge',
          usage: '/accept',
          cooldown: 'None',
          permission: 'Everyone'
        }
      ]
    },
    {
      title: 'UTILITY COMMANDS',
      icon: Settings,
      color: 'blue',
      description: 'Server information and utility features',
      commands: [
        {
          name: '/serverinfo',
          description: 'Get detailed server information',
          usage: '/serverinfo',
          cooldown: '30 seconds',
          permission: 'Everyone'
        },
        {
          name: '/userinfo',
          description: 'Get information about a user',
          usage: '/userinfo [user]',
          cooldown: '10 seconds',
          permission: 'Everyone'
        },
        {
          name: '/avatar',
          description: 'Display a user\'s avatar',
          usage: '/avatar [user]',
          cooldown: '5 seconds',
          permission: 'Everyone'
        },
        {
          name: '/banner',
          description: 'Display a user\'s banner',
          usage: '/banner [user]',
          cooldown: '5 seconds',
          permission: 'Everyone'
        },
        {
          name: '/botinfo',
          description: 'Get information about the bot',
          usage: '/botinfo',
          cooldown: '30 seconds',
          permission: 'Everyone'
        },
        {
          name: '/channelinfo',
          description: 'Get information about a channel',
          usage: '/channelinfo [channel]',
          cooldown: '15 seconds',
          permission: 'Moderator+'
        },
        {
          name: '/roleinfo',
          description: 'Get information about a role',
          usage: '/roleinfo <role>',
          cooldown: '15 seconds',
          permission: 'Everyone'
        },
        {
          name: '/roles',
          description: 'List all server roles',
          usage: '/roles',
          cooldown: '30 seconds',
          permission: 'Everyone'
        },
        {
          name: '/membercount',
          description: 'Show current member count',
          usage: '/membercount',
          cooldown: '10 seconds',
          permission: 'Everyone'
        },
        {
          name: '/ping',
          description: 'Check bot latency',
          usage: '/ping',
          cooldown: '5 seconds',
          permission: 'Everyone'
        },
        {
          name: '/uptime',
          description: 'Check how long the bot has been online',
          usage: '/uptime',
          cooldown: '10 seconds',
          permission: 'Everyone'
        },
        {
          name: '/invite',
          description: 'Get the bot invite link',
          usage: '/invite',
          cooldown: '30 seconds',
          permission: 'Everyone'
        },
        {
          name: '/support',
          description: 'Get support server link',
          usage: '/support',
          cooldown: '30 seconds',
          permission: 'Everyone'
        },
        {
          name: '/whois',
          description: 'Detailed user information',
          usage: '/whois [user]',
          cooldown: '15 seconds',
          permission: 'Everyone'
        },
        {
          name: '/permissions',
          description: 'Check user permissions',
          usage: '/permissions [user]',
          cooldown: '10 seconds',
          permission: 'Moderator+'
        }
      ]
    },
    {
      title: 'ADMIN COMMANDS',
      icon: Shield,
      color: 'red',
      description: 'Administrative commands (Staff only)',
      commands: [
        {
          name: '/autorole',
          description: 'Set up automatic role assignment',
          usage: '/autorole <role>',
          cooldown: 'None',
          permission: 'Admin Only'
        },
        {
          name: '/settings',
          description: 'Configure server settings',
          usage: '/settings',
          cooldown: 'None',
          permission: 'Admin Only'
        },
        {
          name: '/prefix',
          description: 'Change bot prefix',
          usage: '/prefix <new_prefix>',
          cooldown: 'None',
          permission: 'Admin Only'
        },
        {
          name: '/getserverinfo',
          description: 'Get detailed server analytics',
          usage: '/getserverinfo',
          cooldown: 'None',
          permission: 'Admin Only'
        }
      ]
    }
  ];

  const colorClasses = {
    yellow: {
      bg: 'bg-yellow-600/20',
      border: 'border-yellow-500/30',
      text: 'text-yellow-400',
      icon: 'text-yellow-400',
      button: 'bg-yellow-600/30 hover:bg-yellow-600/50'
    },
    green: {
      bg: 'bg-green-600/20',
      border: 'border-green-500/30',
      text: 'text-green-400',
      icon: 'text-green-400',
      button: 'bg-green-600/30 hover:bg-green-600/50'
    },
    blue: {
      bg: 'bg-blue-600/20',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      icon: 'text-blue-400',
      button: 'bg-blue-600/30 hover:bg-blue-600/50'
    },
    red: {
      bg: 'bg-red-600/20',
      border: 'border-red-500/30',
      text: 'text-red-400',
      icon: 'text-red-400',
      button: 'bg-red-600/30 hover:bg-red-600/50'
    },
    purple: {
      bg: 'bg-purple-600/20',
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      icon: 'text-purple-400',
      button: 'bg-purple-600/30 hover:bg-purple-600/50'
    }
  };

  const getPermissionIcon = (permission: string) => {
    if (permission === 'Admin Only') return <Lock className="h-3 w-3 text-red-400" />;
    if (permission === 'Moderator+') return <Shield className="h-3 w-3 text-orange-400" />;
    return <User className="h-3 w-3 text-green-400" />;
  };

  const getPermissionColor = (permission: string) => {
    if (permission === 'Admin Only') return 'text-red-400 bg-red-600/20';
    if (permission === 'Moderator+') return 'text-orange-400 bg-orange-600/20';
    return 'text-green-400 bg-green-600/20';
  };

  const CommandCard: React.FC<{
    name: string;
    description: string;
    usage: string;
    cooldown: string;
    permission: string;
  }> = ({ name, description, usage, cooldown, permission }) => (
    <div className="bg-gray-800/30 rounded-lg p-4 hover:bg-gray-800/50 transition-all duration-200">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-white font-semibold text-lg">{name}</h4>
        <div className="flex items-center space-x-2">
          <span className={`text-xs px-2 py-1 rounded flex items-center space-x-1 ${getPermissionColor(permission)}`}>
            {getPermissionIcon(permission)}
            <span>{permission}</span>
          </span>
          <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
            {cooldown}
          </span>
        </div>
      </div>
      <p className="text-gray-300 mb-3">{description}</p>
      <div className="bg-gray-900/50 rounded p-2">
        <span className="text-gray-400 text-sm">Usage: </span>
        <code className="text-blue-300 text-sm">{usage}</code>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4">
          <Zap className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">⚡ Bot Commands</h1>
        <p className="text-gray-400 text-lg">All available Discord bot commands</p>
      </div>

      {/* Permission Legend */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          <Info className="h-5 w-5 text-blue-400" />
          <span>Permission Levels</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 bg-green-600/20 border border-green-500/30 rounded-lg p-3">
            <User className="h-4 w-4 text-green-400" />
            <div>
              <span className="text-green-400 font-medium">Everyone</span>
              <p className="text-gray-300 text-sm">All server members can use</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-orange-600/20 border border-orange-500/30 rounded-lg p-3">
            <Shield className="h-4 w-4 text-orange-400" />
            <div>
              <span className="text-orange-400 font-medium">Moderator+</span>
              <p className="text-gray-300 text-sm">Moderators and above</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-red-600/20 border border-red-500/30 rounded-lg p-3">
            <Lock className="h-4 w-4 text-red-400" />
            <div>
              <span className="text-red-400 font-medium">Admin Only</span>
              <p className="text-gray-300 text-sm">Administrators only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Guide */}
      <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-xl p-6 mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Gift className="h-6 w-6 text-green-400" />
          <h3 className="text-lg font-semibold text-green-300">🚀 Quick Start</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
          <div className="bg-gray-800/30 rounded-lg p-3">
            <span className="text-yellow-400 font-medium">1. Get Daily Coins:</span>
            <p className="text-sm mt-1">Use <code className="bg-gray-700 px-2 py-1 rounded text-yellow-300">/daily</code> every day for 500 coins!</p>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-3">
            <span className="text-blue-400 font-medium">2. Check Balance:</span>
            <p className="text-sm mt-1">Use <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">/wallet</code> to see your coins</p>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-3">
            <span className="text-green-400 font-medium">3. Play Games:</span>
            <p className="text-sm mt-1">Try <code className="bg-gray-700 px-2 py-1 rounded text-green-300">/dice</code> or <code className="bg-gray-700 px-2 py-1 rounded text-green-300">/coinflip</code></p>
          </div>
        </div>
      </div>

      {/* Special Game Channel Notice */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-xl p-6 mb-8">
        <div className="flex items-center space-x-3 mb-3">
          <Target className="h-6 w-6 text-orange-400" />
          <h3 className="text-lg font-semibold text-orange-300">🎯 IMPORTANT: Game Channel Rules</h3>
        </div>
        <p className="text-gray-300 text-lg">
          <strong>DON'T SEND MESSAGES IN THE GAME CHANNEL!</strong> Only use slash commands like <code className="bg-gray-700 px-2 py-1 rounded text-orange-300">/dice</code>, <code className="bg-gray-700 px-2 py-1 rounded text-orange-300">/coinflip</code>, etc.
        </p>
      </div>

      {/* Command Categories */}
      <div className="space-y-8">
        {commandCategories.map((category, index) => {
          const colors = colorClasses[category.color as keyof typeof colorClasses];
          const IconComponent = category.icon;
          
          return (
            <div key={index} className={`${colors.bg} ${colors.border} border rounded-xl p-6`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-lg ${colors.bg}`}>
                  <IconComponent className={`h-6 w-6 ${colors.icon}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${colors.text}`}>⚡ {category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {category.commands.map((command, commandIndex) => (
                  <CommandCard key={commandIndex} {...command} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tips Section */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
          <Crown className="h-5 w-5 text-purple-400" />
          <span>💡 Pro Tips</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <div className="space-y-2">
            <h4 className="text-white font-medium">Economy Tips:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Use <code className="bg-gray-700 px-1 rounded">/daily</code> every day - don't miss out on free coins!</li>
              <li>• Check the <code className="bg-gray-700 px-1 rounded">/shop</code> regularly for new items</li>
              <li>• Save coins for special items and boosts</li>
              <li>• Use <code className="bg-gray-700 px-1 rounded">/leaderboard</code> to see top earners</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-white font-medium">Gaming Tips:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Start with small bets when gambling</li>
              <li>• <code className="bg-gray-700 px-1 rounded">/dicebattle</code> is great for competitive play</li>
              <li>• Remember cooldowns - don't spam commands</li>
              <li>• Use the game channel for all gaming commands</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-3">Need Help?</h3>
        <p className="text-gray-300 mb-4">
          If you need help with any command, create a ticket or ask in the appropriate channel. 
          Our community is always ready to help!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
            Create Ticket
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
            Join #help Channel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Commands;