using System.Collections.Generic;

namespace Courses.Data
{
    public static class Data
    {
        public static List<Course> Courses => allCourses;
        static List<Course> allCourses = new List<Course>()
            {
            new Course()
                {
                    Id = 1101,
                    Title = "Introduction to Programming",
                    Description = "This course covers the basics of computer programming and provides a foundation for further learning in this area. It is suited for students who are absolute beginners and as such no previous computer programming knowledge is required to finish this course. The course uses the Python programming language which is very simple and straightforward.",
                    Credits = 3
                },
                new Course()
                {
                    Id = 1104,
                    Title = "Computer Systems",
                    Description = "This course is an introduction to computer systems. In this course we will use an online hardware simulator to actually “build” a computer and develop an assembler from the ground using concepts we will learn in the class. In the process, we will cover the ideas and techniques used in the design of modern computer hardware and discuss major trade-offs involved in system design as well as future trends in computer architecture and how those trends might affect tomorrow’s computers.",
                    Credits = 3
                },
                new Course()
                {
                    Id = 2203,
                    Title = "Databases",
                    Description = "This course introduces the fundamental concepts necessary for designing, using and implementing database systems. We stress the fundamentals of database modeling and design, relational theory, and the Structured Query Language.",
                    Credits = 3
                },
                new Course()
                {
                    Id = 2204,
                    Title = "Communications and Networking",
                    Description = "This course will introduce the basic concepts of communication networks, including the OSI model and different types of communication protocols, including the Internet Protocol (TCP/IP protocol). Throughout the course, we will mainly be focusing on the two most prevalent reference models of network definition, OSI and TCP/IP.",
                    Credits = 3
                },
                new Course()
                {
                    Id = 2301,
                    Title = "Operating Systems",
                    Description = "This course provides an applied introduction to commercial operating systems. It is intended for intermediate students who have basic programming skills. Key concepts of computer systems and operating systems are introduced, as well as the communications and linkages associated with computer systems. Operating systems that are introduced include Microsoft Windows and UNIX/Linux.",
                    Credits = 3
                },
                new Course()
                {
                    Id = 2401,
                    Title = "Software Engineering",
                    Description = "This course focuses on the engineering process requirements, including identification of stakeholders, requirements elicitation techniques such as interviews and prototyping, analysis fundamentals, requirements specification, and validation. Course topics will include the use of models (State-oriented, Function-oriented, and Object-oriented), documentation for Software Requirements (Informal, semi-formal, and formal representations), structural, informational, and behavioral requirements; non-functional requirements, and the use of requirements repositories to manage and track requirements through the life cycle.",
                    Credits = 3
                }
            };
    }
}