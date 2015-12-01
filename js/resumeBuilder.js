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
    "imgURL": "images/140.jpg",
    "welcome": "<strong>Welcome to my resume!</strong> All the information you see here is stored in JSON objects with javascript building the page on the fly. It's here to show that I can use some basic javascript front end techniques. The source can be found on <a href='https://github.com/JON4TH4NHUNT3R/frontend-nanodegree-resume.git'>github project page</a>.",
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
            "images": ["images/140.jpg"]
        },
        {
            "title": "Frogger type game",
            "description": "Frogger game built with JS",
            "dates": "2015",
            "images": ["images/140.jpg"]
        },
        {
            "title": "Cars-4-Hire Responsive Design",
            "description": "A responsive website built on Bootstrap framework using HTML, CSS, JS and PHP",
            "dates": "2015",
            "images": ["images/140.jpg"]
        },
        {
            "title": "Grow Guru",
            "description": "Created a wordpress theme, content creation, SEO optimization, Bitcoin integration",
            "dates": "2013",
            "images": ["images/140.jpg"]
        },
        {
            "title": "Blockchain House Branding Package",
            "description": "Created a full branding package that included business cards, logo, etc",
            "dates": "2012",
            "images": ["images/140.jpg"]
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
var skills = {
    "skills": [
        {
            id: "design",
            name: "Design",
            value: 6,
            info: "I have experience with Gimp Editor and many CSS tricks. I've created numerous user interfaces and love focusing on the artistic and creative side of a website."
        },
        {
            id: "frontend",
            name: "Front-end dev",    
            value: 8,
            info: "I have deveoped the front end on a number of business websites. I have experience technologies including HTML5, CSS, Javascript and jquery as well as with standards such as WCAG accessibility standards and user experience testing."
        },
        {
            id: "backend",
            name: "Back-end dev",    
            value: 2,
            info: "I am still learning backend techniques and am only familiar with basic CMS systems such as Wordpress and Drupal. I also have basic experience with Python."
        },
        {
            id: "comms",
            name: "Communication",     
            value: 7,
            info: "I have experience both in official communication channels as well as general community skills with management and staff."
        }
    ],
    "chart" : {
        "width": 420,
        "barHeight": 30,
        "margin": {top: 0, right: 30, bottom: 30, left: 20},
        "domain": {min: 0, max: 10}
    }
}; 



// *** Displaying functions ***

 bio.display = function () {  
    
    // Create HTML
    var bioName = HTMLheaderName.replace("%data%", bio.name);
    var bioRole = HTMLheaderRole.replace("%data%", bio.role);
    var bioEmail = HTMLemail.replace("%data%", bio["contacts"].email);
    var bioMobile = HTMLmobile.replace("%data%", bio["contacts"].mobile);
    var bioTwitter = HTMLtwitter.replace("%data%", bio["contacts"].twitter);
    var bioGithub = HTMLgithub.replace("%data%", bio["contacts"].github);
    var biolinkedin = HTMLlinkedin.replace("%data%", bio["contacts"].linkedin);
    var bioLocation = HTMLlocation.replace("%data%", bio["contacts"].location);
    var bioPic = HTMLbioPic.replace("%data%", bio["imgURL"]);
    var bioWelcome = HTMLwelcomeMsg.replace("%data%", bio["welcome"]);
    var clearFix = "<div style='clear: both;'></div>";

    // Append HTML
    $("#header").prepend(bioName); 
    $("#header").prepend(bioPic);
 //   $("#header").prepend(bioRole); // Removed
    
    $("#header").append(bioWelcome);

    $("#topContacts").append(bioEmail);
    $("#topContacts").append(bioMobile);
    $("#topContacts").append(bioTwitter);
    $("#topContacts").append(bioGithub);
    $("#topContacts").append(biolinkedin);
    $("#topContacts").append(bioLocation);

  //  $("#header").append(HTMLskillsStart); 
    
    // Get skills bio data from the skills object
 //   for (var i in skills.skills) {
 //       $("#skills").append(HTMLskills.replace("%data%", skills.skills[i].name)); 
  //  }
    
    $("#header").append(clearFix); 
}

work.display = function () {
    
    // Cycle through job objects and display each job
    for (var i in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var jobTitle = (HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i]["title"]));
        var jobLocation = HTMLworkLocation.replace("%data%", work.jobs[i]["location"]);
        var jobDates = HTMLworkDates.replace("%data%", work.jobs[i]["dates"]);
        var jobDesc = HTMLworkDescription.replace("%data%", work.jobs[i]["description"]);
        $(".work-entry:last").append(jobTitle, jobLocation, jobDates, jobDesc);
    }

}

