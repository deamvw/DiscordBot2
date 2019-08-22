var config = { 
	ownerID: '396289275043381249', 
	token: 'NTMyMDczMDQ4MjM3NjcwNDIx.XVjlFQ.DGmUaFOn3c1XBfUQdd-kSzKdTP8',
	status: 'online', // Bot status [online/idle/invisible/dnd]
	debug: 'true', 
	playingGame: '{{prefix}}help | {{guilds}} guilds | v{{version}}', 
	purgeLogFormat: '\n Message ID: {{mID}} | Message Timestamp: {{mTS}} | Content: {{mC}} \n', 
	eightBallResponses: ['Yes', 'No', 'Certainly', 'My sources say yes', 'Try again later', 'Without a doubt', 'Better not to tell you now'], 
	cleverbotToken: 'ViEQnub6IJwwCnQWH7hE9ji4oqLwc8a0', 
  googleAPIToken: 'AIzaSyDBUXwnXXqGpEfZ6YrYjAvRAM-ybW9V5p0', 
  logTimeFormat: 'D MMM YYYY HH:mm:ss ZZ',
  musicEnabled: 'true',
	defaultSettings: {
		prefix: '$',
		modLogChannel: 'local',
		modRole: 'Moderator',
		adminRole: 'Administrator',
		welcomeChannel: 'welcome-messages',
		welcomeMessage: 'Welcome {{user}}! Read the rules first before you type! When you use the channels you automatically agree with the rules',
		welcomeEnabled: 'true',
		inviteFilterEnabled: 'true',
		inviteWhitelist: ['discord-testers', 'discord-developers'], 
		facepalms: 'true', 
		swearFilter: 'true',
		swearWords: ['damn'], 
		logDeletes: 'true',
		logNewMember: 'true',
		logMemberLeave: 'true',
		logCommandUsage: 'true',
		logPurge: 'true',
		commandTimeout: '2500',
		sendHelp: 'DM' // options: channel, dm
	},
	dashboard: {
		enabled: 'true', 
		oauthSecret: 'Mzk2Mjg5Mjc1MDQzMzgxMjQ5.XScJcw.ULlDuvKR4bhy5F5B-bxHNsPxRvA', 
		secure: 'false', 
		sessionSecret: 'SyS001100PlAtFoRm_001_ABC', 
		domain: 'localhost:33445', 
		port: '33445', 
		invitePerm: '536079575',
		protectStats: 'false',
		borderedStats: 'true', 
		legalTemplates: {
			contactEmail: 'dean@dean.com.nl', 
			lastEdited: '11-07-2019' 
		}
	}
};

module.exports = config;
