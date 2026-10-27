// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Maxim',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'fb813be9b6b9d9b3777e2d216d5c6a2b', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '55.9908',
	defaultLongitude: '37.2142',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'YouTube',
			icon: 'square-play',
			link: 'https://youtube.com',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.ru',
		},
		{
			id: '3',
			name: 'Mos',
			icon: 'backpack',
			link: 'https://mos.ru',
		},
		{
			id: '4',
			name: 'scribbl',
			icon: 'signature',
			link: 'https://skribbl.io',
		},
		{
			id: '5',
			name: 'Jemini',
			icon: 'brain-circuit',
			link: 'https://google.com',
		},
		{
			id: '6',
			name: 'Max',
			icon: 'message-circle-more',
			link: 'https://max.ru',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'lichess',
			icon: 'chess-pawn',
			link: 'https://lichess.org',
		},
		{
			id: '2',
			name: 'twitch',
			icon: 'monitor-play',
			link: 'https://twitch.tv',
		},
		{
			id: '3',
			name: 'languages',
			icon: 'languages',
			link: 'https://yandex.ru',
		},
		{
			id: '4',
			name: 'casebatle',
			icon: 'briefcase',
			link: 'https://case-battle.wtf',
		},
		{
			id: '5',
			name: 'Xplay',
			icon: 'gamepad-directional',
			link: 'https://xplay.gg',
		},
		{
			id: '6',
			name: 'gartic',
			icon: 'brush',
			link: 'https://garticphone.com',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'Inspirational',
					link: 'https://youtube.com',
				},
				{
					name: 'Classic',
					link: 'https://youtube.com',
				},
				{
					name: 'Oldies',
					link: 'https://youtube.com',
				},
				{
					name: 'Rock',
					link: 'https://youtube.com',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://linkedin.com',
				},
				{
					name: 'Dribbble',
					link: 'https://dribbble.com',
				},
				{
					name: 'Trello',
					link: 'https://trello.com',
				},
				{
					name: 'Slack',
					link: 'https://slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com',
				},
			],
		},
	],
};
