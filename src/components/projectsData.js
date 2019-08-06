const projectsData = [
    {
        id: 'project1',
        name: "Brooklyn Outdoor Film Festival",
        what: 'Mobile & desktop site',
        technologies: [
            'HTML', 
            'CSS', 
            'Bootstrap 4', 
            'JavaScript',
            'DevTools'
        ],
        skills: [
            'Making a modern and responsive web design',
            'Writing a project brief',
            'Choosing an appropriate technical solution',
            'Detailing project specifications',
            'Listing functionalities requested by the client'
        ],
        git: 'https://github.com/Alezh89/filmfestbrooklyn.com',
        site: 'https://alezh89.github.io/filmfestbrooklyn.com/',
        description: `A website made on the client description. Users suppose to be able to register them for the festival.
        Tasks were to create the project brief and specification.`,
        pictureText: [
            'Wide width devices view',
            'Mobile devices view'
        ]
              
    },

    {
        id: 'project2',
        name: "Turn-based war board game",
        what: 'Desktop game',
        technologies: [
            'HTML', 
            'CSS', 
            'Bootstrap 4', 
            'JavaScript',
            'jQuery',
            'DevTools'
        ],
        skills: [
            'Implementing the jQuery library in a web application',
            'Designing reusable JavaScript application architecture',
            'Developing an object-oriented JavaScript application',           
        ],
        git: 'https://github.com/Alezh89/war-board-game',
        site: 'https://alezh89.github.io/war-board-game/',
        description: `The turn-based strategy where two players by means of weapons and other items try to win by making to the other player 100 damage points.
        Each player can move up to 3 cells horizontally or vertically, except if there is a hindrance, then movements are limited.
        From the beggining, each player has the following points: 5 to attack with fists and 100 health. Each player can improve his attack points by collecting weapons.`,    
        pictureText: [
            'Main page',
            'Playground'
        ]   
    },

    {
        id: 'project3',
        name: "Restaurant review site",
        what: 'Mobile & desktop reviews site',
        technologies: [
            'ReactJS',
            'Google API, Fetch API, JSON',
            'DevTools',
            'HTML, CSS', 
            'Bootstrap 4', 
            'JavaScript',
            'jQuery'
        ],
        skills: [
            'Developing a full JavaScript application according to a specification',
            'Using an external API in JavaScript',
            'Debugging an application using DevTools', 
            'Using ReactJS library a project'          
        ],
        git: 'https://github.com/Alezh89/Restaurant-review-site-on-React-',
        site: 'https://restaurantsaround.netlify.com',
        description: `A restaurant review site with google maps API. One side of the website is the map with (1) featured restaurants 
        (with a JSON file) and (2) restaurants around the user. Another side is a list of all restaurants: featured and found for the user. 
        The map is centered on the user and searches for restaurants around him. It should be a button "Find me" somewhere. Each restaurant 
        has a layout with additional information: address, google street view picture and reviews (already existing). User should be able 
        to make a new review and to add a new restaurant by double-clicking on the map`,       
        pictureText: [
            'Map page with restaurants',
            'Mobile view, one restaurant'
        ]   
    },

    {
        id: 'project4',
        name: "Portfolio v 1",
        what: 'Mobile & desktop site',
        technologies: [
            'ReactJS (with styled components)',    
            'modern JavaScript',          
            'DevTools (improve performance)',
            'HTML, CSS, SASS'                      
        ],
        skills: [
            'Using react for a portfolio website',
            'Implementing new instruments (SASS, React styled components)',
            'Making a modern and responsive web design',           
        ],
        git: 'https://github.com/Alezh89/portfolio',
        site: 'https://agribko.netlify.com',
        description: `First version of this website portfolio that is result of my latest activity and practice. 
        Here I collected examples of my work and used my ReactJS knowledge`,       
        pictureText: [
            'Wide width devices view',
            'Mobile devices view'
        ] 
    },
    {
        id: 'project5',
        name: "Wordpress website",
        what: 'Mobile & desktop site',
        technologies: [
            'Wordpress',            
            'HTML', 
            'CSS',
            'DevTools'                      
        ],
        skills: [
            'Writing documentation destined for non-technical users',
            'Selecting a WordPress theme based on client needs',
            'Adapting a WordPress theme to client needs',           
        ],
        git: '',
        site: 'http://dev-petit-chateau.pantheonsite.io',
        description: `A website for a luxury real estate agency should be working on WordPress 
        and allow to add and change real estate objects. Documentation for administering the 
        websute should be created.`,       
        pictureText: [
            'Wide width devices view',
            'Mobile devices view'
        ] 
    },
    {
        id: 'project6',
        name: "Maping out a technical solution for the site",
        what: 'UML and SQL technical solution',
        technologies: [
            'UML',            
            'MySQL'                                 
        ],
        skills: [
            'Creating technical architecture using UML diagrams',
            'Designing a database schema',
            'Using a schema when designing a database',           
        ],
        git: 'https://github.com/Alezh89/UML-SQL',
        site: '',
        description: `A technical solution for a young startup that delivers their own high-quality meals to residences with their delivery team.
        Every day, they create 2 main dishes and 2 desserts. These 2 main dishes are stored and then given to delivery people who bike to the food to the residence. 
        The Startup allows clients to order one or multiple dishes. Menu items change every day.
        The task was to make a MySQL database and a UML diagram to model this technical architecture for the startup.`,       
        pictureText: [
            'technical solution: UML diagram',
            'SQL database made in MySQL '
        ] 
    },

    {
        id: 'project7',
        name: "Working on an existing project",
        what: 'Analysis of an existing project',
        technologies: [
            'Jasmine (testing framework)',            
            'DevTools, performance optimization',
            'JS'

        ],
        skills: [
            'Optimize the performance of a project using DevTools',
            'Implement unit and functional tests in a web application',
            'Take over an existing JavaScript project',           
        ],
        git: 'https://github.com/Alezh89/Todo-list',
        site: '',
        description: `The given app 'to-do list' written with bugs had to be tested and fixed. 
        Also, recommendations on the rendering speed were given. Technical documentation was written for this project.`,       
        pictureText: [
            'Jasmine testing framework',
            'Technical documentation'
        ] 
    },
    {
        id: 'project8',
        name: "Quotation generator",
        what: 'Mobile & desktop quotation generator',
        technologies: [
            'HTML',
            'CSS',             
            'JS',
            'DevTools'
        ],
        skills: [
            'Designing an algorithm to meet a specification',
            'Implementing the JavaScript syntax in a program',                  
        ],
        git: 'https://github.com/Alezh89/quotegenerator',
        site: 'https://alezh89.github.io/quotegenerator/',
        description: `A random quote generator of 2 types: (1) Where the quotes will be randomly constructed 
        by assembling different pieces of a sentence, and (2) With movie quotes. In each case, a user can choose the number 
        of quotes (up to 5).`,       
        pictureText: [
            'Wide width devices view',
            'Mobile devices view'
        ] 
    },
    {
        id: 'project9',
        name: "Movie grid in React",
        what: 'Mobile & desktop app',
        technologies: [
            'HTML',                         
            'JS',
            'React',
            'Material-ui'
        ],
        skills: [
            'Designing an algorithm to meet a specification',
            'Making responsive and interactive react based movie grid',                  
        ],
        git: 'https://github.com/Alezh89/Movie-grid-with-react',
        site: 'https://movie-grid-react.netlify.com',
        description: `Responsive and interactive movie grid. Movies can be shown as 4, 8 or 12 per page, deleted and liked/disliked. There is pagination.`,       
        pictureText: [
            'Wide width devices view',
            'Mobile devices view'
        ] 
    },

    ];

export default projectsData;