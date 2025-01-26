import portfolio from "../assets/personal portfolio.png";
import temp from "../assets/projectImages/Temp.png";
import dogyears from "../assets/projectImages/DogYears.png";

const projectData = [
// Project Data
    {
        id: 1,
        title: "My Personal Portfolio",
        description: "A responsive portfolio showcasing my skills, projects, and contact information.",
        what: "I have created a responsive and visually appealing personal portfolio website that showcases my skills, projects, and contact information. The portfolio serves as a central hub to demonstrate my expertise in front-end development, including React, CSS, and JavaScript, along with my ability to create user-friendly designs.",
        how: "I started by designing wireframes and a cohesive theme using Figma to ensure a visually appealing and structured layout. The website was built using React for its reusable components, React Router for seamless navigation, and CSS Modules for modular and scoped styling. I integrated interactive features like a project carousel and modals for detailed project views to enhance user experience. By utilizing CSS Grid and Flexbox, I ensured the site is fully responsive across desktop, tablet, and mobile devices. Finally, I deployed the portfolio on GitHub Pages for easy access and version control.",
        achieved: "The portfolio provides a polished and professional online presence, enabling me to effectively share my expertise with potential employers and collaborators. It highlights my skills in front-end development, responsive design, and interactivity through a dedicated projects section. By incorporating a clear structure and engaging design, the website offers an enjoyable and seamless user experience. Building this portfolio also allowed me to refine my technical skills and gain hands-on experience with deployment and managing live projects.",
        tags: ["React", "Frontend", "Portfolio", "JavaScript"],
        image: portfolio,
        liveLink: "/#/portfolio/",
        githubLink: "https://github.com/MaliaWakeshoAjwang/portfolio",
    },
    {
        id: 2,
        title: "Temperature Converter",
        description: "An interactive temperature converter that transforms Kelvin into Celsius, Fahrenheit, and Newton using JavaScript and React.",
        what: "In the temperature converter project, I created a program using JavaScript that converts a temperature in Kelvin to Celsius, Fahrenheit, and Newton using simple formulas: Kelvin to Celsius by subtracting 273, Celsius to Fahrenheit with (Celsius * 9/5) + 32, and Celsius to Newton with (Celsius * 33/100), rounding results down using Math.floor(). Initially, I wrote a script to handle these calculations and printed the results with console.log(). Later, I made the program interactive by building a React component that allows users to input a Kelvin temperature and dynamically see the corresponding Celsius, Fahrenheit, and Newton values. Using React state, I managed the input and results, designing a clean and user-friendly UI with HTML and CSS. I deployed the project to GitHub Pages, configuring routing to ensure smooth navigation and accessibility. This project helped me strengthen my JavaScript fundamentals, improve my React skills for dynamic user input handling, and refine my problem-solving abilities. By integrating it into my portfolio, I showcased my ability to create practical, interactive tools and present them professionally.",
        how: "I started by writing a simple JavaScript script that calculates temperatures based on the given formulas, using Math.floor() to round down fractional results. To display the outputs for Kelvin, Celsius, Fahrenheit, and Newton, I used console.log(). Later, I made the program interactive by building a React component to dynamically handle user input for the Kelvin temperature, utilizing React state to store the input and computed results. I also designed a clean and user-friendly UI with HTML and CSS for the input form and result display.",
        achieved: "Through this project, I mastered JavaScript basics by gaining a deeper understanding of variables, mathematical calculations, and formatting results. I built an interactive, user-friendly temperature converter that is both functional and easy to use. By leveraging React to handle user inputs and dynamic calculations, I improved my proficiency with modern web development tools. The project also enhanced my problem-solving skills as I broke down the Kelvin conversion challenge into smaller steps and implemented a structured solution. Finally, I showcased the project in my portfolio, demonstrating my ability to tackle real-world coding challenges and present them professionally.",
        tags: ["React", "JavaScript", "Interactive", "Frontend"],
        image: temp,
        liveLink: "/#/project/temperature-converter",
        githubLink: "https://github.com/MaliaWakeshoAjwang/projects/blob/main/src/projectcode/TemperatureConverter.js",
    },
    {
        id: 3,
        title: "Dog Years",
        description: "An interactive tool that converts human years to dog years using JavaScript and React, showcasing the age difference dynamically.",
        what: "I created a program using JavaScript that converts a person’s age in human years to dog years. The program calculates the first two years of a dog’s life as 10.5 dog years each and every subsequent year as 4 dog years. It then outputs the result dynamically, allowing users to see their age in dog years based on their input.",
        how: "I began by writing a JavaScript script that uses variables and math operators to perform the conversion. The script first multiplies the first two human years by 10.5 to calculate their equivalent dog years, and then adds 4 dog years for each subsequent human year. I used clear variable names to store these values and combined them into a total. To make it more interactive, I built a React component that accepts the user’s input for their age, processes it, and displays the equivalent dog years dynamically on the screen. The interface was designed using basic HTML and CSS to ensure it is user-friendly and visually appealing.",
        achieved: "Through this project, I strengthened my understanding of JavaScript variables, math operators, and dynamic output generation. I successfully created an engaging, interactive tool that converts human years to dog years, showcasing my ability to turn logical calculations into a user-friendly application. This project also improved my problem-solving skills by breaking down the age conversion logic into manageable steps. Additionally, I integrated the project into my portfolio to demonstrate my capability to develop practical solutions and deliver them in a professional format.",
        tags: ["React", "JavaScript", "Interactive", "Frontend"],
        image: dogyears,
        liveLink: "/#/project/dog-years",
        githubLink: "https://github.com/MaliaWakeshoAjwang/portfolio/blob/main/src/projectcode/DogYears.js",
    },
];

export default projectData;