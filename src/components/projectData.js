import React from 'react'
import iva from '../images/iva.jpg'
import dashboard from '../images/dashboard.jpg'
import calculator from '../images/calculator.jpg'
import github from '../images/github.jpg'


export const projectData = [
    {
        title: "Iva Africa",
        type: "Freelance Project",
        Image: iva,
        description: "A website landing page for IVA Africa describing IVA Africa various services and a form to join a wait list ",
        // tech: "React Styled Components Firebase",
        tech: ["React","SCSS","Framer-motion"],
        github: "",
        website:"https://ivaafrica.com/"

    },
    {
        title: "Admin Dashboard",
        type: "Featured Project",
        Image: dashboard,
        description: "This administrative dashboard provides a user-friendly interface to effectively manage and maintain the assets within. Users can easily navigate through its menu of features, as well as uploading documents, images and other miscellaneous files. The dashboard also ensures efficient administration with the help of analytics, allowing users to visually pinpoint any areas that require attention and regularly track portfolio performance.",
        // tech: "React Styled Components Firebase",
        tech: ["React","SCSS"],
        github: "https://github.com/Bola22/Admin-Dashboard",
        website:"https://celadon-faun-f5b17e.netlify.app/"

    },
    {
        title: "Calculator App",
        type: "Featured Project",
        Image: calculator,
        description: "This is a streamlined and intuitive tool designed to empower users with the necessary calculations they need quickly and accurately. Leveraging HTML, CSS, and JavaScript in its development. It employs robust algorithms to ensure reliable and consistent results while ensuring ease of use by providing clear guidance with graphical indicators. ",
        // tech: "React Styled Components Firebase",
        tech: ["HTML","CSS","JavaScript"],
        github: "https://github.com/Bola22/Calculator-App",
        website:"https://calculator-app.basitanimashaun.repl.co/"

    },
    {
        title: "GitHub Profile",
        type: "Featured Project",
        Image: github,
        description: "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size. ",
        // tech: "React Styled Components Firebase",
        tech: ["React","SCSS","GitHub-API"],
        github: "",
        website:"https://github-profile-9cbed.firebaseapp.com/"

    },
    
]