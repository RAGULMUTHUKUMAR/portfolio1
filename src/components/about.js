function About({about}){
    return(<div id="about" ref={about}>
        <h1 className="font-bold text-4xl mt-[100px] ml-5 ">About Me</h1>
        <p className="text-gray-500 p-5 leading-5 text-justify">Iam Ragul, and I hail from Kasankottai. I pursued my Bachelor's
            degree in Electronics and Communication Engineering (BE-ECE) from
            the prestigious University College of Engineering, Tindivanam. As
            part of my college project, I successfully implemented a system for
            using Two-Factor Authentication in E-Voting, showcasing my passion
            for security and technology. After graduation, I decided to
            challenge myself and took the TCS NQT Exam, where I achieved an
            impressive result of 75.34%. Additionally, I had the opportunity to
            enhance my skills further by participating in a workshop on Embedded
            System design at the esteemed IIT Research Park, Chennai. Now, I am
            eagerly delving into the exciting world of full-stack development,
            pursuing a comprehensive course to hone my skills and knowledge in
            this domain. My journey so far has been filled with dedication,
            enthusiasm, and a drive to excel in the ever-evolving tech
            landscape. I am excited to see where this path leads me and to
            contribute my expertise to meaningful and innovative projects in the
            future.</p>
            <h1 className="font-bold text-4xl mt-[50px] ml-5 ">Personal Info</h1>
            <div className="ml-5 mt-5 text-base  text-justify">
                <h1>Age : <span className="text-gray-500">22</span></h1>
                <h1>Residence : <span className="text-gray-500">India</span></h1>
                <h1>Address : <span className="text-gray-500">401/a,Kasankottai</span></h1>
                <h1>E-mail : <span className="text-gray-500">ragullugar4@gmail.com</span></h1>
                <h1>Phone : <span className="text-gray-500">+91 9360787705</span></h1>
            </div>
    </div>)
}

export default About