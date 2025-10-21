// MIS245 Exam 2 Study Questions
// Chapters 5-8

const studyQuestions = {
    chapter5: {
        title: "Chapter 5: IT Infrastructure and Emerging Technologies",
        questions: [
            {
                id: "ch5_q1",
                question: "What is IT Infrastructure and what does it include?",
                answer: "IT Infrastructure includes investment in hardware, software, and services—such as consulting, education, and training—that are shared across the entire firm or across entire business units. It provides the foundation for serving customers, working with suppliers, managing internal firm business processes, and executing its business strategy.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch5_q2",
                question: "What is a legacy system and why are they still used?",
                answer: "A legacy system is generally an older system that continues to be used to avoid the high cost of replacing or redesigning it. Replacing legacy systems is cost-prohibitive and generally not necessary if they can be integrated into a contemporary infrastructure.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch5_q3",
                question: "What is the mobile computing platform and how has it evolved?",
                answer: "The mobile computing platform emerged as an alternative to desktop computers and larger computers. Smartphones and tablets are becoming the primary means of accessing the Internet and are increasingly used for business computing as well as for consumer applications. Wearable computing devices like smartwatches, smart glasses, smart badges, and activity trackers are recent additions.",
                type: "concept",
                difficulty: "medium"
            },
            {
                id: "ch5_q4",
                question: "What is consumerization of IT and what are the associated risks?",
                answer: "Consumerization of IT is when new information technology that first emerges in the consumer market spreads into business organizations. It includes mobile personal devices and business uses of software services that originated in the consumer marketplace. Risks include IT losing control of apps, files, and device security; harder to manage many devices & operating systems; requires extra IT resources; and greater chance of hacking, leaks, or stolen data.",
                type: "concept",
                difficulty: "hard"
            },
            {
                id: "ch5_q5",
                question: "What is virtualization and how does it work?",
                answer: "Virtualization is when special software makes one physical computer act like many separate computers. It creates 'virtual' versions of things like servers, storage, and networks.",
                type: "definition",
                difficulty: "easy"
            },
            {
                id: "ch5_q6",
                question: "Define cloud computing and its essential characteristics according to NIST.",
                answer: "Cloud computing is a model of computing in which computer processing, storage, software, and other services are provided as a shared pool of virtualized resources over a network, primarily the Internet. NIST defines it with 5 essential characteristics, including on-demand self-service, broad network access, resource pooling, rapid elasticity, and measured service.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch5_q7",
                question: "What are the main cloud computing service models?",
                answer: "The main cloud computing service models are: IaaS (Infrastructure as a Service), SaaS (Software as a Service), and PaaS (Platform as a Service).",
                type: "definition",
                difficulty: "easy"
            },
            {
                id: "ch5_q8",
                question: "What are web services and how do they work?",
                answer: "Web services are software components that share information over the web. They can connect different systems even if they use different operating systems or programming languages, and help apps communicate without custom coding. They use XML messages over standard web protocols.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch5_q9",
                question: "What is XML and why is it important for web services?",
                answer: "XML (Extensible Markup Language) is a key technology developed by W3C in 1996. It's more flexible than HTML and can handle presentation, communication, and data storage. It tags data to give it meaning so computers can read and act on it automatically, making it a standard format for sharing data between different systems.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch5_q10",
                question: "What is scalability and why is it important?",
                answer: "Scalability is the ability of a computer, product, or system to expand to serve a large number of users without breaking down. It's important because new applications, mergers and acquisitions, and changes in business volume all affect computer workload and must be considered when planning hardware capacity.",
                type: "definition",
                difficulty: "easy"
            },
            {
                id: "ch5_q11",
                question: "What is TCO and what does it include?",
                answer: "TCO (Total Cost of Ownership) includes the original cost of acquiring and installing hardware and software as well as ongoing administration costs for hardware and software upgrades, maintenance, technical support, training, and even utility and real estate costs for running and housing the technology.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch5_q12",
                question: "What is an SLA and why is it important?",
                answer: "SLA (Service Level Agreement) is a formal contract between customers and their service providers that defines the specific responsibilities of the service provider and the level of service expected by the customer. It's important for managing relationships with outsourcers or technology service providers.",
                type: "definition",
                difficulty: "easy"
            }
        ]
    },
    chapter6: {
        title: "Chapter 6: Databases and Information Management",
        questions: [
            {
                id: "ch6_q1",
                question: "What is a database and how is it organized?",
                answer: "A database is a collection of data organized in a manner that allows computers to quickly search for and retrieve information. It's designed to maintain data and information about various types of data objects, consisting of tables and relationships between those tables.",
                type: "definition",
                difficulty: "easy"
            },
            {
                id: "ch6_q2",
                question: "What is a DBMS and what does it do?",
                answer: "A DBMS (Database Management System) is a computer program that is used to create, process, and administer a database in a business. It's the software that manages the database.",
                type: "definition",
                difficulty: "easy"
            },
            {
                id: "ch6_q3",
                question: "What is SQL and how is it used?",
                answer: "SQL (Structured Query Language) is used to communicate with a database and is the standard language for relational database management systems according to ANSI. Users generate SQL statements (queries) to get information from a database.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch6_q4",
                question: "What is an Entity Relationship Diagram and what are its main elements?",
                answer: "An Entity Relationship Diagram is a visual representation of different data using conventions that describe how these data are related to each other. The 3 main elements are: entities, relationships, and attributes.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch6_q5",
                question: "What is a data mart and how is it different from a data warehouse?",
                answer: "A data mart is a subsection of a data warehouse that is designed specifically for individual departments or functions. It's used to track inventories, purchase transactions, and follow the supply chain to analyze what data a user needs.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch6_q6",
                question: "What is database normalization and why is it important?",
                answer: "Database normalization is the process of structuring data and tables in order to reduce redundancy and anomalies, and also to increase data integrity.",
                type: "definition",
                difficulty: "hard"
            },
            {
                id: "ch6_q7",
                question: "What is NoSQL and when is it used?",
                answer: "NoSQL refers to non-relational database technologies used for managing large data sets across many distributed machines and for easily scaling up or down. It's useful for accelerating simple queries against large volumes of structured and unstructured data, including web, social media, graphics, and other forms of data that are difficult to analyze with traditional SQL-based tools.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch6_q8",
                question: "What are the Four V's of Big Data?",
                answer: "The Four V's of Big Data are: Volume (scale of data), Variety (different forms of data), Veracity (ensure data is meaningful, true, and useful), and Velocity (must be analyzed while it is changing).",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch6_q9",
                question: "What is OLAP and what is it used for?",
                answer: "OLAP (Online Analytical Processing) is used for variety of data discoveries including report creation, complex calculations, predictive analysis, forecasting, budgeting, and planning. Data is stored in an OLAP system in data cubes.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch6_q10",
                question: "What is data mining and how does it differ from OLAP?",
                answer: "Data mining is more discovery-driven and provides insights into corporate data that cannot be obtained with OLAP by finding hidden patterns and relationships in large databases and inferring rules from them to predict future behavior. It's used to guide decision making and forecast the effect of those decisions.",
                type: "concept",
                difficulty: "hard"
            },
            {
                id: "ch6_q11",
                question: "What is text mining and what percentage of organizational information is unstructured?",
                answer: "Text mining involves using tools to extract key elements from unstructured natural language text, discover patterns and relationships, and summarize the information. Unstructured data, most in the form of text files, is believed to account for more than 80 percent of useful organizational information.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch6_q12",
                question: "What is sentiment analysis and how is it used?",
                answer: "Sentiment analysis involves mining comments in an email or text message, blog, social media conversation, or survey forms to detect favorable and unfavorable opinions about specific subjects.",
                type: "definition",
                difficulty: "easy"
            }
        ]
    },
    chapter7: {
        title: "Chapter 7: Telecommunications, Internet, and Wireless",
        questions: [
            {
                id: "ch7_q1",
                question: "What is a computer network and what are its basic components?",
                answer: "A computer network consists of two or more connected computers. Basic components include Network Interface Cards (NIC) for each computer, connections (wires, cables, or Wi-Fi signals), and a Network Operating System (NOS) like Windows Server or Linux to manage communication and resources.",
                type: "definition",
                difficulty: "easy"
            },
            {
                id: "ch7_q2",
                question: "What is the difference between a hub, switch, and router?",
                answer: "A hub sends data to all devices on the network. A switch sends data only to the intended device. A router directs data to the correct address and is needed to connect to another network like the Internet.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch7_q3",
                question: "What is client/server computing?",
                answer: "Client/server computing is a distributed computing model where smaller computers or devices (clients) do some processing, while a larger computer (server) controls the network. Clients rely on the server for network rules and addresses so other devices can find them.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch7_q4",
                question: "What is packet switching and how does it work?",
                answer: "Packet switching is a method of slicing digital messages into small fixed bundles of data called packets, sending the packets along different communication paths as the paths become available, and then reassembling the packets once they arrive at their destinations.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch7_q5",
                question: "What is TCP/IP and what does each part do?",
                answer: "TCP/IP is a common worldwide standard for corporate networks. TCP (Transmission Control Protocol) handles the movement of data among computers. IP (Internet Protocol) is responsible for the delivery of packets and includes the disassembling and reassembling of packets during transmission.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch7_q6",
                question: "What is the difference between LAN and WAN?",
                answer: "LAN (Local Area Network) connects desktop computers and other digital devices within a half-mile or 500-meter radius, typically in a small office or building. WAN (Wide Area Network) spans a broad geographical distance—a region, state, continent, or even the entire globe, with the Internet being the most universal and powerful WAN.",
                type: "definition",
                difficulty: "easy"
            },
            {
                id: "ch7_q7",
                question: "What is an IP address and how is it related to domain names?",
                answer: "An IP address is a unique string of numbers assigned to every device connected to the Internet. Domain names are natural language representations of IP addresses, and the Domain Name System (DNS) converts domain names to IP addresses.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch7_q8",
                question: "What is the Internet backbone and who owns it?",
                answer: "The Internet backbone consists of transcontinental, high-speed networks that generally operate in the gigabit range. These trunk lines are typically owned by long-distance telecommunications companies (called Tier 1 Internet service providers) or by national governments.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch7_q9",
                question: "What is HTTP and what is its role in web communication?",
                answer: "HTTP (Hypertext Transfer Protocol) is the communications standard that transfers pages on the web. Web browser software operating on your computer can request web pages stored on an Internet host server using HTTP.",
                type: "definition",
                difficulty: "easy"
            },
            {
                id: "ch7_q10",
                question: "What is the difference between search engines and search engine marketing?",
                answer: "Search engines attempt to solve the problem of finding useful information on the web nearly instantly. Search engine marketing refers to using search engines as major advertising platforms and shopping tools, accounting for more than 40% of digital ad spending.",
                type: "concept",
                difficulty: "medium"
            },
            {
                id: "ch7_q11",
                question: "What is semantic search and how does it differ from traditional search?",
                answer: "Semantic search uses natural language processing to understand the context and meaning of words, phrases, and sentences used in a search query, rather than just evaluating each word separately like traditional search engines did.",
                type: "definition",
                difficulty: "hard"
            },
            {
                id: "ch7_q12",
                question: "What are the different types of modern search capabilities mentioned?",
                answer: "Modern search capabilities include: predictive search (guesses what you're looking for and suggests terms), visual search (uses images instead of text-based queries with AI object recognition), and voice search (uses natural language processing and speech recognition).",
                type: "definition",
                difficulty: "medium"
            }
        ]
    },
    chapter8: {
        title: "Chapter 8: Securing Information Systems",
        questions: [
            {
                id: "ch8_q1",
                question: "What is a threat actor and what are common types of threats?",
                answer: "A threat actor is an individual or group of individuals seeking to exploit system vulnerabilities to intentionally cause harm. Common threats include technical, organizational, and environmental factors compounded by poor management decisions, as well as malicious activities like sniffing, malware, and denial-of-service attacks.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch8_q2",
                question: "What is malware and what are its different types?",
                answer: "Malware is malicious software programs such as viruses, worms, Trojan horses, ransomware, bots, and potentially unwanted programs (PUPs) that are designed to harm or exploit computer systems.",
                type: "definition",
                difficulty: "easy"
            },
            {
                id: "ch8_q3",
                question: "What is a denial-of-service attack and how does it work?",
                answer: "A denial-of-service attack (DoS attack) is when attackers flood a network server or web server with many thousands of false communications or requests for services in order to crash the network.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch8_q4",
                question: "What are deepfakes and what security risks do they pose?",
                answer: "Deepfakes refer to the use of AI to create highly realistic, but digitally fabricated or fake, images or audio. They can show people doing and saying things they never actually did. Microsoft has warned that AI-generated deepfakes may be able to undermine identity solutions that currently rely on facial and voice recognition.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch8_q5",
                question: "What is a prompt injection attack in the context of LLMs?",
                answer: "A prompt injection attack (also called jailbreaking) is when cybercriminals attempt to find a way around the guardrails that the creators of Large Language Models have installed to prevent them from being used for unethical or nefarious purposes.",
                type: "definition",
                difficulty: "hard"
            },
            {
                id: "ch8_q6",
                question: "What are the Gramm-Leach-Bliley Act and Sarbanes-Oxley Act related to?",
                answer: "These are legal regulations related to information security. The Gramm-Leach-Bliley Act applies to financial services, while the Sarbanes-Oxley Act (Public Company Accounting Reform and Investor Protection Act) applies to publicly traded companies. Both impose security and control requirements.",
                type: "definition",
                difficulty: "hard"
            },
            {
                id: "ch8_q7",
                question: "What is risk assessment in information security?",
                answer: "Risk assessment determines the level of risk to a firm if a specific activity or process is not properly controlled. It helps identify main risks to systems so appropriate security measures can be implemented.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch8_q8",
                question: "What is a security policy and what should it include?",
                answer: "A security policy consists of statements ranking information risks, identifying acceptable security goals, and identifying the mechanisms for achieving these goals. It's developed after identifying main risks to systems.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch8_q9",
                question: "What is IAM software and why is it important?",
                answer: "IAM (Identity and Access Management) software automates the process of keeping track of all users and their system privileges in midsize and large companies, assigning each user a unique digital identity for accessing each system.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch8_q10",
                question: "What is a firewall and what does it do?",
                answer: "A firewall prevents unauthorized users from accessing private networks. It acts as a barrier between a trusted internal network and untrusted external networks.",
                type: "definition",
                difficulty: "easy"
            },
            {
                id: "ch8_q11",
                question: "What is encryption and how does it work?",
                answer: "Encryption is the process of transforming plain text or data into cipher text that cannot be read by anyone other than the sender and the intended receiver. Data are encrypted using a secret numerical code called an encryption key, and the message must be decrypted by the receiver.",
                type: "definition",
                difficulty: "medium"
            },
            {
                id: "ch8_q12",
                question: "What is blockchain and how is it structured?",
                answer: "Blockchain is a chain of digital 'blocks' that contain records of transactions. Each block is connected to all the blocks before and after it, creating a secure and tamper-evident chain of records.",
                type: "definition",
                difficulty: "medium"
            }
        ]
    }
};

// Function to get all questions for testing
function getAllQuestions() {
    const allQuestions = [];
    Object.keys(studyQuestions).forEach(chapter => {
        studyQuestions[chapter].questions.forEach(question => {
            allQuestions.push({
                ...question,
                chapter: chapter,
                chapterTitle: studyQuestions[chapter].title
            });
        });
    });
    return allQuestions;
}

// Function to get questions by chapter
function getQuestionsByChapter(chapter) {
    return studyQuestions[chapter] ? studyQuestions[chapter].questions : [];
}

// Function to get questions by difficulty
function getQuestionsByDifficulty(difficulty) {
    const allQuestions = getAllQuestions();
    return allQuestions.filter(question => question.difficulty === difficulty);
}

// Function to search questions
function searchQuestions(searchTerm) {
    const allQuestions = getAllQuestions();
    return allQuestions.filter(question => 
        question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
}