education.display = function() {
    // Displays for schools
    $("#education").append("<h3>University Education</h3>");
    for (var i in education.schools) {
        $("#education").append(HTMLschoolStart);
        var schoolsNameDegree = (HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
        schoolsNameDegree = schoolsNameDegree.replace("href='#", "href='" + education.schools[i].url);
        var schoolsDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var schoolsLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        
        // Allows multiple majors to be inserted
        var schoolsMajor = ''
        for (var i2 in education.schools[i].majors) {
            schoolsMajor = schoolsMajor + HTMLschoolMajor.replace("%data%", education.schools[i].majors[i2]);
        }
        
        $(".education-entry:last").append(schoolsNameDegree, schoolsDates, schoolsLocation, schoolsMajor);
        
       }
    
    // Displays for online courses
    $("#education").append(HTMLonlineClasses);
    
    for (var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var onlineTitleSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        onlineTitleSchool = onlineTitleSchool.replace("href='#", "href='" + education.onlineCourses[course].url);
        var onlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var onlineDesc = "<br><p>" + education.onlineCourses[course].desc + "</p>";
        $(".education-entry:last").append(onlineTitleSchool, onlineDate, onlineDesc);
    }
}

projects.display = function () {
    
    $("#projects").append('<div class="project-entries">');
    
    // Cycle through each project and display
    for (var i in projects.projects) {
        $(".project-entries").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var projectDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var projectImg = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $(".project-entry:last").append(projectTitle, projectDesc, projectDates, projectImg);
    }
}

skills.display = function () {
    //  *** Create the chart ***
    $('#skillsChart').append('<p class="skillsIntro">How are my abilities in each level of expertise?<br> Click each bar for more information.</p>');
    $('#skillsChart').append('<div class="skills-entry"></div>');

    $('.skills-entry').append('<div class="skillChartContainer"><svg class="chart"></svg></div>');

    // Create x-scale domain and ranage for graph
    var x = d3.scale.linear().domain([skills.chart.domain.min, skills.chart.domain.max]).range([0, skills.chart.width]);

    // Create chart size including margin.
    var chartHeight = skills.chart.barHeight * skills.skills.length;
    var chartContainerHeight = chartHeight + skills.chart.margin.top + skills.chart.margin.bottom;
    var chartContainerWidth = skills.chart.width + skills.chart.margin.left + skills.chart.margin.right;
    
    // Create the chart
    var chart = d3.select(".chart").attr("width", chartContainerWidth).attr("height", chartContainerHeight).append("g").attr("transform", "translate(" + skills.chart.margin.left + "," + skills.chart.margin.top + ")");

    // Create the containers for each bar
    var bar = chart.selectAll("g").data(skills.skills).enter().append("g").attr("transform", function(d, i) {return "translate(0," + i * skills.chart.barHeight + ")"; });
    
    // Generate xAxis using d3
    var xAxis = d3.svg.axis().scale(x).orient("bottom");
    
    // Create the visible <rect> that is the visible bar
    bar.append("rect").attr("width", function(d) { return x(d.value); }).attr("height", skills.chart.barHeight - 1 ).attr("id", function(d) { return d.id + '-bar'; }).attr("class", "skill-bar");
    
    // Add the text label for each bar
    bar.append("text").attr("x", 4).attr("y", skills.chart.barHeight / 2).attr("dy", ".35em").attr("class", "bar-text").text(function(d) { return d.name; });
    
    // Create x-axis --> Magic
    chart.append("g").attr("class", "x axis").attr("transform", "translate(0," + (skills.chart.barHeight * skills.skills.length) + ")").call(xAxis);
    
    // Create x-axis title. Using magic number 30 because I don't know how to move from the bottom of chart nor how to find the size of the X axis labelling
    chart.append("g").append("text").attr("y", chartHeight + 30).attr("x", skills.chart.width/2).attr("class", "x-title").text("Awesomness level");
    
    // create y-axis title. Using magic number -5 for positioning. 
    chart.append("g").append("text").attr("transform", "rotate(-90)").attr("y", -5).attr("x", chartHeight / -2).attr("class", "y-title").text("Skills");
    
    // *** Create the text info ***
    $('.skills-entry').append('<div class="skills-info"></div>');
    
    for (var i in skills.skills) {
        $('.skills-info').append('<div id="' + skills.skills[i].id + '-info" class="skillInfo"><h3>' + skills.skills[i].name + '</h3><p>' + skills.skills[i].info + '</p>');
    }
    
    // Hide all but the first skills info
    $('.skillInfo').addClass('hide');
    $('.skillInfo').first().removeClass('hide');
    
    // Hide and show text entries based on clicking of graph
    $('.skill-bar').click(function () {
        var skill = $(this).attr('id').replace('-bar', '');
        $('.skillInfo').addClass('hide');
        $('#' + skill + '-info').removeClass('hide');
    });

};

// *** Execture functions ***
bio.display();
projects.display();
work.display();
education.display();
skills.display();


// *** Map ***
function locationizer (work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}

// **** Internationalize Name Button
function inName (name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$('#header').prepend(internationalizeButton);

$("#mapDiv").append(googleMap);

// *** Click logging ***
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
});
