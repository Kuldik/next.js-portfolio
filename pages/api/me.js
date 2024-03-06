const me = {
	siteName: 'Kuldik',
	avatar: '/avatar.jpeg',
	description:
		'<p>My name is Tim. Im 19 years old. I am a junior frotend developer. My work experience is more than 6 months.</p>' +
		'<p>This project was created as an educational project in the form of a portfolio with all links to my work pages and social networks.</p>' +
		'<p>At the moment I am mastering fundamental knowledge of the React, Next.js and other framework libraries.</p>' +
		'<p>I will be glad to any proposals for cooperation. Thank you in advance 😊</p>'
}

export default function handler(req, res) {
	res.status(200).json(me)
}
