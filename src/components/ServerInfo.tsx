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

  const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string | number; gradient: string }> = ({ 
    icon, 
    label, 
    value, 
    gradient
  }) => (
    <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      <div className="relative z-10 flex items-center space-x-4">
        <div className={`p-3 rounded-xl ${gradient} bg-opacity-20 backdrop-blur-sm`}>
          {icon}
        </div>
        <div>
          <p className="text-gray-300 text-sm font-medium mb-1">{label}</p>
          <p className="text-white text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 color-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/15 via-transparent to-cyan-900/15 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 via-transparent to-pink-900/10 animate-pulse" style={{animationDelay: '6s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-400/25 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-pink-400/35 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative p-6 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl border border-white/20">
                <img 
                  src="https://cdn.discordapp.com/icons/1382491941131915314/23e9803c7371f6361e198bec8a938978.webp?size=512" 
                  alt="FireKid Projects" 
                  className="w-24 h-24 rounded-2xl shadow-2xl mx-auto mb-4"
                />
                <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-3">
                  🏰 FireKid Projects
                </h1>
                <p className="text-gray-300 text-xl">Your Creative Gaming Community</p>
              </div>
            </div>
          </div>

          {/* Daily Coins Notice */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-r from-yellow-600/10 to-orange-600/10 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-xl">
                  <Coins className="h-8 w-8 text-yellow-300" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Daily Rewards System
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
                <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-4">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="font-medium">Daily Bonus</p>
                    <p className="text-sm text-gray-400">Use <code className="bg-gray-800/50 px-2 py-1 rounded text-yellow-300">/daily</code> for 500 coins!</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-4">
                  <Wallet className="h-6 w-6 text-blue-400" />
                  <div>
                    <p className="font-medium">Check Balance</p>
                    <p className="text-sm text-gray-400">Use <code className="bg-gray-800/50 px-2 py-1 rounded text-blue-300">/wallet</code></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sensitivity Generator Notice */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-xl border border-purple-400/20 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    Sensitivity Generator
                  </h3>
                  <p className="text-gray-400 text-sm">Gaming sensitivity calculator & converter</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Free Users */}
                <div className="bg-white/5 rounded-xl p-6 border border-gray-600/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gray-500/20 rounded-lg">
                      <span className="text-lg">👤</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-200">Free Users</h4>
                      <p className="text-sm text-gray-400">Basic access</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="text-yellow-400">⚡</span>
                      <span>1 generation per week</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">🎮</span>
                      <span>Basic sensitivity conversion</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">📊</span>
                      <span>Standard game support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-purple-400">💾</span>
                      <span>Export image</span>
                    </li>
                  </ul>
                </div>

                {/* VIP Users */}
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-400/40">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg">
                      <span className="text-lg">👑</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">VIP Members</h4>
                      <p className="text-sm text-gray-400">Premium access</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-400">🚀</span>
                      <span className="font-medium">Unlimited generations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-purple-400">⚡</span>
                      <span>Priority processing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-pink-400">🎯</span>
                      <span>Advanced sensitivity tools</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">🎮</span>
                      <span>More playstyles & experience options</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-yellow-400">💾</span>
                      <span>Export image</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  🔗 Access the sensitivity generator link in the <code className="bg-gray-800/50 px-2 py-1 rounded text-purple-300">#announcement</code> channel
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              icon={<Users className="h-8 w-8 text-blue-300" />} 
              label="Total Members" 
              value="48" 
              gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
            />
            <StatCard 
              icon={<Crown className="h-8 w-8 text-yellow-300" />} 
              label="Boost Level" 
              value="0" 
              gradient="bg-gradient-to-br from-yellow-500 to-orange-500"
            />
            <StatCard 
              icon={<Hash className="h-8 w-8 text-green-300" />} 
              label="Total Channels" 
              value="38" 
              gradient="bg-gradient-to-br from-green-500 to-emerald-500"
            />
            <StatCard 
              icon={<Star className="h-8 w-8 text-purple-300" />} 
              label="Custom Emojis" 
              value="44" 
              gradient="bg-gradient-to-br from-purple-500 to-pink-500"
            />
          </div>

          {/* Server Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-300" />
                  </div>
                  <span>Server Information</span>
                </h3>
                <div className="space-y-4 text-gray-200">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 font-medium">Server ID:</span>
                    <span className="font-mono text-sm bg-gray-800/50 px-3 py-1 rounded">1382491941131915314</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 font-medium">Owner:</span>
                    <span className="font-semibold">he_is_him.</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 font-medium">Created:</span>
                    <span>Wed Jun 11 2025</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 font-medium">Verification Level:</span>
                    <span className="text-sm">Low - Must have verified email</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg">
                    <Users className="h-6 w-6 text-green-300" />
                  </div>
                  <span>Member Statistics</span>
                </h3>
                <div className="space-y-4 text-gray-200">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 font-medium">Humans:</span>
                    <span className="text-2xl font-bold text-green-300">46</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 font-medium">Bots:</span>
                    <span className="text-2xl font-bold text-blue-300">2</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 font-medium">Currently Online:</span>
                    <span className="text-orange-300">Variable</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-gray-400 font-medium">Recent Joins (7 days):</span>
                    <span className="text-2xl font-bold text-purple-300">48</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Channels */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                  <Hash className="h-6 w-6 text-purple-300" />
                </div>
                <span>Server Channels</span>
              </h3>

              {/* Important Channels */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-200 mb-4 flex items-center space-x-2">
                  <span>📋</span>
                  <span>Important Channels</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-400/30 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-300 text-lg">🏠</span>
                      <span className="text-green-300 font-medium">Welcome:</span>
                    </div>
                    <span className="text-gray-200 ml-2">#👋-welcome</span>
                  </div>
                  <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-400/30 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-300 text-lg">📋</span>
                      <span className="text-red-300 font-medium">Rules:</span>
                    </div>
                    <span className="text-gray-200 ml-2">#rules</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-400/30 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-300 text-lg">📰</span>
                      <span className="text-blue-300 font-medium">Updates:</span>
                    </div>
                    <span className="text-gray-200 ml-2">#『updates』</span>
                  </div>
                </div>
              </div>

              {/* Channel Categories */}
              <div className="space-y-6">
                {channelCategories.map((category, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <h4 className="text-gray-200 font-semibold mb-4 flex items-center space-x-2 text-lg">
                      <span>📁</span>
                      <span>{category.name}</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {category.channels.map((channel, channelIndex) => (
                        <div key={channelIndex} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                          <div className={`p-1 rounded ${channel.type === 'voice' ? 'bg-green-500/20' : 'bg-blue-500/20'}`}>
                            {channel.type === 'voice' ? (
                              <Volume2 className="h-4 w-4 text-green-300" />
                            ) : (
                              <MessageCircle className="h-4 w-4 text-blue-300" />
                            )}
                          </div>
                          <span className="text-gray-300 font-medium">{channel.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Other Channels */}
              <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-gray-200 font-semibold mb-4 flex items-center space-x-2 text-lg">
                  <span>📺</span>
                  <span>Other Channels</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {otherChannels.map((channel, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
                      <div className="p-1 rounded bg-purple-500/20">
                        <MessageCircle className="h-4 w-4 text-purple-300" />
                      </div>
                      <span className="text-gray-300 font-medium">{channel.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        .animate-pulse {
          animation: pulse 6s ease-in-out infinite;
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes colorShift {
          0% { 
            background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #1f2937 100%);
          }
          25% { 
            background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%);
          }
          50% { 
            background: linear-gradient(135deg, #134e4a 0%, #0d9488 50%, #134e4a 100%);
          }
          75% { 
            background: linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #4c1d95 100%);
          }
          100% { 
            background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #1f2937 100%);
          }
        }
        
        .color-shift {
          animation: colorShift 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServerInfo;
