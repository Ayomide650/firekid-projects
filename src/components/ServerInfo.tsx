import React from 'react';
import { 
  Users, 
  Crown, 
  Calendar, 
  Hash, 
  Shield, 
  Star, 
  Volume2, 
  MessageCircle,
  Coins,
  Wallet
} from 'lucide-react';

const ServerInfo: React.FC = () => {
  const channelCategories = [
    {
      name: '「 ✦ VIPS✦ 」',
      channels: [
        { name: '💎ᴠɪᴘ', type: 'text' }
      ]
    },
    {
      name: '「 ✦ OWNER ✦ 」',
      channels: [
        { name: '🎮private||VC', type: 'voice' },
        { name: '⚒️staff⚒️', type: 'text' },
        { name: '「-✦-mod-✦-」', type: 'text' },
        { name: 'bot-testing', type: 'text' }
      ]
    },
    {
      name: 'VOICE CHANNELS',
      channels: [
        { name: '🔊〡ᴠᴏɪᴄᴇ', type: 'voice' },
        { name: 'AFK X Spotify', type: 'voice' },
        { name: '🛑live-🎞️🎥', type: 'voice' }
      ]
    },
    {
      name: '═══TEXT_CHANNELS ════',
      channels: [
        { name: 'sensitivity-generator', type: 'text' },
        { name: '💡・sᴜɢɢᴇsᴛɪᴏɴs', type: 'text' },
        { name: 'game-channel', type: 'text' },
        { name: 'devices', type: 'text' },
        { name: '💬-chat', type: 'text' },
        { name: '🐞-ʙᴜɢ_ʀᴇᴘᴏʀᴛꜱ', type: 'text' },
        { name: '🧠・ᴘʀᴏ-ᴛɪᴘꜱ', type: 'text' }
      ]
    },
    {
      name: 'LOGS',
      channels: [
        { name: '『🚫-ʙᴀɴɴᴇᴅ-ᴜsᴇʀs』', type: 'text' },
        { name: '『ᴍᴀɪɴ-sᴇʀᴠᴇʀ-ʟᴏɢs』', type: 'text' },
        { name: 'ᴡᴀʀɴᴇᴅ-ᴜsᴇʀs', type: 'text' }
      ]
    },
    {
      name: '🎬 ᴠꞮᴅᴇᴏ',
      channels: [
        { name: '📡-ꜱᴛʀᴇᴀᴍ_ʀᴏᴏᴍ', type: 'voice' },
        { name: 'ᴛᴜᴛᴏʀɪᴀʟꜱ', type: 'text' },
        { name: '🌐-ᴘʀᴏxʏ_ᴛᴜᴛᴏʀɪᴀʟꜱ', type: 'text' }
      ]
    }
  ];

  const otherChannels = [
    { name: '🔧｜patch-notes', type: 'text' },
    { name: '📢announcement', type: 'text' },
    { name: 'giveaways', type: 'text' }
  ];

  const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string | number; color?: string }> = ({ 
    icon, 
    label, 
    value, 
    color = 'blue' 
  }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg bg-${color}-600/20`}>
          {icon}
        </div>
        <div>
          <p className="text-gray-400 text-sm font-medium">{label}</p>
          <p className="text-white text-xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
          <img 
            src="https://cdn.discordapp.com/icons/1382491941131915314/23e9803c7371f6361e198bec8a938978.webp?size=512" 
            alt="FireKid Projects" 
            className="w-20 h-20 rounded-xl"
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">🏰 FireKid Projects</h1>
        <p className="text-gray-400 text-lg">Your Creative Gaming Community</p>
      </div>

      {/* Daily Coins Notice */}
      <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-xl p-6 mb-8">
        <div className="flex items-center space-x-3 mb-3">
          <Coins className="h-6 w-6 text-yellow-400" />
          <h3 className="text-lg font-semibold text-yellow-300">Daily Rewards System</h3>
        </div>
        <div className="space-y-2 text-gray-300">
          <p className="flex items-center space-x-2">
            <span>💰</span>
            <span>Use <code className="bg-gray-700 px-2 py-1 rounded text-yellow-300">/daily</code> every day to get 500 coins!</span>
          </p>
          <p className="flex items-center space-x-2">
            <Wallet className="h-4 w-4 text-blue-400" />
            <span>Check your balance with <code className="bg-gray-700 px-2 py-1 rounded text-blue-300">/wallet</code></span>
          </p>
        </div>
      </div>

      {/* Basic Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={<Users className="h-6 w-6 text-blue-400" />} 
          label="Total Members" 
          value="47" 
          color="blue"
        />
        <StatCard 
          icon={<Crown className="h-6 w-6 text-yellow-400" />} 
          label="Boost Level" 
          value="0" 
          color="yellow"
        />
        <StatCard 
          icon={<Hash className="h-6 w-6 text-green-400" />} 
          label="Total Channels" 
          value="38" 
          color="green"
        />
        <StatCard 
          icon={<Star className="h-6 w-6 text-purple-400" />} 
          label="Custom Emojis" 
          value="44" 
          color="purple"
        />
      </div>

      {/* Server Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Shield className="h-5 w-5 text-blue-400" />
            <span>Server Information</span>
          </h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex justify-between">
              <span className="text-gray-400">Server ID:</span>
              <span className="font-mono text-sm">1382491941131915314</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Owner:</span>
              <span>he_is_him.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Created:</span>
              <span>Wed Jun 11 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Verification Level:</span>
              <span>Low - Must have verified email</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <Users className="h-5 w-5 text-green-400" />
            <span>Member Statistics</span>
          </h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex justify-between">
              <span className="text-gray-400">Humans:</span>
              <span>45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Bots:</span>
              <span>2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Currently Online:</span>
              <span>Variable</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Recent Joins (7 days):</span>
              <span>47</span>
            </div>
          </div>
        </div>
      </div>

      {/* Channels */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
          <Hash className="h-5 w-5 text-blue-400" />
          <span>Server Channels</span>
        </h3>

        {/* Important Channels */}
        <div className="mb-6">
          <h4 className="text-lg font-medium text-gray-300 mb-3">📋 Important Channels</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-700/50 rounded-lg p-3">
              <span className="text-green-400">🏠 Welcome:</span>
              <span className="text-gray-300 ml-2">#👋-welcome</span>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-3">
              <span className="text-red-400">📋 Rules:</span>
              <span className="text-gray-300 ml-2">#rules</span>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-3">
              <span className="text-blue-400">📰 Updates:</span>
              <span className="text-gray-300 ml-2">#『updates』</span>
            </div>
          </div>
        </div>

        {/* Channel Categories */}
        <div className="space-y-4">
          {channelCategories.map((category, index) => (
            <div key={index} className="bg-gray-700/30 rounded-lg p-4">
              <h4 className="text-gray-300 font-medium mb-2">📁 {category.name}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {category.channels.map((channel, channelIndex) => (
                  <div key={channelIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                    {channel.type === 'voice' ? (
                      <Volume2 className="h-4 w-4" />
                    ) : (
                      <MessageCircle className="h-4 w-4" />
                    )}
                    <span>{channel.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Channels */}
        <div className="mt-4 bg-gray-700/30 rounded-lg p-4">
          <h4 className="text-gray-300 font-medium mb-2">📺 Other Channels</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {otherChannels.map((channel, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                <MessageCircle className="h-4 w-4" />
                <span>{channel.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Server Features */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
          <Star className="h-5 w-5 text-purple-400" />
          <span>Server Features</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-3 text-center">
            <span className="text-green-400 font-medium">📰 News</span>
          </div>
          <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 text-center">
            <span className="text-blue-400 font-medium">🛡️ Member Verification</span>
          </div>
          <div className="bg-purple-600/20 border border-purple-500/30 rounded-lg p-3 text-center">
            <span className="text-purple-400 font-medium">🌟 Community</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;