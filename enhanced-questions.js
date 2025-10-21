// Enhanced MIS245 Exam 2 Study Questions with Higher Difficulty
// Chapters 5-8 - More challenging and comprehensive

const enhancedQuestions = {
    chapter5: {
        title: "Chapter 5: IT Infrastructure and Emerging Technologies",
        questions: [
            {
                id: "ch5_q1_enhanced",
                question: "A multinational corporation is evaluating their IT infrastructure strategy. They currently operate with legacy mainframe systems from the 1980s that handle core financial transactions, but they need to integrate modern cloud services for customer-facing applications. Which approach would provide the most cost-effective and risk-averse solution?",
                options: [
                    "Complete replacement of all legacy systems with cloud-native solutions",
                    "Phased integration using middleware and APIs to connect legacy systems with cloud services",
                    "Maintaining separate systems with manual data transfer processes",
                    "Outsourcing all IT infrastructure to a third-party vendor"
                ],
                correctAnswer: "Phased integration using middleware and APIs to connect legacy systems with cloud services",
                explanation: "Phased integration using middleware and APIs is the most cost-effective and risk-averse approach. Complete replacement would be prohibitively expensive and risky, while maintaining separate systems creates inefficiencies. Legacy systems are often too expensive to replace entirely, and integration allows organizations to leverage existing investments while adopting modern capabilities.",
                difficulty: "hard",
                type: "scenario-analysis"
            },
            {
                id: "ch5_q2_enhanced",
                question: "In the context of the consumerization of IT, a company's BYOD policy allows employees to use personal devices for work. However, the IT department discovers that 40% of devices lack proper encryption, and several employees are using outdated operating systems with known security vulnerabilities. What is the most critical first step in addressing these security gaps?",
                options: [
                    "Immediately revoke all BYOD privileges until devices are compliant",
                    "Implement a Mobile Device Management (MDM) solution with mandatory security policies",
                    "Provide employees with company-owned devices and eliminate BYOD",
                    "Send email reminders about security best practices"
                ],
                correctAnswer: "Implement a Mobile Device Management (MDM) solution with mandatory security policies",
                explanation: "An MDM solution provides centralized control over all devices accessing company resources. It can enforce encryption, require OS updates, enable remote wipe capabilities, and create containerization between personal and work data. This balances security needs with employee flexibility, unlike revoking privileges or eliminating BYOD entirely.",
                difficulty: "hard",
                type: "problem-solving"
            },
            {
                id: "ch5_q3_enhanced",
                question: "A startup is evaluating cloud computing service models for their new mobile application. They need a platform that provides database management, application hosting, development tools, and automatic scaling, but they want to avoid managing underlying infrastructure. Which cloud service model best fits their requirements?",
                options: [
                    "Infrastructure as a Service (IaaS)",
                    "Platform as a Service (PaaS)",
                    "Software as a Service (SaaS)",
                    "Function as a Service (FaaS)"
                ],
                correctAnswer: "Platform as a Service (PaaS)",
                explanation: "PaaS provides a complete development and deployment environment in the cloud, including database management, application hosting, development tools, and automatic scaling, while abstracting away the underlying infrastructure management. This allows developers to focus on application logic rather than infrastructure operations.",
                difficulty: "medium",
                type: "concept-application"
            },
            {
                id: "ch5_q4_enhanced",
                question: "A retail company wants to implement web services to integrate their inventory management system with multiple partner e-commerce platforms. Each partner uses different technologies (.NET, Java, PHP) and data formats. Which web service technology would provide the most effective interoperability solution?",
                options: [
                    "Simple Object Access Protocol (SOAP) with WSDL",
                    "Representational State Transfer (REST) with JSON",
                    "XML-RPC with custom protocols",
                    "CORBA with IIOP"
                ],
                correctAnswer: "Representational State Transfer (REST) with JSON",
                explanation: "REST with JSON provides the best interoperability because JSON is language-agnostic, lightweight, and easily parsed by all modern programming languages. RESTful APIs use standard HTTP methods and are less complex than SOAP, making them ideal for integrating diverse technology stacks while maintaining performance and simplicity.",
                difficulty: "medium",
                type: "technology-evaluation"
            },
            {
                id: "ch5_q5_enhanced",
                question: "When calculating Total Cost of Ownership (TCO) for a new enterprise resource planning (ERP) system, which indirect costs are often underestimated but can significantly impact the overall budget?",
                options: [
                    "Software licensing fees and hardware purchase costs",
                    "Employee training, change management, and productivity loss during transition",
                    "Vendor support contracts and maintenance agreements",
                    "Data center space and utility costs"
                ],
                correctAnswer: "Employee training, change management, and productivity loss during transition",
                explanation: "While direct costs like licensing and hardware are obvious, indirect costs such as employee training, change management, and productivity loss during system transition are frequently underestimated. These human-centered costs can account for 30-50% of total implementation costs and significantly impact ROI calculations and project timelines.",
                difficulty: "hard",
                type: "cost-analysis"
            },
            {
                id: "ch5_q6_enhanced",
                question: "A cloud service provider offers an SLA guaranteeing 99.9% uptime with penalties for non-compliance. Over a 30-day month, what is the maximum acceptable downtime before penalties apply?",
                options: [
                    "43.2 minutes",
                    "72 minutes", 
                    "144 minutes",
                    "432 minutes"
                ],
                correctAnswer: "43.2 minutes",
                explanation: "99.9% uptime allows for 0.1% downtime. In a 30-day month (43,200 minutes), 0.1% equals 43.2 minutes of allowable downtime. This calculation is critical for business continuity planning and SLA negotiations, as exceeding this threshold triggers penalty clauses and may impact business operations.",
                difficulty: "medium",
                type: "calculation"
            }
        ]
    },
    chapter6: {
        title: "Chapter 6: Databases and Information Management",
        questions: [
            {
                id: "ch6_q1_enhanced",
                question: "A university's student database has a table with student information including StudentID, Email, Major, and AdvisorID. The Email field contains multiple email addresses separated by commas for some students, violating normalization principles. Which normal form is being violated, and what is the most appropriate solution?",
                options: [
                    "First Normal Form (1NF) - Create a separate email table with one email per row",
                    "Second Normal Form (2NF) - Move email data to a separate table with StudentID as foreign key",
                    "Third Normal Form (3NF) - Split the table into student and contact information tables",
                    "Boyce-Codd Normal Form (BCNF) - Redesign the entire database schema"
                ],
                correctAnswer: "First Normal Form (1NF) - Create a separate email table with one email per row",
                explanation: "The violation is of First Normal Form (1NF) because the Email field contains multiple values (repeating groups). 1NF requires that each field contain only atomic (indivisible) values. The solution is to create a separate email table with one email per row, linked to the student table by StudentID. This eliminates repeating groups and maintains data integrity.",
                difficulty: "hard",
                type: "database-design"
            },
            {
                id: "ch6_q2_enhanced",
                question: "A financial services company needs to analyze customer transaction patterns across millions of records with varying data types (transaction amounts, timestamps, merchant categories, location data). Traditional SQL queries are taking too long for complex analytical queries. Which technology approach would provide the best performance improvement?",
                options: [
                    "Implement database indexing and query optimization on the existing SQL database",
                    "Migrate to a NoSQL document database like MongoDB",
                    "Implement a data warehouse with OLAP capabilities and dimensional modeling",
                    "Use in-memory database technology with distributed caching"
                ],
                correctAnswer: "Implement a data warehouse with OLAP capabilities and dimensional modeling",
                explanation: "A data warehouse with OLAP capabilities is optimal for complex analytical queries on large datasets. It uses dimensional modeling (star/snowflake schemas) and pre-aggregated data cubes to dramatically improve query performance. While NoSQL could handle the data volume, it lacks the analytical capabilities needed for pattern analysis. Indexing alone won't solve performance issues with millions of records.",
                difficulty: "hard",
                type: "performance-optimization"
            },
            {
                id: "ch6_q3_enhanced",
                question: "In designing a data warehouse for a retail chain, which dimensional modeling approach would best support analyzing sales performance by product, store, time, and customer demographics simultaneously?",
                options: [
                    "Star schema with a central fact table and multiple dimension tables",
                    "Snowflake schema with normalized dimension tables",
                    "Entity-Relationship model with third normal form tables",
                    "Hierarchical database model with parent-child relationships"
                ],
                correctAnswer: "Star schema with a central fact table and multiple dimension tables",
                explanation: "A star schema is ideal for this scenario because it provides a central fact table (sales transactions) connected to dimension tables (product, store, time, customer). This structure optimizes query performance for multi-dimensional analysis and is easier for business users to understand. The denormalized dimension tables reduce the number of joins needed for queries.",
                difficulty: "medium",
                type: "data-warehouse-design"
            },
            {
                id: "ch6_q4_enhanced",
                question: "A social media company wants to analyze user sentiment from posts, comments, and reviews across multiple languages. The data includes text, emojis, images, and videos. Which combination of technologies would provide the most comprehensive sentiment analysis solution?",
                options: [
                    "SQL database with full-text indexing and regular expressions",
                    "NoSQL document database with natural language processing APIs",
                    "Traditional data warehouse with business intelligence tools",
                    "Relational database with XML data type and XQuery"
                ],
                correctAnswer: "NoSQL document database with natural language processing APIs",
                explanation: "NoSQL document databases excel at storing heterogeneous data types (text, images, videos) and scale horizontally for large volumes. Combined with NLP APIs, this approach can handle multi-language text analysis, emoji interpretation, and even image/video sentiment analysis through computer vision. This provides the flexibility and scalability needed for comprehensive social media sentiment analysis.",
                difficulty: "hard",
                type: "technology-integration"
            },
            {
                id: "ch6_q5_enhanced",
                question: "A healthcare organization needs to ensure patient data privacy while allowing medical researchers access to anonymized data for clinical studies. The data includes structured medical records and unstructured doctor's notes. What is the most appropriate data governance approach?",
                options: [
                    "Create a single database with role-based access controls",
                    "Implement a data lake with data masking and tokenization",
                    "Use database views to provide limited data access",
                    "Create separate databases for each research project"
                ],
                correctAnswer: "Implement a data lake with data masking and tokenization",
                explanation: "A data lake approach with data masking and tokenization provides the best balance of data accessibility and privacy protection. Data masking replaces sensitive information with realistic but fictional data, while tokenization substitutes sensitive data with non-sensitive tokens. This allows researchers to work with realistic datasets while maintaining HIPAA compliance and protecting patient privacy.",
                difficulty: "hard",
                type: "data-governance"
            },
            {
                id: "ch6_q6_enhanced",
                question: "An e-commerce platform experiences significant performance degradation during peak shopping seasons when running complex JOIN operations across multiple tables (products, customers, orders, inventory). Which database optimization strategy would provide the most immediate performance improvement?",
                options: [
                    "Implement database partitioning and denormalization",
                    "Upgrade to a more powerful database server",
                    "Increase the database connection pool size",
                    "Implement application-level caching"
                ],
                correctAnswer: "Implement database partitioning and denormalization",
                explanation: "Database partitioning distributes large tables across multiple storage devices, improving I/O performance, while denormalization reduces the need for complex JOINs by introducing controlled data redundancy. This combination directly addresses the root cause of performance issues during peak loads. While other options may help, they don't solve the fundamental problem of complex query performance.",
                difficulty: "medium",
                type: "performance-tuning"
            }
        ]
    },
    chapter7: {
        title: "Chapter 7: Telecommunications, Internet, and Wireless",
        questions: [
            {
                id: "ch7_q1_enhanced",
                question: "A multinational corporation is designing a network infrastructure to connect offices across five continents. They require secure, reliable connections with guaranteed bandwidth for real-time video conferencing and data replication. Which network topology and technology combination would best meet these requirements?",
                options: [
                    "Hub-and-spoke topology using MPLS over dedicated leased lines",
                    "Mesh topology using Internet VPN connections",
                    "Star topology using broadband Internet connections",
                    "Ring topology using satellite communications"
                ],
                correctAnswer: "Hub-and-spoke topology using MPLS over dedicated leased lines",
                explanation: "An MPLS (Multiprotocol Label Switching) network with a hub-and-spoke topology provides guaranteed bandwidth, low latency, and quality of service (QoS) essential for real-time applications. MPLS offers better performance and security than Internet VPNs, while the hub-and-spoke design is more cost-effective than full mesh for international connections and provides centralized management.",
                difficulty: "hard",
                type: "network-design"
            },
            {
                id: "ch7_q2_enhanced",
                question: "During a network security audit, an organization discovers that their firewall is receiving and blocking thousands of TCP SYN packets per second from multiple IP addresses, causing legitimate traffic to be dropped. What type of attack is occurring, and what is the most effective immediate mitigation strategy?",
                options: [
                    "DDoS attack - Implement rate limiting and SYN cookies",
                    "Port scanning attack - Block all incoming TCP connections",
                    "Man-in-the-middle attack - Implement certificate pinning",
                    "DNS amplification attack - Disable recursive DNS queries"
                ],
                correctAnswer: "DDoS attack - Implement rate limiting and SYN cookies",
                explanation: "This is a SYN flood DDoS attack where attackers send numerous TCP SYN packets without completing the handshake, exhausting server resources. Rate limiting controls the number of connections per IP, while SYN cookies allow the server to handle legitimate connections during an attack without maintaining state for incomplete connections. This provides immediate protection while maintaining service availability.",
                difficulty: "hard",
                type: "security-incident"
            },
            {
                id: "ch7_q3_enhanced",
                question: "A streaming video service needs to deliver high-quality content to users globally with minimal latency. They want to reduce bandwidth costs and improve user experience by caching content closer to users. Which CDN architecture and caching strategy would be most effective?",
                options: [
                    "Push CDN with edge servers in major metropolitan areas",
                    "Pull CDN with origin shield and tiered caching",
                    "Peer-to-peer CDN using user devices as cache nodes",
                    "DNS-based load balancing without edge caching"
                ],
                correctAnswer: "Pull CDN with origin shield and tiered caching",
                explanation: "A pull CDN with origin shield and tiered caching provides optimal performance and cost efficiency. Content is cached at edge locations when first requested (pull), reducing origin server load. Origin shield adds an additional caching layer between origin and edge servers, while tiered caching allows edge servers to fetch content from regional caches rather than the origin server, further reducing latency and bandwidth costs.",
                difficulty: "medium",
                type: "performance-optimization"
            },
            {
                id: "ch7_q4_enhanced",
                question: "An IoT deployment includes 10,000 smart sensors that need to transmit small amounts of data periodically to a central server. The sensors are battery-powered and located in areas with intermittent cellular coverage. Which wireless communication protocol and network architecture would be most suitable?",
                options: [
                    "5G cellular with direct cloud connectivity",
                    "LoRaWAN with gateway aggregation",
                    "Wi-Fi 6 with mesh networking",
                    "Bluetooth Low Energy with smartphone relay"
                ],
                correctAnswer: "LoRaWAN with gateway aggregation",
                explanation: "LoRaWAN is ideal for IoT applications with many low-power devices transmitting small amounts of data over long distances. It provides excellent battery life (10+ years), long-range coverage (up to 15km), and gateway aggregation reduces infrastructure costs. The star-of-stars topology with gateways collecting data from multiple sensors and forwarding to the cloud is perfect for this deployment scenario.",
                difficulty: "medium",
                type: "iot-architecture"
            },
            {
                id: "ch7_q5_enhanced",
                question: "A financial trading firm requires ultra-low latency network connections to stock exchanges for high-frequency trading. They need to process market data and execute trades within microseconds. Which network infrastructure approach would provide the best performance?",
                options: [
                    "Internet-based VPN with QoS optimization",
                    "Direct market access via colocation and dedicated fiber",
                    "Satellite communication with edge computing",
                    "5G wireless network with network slicing"
                ],
                correctAnswer: "Direct market access via colocation and dedicated fiber",
                explanation: "Direct market access through colocation (placing trading servers in the same data center as exchange servers) combined with dedicated fiber connections provides the lowest possible latency, often under 100 microseconds. This eliminates Internet routing variability and minimizes physical distance, which is critical for high-frequency trading where microseconds matter for profitability.",
                difficulty: "hard",
                type: "latency-optimization"
            },
            {
                id: "ch7_q6_enhanced",
                question: "A company's DNS server is experiencing cache poisoning attacks where fraudulent IP addresses are being returned for legitimate domain queries. Users are being redirected to malicious websites. Which DNS security mechanism would provide the most effective protection?",
                options: [
                    "Implement DNSSEC with cryptographic signatures",
                    "Configure DNS rate limiting and access controls",
                    "Use DNS over HTTPS (DoH) for all queries",
                    "Implement split-horizon DNS with internal resolution"
                ],
                correctAnswer: "Implement DNSSEC with cryptographic signatures",
                explanation: "DNSSEC (Domain Name System Security Extensions) provides cryptographic authentication of DNS responses, preventing cache poisoning by allowing resolvers to verify that responses haven't been tampered with. It uses digital signatures to ensure data integrity and authenticity, making it the most effective defense against DNS spoofing and cache poisoning attacks.",
                difficulty: "medium",
                type: "security-implementation"
            }
        ]
    },
    chapter8: {
        title: "Chapter 8: Securing Information Systems",
        questions: [
            {
                id: "ch8_q1_enhanced",
                question: "A healthcare organization discovers that patient data has been encrypted by ransomware that entered through a phishing email. The attackers are demanding payment in cryptocurrency. What is the most appropriate immediate response and long-term prevention strategy?",
                options: [
                    "Pay the ransom immediately to restore operations",
                    "Isolate affected systems, restore from backups, and implement comprehensive security awareness training",
                    "Negotiate with attackers for a lower ransom amount",
                    "Format all systems and rebuild from scratch"
                ],
                correctAnswer: "Isolate affected systems, restore from backups, and implement comprehensive security awareness training",
                explanation: "The correct approach is to isolate affected systems to prevent spread, restore from verified backups to avoid paying ransom, and implement security awareness training to prevent future incidents. Paying ransom doesn't guarantee data recovery and encourages criminal activity. Backup restoration combined with improved human security measures provides both immediate recovery and long-term protection.",
                difficulty: "hard",
                type: "incident-response"
            },
            {
                id: "ch8_q2_enhanced",
                question: "A deepfake video showing a company's CEO announcing false financial information is circulating on social media, causing stock price volatility. The video uses advanced AI to perfectly mimic the CEO's voice and appearance. What combination of technical and organizational measures would provide the most effective response?",
                options: [
                    "Technical: Deploy AI-based deepfake detection; Organizational: Rapid communication strategy",
                    "Technical: Block all social media access; Organizational: Legal action against platforms",
                    "Technical: Implement watermarking for all official videos; Organizational: Ignore the incident",
                    "Technical: Use blockchain for video authentication; Organizational: CEO public denial"
                ],
                correctAnswer: "Technical: Deploy AI-based deepfake detection; Organizational: Rapid communication strategy",
                explanation: "AI-based deepfake detection can identify manipulated content, while a rapid communication strategy allows the company to quickly counter misinformation through official channels. This dual approach addresses both detection and response. Blocking social media is impractical, and legal action alone is too slow. Watermarking helps future authentication but doesn't address current incidents.",
                difficulty: "hard",
                type: "crisis-management"
            },
            {
                id: "ch8_q3_enhanced",
                question: "A financial institution must comply with both GDPR (for EU customers) and PCI DSS (for payment card data). They need to encrypt sensitive data while maintaining the ability to perform analytics and fraud detection. Which encryption approach would best balance security, compliance, and functionality?",
                options: [
                    "Full database encryption with AES-256",
                    "Field-level encryption with format-preserving encryption",
                    "Application-level encryption with key rotation",
                    "File-system encryption with access controls"
                ],
                correctAnswer: "Field-level encryption with format-preserving encryption",
                explanation: "Field-level encryption with format-preserving encryption (FPE) encrypts specific sensitive fields while maintaining the data format and structure needed for analytics and fraud detection. This allows the institution to protect sensitive data according to GDPR and PCI DSS requirements while preserving the ability to query and analyze the data without decryption overhead.",
                difficulty: "hard",
                type: "compliance-implementation"
            },
            {
                id: "ch8_q4_enhanced",
                question: "An organization's security team discovers that an employee's credentials were compromised through a spear-phishing attack. The attacker gained access to the corporate network and has been conducting reconnaissance for two weeks. What is the most critical immediate action?",
                options: [
                    "Immediately terminate the employee's employment",
                    "Disable the compromised account and conduct forensic analysis",
                    "Send a company-wide email about phishing awareness",
                    "Change all employee passwords immediately"
                ],
                correctAnswer: "Disable the compromised account and conduct forensic analysis",
                explanation: "Disabling the compromised account stops ongoing unauthorized access, while forensic analysis helps understand the attack scope, identify what data was accessed, and determine if lateral movement occurred. This evidence-based approach informs subsequent remediation steps. Terminating the employee doesn't address the security breach, and changing all passwords without understanding the attack scope may be ineffective.",
                difficulty: "medium",
                type: "security-incident"
            },
            {
                id: "ch8_q5_enhanced",
                question: "A blockchain-based supply chain tracking system needs to ensure data integrity while protecting confidential business information. Some supply chain data is public, while pricing and supplier relationships must remain private. Which blockchain architecture would best address these requirements?",
                options: [
                    "Public blockchain with all data encrypted",
                    "Private blockchain with selective data sharing",
                    "Consortium blockchain with smart contract access controls",
                    "Hybrid blockchain with public and private sidechains"
                ],
                correctAnswer: "Consortium blockchain with smart contract access controls",
                explanation: "A consortium blockchain allows multiple organizations to participate while maintaining control over data access. Smart contracts can enforce granular access controls, making public supply chain data visible to all participants while restricting sensitive information to authorized parties. This provides the transparency and immutability of blockchain while protecting confidential business information.",
                difficulty: "hard",
                type: "blockchain-architecture"
            },
            {
                id: "ch8_q6_enhanced",
                question: "A company implementing Zero Trust architecture needs to verify user identity and device trust before granting access to applications. Users work from various locations using corporate and personal devices. Which identity and access management approach would provide the most comprehensive security?",
                options: [
                    "Multi-factor authentication with role-based access control",
                    "Certificate-based authentication with device compliance checks",
                    "Biometric authentication with location-based access policies",
                    "Continuous verification with risk-based authentication and device trust scoring"
                ],
                correctAnswer: "Continuous verification with risk-based authentication and device trust scoring",
                explanation: "Continuous verification with risk-based authentication and device trust scoring provides the most comprehensive Zero Trust security. It continuously evaluates user behavior, device health, location, and other risk factors to dynamically adjust access permissions. This approach adapts to changing risk levels and provides granular access control, unlike static authentication methods that only verify identity at initial login.",
                difficulty: "medium",
                type: "zero-trust-implementation"
            }
        ]
    }
};

// Function to get all enhanced questions for testing
function getAllEnhancedQuestions() {
    const allQuestions = [];
    Object.keys(enhancedQuestions).forEach(chapter => {
        enhancedQuestions[chapter].questions.forEach(question => {
            allQuestions.push({
                ...question,
                chapter: chapter,
                chapterTitle: enhancedQuestions[chapter].title
            });
        });
    });
    return allQuestions;
}

// Function to get enhanced questions by chapter
function getEnhancedQuestionsByChapter(chapter) {
    return enhancedQuestions[chapter] ? enhancedQuestions[chapter].questions : [];
}

// Function to shuffle array (for randomizing options)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}