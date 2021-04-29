const PROJECTS = [
  {
    title: "Vanilla JS Battleship",
    description: `Vanilla JS Battleship game`,
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,w_500/v1611531005/Portafolio%20Gifs/battleship_oev79c.gif",
    demo: "https://fskarmeta-battleship.netlify.app/",
    github: "https://github.com/fskarmeta/js-vanilla-battleship-game",
    date: "Jan 24, 2021",
    stack: "JavaScript, CSS",
    snipet: false,
    favorite: true,
    backend: false,
  },
  {
    title: "This Portfolio",
    description: `This portfolio is responsive and was made with React and Bootstrap.`,
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,w_500/v1611530424/Portafolio%20Gifs/Screenshot_qvxzzp.png",
    demo: "https://www.bafian.com/",
    github: "https://github.com/fskarmeta/personal-portfolio",
    date: "Jan 18, 2021",
    stack: "React, Bootstrap",
    snipet: false,
    favorite: true,
    backend: false,
  },
  {
    title: "Tibia Game Bot",
    description: `With the only purpose of learning and develop my coding skills, I created a bot for the game Tibia. It uses a library called robot.js that replicates many of the functionalities that python's pygui has to offer but in node.js. In short, it has the main script that automates your mouse and keyboard to eat and craft runes after a random amount of time. A smaller script is there to fish. But the best thing is that it listens constantly to the chat and if an admin talks to you the script gets stopped, an SMS message is sent to your phone with a warning and your player will say "hello" :P.  `,
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/tibia_lxyunq.jpg",
    demo: null,
    github: "https://github.com/fskarmeta/tibia-robotjs-bot",
    date: "Jan 13, 2021",
    stack: "Node.js",
    snipet: false,
    favorite: true,
    backend: true,
  },
  {
    title: "Pomodoro Clock",
    description: `The idea of this clock is to set a timer and define breaks for your study, 
    it is assumed that it makes your use of time more efficient. Also a FCC Front End Libraries Certificate project.`,
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/pomodoro_sbjvy9.gif",
    demo: "https://codepen.io/fskarmeta/full/oNzMoZo",
    github: "https://github.com/fskarmeta/25-5-clock-React-Bootstrap",
    date: "Jan 5, 2021",
    stack: "CSS3,  Bootstrap, React",
    snipet: false,
    favorite: true,
    backend: false,
  },
  {
    title: "JavaScript Calculator",
    description: `I decided to do this calculator for the FCC Front End Certificate with plain Vanilla JavaScript and a functional approach. I also rendered all the HTML from the script, it was a lot of fun and it felt like a good consolidation of my JavaScript skills.`,
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/calculator_ylu336.png",
    demo: "https://codepen.io/fskarmeta/full/abmGjVG",
    github: "https://github.com/fskarmeta/calculator-vanillaJS-nohtml-css-grid",
    date: "Jan 4, 2021",
    stack: "CSS3,  JavaScript",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Drum Machine",
    description: `In the context of the FFC Front End Libraries Certificate, I made this drum machine with a simple display.`,
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/drum-machine_bws75w.gif",
    demo: "https://codepen.io/fskarmeta/full/BaLYXjm",
    github: "https://github.com/fskarmeta/drum-machine",
    date: "Jan 1, 2021",
    stack: "CSS3,  React",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Markdown Previewer",
    description: `Also done in the context of the FCC Front End Libraries Certificate, here you can write text with markdown language and it will get displayed next to it.`,
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857580/Portafolio%20Gifs/markdown_ih8ukl.gif",
    demo: "https://codepen.io/fskarmeta/full/LYRzWVe",
    github: "https://github.com/fskarmeta/markdown-preview-react",
    date: "Dec 22, 2020",
    stack: "CSS3,  Bootstrap, React",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Chilegigs",
    description: `Here I combined all my skills to produce
    a full-stack CRUD web app which is a DJ Booking website where Dj's expose their technical
    requirements and have negotiations with the client before the "gig" is set. Dj's and clients
    can also leave a feedback after the show has passed. It has a fully functional
    CMS platform created from scratch for the admin that allows you to delete accounts,
    change elements of the home and supervise the overall traffic of the website. It also
    integrates a password recovery and user notification system with flask-mail + JWT token
    and uses more than 10 React Libraries.`,
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857582/Portafolio%20Gifs/chilegigs_pghpp9.gif",
    demo: "https://chilegigs.netlify.app/",
    github: "https://github.com/fskarmeta/chilegigs-project",
    date: "Dec 16, 2020",
    stack: "Python, Flask, React, Postgres",
    snipet: false,
    favorite: true,
    backend: true,
  },
  {
    title: "SMS Queue Mngmt",
    description:
      "A serverside queue SMS management system using Twilio and showcasing the use of FIFO and LIFO methods.",
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/smsque_hjfmvv.jpg",
    demo: null,
    github:
      "https://github.com/fskarmeta/SMS-Queue-Management-System-Twilio-Flask",
    date: "Nov 23, 2020",
    stack: "Python, Flask",
    snipet: false,
    favorite: false,
    backend: true,
  },
  {
    title: "Tic Tac Toe Game",
    description: "The classic Tic Tac Toe Game made with React :) ",
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/tic-tac-toe_ph80lr.gif",
    demo: "https://fskarmeta-tic-tac-toe.netlify.app/",
    github: "https://github.com/fskarmeta/birds-of-chile-react-spanish",
    date: "Nov 22, 2020",
    stack: "CSS3, React",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Birds Of Chile",
    description:
      "A display of some birds from Chile, consuming a ninjas.cl API and using a CSS cube concept. You can also filter the birds by name :)",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610859039/Portafolio%20Gifs/b-birds_bupizr.gif",
    demo: "https://fskarmeta-birds.netlify.app/",
    github: "https://github.com/fskarmeta/birds-of-chile-react-spanish",
    date: "Nov 21, 2020",
    stack: "CSS3, React",
    snipet: false,
    favorite: true,
    backend: false,
  },
  {
    title: "CRUD Todo List",
    description:
      "A classic todo list with backend, so your todo's won't be forgotten :D",
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/todolist_punjai.gif",
    demo: "https://fskarmeta-todo-list.netlify.app/",
    github: "https://github.com/fskarmeta/todo-list-react-flask",
    date: "Nov 18, 2020",
    stack: "CSS3, React, Python, Flask, MySQL",
    snipet: false,
    favorite: true,
    backend: true,
  },
  {
    title: "Star-Wars Fan Site",
    description:
      "Consuming a Star-Wars API (Swapi) and an opportunity to train React's Router-Dom",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857590/Portafolio%20Gifs/starwars_gaxcpk.gif",
    demo: "https://star-wars-react-context-router.web.app/",
    github: "https://github.com/fskarmeta/starwars-react-context-router-fetch",
    date: "Nov 12, 2020",
    stack: "CSS3, React",
    snipet: false,
    favorite: true,
    backend: false,
  },
  {
    title: "CRUD Contact List",
    description:
      "A contact List using React's Context and Router, showcasing get, put, post, and delete API usage.",
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/contact-list-crud_t3qna3.gif",
    demo: null,
    github:
      "https://github.com/fskarmeta/contact-list-react-context-routes-api",
    date: "Nov 12, 2020",
    stack: "CSS3, React",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Github Calendar",
    description:
      "A calendar clone of the GitHub calendar, it also has a post wall added just to test its possible functionality.",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857577/Portafolio%20Gifs/github-calendar_ztjtzy.gif",
    demo: "https://fskarmeta-calendar-clone.netlify.app/",
    github:
      "https://github.com/fskarmeta/react-github-contributions-calendar-clon",
    date: "Nov 6, 2020",
    stack: "CSS3, React",
    snipet: false,
    favorite: true,
    backend: false,
  },
  {
    title: "Music Player + Fetch",
    description:
      "A music player fetching music from an API and done with custom css",
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/music-player_bf5ggq.gif",
    demo: "https://fskarmeta-music-player.netlify.app/",
    github: "https://github.com/fskarmeta/react-music-player-fetch",
    date: "Nov 4, 2020",
    stack: "CSS3, React",
    snipet: false,
    favorite: true,
    backend: false,
  },
  {
    title: "Traffic Light Toggler",
    description:
      "Toggle the lights of the traffic light when clicking on them :)",
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/semaforo_tobhzn.gif",
    demo: "https://fskarmeta-traffic-light.netlify.app/",
    github: "https://github.com/fskarmeta/react-traffic-light-state",
    date: "Oct 31, 2020",
    stack: "CSS3, React",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Timer",
    description:
      "A timer that starts counting since window load. It has reset, stop, and resume button.",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857579/Portafolio%20Gifs/react-timer_o1halk.gif",
    demo: "https://fskarmeta-react-counter.netlify.app/",
    github: "https://github.com/fskarmeta/react-timer",
    date: "Oct 30, 2020",
    stack: "CSS3, Bootstrap, React",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Selection Card Sort",
    description: "App that sorts your cards using the Selection Sort Algorithm",
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/selection-card-sort_pgvwlf.gif",
    demo: "https://fskarmeta-select-sorting-cards.netlify.app/",
    github: "https://github.com/fskarmeta/select-sorting-cards",
    date: "Oct 26, 2020",
    stack: "CSS3, JavaScript",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Bubble Card Sort",
    description: "App that sorts your cards using the Bubble Sort Algorithm",
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/bubble-card-sort_kalcz4.gif",
    demo: "https://fskarmeta-bubble-sorting-cards.netlify.app/",
    github: "https://github.com/fskarmeta/bubble-sorting-cards",
    date: "Oct 24, 2020",
    stack: "CSS3, JavaScript",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Poker Card Generator",
    description:
      "Each time you relode the page you will get a new random poker card!",
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/poker-card-generator_hpxujc.png",
    demo: "https://codepen.io/fskarmeta/full/dypwRpP",
    github: "https://github.com/fskarmeta/random-poker-card-generator",
    date: "Oct 22, 2020",
    stack: "CSS3, Bootstrap, JavaScript",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Domain URL Generator",
    description:
      "A domain URL Generator, at first I didn't think much about this project but I'm amazed at the great URL names that end up coming out, I really encourage you to try it out!",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857576/Portafolio%20Gifs/domain-url-generator_awr680.png",
    demo: "https://fskarmeta-random-url-generator.netlify.app/",
    github: "https://github.com/fskarmeta/domain-url-generator",
    date: "Oct 21, 2020",
    stack: "CSS3, JavaScript",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Login Form",
    description:
      "Exercise: Another responsive login form, with Bootstrap and custom CSS :) !",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857577/Portafolio%20Gifs/login-form-19oct_wkmdgy.png",
    demo: null,
    github: "https://github.com/fskarmeta/Login-Form-Boostrap-and-customCSS",
    date: "Oct 19, 2020",
    stack: "CSS3, Bootstrap",
    snipet: true,
    favorite: false,
    backend: false,
  },
  {
    title: "Social Media Login",
    description:
      "Exercise: Another responsive and custom login form, this time with social media :) !",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857581/Portafolio%20Gifs/social-media-login-form-17coct_xrwk14.gif",
    demo: null,
    github: "https://github.com/fskarmeta/custom-social-media-login",
    date: "Oct 17, 2020",
    stack: "CSS3",
    snipet: true,
    favorite: false,
    backend: false,
  },
  {
    title: "Login Form",
    description: "Excercise: A small and pretty login form!",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857577/Portafolio%20Gifs/login-form-16oct_djn8xe.png",
    demo: null,
    github: "https://github.com/fskarmeta/loginForm",
    date: "Oct 16, 2020",
    stack: "CSS3",
    snipet: true,
    favorite: false,
    backend: false,
  },
  {
    title: "Instagram Post Clone",
    description: "Excercise: Cloning an Instagram post :) !",
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/Portafolio%20Gifs/instagram-post-clone_sl6y0m.png",
    demo: null,
    github: "https://github.com/fskarmeta/theInstagramPost",
    date: "Oct 16, 2020",
    stack: "CSS3",
    snipet: true,
    favorite: false,
    backend: false,
  },

  {
    title: "Contact Form",
    description: "Excercise: A simple contact form :) !",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857575/Portafolio%20Gifs/contact-form-oct16_sry167.png",
    demo: null,
    github: "https://github.com/fskarmeta/contactUsForm",
    date: "Oct 16, 2020",
    stack: "CSS3",
    snipet: true,
    favorite: false,
    backend: false,
  },
  {
    title: "Payment Form",
    description: "Excercise: Payment form with client side regex validations",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857577/Portafolio%20Gifs/payment-form-oct16_rinx9m.png",
    demo: null,
    github: "https://github.com/fskarmeta/payment-form-with-validation",
    date: "Oct 16, 2020",
    stack: "CSS3, Bootstrap",
    snipet: true,
    favorite: false,
    backend: false,
  },
  {
    title: "Product Landing Page",
    description: "Excercise: Product Landing Page that showcases Bonsais",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857576/Portafolio%20Gifs/bonsai-landing-page_uwinud.png",
    demo: null,
    github: "https://github.com/fskarmeta/bonsaiLandingPage",
    date: "Oct 16, 2020",
    stack: "CSS3",
    snipet: true,
    favorite: false,
    backend: false,
  },
  {
    title: "Excuse Generator",
    description:
      "Just a funny script to get some random excuses if you need them !",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857576/Portafolio%20Gifs/excuse-generator_osxeqk.gif",
    demo: "https://codepen.io/fskarmeta/full/GRZVaeB",
    github:
      "https://github.com/fskarmeta/ffc-web-certificate-repo/tree/master/Excuse-generator",
    date: "Oct 5, 2020",
    stack: "CSS3, JavaScript, JQuery",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Portafolio Page",
    description:
      "The last project of the FFC Web Dev Certificate series was doing a personal portfolio website, although it was never going to be my final portfolio site I think it did end up being a pretty neat portfolio.",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610859047/Portafolio%20Gifs/b-portafolio_nbwg7b.gif",
    demo: "https://codepen.io/fskarmeta/full/PoNbyMW",
    github:
      "https://github.com/fskarmeta/ffc-web-certificate-repo/tree/master/Portafolio",
    date: "Aug 21, 2020",
    stack: "CSS3",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Documentation Page",
    description:
      "This was my favorite project of the FCC Web Dev Certificate series, I had to do a technical documentation website and I used the information of a friend's RuneScape bot with python to showcase the installation process.",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610857591/Portafolio%20Gifs/technical-documentation_d4co2e.gif",
    demo: "https://codepen.io/fskarmeta/full/WNwGYNJ",
    github: "https://github.com/fskarmeta/fcc-technical-documentation-page",
    date: "Aug 19, 2020",
    stack: "CSS3",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Product Landing Page",
    description:
      "My first landing page, also done in the context of the FCC Responsive Web Development Certificate. It's a dummy website made with humor, the idea was to sell toilet paper in the context of the covid pandemic. ",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610858762/Portafolio%20Gifs/a-ffc-landing-page_ugpbxr.gif",
    demo: "https://codepen.io/fskarmeta/full/gOrrjEJ",
    github:
      "https://github.com/fskarmeta/ffc-web-certificate-repo/tree/master/Landing-Page",
    date: "Aug 16, 2020",
    stack: "CSS3",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Survey Form",
    description:
      "First Survey Form, also done in the context of the FCC Responsive Web Development Certificate. It's a fictional survey that collects data about the visits to Chilean national parks.",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610858762/Portafolio%20Gifs/a-survey-form_zer1y5.gif",
    demo: "https://codepen.io/fskarmeta/full/Rwarmex",
    github:
      "https://github.com/fskarmeta/ffc-web-certificate-repo/tree/master/Survey",
    date: "Aug 14, 2020",
    stack: "CSS3",
    snipet: false,
    favorite: false,
    backend: false,
  },
  {
    title: "Tribute Page",
    description:
      "This was my first website, done in the context of the FCC Responsive Web Development Certificate. It's a tribute page for the band Zero 7, and it showcases their albums",
    image:
      "https://res.cloudinary.com/bafian/image/upload/v1610858764/Portafolio%20Gifs/a-tribute-page_mspo1g.gif",
    demo: "https://codepen.io/fskarmeta/full/vYGNbxW",
    github:
      "https://github.com/fskarmeta/ffc-web-certificate-repo/tree/master/Tribute-Page",
    date: "Aug 12, 2020",
    stack: "CSS3",
    snipet: false,
    favorite: false,
    backend: false,
  },
];

export default PROJECTS;
