// *** Creating objects *** - bio, work, projects, education

var bio = {
	"name": "Jonathan Hunter",
	"role": "Front-end Developer",
	"contacts": {
		"email": "me@jonathanhunter.co.za",
		"mobile": "083 450 6397",
		"twitter": "@JON4TH4NHUNT3R",
		"github": "https://github.com/JON4TH4NHUNT3R",
        "linkedin": "linkedin.com",
		"location": "Cape Town, South Africa"
    },
	"imgURL": "images/me.jpg",
	"welcome": "<strong>Welcome to my Udacity sponsored resume!</strong> All the information you see here is stored in JSON objects with javascript building the page on the fly. It's here to show that I can use some basic javascript front end techniques. The source can be found on <a href='https://github.com/JON4TH4NHUNT3R/frontend-nanodegree-resume.git'>github project page</a>.",
	"skills": ["HTML", "CSS", "JavaScript", "Awesome Sauce" ]
};

var work = {
	"jobs": [
		{
			"employer": "Cars-4-Hire",
			"title": "Web developer",
			"location": "Cape Town, South Africa",
			"dates": "2015 - Present",
			"description": "Maintenance and design of the Cars-4-Hire website, responsible for updating content and optimizing the website in order to increase conversions"
		},
		{
			"employer": "Zanzibar Organic Solutions",
			"title": "Web Developer",
			"location": "Zanzibar, Tanzania",
			"dates": "2014-2015",
			"description": "Oversaw the maintanence and improvement of Zanzibar Organic Solutions clients web pages"
		},
		{
			"employer": "Grow Guru",
			"title": "Web developer, SEO, Content creation",
			"location": "Port Elizabeth, South Africa",
			"dates": "2013-2014",
			"description": "Created the responsive Grow Guru website, Perfomed ongoing SEO optimisations and produced content for the blog"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "My Responsive Portfolio",
			"description": "Responsive portfolio built with HTML, CSS and JS",
			"dates": "2015",
			"images": ["images/facebook.png"]
		},
		{
			"title": "Frogger type game",
			"description": "Frogger game built with JS",
			"dates": "2015",
			"images": ["images/facebook.png"]
		},
		{
			"title": "Cars-4-Hire Responsive Design",
			"description": "A responsive website built on Bootstrap framework using HTML, CSS, JS and PHP",
			"dates": "2015",
			"images": ["images/google.png"]
		},
	 	{
			"title": "Grow Guru",
			"description": "Created a wordpress theme, content creation, SEO optimization, Bitcoin integration",
			"dates": "2013",
			"images": ["images/facebook.png"]
		},
		{
			"title": "Blockchain House Branding Package",
			"description": "Created a full branding package that included business cards, logo, etc",
			"dates": "2012",
			"images": ["images/facebook.png"]
		},
	]
};

var education = {
	"schools": [
		{
			"name": "University of Cape Town",
			"location": "Cape Town, South Africa",
			"degree" : "BA of Music (Incomplete)",
			"majors": ["Composition", "Electronic Production"],
			"dates": "2006 - 2009",
            "url" : "http://www.uct.co.za"
		}],
	"onlineCourses": [
		{
			"title": "Introduction to HTML",
			"school": "Udacity",
			"dates": "2015",
			"url": "http://udacity.com",
            "desc": "Learn how to convert digital design mockups into static web pages and how to build a responsive portfolio site to showcase your work."
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2015",
			"url": "http://www.udacity.com",
            "desc": "Learn JavaScript syntax and coding conventions that web developers use to create interactive and dynamic websites while you create an online resume for your portfolio."
		}
	]
};
