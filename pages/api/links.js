const links = [
	{
		_id: 'link_1',
		icon: {
			path: '/icons/Octicons-mark-github.svg',
			width: 76
		},
		gradient: {
			from: '#13E780',
			to: '#00bbd5'
		},
		link: 'https://github.com/Kuldik',
		title: 'My github page',
		isImportant: true
	},
	{
		_id: 'link_2',
		icon: {
			path: '/icons/codepen.svg',
			width: 115
		},
		gradient: {
			from: '#fc5dff',
			to: '#5dfdff'
		},
		link: 'https://codepen.io/Klimenko-Tim',
		title: 'My Codepen page'
	},

	{
		_id: 'link_4',
		icon: {
			path: '/icons/telegram.svg',
			width: 80
		},
		gradient: {
			from: '#76acfd',
			to: '#6ed0ff'
		},
		link: 'https://t.me/KuldikS',
		title: 'My Telegram'
	}
]

export default function handler(req, res) {
	res.status(200).json(links)
}
