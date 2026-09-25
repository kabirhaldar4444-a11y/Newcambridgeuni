/**
 * Cambridge Learning Services - Online Courses & Certifications
 * Interactive Front-End Engine & Application Logic
 * Featuring authentic courses from Cambridge Professional Certifications
 */

// ==========================================================================
// 1. Cambridge Learning Services Official Courses Database (100 Courses)
// ==========================================================================
const CAMBRIDGE_CERTIFICATES = [
  {
    "id": "generative-ai-prompt-engineering-for-enterprise-workflows",
    "title": "Generative AI Prompt Engineering for Enterprise Workflows",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 45,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Generative AI Prompt Engineering for Enterprise Workflows",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Generative AI Prompt Engineering for Enterprise Workflows",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Generative AI Prompt Engineering for Enterprise Workflows",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Generative AI Prompt Engineering for Enterprise Workflows",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Generative AI Prompt Engineering for Enterprise Workflows",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "ai-powered-automation-for-small-business-operations",
    "title": "AI-Powered Automation for Small Business Operations",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 60,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in AI-Powered Automation for Small Business Operations",
    "overview": "Accelerated, practical 30 Days vocational masterclass in AI-Powered Automation for Small Business Operations",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of AI-Powered Automation for Small Business Operations",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of AI-Powered Automation for Small Business Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of AI-Powered Automation for Small Business Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "ai-driven-copywriting-marketing-content-generation",
    "title": "AI-Driven Copywriting & Marketing Content Generation",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 25,000",
    "duration": "10 Days",
    "subtitle": "Accelerated, practical 10 Days vocational masterclass in AI-Driven Copywriting & Marketing Content Generation",
    "overview": "Accelerated, practical 10 Days vocational masterclass in AI-Driven Copywriting & Marketing Content Generation",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of AI-Driven Copywriting & Marketing Content Generation",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of AI-Driven Copywriting & Marketing Content Generation",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of AI-Driven Copywriting & Marketing Content Generation",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "using-ai-tools-for-market-research-data-synthesis",
    "title": "Using AI Tools for Market Research & Data Synthesis",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 35,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Using AI Tools for Market Research & Data Synthesis",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Using AI Tools for Market Research & Data Synthesis",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Using AI Tools for Market Research & Data Synthesis",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Using AI Tools for Market Research & Data Synthesis",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Using AI Tools for Market Research & Data Synthesis",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "ai-enhanced-video-editing-creative-media-production",
    "title": "AI-Enhanced Video Editing & Creative Media Production",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 40,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in AI-Enhanced Video Editing & Creative Media Production",
    "overview": "Accelerated, practical 20 Days vocational masterclass in AI-Enhanced Video Editing & Creative Media Production",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of AI-Enhanced Video Editing & Creative Media Production",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of AI-Enhanced Video Editing & Creative Media Production",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of AI-Enhanced Video Editing & Creative Media Production",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "no-code-ai-agent-custom-chatbot-architecture",
    "title": "No-Code AI Agent & Custom Chatbot Architecture",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 55,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in No-Code AI Agent & Custom Chatbot Architecture",
    "overview": "Accelerated, practical 30 Days vocational masterclass in No-Code AI Agent & Custom Chatbot Architecture",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of No-Code AI Agent & Custom Chatbot Architecture",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of No-Code AI Agent & Custom Chatbot Architecture",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of No-Code AI Agent & Custom Chatbot Architecture",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "ai-productivity-hacks-for-microsoft-office-google-workspace",
    "title": "AI Productivity Hacks for Microsoft Office & Google Workspace",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 15,000",
    "duration": "10 Days",
    "subtitle": "Accelerated, practical 10 Days vocational masterclass in AI Productivity Hacks for Microsoft Office & Google Workspace",
    "overview": "Accelerated, practical 10 Days vocational masterclass in AI Productivity Hacks for Microsoft Office & Google Workspace",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of AI Productivity Hacks for Microsoft Office & Google Workspace",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of AI Productivity Hacks for Microsoft Office & Google Workspace",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of AI Productivity Hacks for Microsoft Office & Google Workspace",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "using-midjourney-dall-e-for-commercial-graphic-design",
    "title": "Using Midjourney & DALL-E for Commercial Graphic Design",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 28,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Using Midjourney & DALL-E for Commercial Graphic Design",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Using Midjourney & DALL-E for Commercial Graphic Design",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Using Midjourney & DALL-E for Commercial Graphic Design",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Using Midjourney & DALL-E for Commercial Graphic Design",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Using Midjourney & DALL-E for Commercial Graphic Design",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "ai-for-human-resource-operations-talent-sourcing",
    "title": "AI for Human Resource Operations & Talent Sourcing",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 38,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in AI for Human Resource Operations & Talent Sourcing",
    "overview": "Accelerated, practical 20 Days vocational masterclass in AI for Human Resource Operations & Talent Sourcing",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of AI for Human Resource Operations & Talent Sourcing",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of AI for Human Resource Operations & Talent Sourcing",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of AI for Human Resource Operations & Talent Sourcing",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "financial-analysis-budgeting-using-ai-assistance",
    "title": "Financial Analysis & Budgeting Using AI Assistance",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 50,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Financial Analysis & Budgeting Using AI Assistance",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Financial Analysis & Budgeting Using AI Assistance",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Financial Analysis & Budgeting Using AI Assistance",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Financial Analysis & Budgeting Using AI Assistance",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Financial Analysis & Budgeting Using AI Assistance",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "ai-powered-sales-scraping-cold-email-automation",
    "title": "AI-Powered Sales Scraping & Cold Email Automation",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 30,000",
    "duration": "10 Days",
    "subtitle": "Accelerated, practical 10 Days vocational masterclass in AI-Powered Sales Scraping & Cold Email Automation",
    "overview": "Accelerated, practical 10 Days vocational masterclass in AI-Powered Sales Scraping & Cold Email Automation",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of AI-Powered Sales Scraping & Cold Email Automation",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of AI-Powered Sales Scraping & Cold Email Automation",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of AI-Powered Sales Scraping & Cold Email Automation",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "using-ai-for-supply-chain-optimization-inventory-planning",
    "title": "Using AI for Supply Chain Optimization & Inventory Planning",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 65,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Using AI for Supply Chain Optimization & Inventory Planning",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Using AI for Supply Chain Optimization & Inventory Planning",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Using AI for Supply Chain Optimization & Inventory Planning",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Using AI for Supply Chain Optimization & Inventory Planning",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Using AI for Supply Chain Optimization & Inventory Planning",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "ai-coding-assistants-github-copilot-for-rapid-development",
    "title": "AI Coding Assistants (GitHub Copilot) for Rapid Development",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 45,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in AI Coding Assistants (GitHub Copilot) for Rapid Development",
    "overview": "Accelerated, practical 20 Days vocational masterclass in AI Coding Assistants (GitHub Copilot) for Rapid Development",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of AI Coding Assistants (GitHub Copilot) for Rapid Development",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of AI Coding Assistants (GitHub Copilot) for Rapid Development",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of AI Coding Assistants (GitHub Copilot) for Rapid Development",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "customer-support-automation-using-ai-helpdesk-tools",
    "title": "Customer Support Automation Using AI Helpdesk Tools",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 42,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Customer Support Automation Using AI Helpdesk Tools",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Customer Support Automation Using AI Helpdesk Tools",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Customer Support Automation Using AI Helpdesk Tools",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Customer Support Automation Using AI Helpdesk Tools",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Customer Support Automation Using AI Helpdesk Tools",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "ai-prompt-engineering-for-legal-compliance-documentation",
    "title": "AI Prompt Engineering for Legal & Compliance Documentation",
    "category": "ai-and-modern-workflows",
    "categoryName": "AI & Modern Workflows",
    "price": "INR 70,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in AI Prompt Engineering for Legal & Compliance Documentation",
    "overview": "Accelerated, practical 30 Days vocational masterclass in AI Prompt Engineering for Legal & Compliance Documentation",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of AI Prompt Engineering for Legal & Compliance Documentation",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of AI Prompt Engineering for Legal & Compliance Documentation",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of AI Prompt Engineering for Legal & Compliance Documentation",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "construction-project-scheduling-basic-estimation",
    "title": "Construction Project Scheduling & Basic Estimation",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 50,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Construction Project Scheduling & Basic Estimation",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Construction Project Scheduling & Basic Estimation",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Construction Project Scheduling & Basic Estimation",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Construction Project Scheduling & Basic Estimation",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Construction Project Scheduling & Basic Estimation",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Cambridge Certified"
  },
  {
    "id": "construction-cost-estimation-quantity-surveying-basics",
    "title": "Construction Cost Estimation & Quantity Surveying Basics",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 60,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Construction Cost Estimation & Quantity Surveying Basics",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Construction Cost Estimation & Quantity Surveying Basics",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Construction Cost Estimation & Quantity Surveying Basics",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Construction Cost Estimation & Quantity Surveying Basics",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Construction Cost Estimation & Quantity Surveying Basics",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "contract-administration-procurement-in-construction",
    "title": "Contract Administration & Procurement in Construction",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 45,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Contract Administration & Procurement in Construction",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Contract Administration & Procurement in Construction",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Contract Administration & Procurement in Construction",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Contract Administration & Procurement in Construction",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Contract Administration & Procurement in Construction",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "construction-bill-checking-contractor-invoice-verification",
    "title": "Construction Bill Checking & Contractor Invoice Verification",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 12,500",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Construction Bill Checking & Contractor Invoice Verification",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Construction Bill Checking & Contractor Invoice Verification",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Construction Bill Checking & Contractor Invoice Verification",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Construction Bill Checking & Contractor Invoice Verification",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Construction Bill Checking & Contractor Invoice Verification",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "rate-analysis-construction-material-price-forecasting",
    "title": "Rate Analysis & Construction Material Price Forecasting",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 30,000",
    "duration": "10 Days",
    "subtitle": "Accelerated, practical 10 Days vocational masterclass in Rate Analysis & Construction Material Price Forecasting",
    "overview": "Accelerated, practical 10 Days vocational masterclass in Rate Analysis & Construction Material Price Forecasting",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Rate Analysis & Construction Material Price Forecasting",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Rate Analysis & Construction Material Price Forecasting",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Rate Analysis & Construction Material Price Forecasting",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "construction-risk-assessment-hazard-mitigation-strategies",
    "title": "Construction Risk Assessment & Hazard Mitigation Strategies",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 38,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Construction Risk Assessment & Hazard Mitigation Strategies",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Construction Risk Assessment & Hazard Mitigation Strategies",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Construction Risk Assessment & Hazard Mitigation Strategies",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Construction Risk Assessment & Hazard Mitigation Strategies",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Construction Risk Assessment & Hazard Mitigation Strategies",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "tendering-bidding-commercial-bid-evaluation-frameworks",
    "title": "Tendering, Bidding & Commercial Bid Evaluation Frameworks",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 55,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Tendering, Bidding & Commercial Bid Evaluation Frameworks",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Tendering, Bidding & Commercial Bid Evaluation Frameworks",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Tendering, Bidding & Commercial Bid Evaluation Frameworks",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Tendering, Bidding & Commercial Bid Evaluation Frameworks",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Tendering, Bidding & Commercial Bid Evaluation Frameworks",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "real-estate-project-cost-control-budget-management",
    "title": "Real Estate Project Cost Control & Budget Management",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 70,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Real Estate Project Cost Control & Budget Management",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Real Estate Project Cost Control & Budget Management",
    "learningAreas": [
      "Core conceptual foundations and operational methodologies of Real Estate Project Cost Control & Budget Management",
      "Hands-on application and real-world execution workflows without external dependencies",
      "Optimization strategies, error handling, and quality control systems",
      "Independent vocational competency development aligned with modern industry benchmarks",
      "Comprehensive review checklists, operational audits, and sustainable execution practices"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Real Estate Project Cost Control & Budget Management",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Real Estate Project Cost Control & Budget Management",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Cambridge Certified"
  },
  {
    "id": "construction-claim-management-dispute-resolution-prep",
    "title": "Construction Claim Management & Dispute Resolution Prep",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 80,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Construction Claim Management & Dispute Resolution Prep",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Construction Claim Management & Dispute Resolution Prep",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Construction Claim Management & Dispute Resolution Prep",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Construction Claim Management & Dispute Resolution Prep",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Construction Claim Management & Dispute Resolution Prep",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "agile-frameworks-scrum-for-construction-management",
    "title": "Agile Frameworks & Scrum for Construction Management",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 45,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Agile Frameworks & Scrum for Construction Management",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Agile Frameworks & Scrum for Construction Management",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Agile Frameworks & Scrum for Construction Management",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Agile Frameworks & Scrum for Construction Management",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Agile Frameworks & Scrum for Construction Management",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "subcontractor-management-site-logistics-mastery",
    "title": "Subcontractor Management & Site Logistics Mastery",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 45,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Subcontractor Management & Site Logistics Mastery",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Subcontractor Management & Site Logistics Mastery",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Subcontractor Management & Site Logistics Mastery",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Subcontractor Management & Site Logistics Mastery",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Subcontractor Management & Site Logistics Mastery",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "construction-micro-scheduling-daily-work-progress-tracking",
    "title": "Construction Micro-Scheduling & Daily Work Progress Tracking",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 25,000",
    "duration": "10 Days",
    "subtitle": "Accelerated, practical 10 Days vocational masterclass in Construction Micro-Scheduling & Daily Work Progress Tracking",
    "overview": "Accelerated, practical 10 Days vocational masterclass in Construction Micro-Scheduling & Daily Work Progress Tracking",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Construction Micro-Scheduling & Daily Work Progress Tracking",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Construction Micro-Scheduling & Daily Work Progress Tracking",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Construction Micro-Scheduling & Daily Work Progress Tracking",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "cash-flow-management-capital-allocation-for-builders",
    "title": "Cash Flow Management & Capital Allocation for Builders",
    "category": "construction-project-management-and-billing",
    "categoryName": "Construction: Project Management & Billing",
    "price": "INR 65,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Cash Flow Management & Capital Allocation for Builders",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Cash Flow Management & Capital Allocation for Builders",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Cash Flow Management & Capital Allocation for Builders",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Cash Flow Management & Capital Allocation for Builders",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Cash Flow Management & Capital Allocation for Builders",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "construction-site-operations-supervisor-foundations",
    "title": "Construction Site Operations & Supervisor Foundations",
    "category": "construction-site-operations-and-safety",
    "categoryName": "Construction: Site Operations & Safety",
    "price": "INR 55,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Construction Site Operations & Supervisor Foundations",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Construction Site Operations & Supervisor Foundations",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Construction Site Operations & Supervisor Foundations",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Construction Site Operations & Supervisor Foundations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Construction Site Operations & Supervisor Foundations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "heavy-equipment-fleet-management-operations",
    "title": "Heavy Equipment Fleet Management Operations",
    "category": "construction-site-operations-and-safety",
    "categoryName": "Construction: Site Operations & Safety",
    "price": "INR 75,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Heavy Equipment Fleet Management Operations",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Heavy Equipment Fleet Management Operations",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Heavy Equipment Fleet Management Operations",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Heavy Equipment Fleet Management Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Heavy Equipment Fleet Management Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "construction-quality-control-site-inspection-frameworks",
    "title": "Construction Quality Control & Site Inspection Frameworks",
    "category": "construction-site-operations-and-safety",
    "categoryName": "Construction: Site Operations & Safety",
    "price": "INR 50,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Construction Quality Control & Site Inspection Frameworks",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Construction Quality Control & Site Inspection Frameworks",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Construction Quality Control & Site Inspection Frameworks",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Construction Quality Control & Site Inspection Frameworks",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Construction Quality Control & Site Inspection Frameworks",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "site-layout-land-surveying-tools-levelling-operations",
    "title": "Site Layout, Land Surveying Tools & Levelling Operations",
    "category": "construction-site-operations-and-safety",
    "categoryName": "Construction: Site Operations & Safety",
    "price": "INR 48,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Site Layout, Land Surveying Tools & Levelling Operations",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Site Layout, Land Surveying Tools & Levelling Operations",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Site Layout, Land Surveying Tools & Levelling Operations",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Site Layout, Land Surveying Tools & Levelling Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Site Layout, Land Surveying Tools & Levelling Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "construction-material-storage-waste-reduction-storekeeping",
    "title": "Construction Material Storage, Waste Reduction & Storekeeping",
    "category": "construction-site-operations-and-safety",
    "categoryName": "Construction: Site Operations & Safety",
    "price": "INR 26,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Construction Material Storage, Waste Reduction & Storekeeping",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Construction Material Storage, Waste Reduction & Storekeeping",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Construction Material Storage, Waste Reduction & Storekeeping",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Construction Material Storage, Waste Reduction & Storekeeping",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Construction Material Storage, Waste Reduction & Storekeeping",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "excavation-shoring-deep-foundation-site-coordination",
    "title": "Excavation, Shoring & Deep Foundation Site Coordination",
    "category": "construction-site-operations-and-safety",
    "categoryName": "Construction: Site Operations & Safety",
    "price": "INR 50,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Excavation, Shoring & Deep Foundation Site Coordination",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Excavation, Shoring & Deep Foundation Site Coordination",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Excavation, Shoring & Deep Foundation Site Coordination",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Excavation, Shoring & Deep Foundation Site Coordination",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Excavation, Shoring & Deep Foundation Site Coordination",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "scaffolding-safety-erection-control-high-rise-access-planning",
    "title": "Scaffolding Safety, Erection Control & High-Rise Access Planning",
    "category": "construction-site-operations-and-safety",
    "categoryName": "Construction: Site Operations & Safety",
    "price": "INR 20,000",
    "duration": "10 Days",
    "subtitle": "Accelerated, practical 10 Days vocational masterclass in Scaffolding Safety, Erection Control & High-Rise Access Planning",
    "overview": "Accelerated, practical 10 Days vocational masterclass in Scaffolding Safety, Erection Control & High-Rise Access Planning",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Scaffolding Safety, Erection Control & High-Rise Access Planning",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Scaffolding Safety, Erection Control & High-Rise Access Planning",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Scaffolding Safety, Erection Control & High-Rise Access Planning",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "construction-site-water-management-dewatering-systems",
    "title": "Construction Site Water Management & Dewatering Systems",
    "category": "construction-site-operations-and-safety",
    "categoryName": "Construction: Site Operations & Safety",
    "price": "INR 30,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Construction Site Water Management & Dewatering Systems",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Construction Site Water Management & Dewatering Systems",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Construction Site Water Management & Dewatering Systems",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Construction Site Water Management & Dewatering Systems",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Construction Site Water Management & Dewatering Systems",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "demolition-planning-structural-dismantling-salvage-management",
    "title": "Demolition Planning, Structural Dismantling & Salvage Management",
    "category": "construction-site-operations-and-safety",
    "categoryName": "Construction: Site Operations & Safety",
    "price": "INR 45,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Demolition Planning, Structural Dismantling & Salvage Management",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Demolition Planning, Structural Dismantling & Salvage Management",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Demolition Planning, Structural Dismantling & Salvage Management",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Demolition Planning, Structural Dismantling & Salvage Management",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Demolition Planning, Structural Dismantling & Salvage Management",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "labour-productivity-management-on-site-performance-tracking",
    "title": "Labour Productivity Management & On-Site Performance Tracking",
    "category": "construction-site-operations-and-safety",
    "categoryName": "Construction: Site Operations & Safety",
    "price": "INR 35,000",
    "duration": "10 Days",
    "subtitle": "Accelerated, practical 10 Days vocational masterclass in Labour Productivity Management & On-Site Performance Tracking",
    "overview": "Accelerated, practical 10 Days vocational masterclass in Labour Productivity Management & On-Site Performance Tracking",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Labour Productivity Management & On-Site Performance Tracking",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Labour Productivity Management & On-Site Performance Tracking",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Labour Productivity Management & On-Site Performance Tracking",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "temporary-structures-site-infrastructure-layout-planning",
    "title": "Temporary Structures & Site Infrastructure Layout Planning",
    "category": "construction-site-operations-and-safety",
    "categoryName": "Construction: Site Operations & Safety",
    "price": "INR 40,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Temporary Structures & Site Infrastructure Layout Planning",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Temporary Structures & Site Infrastructure Layout Planning",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Temporary Structures & Site Infrastructure Layout Planning",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Temporary Structures & Site Infrastructure Layout Planning",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Temporary Structures & Site Infrastructure Layout Planning",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "construction-site-utilities-temporary-power-water-setup",
    "title": "Construction Site Utilities & Temporary Power/Water Setup",
    "category": "construction-site-operations-and-safety",
    "categoryName": "Construction: Site Operations & Safety",
    "price": "INR 38,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Construction Site Utilities & Temporary Power/Water Setup",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Construction Site Utilities & Temporary Power/Water Setup",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Construction Site Utilities & Temporary Power/Water Setup",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Construction Site Utilities & Temporary Power/Water Setup",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Construction Site Utilities & Temporary Power/Water Setup",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "bim-building-information-modeling-software-coordination",
    "title": "BIM (Building Information Modeling) Software Coordination",
    "category": "construction-design-coordination-and-bim",
    "categoryName": "Construction: Design Coordination & BIM",
    "price": "INR 1,10,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in BIM (Building Information Modeling) Software Coordination",
    "overview": "Accelerated, practical 30 Days vocational masterclass in BIM (Building Information Modeling) Software Coordination",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of BIM (Building Information Modeling) Software Coordination",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of BIM (Building Information Modeling) Software Coordination",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of BIM (Building Information Modeling) Software Coordination",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "advanced-blueprint-architectural-drawing-interpretation",
    "title": "Advanced Blueprint & Architectural Drawing Interpretation",
    "category": "construction-design-coordination-and-bim",
    "categoryName": "Construction: Design Coordination & BIM",
    "price": "INR 30,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Advanced Blueprint & Architectural Drawing Interpretation",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Advanced Blueprint & Architectural Drawing Interpretation",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Advanced Blueprint & Architectural Drawing Interpretation",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Advanced Blueprint & Architectural Drawing Interpretation",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Advanced Blueprint & Architectural Drawing Interpretation",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "pre-engineered-building-peb-design-and-assembly-principles",
    "title": "Pre-Engineered Building (PEB) Design and Assembly Principles",
    "category": "construction-design-coordination-and-bim",
    "categoryName": "Construction: Design Coordination & BIM",
    "price": "INR 80,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Pre-Engineered Building (PEB) Design and Assembly Principles",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Pre-Engineered Building (PEB) Design and Assembly Principles",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Pre-Engineered Building (PEB) Design and Assembly Principles",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Pre-Engineered Building (PEB) Design and Assembly Principles",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Pre-Engineered Building (PEB) Design and Assembly Principles",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "structural-drawing-verification-for-site-engineers",
    "title": "Structural Drawing Verification for Site Engineers",
    "category": "construction-design-coordination-and-bim",
    "categoryName": "Construction: Design Coordination & BIM",
    "price": "INR 48,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Structural Drawing Verification for Site Engineers",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Structural Drawing Verification for Site Engineers",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Structural Drawing Verification for Site Engineers",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Structural Drawing Verification for Site Engineers",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Structural Drawing Verification for Site Engineers",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "mep-mechanical-electrical-plumbing-drawing-coordination",
    "title": "MEP (Mechanical, Electrical, Plumbing) Drawing Coordination",
    "category": "construction-design-coordination-and-bim",
    "categoryName": "Construction: Design Coordination & BIM",
    "price": "INR 65,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in MEP (Mechanical, Electrical, Plumbing) Drawing Coordination",
    "overview": "Accelerated, practical 30 Days vocational masterclass in MEP (Mechanical, Electrical, Plumbing) Drawing Coordination",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of MEP (Mechanical, Electrical, Plumbing) Drawing Coordination",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of MEP (Mechanical, Electrical, Plumbing) Drawing Coordination",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of MEP (Mechanical, Electrical, Plumbing) Drawing Coordination",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "as-built-drawing-documentation-handover-report-drafting",
    "title": "As-Built Drawing Documentation & Handover Report Drafting",
    "category": "construction-design-coordination-and-bim",
    "categoryName": "Construction: Design Coordination & BIM",
    "price": "INR 28,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in As-Built Drawing Documentation & Handover Report Drafting",
    "overview": "Accelerated, practical 20 Days vocational masterclass in As-Built Drawing Documentation & Handover Report Drafting",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of As-Built Drawing Documentation & Handover Report Drafting",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of As-Built Drawing Documentation & Handover Report Drafting",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of As-Built Drawing Documentation & Handover Report Drafting",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "construction-standard-operating-procedure-sop-writing",
    "title": "Construction Standard Operating Procedure (SOP) Writing",
    "category": "construction-design-coordination-and-bim",
    "categoryName": "Construction: Design Coordination & BIM",
    "price": "INR 40,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Construction Standard Operating Procedure (SOP) Writing",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Construction Standard Operating Procedure (SOP) Writing",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Construction Standard Operating Procedure (SOP) Writing",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Construction Standard Operating Procedure (SOP) Writing",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Construction Standard Operating Procedure (SOP) Writing",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "digital-document-control-daily-progress-report-dpr-systems",
    "title": "Digital Document Control & Daily Progress Report (DPR) Systems",
    "category": "construction-design-coordination-and-bim",
    "categoryName": "Construction: Design Coordination & BIM",
    "price": "INR 18,000",
    "duration": "10 Days",
    "subtitle": "Accelerated, practical 10 Days vocational masterclass in Digital Document Control & Daily Progress Report (DPR) Systems",
    "overview": "Accelerated, practical 10 Days vocational masterclass in Digital Document Control & Daily Progress Report (DPR) Systems",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Digital Document Control & Daily Progress Report (DPR) Systems",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Digital Document Control & Daily Progress Report (DPR) Systems",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Digital Document Control & Daily Progress Report (DPR) Systems",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "using-excel-for-construction-bar-bending-schedules-bbs",
    "title": "Using Excel for Construction Bar Bending Schedules (BBS)",
    "category": "construction-design-coordination-and-bim",
    "categoryName": "Construction: Design Coordination & BIM",
    "price": "INR 24,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Using Excel for Construction Bar Bending Schedules (BBS)",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Using Excel for Construction Bar Bending Schedules (BBS)",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Using Excel for Construction Bar Bending Schedules (BBS)",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Using Excel for Construction Bar Bending Schedules (BBS)",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Using Excel for Construction Bar Bending Schedules (BBS)",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "revit-architecture-foundations-for-project-managers",
    "title": "Revit Architecture Foundations for Project Managers",
    "category": "construction-design-coordination-and-bim",
    "categoryName": "Construction: Design Coordination & BIM",
    "price": "INR 60,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Revit Architecture Foundations for Project Managers",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Revit Architecture Foundations for Project Managers",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Revit Architecture Foundations for Project Managers",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Revit Architecture Foundations for Project Managers",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Revit Architecture Foundations for Project Managers",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Cambridge Certified"
  },
  {
    "id": "autocad-basics-for-construction-site-supervisors",
    "title": "AutoCAD Basics for Construction Site Supervisors",
    "category": "construction-design-coordination-and-bim",
    "categoryName": "Construction: Design Coordination & BIM",
    "price": "INR 40,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in AutoCAD Basics for Construction Site Supervisors",
    "overview": "Accelerated, practical 20 Days vocational masterclass in AutoCAD Basics for Construction Site Supervisors",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of AutoCAD Basics for Construction Site Supervisors",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of AutoCAD Basics for Construction Site Supervisors",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of AutoCAD Basics for Construction Site Supervisors",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "concrete-technology-modern-formwork-applications",
    "title": "Concrete Technology & Modern Formwork Applications",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 48,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Concrete Technology & Modern Formwork Applications",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Concrete Technology & Modern Formwork Applications",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Concrete Technology & Modern Formwork Applications",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Concrete Technology & Modern Formwork Applications",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Concrete Technology & Modern Formwork Applications",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "interior-fit-out-commercial-finishing-project-coordination",
    "title": "Interior Fit-Out & Commercial Finishing Project Coordination",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 70,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Interior Fit-Out & Commercial Finishing Project Coordination",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Interior Fit-Out & Commercial Finishing Project Coordination",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Interior Fit-Out & Commercial Finishing Project Coordination",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Interior Fit-Out & Commercial Finishing Project Coordination",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Interior Fit-Out & Commercial Finishing Project Coordination",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Cambridge Certified"
  },
  {
    "id": "sustainable-building-materials-green-construction-intro",
    "title": "Sustainable Building Materials & Green Construction Intro",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 35,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Sustainable Building Materials & Green Construction Intro",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Sustainable Building Materials & Green Construction Intro",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Sustainable Building Materials & Green Construction Intro",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Sustainable Building Materials & Green Construction Intro",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Sustainable Building Materials & Green Construction Intro",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "residential-property-development-foundations",
    "title": "Residential Property Development Foundations",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 1,20,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Residential Property Development Foundations",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Residential Property Development Foundations",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Residential Property Development Foundations",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Residential Property Development Foundations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Residential Property Development Foundations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "waterproofing-technology-materials-selection-application",
    "title": "Waterproofing Technology: Materials, Selection & Application",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 45,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Waterproofing Technology: Materials, Selection & Application",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Waterproofing Technology: Materials, Selection & Application",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Waterproofing Technology: Materials, Selection & Application",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Waterproofing Technology: Materials, Selection & Application",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Waterproofing Technology: Materials, Selection & Application",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "advanced-flooring-systems-tiling-project-inspection",
    "title": "Advanced Flooring Systems & Tiling Project Inspection",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 30,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Advanced Flooring Systems & Tiling Project Inspection",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Advanced Flooring Systems & Tiling Project Inspection",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Advanced Flooring Systems & Tiling Project Inspection",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Advanced Flooring Systems & Tiling Project Inspection",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Advanced Flooring Systems & Tiling Project Inspection",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Cambridge Certified"
  },
  {
    "id": "fa-ade-engineering-commercial-glazing-installation-systems",
    "title": "Fa\u00e7ade Engineering & Commercial Glazing Installation Systems",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 75,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Fa\u00e7ade Engineering & Commercial Glazing Installation Systems",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Fa\u00e7ade Engineering & Commercial Glazing Installation Systems",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Fa\u00e7ade Engineering & Commercial Glazing Installation Systems",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Fa\u00e7ade Engineering & Commercial Glazing Installation Systems",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Fa\u00e7ade Engineering & Commercial Glazing Installation Systems",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "precast-concrete-elements-manufacturing-erection-control",
    "title": "Precast Concrete Elements: Manufacturing & Erection Control",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 95,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Precast Concrete Elements: Manufacturing & Erection Control",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Precast Concrete Elements: Manufacturing & Erection Control",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Precast Concrete Elements: Manufacturing & Erection Control",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Precast Concrete Elements: Manufacturing & Erection Control",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Precast Concrete Elements: Manufacturing & Erection Control",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "drywall-partitioning-acoustic-insulation-project-coordination",
    "title": "Drywall Partitioning & Acoustic Insulation Project Coordination",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 38,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Drywall Partitioning & Acoustic Insulation Project Coordination",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Drywall Partitioning & Acoustic Insulation Project Coordination",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Drywall Partitioning & Acoustic Insulation Project Coordination",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Drywall Partitioning & Acoustic Insulation Project Coordination",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Drywall Partitioning & Acoustic Insulation Project Coordination",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Cambridge Certified"
  },
  {
    "id": "road-pavement-construction-materials-field-execution",
    "title": "Road & Pavement Construction Materials & Field Execution",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 65,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Road & Pavement Construction Materials & Field Execution",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Road & Pavement Construction Materials & Field Execution",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Road & Pavement Construction Materials & Field Execution",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Road & Pavement Construction Materials & Field Execution",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Road & Pavement Construction Materials & Field Execution",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "building-structural-repair-retrofitting-rehabilitation-basics",
    "title": "Building Structural Repair, Retrofitting & Rehabilitation Basics",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 78,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Building Structural Repair, Retrofitting & Rehabilitation Basics",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Building Structural Repair, Retrofitting & Rehabilitation Basics",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Building Structural Repair, Retrofitting & Rehabilitation Basics",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Building Structural Repair, Retrofitting & Rehabilitation Basics",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Building Structural Repair, Retrofitting & Rehabilitation Basics",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "landscape-construction-engineering-external-site-works",
    "title": "Landscape Construction Engineering & External Site Works",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 50,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Landscape Construction Engineering & External Site Works",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Landscape Construction Engineering & External Site Works",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Landscape Construction Engineering & External Site Works",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Landscape Construction Engineering & External Site Works",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Landscape Construction Engineering & External Site Works",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "smart-home-automation-iot-hardware-site-integration",
    "title": "Smart Home Automation & IoT Hardware Site Integration",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 90,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Smart Home Automation & IoT Hardware Site Integration",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Smart Home Automation & IoT Hardware Site Integration",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Smart Home Automation & IoT Hardware Site Integration",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Smart Home Automation & IoT Hardware Site Integration",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Smart Home Automation & IoT Hardware Site Integration",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Industry Standard"
  },
  {
    "id": "modular-kitchen-wardrobe-joinery-project-management",
    "title": "Modular Kitchen & Wardrobe Joinery Project Management",
    "category": "construction-materials-finishes-and-tech",
    "categoryName": "Construction: Materials, Finishes & Tech",
    "price": "INR 55,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Modular Kitchen & Wardrobe Joinery Project Management",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Modular Kitchen & Wardrobe Joinery Project Management",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Modular Kitchen & Wardrobe Joinery Project Management",
      "Applying industry-tested frameworks in modern construction operations, technical engineering, and site execution to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Modular Kitchen & Wardrobe Joinery Project Management",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Modular Kitchen & Wardrobe Joinery Project Management",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Cambridge Certified"
  },
  {
    "id": "advanced-microsoft-excel-data-dashboarding-for-operations",
    "title": "Advanced Microsoft Excel & Data Dashboarding for Operations",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 20,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Advanced Microsoft Excel & Data Dashboarding for Operations",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Advanced Microsoft Excel & Data Dashboarding for Operations",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Advanced Microsoft Excel & Data Dashboarding for Operations",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Advanced Microsoft Excel & Data Dashboarding for Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Advanced Microsoft Excel & Data Dashboarding for Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "supply-chain-logistics-warehouse-inventory-management",
    "title": "Supply Chain Logistics & Warehouse Inventory Management",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 55,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Supply Chain Logistics & Warehouse Inventory Management",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Supply Chain Logistics & Warehouse Inventory Management",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Supply Chain Logistics & Warehouse Inventory Management",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Supply Chain Logistics & Warehouse Inventory Management",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Supply Chain Logistics & Warehouse Inventory Management",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "vendor-management-strategic-procurement-operations",
    "title": "Vendor Management & Strategic Procurement Operations",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 45,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Vendor Management & Strategic Procurement Operations",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Vendor Management & Strategic Procurement Operations",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Vendor Management & Strategic Procurement Operations",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Vendor Management & Strategic Procurement Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Vendor Management & Strategic Procurement Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "agile-frameworks-scrum-basics-for-non-tech-operations",
    "title": "Agile Frameworks & Scrum Basics for Non-Tech Operations",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 35,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Agile Frameworks & Scrum Basics for Non-Tech Operations",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Agile Frameworks & Scrum Basics for Non-Tech Operations",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Agile Frameworks & Scrum Basics for Non-Tech Operations",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Agile Frameworks & Scrum Basics for Non-Tech Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Agile Frameworks & Scrum Basics for Non-Tech Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "business-process-mapping-workflow-optimization-blueprint",
    "title": "Business Process Mapping & Workflow Optimization Blueprint",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 65,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Business Process Mapping & Workflow Optimization Blueprint",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Business Process Mapping & Workflow Optimization Blueprint",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Business Process Mapping & Workflow Optimization Blueprint",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Business Process Mapping & Workflow Optimization Blueprint",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Business Process Mapping & Workflow Optimization Blueprint",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "lean-six-sigma-foundations-for-operational-excellence",
    "title": "Lean Six Sigma Foundations for Operational Excellence",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 95,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Lean Six Sigma Foundations for Operational Excellence",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Lean Six Sigma Foundations for Operational Excellence",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Lean Six Sigma Foundations for Operational Excellence",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Lean Six Sigma Foundations for Operational Excellence",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Lean Six Sigma Foundations for Operational Excellence",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "customer-success-operations-account-retention-strategies",
    "title": "Customer Success Operations & Account Retention Strategies",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 42,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Customer Success Operations & Account Retention Strategies",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Customer Success Operations & Account Retention Strategies",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Customer Success Operations & Account Retention Strategies",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Customer Success Operations & Account Retention Strategies",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Customer Success Operations & Account Retention Strategies",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "key-account-management-client-relations-frameworks",
    "title": "Key Account Management & Client Relations Frameworks",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 50,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Key Account Management & Client Relations Frameworks",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Key Account Management & Client Relations Frameworks",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Key Account Management & Client Relations Frameworks",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Key Account Management & Client Relations Frameworks",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Key Account Management & Client Relations Frameworks",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "project-management-essentials-for-operational-teams",
    "title": "Project Management Essentials for Operational Teams",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 55,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Project Management Essentials for Operational Teams",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Project Management Essentials for Operational Teams",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Project Management Essentials for Operational Teams",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Project Management Essentials for Operational Teams",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Project Management Essentials for Operational Teams",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Cambridge Certified"
  },
  {
    "id": "enterprise-resource-planning-erp-software-navigation-basics",
    "title": "Enterprise Resource Planning (ERP) Software Navigation Basics",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 48,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Enterprise Resource Planning (ERP) Software Navigation Basics",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Enterprise Resource Planning (ERP) Software Navigation Basics",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Enterprise Resource Planning (ERP) Software Navigation Basics",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Enterprise Resource Planning (ERP) Software Navigation Basics",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Enterprise Resource Planning (ERP) Software Navigation Basics",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "data-analytics-for-operations-using-powerbi-and-tableau",
    "title": "Data Analytics for Operations Using PowerBI and Tableau",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 95,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Data Analytics for Operations Using PowerBI and Tableau",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Data Analytics for Operations Using PowerBI and Tableau",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Data Analytics for Operations Using PowerBI and Tableau",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Data Analytics for Operations Using PowerBI and Tableau",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Data Analytics for Operations Using PowerBI and Tableau",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "quality-assurance-qa-and-process-control-frameworks",
    "title": "Quality Assurance (QA) and Process Control Frameworks",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 60,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Quality Assurance (QA) and Process Control Frameworks",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Quality Assurance (QA) and Process Control Frameworks",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Quality Assurance (QA) and Process Control Frameworks",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Quality Assurance (QA) and Process Control Frameworks",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Quality Assurance (QA) and Process Control Frameworks",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "change-management-frameworks-for-operational-restructuring",
    "title": "Change Management Frameworks for Operational Restructuring",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 50,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Change Management Frameworks for Operational Restructuring",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Change Management Frameworks for Operational Restructuring",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Change Management Frameworks for Operational Restructuring",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Change Management Frameworks for Operational Restructuring",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Change Management Frameworks for Operational Restructuring",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "business-continuity-planning-disaster-recovery-workflows",
    "title": "Business Continuity Planning & Disaster Recovery Workflows",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 70,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Business Continuity Planning & Disaster Recovery Workflows",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Business Continuity Planning & Disaster Recovery Workflows",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Business Continuity Planning & Disaster Recovery Workflows",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Business Continuity Planning & Disaster Recovery Workflows",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Business Continuity Planning & Disaster Recovery Workflows",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "cross-border-trade-logistics-custom-clearance-operations",
    "title": "Cross-Border Trade Logistics & Custom Clearance Operations",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 65,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Cross-Border Trade Logistics & Custom Clearance Operations",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Cross-Border Trade Logistics & Custom Clearance Operations",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Cross-Border Trade Logistics & Custom Clearance Operations",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Cross-Border Trade Logistics & Custom Clearance Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Cross-Border Trade Logistics & Custom Clearance Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "corporate-retail-operations-store-management-systems",
    "title": "Corporate Retail Operations & Store Management Systems",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 45,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Corporate Retail Operations & Store Management Systems",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Corporate Retail Operations & Store Management Systems",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Corporate Retail Operations & Store Management Systems",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Corporate Retail Operations & Store Management Systems",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Corporate Retail Operations & Store Management Systems",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "b2b-service-operations-management-client-sla-tracking",
    "title": "B2B Service Operations Management & Client SLA Tracking",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 40,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in B2B Service Operations Management & Client SLA Tracking",
    "overview": "Accelerated, practical 20 Days vocational masterclass in B2B Service Operations Management & Client SLA Tracking",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of B2B Service Operations Management & Client SLA Tracking",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of B2B Service Operations Management & Client SLA Tracking",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of B2B Service Operations Management & Client SLA Tracking",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "digital-product-operations-lifecycle-coordination",
    "title": "Digital Product Operations & Lifecycle Coordination",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 80,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Digital Product Operations & Lifecycle Coordination",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Digital Product Operations & Lifecycle Coordination",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Digital Product Operations & Lifecycle Coordination",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Digital Product Operations & Lifecycle Coordination",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Digital Product Operations & Lifecycle Coordination",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "e-commerce-operations-supply-chain-fulfillment-tactics",
    "title": "E-Commerce Operations & Supply Chain Fulfillment Tactics",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 55,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in E-Commerce Operations & Supply Chain Fulfillment Tactics",
    "overview": "Accelerated, practical 30 Days vocational masterclass in E-Commerce Operations & Supply Chain Fulfillment Tactics",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of E-Commerce Operations & Supply Chain Fulfillment Tactics",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of E-Commerce Operations & Supply Chain Fulfillment Tactics",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of E-Commerce Operations & Supply Chain Fulfillment Tactics",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "risk-mitigation-internal-control-audit-for-operations-managers",
    "title": "Risk Mitigation & Internal Control Audit for Operations Managers",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 1,25,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Risk Mitigation & Internal Control Audit for Operations Managers",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Risk Mitigation & Internal Control Audit for Operations Managers",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Risk Mitigation & Internal Control Audit for Operations Managers",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Risk Mitigation & Internal Control Audit for Operations Managers",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Risk Mitigation & Internal Control Audit for Operations Managers",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "strategic-facility-optimization-resource-budgeting",
    "title": "Strategic Facility Optimization & Resource Budgeting",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 55,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Strategic Facility Optimization & Resource Budgeting",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Strategic Facility Optimization & Resource Budgeting",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Strategic Facility Optimization & Resource Budgeting",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Strategic Facility Optimization & Resource Budgeting",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Strategic Facility Optimization & Resource Budgeting",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "root-cause-analysis-operational-bottleneck-troubleshooting",
    "title": "Root-Cause Analysis & Operational Bottleneck Troubleshooting",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 32,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Root-Cause Analysis & Operational Bottleneck Troubleshooting",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Root-Cause Analysis & Operational Bottleneck Troubleshooting",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Root-Cause Analysis & Operational Bottleneck Troubleshooting",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Root-Cause Analysis & Operational Bottleneck Troubleshooting",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Root-Cause Analysis & Operational Bottleneck Troubleshooting",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "operational-dashboard-design-performance-kpi-mapping",
    "title": "Operational Dashboard Design & Performance KPI Mapping",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 38,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Operational Dashboard Design & Performance KPI Mapping",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Operational Dashboard Design & Performance KPI Mapping",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Operational Dashboard Design & Performance KPI Mapping",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Operational Dashboard Design & Performance KPI Mapping",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Operational Dashboard Design & Performance KPI Mapping",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "b2b-client-onboarding-service-delivery-workflows",
    "title": "B2B Client Onboarding & Service Delivery Workflows",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 45,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in B2B Client Onboarding & Service Delivery Workflows",
    "overview": "Accelerated, practical 20 Days vocational masterclass in B2B Client Onboarding & Service Delivery Workflows",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of B2B Client Onboarding & Service Delivery Workflows",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of B2B Client Onboarding & Service Delivery Workflows",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of B2B Client Onboarding & Service Delivery Workflows",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "fleet-logistics-optimization-last-mile-delivery-planning",
    "title": "Fleet Logistics Optimization & Last-Mile Delivery Planning",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 60,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Fleet Logistics Optimization & Last-Mile Delivery Planning",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Fleet Logistics Optimization & Last-Mile Delivery Planning",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Fleet Logistics Optimization & Last-Mile Delivery Planning",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Fleet Logistics Optimization & Last-Mile Delivery Planning",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Fleet Logistics Optimization & Last-Mile Delivery Planning",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "corporate-standard-operating-procedure-sop-deployment",
    "title": "Corporate Standard Operating Procedure (SOP) Deployment",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 35,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Corporate Standard Operating Procedure (SOP) Deployment",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Corporate Standard Operating Procedure (SOP) Deployment",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Corporate Standard Operating Procedure (SOP) Deployment",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Corporate Standard Operating Procedure (SOP) Deployment",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Corporate Standard Operating Procedure (SOP) Deployment",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "incident-management-operational-escalation-engineering",
    "title": "Incident Management & Operational Escalation Engineering",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 30,000",
    "duration": "10 Days",
    "subtitle": "Accelerated, practical 10 Days vocational masterclass in Incident Management & Operational Escalation Engineering",
    "overview": "Accelerated, practical 10 Days vocational masterclass in Incident Management & Operational Escalation Engineering",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Incident Management & Operational Escalation Engineering",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Incident Management & Operational Escalation Engineering",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Incident Management & Operational Escalation Engineering",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "agile-scaling-frameworks-for-cross-departmental-work",
    "title": "Agile Scaling Frameworks for Cross-Departmental Work",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 70,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Agile Scaling Frameworks for Cross-Departmental Work",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Agile Scaling Frameworks for Cross-Departmental Work",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Agile Scaling Frameworks for Cross-Departmental Work",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Agile Scaling Frameworks for Cross-Departmental Work",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Agile Scaling Frameworks for Cross-Departmental Work",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "third-party-logistics-3pl-vendor-performance-auditing",
    "title": "Third-Party Logistics (3PL) & Vendor Performance Auditing",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 50,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Third-Party Logistics (3PL) & Vendor Performance Auditing",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Third-Party Logistics (3PL) & Vendor Performance Auditing",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Third-Party Logistics (3PL) & Vendor Performance Auditing",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Third-Party Logistics (3PL) & Vendor Performance Auditing",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Third-Party Logistics (3PL) & Vendor Performance Auditing",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "enterprise-assets-inventory-valuation-methodologies",
    "title": "Enterprise Assets & Inventory Valuation Methodologies",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 48,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Enterprise Assets & Inventory Valuation Methodologies",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Enterprise Assets & Inventory Valuation Methodologies",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Enterprise Assets & Inventory Valuation Methodologies",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Enterprise Assets & Inventory Valuation Methodologies",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Enterprise Assets & Inventory Valuation Methodologies",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "predictive-capacity-planning-workforce-operations",
    "title": "Predictive Capacity Planning & Workforce Operations",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 65,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Predictive Capacity Planning & Workforce Operations",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Predictive Capacity Planning & Workforce Operations",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Predictive Capacity Planning & Workforce Operations",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Predictive Capacity Planning & Workforce Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Predictive Capacity Planning & Workforce Operations",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "green-supply-chain-carbon-neutral-operations-basics",
    "title": "Green Supply Chain & Carbon-Neutral Operations Basics",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 42,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Green Supply Chain & Carbon-Neutral Operations Basics",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Green Supply Chain & Carbon-Neutral Operations Basics",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Green Supply Chain & Carbon-Neutral Operations Basics",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Green Supply Chain & Carbon-Neutral Operations Basics",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Green Supply Chain & Carbon-Neutral Operations Basics",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "corporate-relocation-logistics-infrastructure-set-up",
    "title": "Corporate Relocation Logistics & Infrastructure Set Up",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 80,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Corporate Relocation Logistics & Infrastructure Set Up",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Corporate Relocation Logistics & Infrastructure Set Up",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Corporate Relocation Logistics & Infrastructure Set Up",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Corporate Relocation Logistics & Infrastructure Set Up",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Corporate Relocation Logistics & Infrastructure Set Up",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "digital-workspace-optimization-automation-for-admin-teams",
    "title": "Digital Workspace Optimization: Automation for Admin Teams",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 26,000",
    "duration": "20 Days",
    "subtitle": "Accelerated, practical 20 Days vocational masterclass in Digital Workspace Optimization: Automation for Admin Teams",
    "overview": "Accelerated, practical 20 Days vocational masterclass in Digital Workspace Optimization: Automation for Admin Teams",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Digital Workspace Optimization: Automation for Admin Teams",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Digital Workspace Optimization: Automation for Admin Teams",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Digital Workspace Optimization: Automation for Admin Teams",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  },
  {
    "id": "crisis-operations-management-business-stabilization",
    "title": "Crisis Operations Management & Business Stabilization",
    "category": "corporate-operations-and-logistics",
    "categoryName": "Corporate Operations & Logistics",
    "price": "INR 95,000",
    "duration": "30 Days",
    "subtitle": "Accelerated, practical 30 Days vocational masterclass in Crisis Operations Management & Business Stabilization",
    "overview": "Accelerated, practical 30 Days vocational masterclass in Crisis Operations Management & Business Stabilization",
    "learningAreas": [
      "Mastering core operational principles and execution blueprints of Crisis Operations Management & Business Stabilization",
      "Applying industry-tested frameworks in corporate operations, logistics throughput, and enterprise business process optimization to drive tangible results",
      "Standard Operating Procedures (SOPs), quality benchmarks, and daily tracking tools",
      "Risk mitigation strategies, resource allocation, and workflow optimization",
      "Independent vocational competency development aligned with current enterprise demands"
    ],
    "courses": [
      "Module 1: Foundations & Architecture of Crisis Operations Management & Business Stabilization",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "allSyllabus": [
      "Module 1: Foundations & Architecture of Crisis Operations Management & Business Stabilization",
      "Module 2: Practical Implementation & Best Practice Protocols",
      "Module 3: Advanced Optimization & Troubleshooting",
      "Module 4: Enterprise Documentation, Quality & Certification Capstone"
    ],
    "format": "100% Online \u2022 Self-Paced Masterclass",
    "badge": "Professional Credential"
  }
];

const CAMBRIDGE_CATEGORIES = [
  {
    "name": "AI & Modern Workflows",
    "slug": "ai-and-modern-workflows",
    "icon": "FaRobot",
    "description": "Short-term masterclasses focusing on practical AI application and workflow acceleration.",
    "courseCount": 15,
    "courseIds": [
      "generative-ai-prompt-engineering-for-enterprise-workflows",
      "ai-powered-automation-for-small-business-operations",
      "ai-driven-copywriting-marketing-content-generation",
      "using-ai-tools-for-market-research-data-synthesis",
      "ai-enhanced-video-editing-creative-media-production",
      "no-code-ai-agent-custom-chatbot-architecture",
      "ai-productivity-hacks-for-microsoft-office-google-workspace",
      "using-midjourney-dall-e-for-commercial-graphic-design",
      "ai-for-human-resource-operations-talent-sourcing",
      "financial-analysis-budgeting-using-ai-assistance",
      "ai-powered-sales-scraping-cold-email-automation",
      "using-ai-for-supply-chain-optimization-inventory-planning",
      "ai-coding-assistants-github-copilot-for-rapid-development",
      "customer-support-automation-using-ai-helpdesk-tools",
      "ai-prompt-engineering-for-legal-compliance-documentation"
    ]
  },
  {
    "name": "Construction: Project Management & Billing",
    "slug": "construction-project-management-and-billing",
    "icon": "FaHardHat",
    "description": "Accelerated operational blueprints for developers, cost estimators, and billing engineers.",
    "courseCount": 13,
    "courseIds": [
      "construction-project-scheduling-basic-estimation",
      "construction-cost-estimation-quantity-surveying-basics",
      "contract-administration-procurement-in-construction",
      "construction-bill-checking-contractor-invoice-verification",
      "rate-analysis-construction-material-price-forecasting",
      "construction-risk-assessment-hazard-mitigation-strategies",
      "tendering-bidding-commercial-bid-evaluation-frameworks",
      "real-estate-project-cost-control-budget-management",
      "construction-claim-management-dispute-resolution-prep",
      "agile-frameworks-scrum-for-construction-management",
      "subcontractor-management-site-logistics-mastery",
      "construction-micro-scheduling-daily-work-progress-tracking",
      "cash-flow-management-capital-allocation-for-builders"
    ]
  },
  {
    "name": "Construction: Site Operations & Safety",
    "slug": "construction-site-operations-and-safety",
    "icon": "FaHardHat",
    "description": "Field execution frameworks, site supervision standards, and high-risk safety protocols.",
    "courseCount": 12,
    "courseIds": [
      "construction-site-operations-supervisor-foundations",
      "heavy-equipment-fleet-management-operations",
      "construction-quality-control-site-inspection-frameworks",
      "site-layout-land-surveying-tools-levelling-operations",
      "construction-material-storage-waste-reduction-storekeeping",
      "excavation-shoring-deep-foundation-site-coordination",
      "scaffolding-safety-erection-control-high-rise-access-planning",
      "construction-site-water-management-dewatering-systems",
      "demolition-planning-structural-dismantling-salvage-management",
      "labour-productivity-management-on-site-performance-tracking",
      "temporary-structures-site-infrastructure-layout-planning",
      "construction-site-utilities-temporary-power-water-setup"
    ]
  },
  {
    "name": "Construction: Design Coordination & BIM",
    "slug": "construction-design-coordination-and-bim",
    "icon": "FaDraftingCompass",
    "description": "Modern digital drawings, CAD/Revit foundations, and BIM documentation coordination.",
    "courseCount": 11,
    "courseIds": [
      "bim-building-information-modeling-software-coordination",
      "advanced-blueprint-architectural-drawing-interpretation",
      "pre-engineered-building-peb-design-and-assembly-principles",
      "structural-drawing-verification-for-site-engineers",
      "mep-mechanical-electrical-plumbing-drawing-coordination",
      "as-built-drawing-documentation-handover-report-drafting",
      "construction-standard-operating-procedure-sop-writing",
      "digital-document-control-daily-progress-report-dpr-systems",
      "using-excel-for-construction-bar-bending-schedules-bbs",
      "revit-architecture-foundations-for-project-managers",
      "autocad-basics-for-construction-site-supervisors"
    ]
  },
  {
    "name": "Construction: Materials, Finishes & Tech",
    "slug": "construction-materials-finishes-and-tech",
    "icon": "FaTools",
    "description": "Specialized building materials, structural technology, waterproofing, and modern finishes.",
    "courseCount": 14,
    "courseIds": [
      "concrete-technology-modern-formwork-applications",
      "interior-fit-out-commercial-finishing-project-coordination",
      "sustainable-building-materials-green-construction-intro",
      "residential-property-development-foundations",
      "waterproofing-technology-materials-selection-application",
      "advanced-flooring-systems-tiling-project-inspection",
      "fa-ade-engineering-commercial-glazing-installation-systems",
      "precast-concrete-elements-manufacturing-erection-control",
      "drywall-partitioning-acoustic-insulation-project-coordination",
      "road-pavement-construction-materials-field-execution",
      "building-structural-repair-retrofitting-rehabilitation-basics",
      "landscape-construction-engineering-external-site-works",
      "smart-home-automation-iot-hardware-site-integration",
      "modular-kitchen-wardrobe-joinery-project-management"
    ]
  },
  {
    "name": "Corporate Operations & Logistics",
    "slug": "corporate-operations-and-logistics",
    "icon": "FaCogs",
    "description": "Tactical training to streamline corporate operational throughput, logistics, supply chain, and analytics.",
    "courseCount": 35,
    "courseIds": [
      "advanced-microsoft-excel-data-dashboarding-for-operations",
      "supply-chain-logistics-warehouse-inventory-management",
      "vendor-management-strategic-procurement-operations",
      "agile-frameworks-scrum-basics-for-non-tech-operations",
      "business-process-mapping-workflow-optimization-blueprint",
      "lean-six-sigma-foundations-for-operational-excellence",
      "customer-success-operations-account-retention-strategies",
      "key-account-management-client-relations-frameworks",
      "project-management-essentials-for-operational-teams",
      "enterprise-resource-planning-erp-software-navigation-basics",
      "data-analytics-for-operations-using-powerbi-and-tableau",
      "quality-assurance-qa-and-process-control-frameworks",
      "change-management-frameworks-for-operational-restructuring",
      "business-continuity-planning-disaster-recovery-workflows",
      "cross-border-trade-logistics-custom-clearance-operations",
      "corporate-retail-operations-store-management-systems",
      "b2b-service-operations-management-client-sla-tracking",
      "digital-product-operations-lifecycle-coordination",
      "e-commerce-operations-supply-chain-fulfillment-tactics",
      "risk-mitigation-internal-control-audit-for-operations-managers",
      "strategic-facility-optimization-resource-budgeting",
      "root-cause-analysis-operational-bottleneck-troubleshooting",
      "operational-dashboard-design-performance-kpi-mapping",
      "b2b-client-onboarding-service-delivery-workflows",
      "fleet-logistics-optimization-last-mile-delivery-planning",
      "corporate-standard-operating-procedure-sop-deployment",
      "incident-management-operational-escalation-engineering",
      "agile-scaling-frameworks-for-cross-departmental-work",
      "third-party-logistics-3pl-vendor-performance-auditing",
      "enterprise-assets-inventory-valuation-methodologies",
      "predictive-capacity-planning-workforce-operations",
      "green-supply-chain-carbon-neutral-operations-basics",
      "corporate-relocation-logistics-infrastructure-set-up",
      "digital-workspace-optimization-automation-for-admin-teams",
      "crisis-operations-management-business-stabilization"
    ]
  }
];

// ==========================================================================
// 2. Global State & App Initialization
// ==========================================================================
let currentActiveCategory = "all";
let currentSearchQuery = "";
let currentSortMode = "featured";
let currentPriceFilter = "all";
let currentDurationFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
  initHeroCarousel();
  initHeroAmbientVideo();
  initCertificateGrid();
  initCategoryPills();
  initLiveSearch();
  initSmartFilters();
  initStatsObserver();
  initTestimonialsCarousel();
  initRequestInfoForm();
  initSearchModal();
  initVideoModal();
  initChatWidget();
  initBackToTop();
  initPromoBanner();
  initMobileDrawer();
  initStickyHeader();
});

// ==========================================================================
// 3. Promo Banner & Coupon Code Copy
// ==========================================================================
function initPromoBanner() {
  const btnCopy = document.getElementById("btnCopyCode");
  const copyText = document.getElementById("copyCodeText");
  const btnClose = document.getElementById("btnCloseBanner");
  const promoBanner = document.getElementById("promoBanner");

  if (btnCopy) {
    btnCopy.addEventListener("click", () => {
      const code = "LEARN30";
      navigator.clipboard.writeText(code).then(() => {
        copyText.textContent = "Copied!";
        showToast("Discount code LEARN30 copied to clipboard! (30% Off)");
        setTimeout(() => {
          copyText.textContent = "Copy Code";
        }, 3000);
      }).catch(() => {
        showToast("Use code: LEARN30 for 30% savings.");
      });
    });
  }

  if (btnClose && promoBanner) {
    btnClose.addEventListener("click", () => {
      promoBanner.style.display = "none";
    });
  }
}

function openPromoModal() {
  showToast("Code LEARN30 applied! Save 30% on pre-payment.");
  scrollToSection("requestInfoSection");
}

function showToast(message) {
  const toast = document.getElementById("toastNotice");
  const toastText = document.getElementById("toastText");
  if (!toast) return;
  toastText.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// ==========================================================================
// 4. Sticky Header Scroll Effect
// ==========================================================================
function initStickyHeader() {
  const header = document.getElementById("mainHeader");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// ==========================================================================
// 5. Hero Carousel Slider Logic
// ==========================================================================
let currentSlide = 0;
let slideInterval = null;
const slides = document.querySelectorAll(".carousel-slide");
const indicators = document.querySelectorAll(".indicator-dot");

function initHeroCarousel() {
  const btnPrev = document.getElementById("sliderPrev");
  const btnNext = document.getElementById("sliderNext");
  const heroSection = document.getElementById("heroCarousel");

  if (!slides.length) return;

  function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    if (indicators[currentSlide]) indicators[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    if (indicators[currentSlide]) indicators[currentSlide].classList.add("active");
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  if (btnNext) btnNext.addEventListener("click", nextSlide);
  if (btnPrev) btnPrev.addEventListener("click", prevSlide);

  indicators.forEach((dot, idx) => {
    dot.addEventListener("click", () => goToSlide(idx));
  });

  function startAutoPlay() {
    slideInterval = setInterval(nextSlide, 6000);
  }

  function stopAutoPlay() {
    clearInterval(slideInterval);
  }

  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopAutoPlay);
    heroSection.addEventListener("mouseleave", startAutoPlay);
  }

  startAutoPlay();
}

// Ambient Background Video Manager
function initHeroAmbientVideo() {
  const bgContainer = document.querySelector(".hero-video-bg");
  const iframe = document.getElementById("heroAmbientVideo");
  if (!bgContainer || !iframe) return;

  iframe.addEventListener("load", () => {
    setTimeout(() => {
      bgContainer.classList.add("is-loaded");
    }, 400);
  });

  // Fallback reveal in case iframe load event is suppressed
  setTimeout(() => {
    bgContainer.classList.add("is-loaded");
  }, 1200);
}

// ==========================================================================
// 6. Interactive Certificate Finder & Grid Rendering
// ==========================================================================
function initCertificateGrid() {
  renderCertificates();
}

function parsePriceNum(priceStr) {
  if (!priceStr) return 0;
  const num = Number(String(priceStr).replace(/[^0-9]/g, ""));
  return isNaN(num) ? 0 : num;
}

function parseDurationDays(durStr) {
  if (!durStr) return 0;
  const match = String(durStr).match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}

function setSortMode(mode) {
  currentSortMode = mode;
  renderCertificates();
}

function setPriceFilter(range) {
  currentPriceFilter = range;
  renderCertificates();
}

function setDurationFilter(dur) {
  currentDurationFilter = dur;
  renderCertificates();
}

function renderCertificates() {
  const grid = document.getElementById("certificateGrid");
  const countNotice = document.getElementById("resultCountNotice");
  const liveMetaCount = document.getElementById("liveMetaCount");
  const liveSortBadge = document.getElementById("liveSortBadge");
  const resetBtn = document.getElementById("resetAllFiltersBtn");
  const activeTagsContainer = document.getElementById("metaActiveTags");
  if (!grid) return;

  // 1. Filtering
  let filtered = CAMBRIDGE_CERTIFICATES.filter(cert => {
    // Category filter
    const matchesCat = (currentActiveCategory === "all") || (cert.category === currentActiveCategory);

    // Search query filter
    const query = currentSearchQuery.toLowerCase().trim();
    const matchesQuery = !query || 
      cert.title.toLowerCase().includes(query) || 
      cert.categoryName.toLowerCase().includes(query) ||
      (cert.overview && cert.overview.toLowerCase().includes(query));

    // Price filter
    const priceNum = parsePriceNum(cert.price);
    let matchesPrice = true;
    if (currentPriceFilter === "under-45k") {
      matchesPrice = priceNum < 45000;
    } else if (currentPriceFilter === "45k-60k") {
      matchesPrice = priceNum >= 45000 && priceNum <= 60000;
    } else if (currentPriceFilter === "above-60k") {
      matchesPrice = priceNum > 60000;
    }

    // Duration filter
    const durationDays = parseDurationDays(cert.duration);
    let matchesDuration = true;
    if (currentDurationFilter === "under-20") {
      matchesDuration = durationDays <= 20;
    } else if (currentDurationFilter === "21-30") {
      matchesDuration = durationDays > 20 && durationDays <= 30;
    } else if (currentDurationFilter === "above-30") {
      matchesDuration = durationDays > 30;
    }

    return matchesCat && matchesQuery && matchesPrice && matchesDuration;
  });

  // 2. Sorting
  if (currentSortMode === "price-asc") {
    filtered.sort((a, b) => parsePriceNum(a.price) - parsePriceNum(b.price));
  } else if (currentSortMode === "price-desc") {
    filtered.sort((a, b) => parsePriceNum(b.price) - parsePriceNum(a.price));
  } else if (currentSortMode === "duration-asc") {
    filtered.sort((a, b) => parseDurationDays(a.duration) - parseDurationDays(b.duration));
  } else if (currentSortMode === "duration-desc") {
    filtered.sort((a, b) => parseDurationDays(b.duration) - parseDurationDays(a.duration));
  } else if (currentSortMode === "title-asc") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSortMode === "title-desc") {
    filtered.sort((a, b) => b.title.localeCompare(a.title));
  }

  // 3. Update Meta Header & Badges
  const totalCount = CAMBRIDGE_CERTIFICATES.length;
  const countText = `Showing ${filtered.length} of ${totalCount} courses`;
  if (liveMetaCount) liveMetaCount.textContent = countText;
  if (countNotice) countNotice.textContent = countText;

  const sortLabels = {
    "featured": "Featured",
    "price-asc": "Price: Low to High",
    "price-desc": "Price: High to Low",
    "duration-asc": "Duration: Shortest",
    "duration-desc": "Duration: Longest",
    "title-asc": "Title: A to Z",
    "title-desc": "Title: Z to A"
  };
  if (liveSortBadge) {
    liveSortBadge.textContent = `Sorted by: ${sortLabels[currentSortMode] || "Featured"}`;
  }

  // Determine if any filter is active
  const hasActiveFilters = (currentActiveCategory !== "all") || 
                           (currentSearchQuery !== "") || 
                           (currentSortMode !== "featured") || 
                           (currentPriceFilter !== "all") || 
                           (currentDurationFilter !== "all");

  if (resetBtn) {
    resetBtn.style.display = hasActiveFilters ? "inline-flex" : "none";
  }

  // Render dismissible active tags
  if (activeTagsContainer) {
    const tags = [];
    if (currentActiveCategory !== "all") {
      const activePill = document.querySelector(`.category-pills .pill[data-category="${currentActiveCategory}"]`);
      const catLabel = activePill ? activePill.textContent.replace(/\(\d+\)/, "").trim() : currentActiveCategory;
      tags.push({ label: `Category: ${catLabel}`, onRemove: () => filterAndScrollToCategory("all") });
    }
    if (currentSearchQuery) {
      tags.push({ label: `Search: "${currentSearchQuery}"`, onRemove: () => {
        const inp = document.getElementById("courseLiveFilterInput");
        if (inp) inp.value = "";
        currentSearchQuery = "";
        const clr = document.getElementById("clearSearchBtn");
        if (clr) clr.style.display = "none";
        renderCertificates();
      }});
    }
    if (currentPriceFilter !== "all") {
      const pLabels = { "under-45k": "Under ₹45k", "45k-60k": "₹45k–₹60k", "above-60k": "Above ₹60k" };
      tags.push({ label: `Price: ${pLabels[currentPriceFilter] || currentPriceFilter}`, onRemove: () => setPriceFilter("all") });
    }
    if (currentDurationFilter !== "all") {
      const dLabels = { "under-20": "≤ 20 Days", "21-30": "21–30 Days", "above-30": "31+ Days" };
      tags.push({ label: `Duration: ${dLabels[currentDurationFilter] || currentDurationFilter}`, onRemove: () => setDurationFilter("all") });
    }
    if (currentSortMode !== "featured") {
      tags.push({ label: `Sort: ${sortLabels[currentSortMode]}`, onRemove: () => setSortMode("featured") });
    }

    activeTagsContainer.innerHTML = tags.map((t, idx) => `
      <span class="active-filter-tag">
        <span>${t.label}</span>
        <button type="button" class="tag-close-btn" data-tag-idx="${idx}" aria-label="Remove filter">&times;</button>
      </span>
    `).join("");

    activeTagsContainer.querySelectorAll(".tag-close-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idx = Number(e.currentTarget.getAttribute("data-tag-idx"));
        if (tags[idx] && typeof tags[idx].onRemove === "function") {
          tags[idx].onRemove();
        }
      });
    });
  }

  // Update quick chip active styling
  document.querySelectorAll(".smart-chip").forEach(chip => {
    const action = chip.getAttribute("data-chip-action");
    const val = chip.getAttribute("data-chip-val");
    let isActive = false;
    if (action === "sort") isActive = (currentSortMode === val);
    else if (action === "price") isActive = (currentPriceFilter === val);
    else if (action === "duration") isActive = (currentDurationFilter === val);

    if (isActive) chip.classList.add("is-active");
    else chip.classList.remove("is-active");
  });

  // Sync select element values
  const sortSelect = document.getElementById("courseSortSelect");
  if (sortSelect && sortSelect.value !== currentSortMode) sortSelect.value = currentSortMode;
  const priceSelect = document.getElementById("coursePriceFilter");
  if (priceSelect && priceSelect.value !== currentPriceFilter) priceSelect.value = currentPriceFilter;
  const durationSelect = document.getElementById("courseDurationFilter");
  if (durationSelect && durationSelect.value !== currentDurationFilter) durationSelect.value = currentDurationFilter;

  // 4. Render Grid or Empty State
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #f8fafc; border-radius: 12px; border: 1px dashed #cbd5e1;">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px; color: #1e293b;">No programs match the selected filters</h3>
        <p style="color: #64748b; margin-bottom: 20px; max-width: 480px; margin-left: auto; margin-right: auto;">
          Try adjusting your price range, duration, or search term to discover more certifications.
        </p>
        <button class="btn-primary" onclick="resetFilters()">Reset All Filters (${CAMBRIDGE_CERTIFICATES.length} Courses)</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(cert => `
    <article class="cert-card" data-id="${cert.id}">
      <div class="cert-card-header">
        <span class="cert-badge badge-red">${cert.badge || "Verified Certificate"}</span>
        <span class="cert-price-tag">${cert.price}</span>
      </div>
      <div class="cert-card-body">
        <span class="cert-category-label">${cert.categoryName}</span>
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-desc">${cert.overview ? cert.overview.slice(0, 130) + '...' : 'Accelerated practical masterclass covering end-to-end industry frameworks.'}</p>
        <ul class="cert-meta-list">
          <li class="cert-meta-item">⏱️ ${cert.duration}</li>
          <li class="cert-meta-item">💻 Online Self-Paced</li>
          <li class="cert-meta-item">📜 Official Certificate</li>
        </ul>
      </div>
      <div class="cert-card-footer">
        <button class="btn-view-cert" onclick="openProgramModal('${cert.id}')">
          View Syllabus &rarr;
        </button>
        <button class="btn-quick-inquire" onclick="inquireCourse('${cert.title}')">
          Enroll Now
        </button>
      </div>
    </article>
  `).join("");
}

function initCategoryPills() {
  const pills = document.querySelectorAll(".category-pills .pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentActiveCategory = pill.getAttribute("data-category");
      renderCertificates();
    });
  });
}

function initLiveSearch() {
  const input = document.getElementById("courseLiveFilterInput");
  const clearBtn = document.getElementById("clearSearchBtn");

  if (!input) return;

  input.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value;
    if (clearBtn) {
      clearBtn.style.display = currentSearchQuery ? "block" : "none";
    }
    renderCertificates();
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      input.value = "";
      currentSearchQuery = "";
      clearBtn.style.display = "none";
      renderCertificates();
      input.focus();
    });
  }
}

function initSmartFilters() {
  const sortSelect = document.getElementById("courseSortSelect");
  const priceSelect = document.getElementById("coursePriceFilter");
  const durationSelect = document.getElementById("courseDurationFilter");
  const resetBtn = document.getElementById("resetAllFiltersBtn");

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      setSortMode(e.target.value);
    });
  }

  if (priceSelect) {
    priceSelect.addEventListener("change", (e) => {
      setPriceFilter(e.target.value);
    });
  }

  if (durationSelect) {
    durationSelect.addEventListener("change", (e) => {
      setDurationFilter(e.target.value);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetFilters();
    });
  }

  // Quick Chips
  const chips = document.querySelectorAll(".smart-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const action = chip.getAttribute("data-chip-action");
      const val = chip.getAttribute("data-chip-val");

      if (action === "sort") {
        currentSortMode = (currentSortMode === val) ? "featured" : val;
      } else if (action === "price") {
        currentPriceFilter = (currentPriceFilter === val) ? "all" : val;
      } else if (action === "duration") {
        currentDurationFilter = (currentDurationFilter === val) ? "all" : val;
      }
      renderCertificates();
    });
  });
}

function filterAndScrollToCategory(catKey, e) {
  if (e && typeof e.preventDefault === "function") {
    e.preventDefault();
  }

  currentActiveCategory = catKey;
  
  // Clear any existing search query so all courses in the category are visible
  currentSearchQuery = "";
  const input = document.getElementById("courseLiveFilterInput");
  if (input) input.value = "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.style.display = "none";

  const pills = document.querySelectorAll(".category-pills .pill");
  pills.forEach(p => {
    if (p.getAttribute("data-category") === catKey) {
      p.classList.add("active");
      try {
        p.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      } catch (err) {}
    } else {
      p.classList.remove("active");
    }
  });

  renderCertificates();

  // Hide open dropdown menus immediately so content is visible
  const dropdowns = document.querySelectorAll(".dropdown-menu");
  dropdowns.forEach(d => {
    d.classList.add("force-hide");
    setTimeout(() => {
      d.classList.remove("force-hide");
    }, 450);
  });

  scrollToSection("programFinderSection");
}

function resetFilters() {
  currentActiveCategory = "all";
  currentSearchQuery = "";
  currentSortMode = "featured";
  currentPriceFilter = "all";
  currentDurationFilter = "all";

  const input = document.getElementById("courseLiveFilterInput");
  if (input) input.value = "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.style.display = "none";

  const pills = document.querySelectorAll(".category-pills .pill");
  pills.forEach(p => {
    if (p.getAttribute("data-category") === "all") p.classList.add("active");
    else p.classList.remove("active");
  });

  const sortSelect = document.getElementById("courseSortSelect");
  if (sortSelect) sortSelect.value = "featured";
  const priceSelect = document.getElementById("coursePriceFilter");
  if (priceSelect) priceSelect.value = "all";
  const durationSelect = document.getElementById("courseDurationFilter");
  if (durationSelect) durationSelect.value = "all";

  renderCertificates();
}

function inquireCourse(courseTitle) {
  const progSelect = document.getElementById("formProgram");
  if (progSelect) {
    // Select best matching option or set value
    let found = false;
    for (let i = 0; i < progSelect.options.length; i++) {
      if (progSelect.options[i].text.toLowerCase().includes(courseTitle.toLowerCase().slice(0, 10))) {
        progSelect.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found) {
      // set to first relevant option
      progSelect.selectedIndex = 1;
    }
  }
  showToast(`Selected: ${courseTitle} - Complete inquiry below for 30% savings.`);
  scrollToSection("requestInfoSection");
}

// ==========================================================================
// 7. Program Details Modal
// ==========================================================================
function openProgramModal(programId, e) {
  if (e && typeof e.preventDefault === "function") {
    e.preventDefault();
  }

  // Dismiss any open dropdown menu immediately
  const dropdowns = document.querySelectorAll(".dropdown-menu");
  dropdowns.forEach(d => {
    d.classList.add("force-hide");
    setTimeout(() => { d.classList.remove("force-hide"); }, 450);
  });

  const cert = CAMBRIDGE_CERTIFICATES.find(c => c.id === programId) || CAMBRIDGE_CERTIFICATES[0];
  const modal = document.getElementById("programModal");
  if (!modal) return;

  document.getElementById("modalProgCategory").textContent = cert.categoryName;
  document.getElementById("modalProgTitle").textContent = cert.title;
  document.getElementById("modalProgSubtitle").textContent = cert.subtitle || cert.school || "Professional Certificate Masterclass";
  document.getElementById("modalProgDuration").textContent = cert.duration;
  document.getElementById("modalProgOverview").textContent = cert.overview;
  
  const facultyEl = document.getElementById("modalProgFaculty");
  if (facultyEl) {
    facultyEl.textContent = `Fee: ${cert.price} • Format: ${cert.format || '100% Online Self-Paced'} • Official Verifiable Credential upon completion.`;
  }

  const coursesList = document.getElementById("modalCoursesList");
  if (coursesList) {
    const syllabusToShow = cert.allSyllabus && cert.allSyllabus.length > 0 ? cert.allSyllabus : cert.courses;
    coursesList.innerHTML = syllabusToShow.map((item, idx) => `
      <li>
        <span style="color:#b31b1b; font-weight:700; margin-right:8px;">${item.startsWith('Day') || item.startsWith('Module') ? '' : 'Module ' + (idx + 1) + ':'}</span>
        ${item}
      </li>
    `).join("");
  }

  // Learning Areas
  let learningAreasBox = document.getElementById("modalLearningAreasBox");
  if (!learningAreasBox) {
    const parent = document.querySelector(".program-modal-body");
    learningAreasBox = document.createElement("div");
    learningAreasBox.id = "modalLearningAreasBox";
    learningAreasBox.className = "modal-desc-box";
    if (parent && coursesList) {
      parent.insertBefore(learningAreasBox, coursesList.parentElement);
    }
  }

  if (learningAreasBox && cert.learningAreas && cert.learningAreas.length > 0) {
    learningAreasBox.innerHTML = `
      <h3 style="margin-top:16px;">Key Learning Competencies</h3>
      <ul style="list-style: disc; padding-left: 20px; color: #475569; font-size: 0.92rem; display: flex; flex-direction: column; gap: 6px;">
        ${cert.learningAreas.map(la => `<li>${la}</li>`).join("")}
      </ul>
    `;
    learningAreasBox.style.display = "block";
  } else if (learningAreasBox) {
    learningAreasBox.style.display = "none";
  }

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeProgramModal() {
  const modal = document.getElementById("programModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

const btnCloseProg = document.getElementById("btnCloseProgramModal");
if (btnCloseProg) btnCloseProg.addEventListener("click", closeProgramModal);

const progModal = document.getElementById("programModal");
if (progModal) {
  progModal.addEventListener("click", (e) => {
    if (e.target === progModal) closeProgramModal();
  });
}

// ==========================================================================
// 8. Video Player Modal
// ==========================================================================
function openVideoModal(videoId) {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoIframe");
  if (!modal || !iframe) return;

  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoIframe");
  if (modal && iframe) {
    iframe.src = "";
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

function initVideoModal() {
  const btnClose = document.getElementById("btnCloseVideoModal");
  const modal = document.getElementById("videoModal");
  if (btnClose) btnClose.addEventListener("click", closeVideoModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeVideoModal();
    });
  }
}

// ==========================================================================
// 9. Animated Number Counters on Scroll
// ==========================================================================
function initStatsObserver() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(counterEl) {
  const target = parseInt(counterEl.getAttribute("data-target"), 10) || 0;
  const duration = 1500;
  const stepTime = 20;
  const totalSteps = duration / stepTime;
  const increment = target / totalSteps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      counterEl.textContent = target;
      clearInterval(timer);
    } else {
      counterEl.textContent = Math.floor(current);
    }
  }, stepTime);
}

// ==========================================================================
// 10. Student Stories Testimonials Carousel
// ==========================================================================
function initTestimonialsCarousel() {
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".testimonial-dots .t-dot");
  if (!slides.length) return;

  let currentT = 0;
  let tInterval = null;

  function showTestimonial(idx) {
    slides[currentT].classList.remove("active");
    if (dots[currentT]) dots[currentT].classList.remove("active");

    currentT = (idx + slides.length) % slides.length;

    slides[currentT].classList.add("active");
    if (dots[currentT]) dots[currentT].classList.add("active");
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showTestimonial(index);
    });
  });

  tInterval = setInterval(() => {
    showTestimonial(currentT + 1);
  }, 5000);
}

// ==========================================================================
// 11. Request Information Now Form Handling & Validation
// ==========================================================================
function initRequestInfoForm() {
  const form = (document.getElementById("cambridgeInquiryForm") || document.getElementById("cambridgeInquiryForm"));
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const firstName = document.getElementById("formFirstName");
    const lastName = document.getElementById("formLastName");
    const email = document.getElementById("formEmail");
    const phone = document.getElementById("formPhone");
    const program = document.getElementById("formProgram");
    const consent = document.getElementById("formConsent");

    const errFirst = document.getElementById("errFirstName");
    const errLast = document.getElementById("errLastName");
    const errEmail = document.getElementById("errEmail");
    const errPhone = document.getElementById("errPhone");
    const errProgram = document.getElementById("errProgram");

    [errFirst, errLast, errEmail, errPhone, errProgram].forEach(el => {
      if (el) el.textContent = "";
    });

    if (!firstName.value.trim()) {
      errFirst.textContent = "Please enter your first name.";
      isValid = false;
    }

    if (!lastName.value.trim()) {
      errLast.textContent = "Please enter your last name.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      errEmail.textContent = "Please enter a valid work or personal email.";
      isValid = false;
    }

    if (!phone.value.trim() || phone.value.trim().length < 7) {
      errPhone.textContent = "Please enter a valid telephone number.";
      isValid = false;
    }

    if (!program.value) {
      errProgram.textContent = "Please select an academic discipline of interest.";
      isValid = false;
    }

    if (!consent.checked) {
      alert("Please agree to communications to receive your syllabus & discount.");
      isValid = false;
    }

    if (isValid) {
      const btnSubmit = document.getElementById("btnSubmitForm");
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<span>Processing...</span>`;

      setTimeout(() => {
        form.style.display = "none";
        const successState = document.getElementById("formSuccessState");
        if (successState) successState.style.display = "block";
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = `<span>Tell Me More!</span>`;
        showToast("Inquiry submitted! Course syllabus & 30% voucher code sent to your email.");
      }, 900);
    }
  });
}

function resetInquiryForm() {
  const form = (document.getElementById("cambridgeInquiryForm") || document.getElementById("cambridgeInquiryForm"));
  const successState = document.getElementById("formSuccessState");
  if (form) {
    form.reset();
    form.style.display = "flex";
  }
  if (successState) successState.style.display = "none";
}

// ==========================================================================
// 12. Search Modal (Cmd+K / Trigger)
// ==========================================================================
function initSearchModal() {
  const modal = document.getElementById("searchModal");
  const btnOpen = document.getElementById("btnOpenSearch");
  const btnClose = document.getElementById("btnCloseSearchModal");
  const input = document.getElementById("modalSearchInput");
  const resultsContainer = document.getElementById("modalResultsList");

  if (!modal) return;

  function openModal() {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    if (input) {
      input.value = "";
      input.focus();
      renderModalResults("");
    }
  }

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  if (btnOpen) btnOpen.addEventListener("click", openModal);
  if (btnClose) btnClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      if (modal.style.display === "flex") {
        closeModal();
      } else {
        openModal();
      }
    }
    if (e.key === "Escape") {
      closeModal();
      closeProgramModal();
      closeVideoModal();
    }
  });

  if (input) {
    input.addEventListener("input", (e) => {
      renderModalResults(e.target.value);
    });
  }

  function renderModalResults(term) {
    if (!resultsContainer) return;
    const clean = term.toLowerCase().trim();
    const list = CAMBRIDGE_CERTIFICATES.filter(c => 
      !clean || c.title.toLowerCase().includes(clean) || c.categoryName.toLowerCase().includes(clean)
    ).slice(0, 8);

    if (list.length === 0) {
      resultsContainer.innerHTML = `<div style="padding: 14px; text-align: center; color: #94a3b8;">No courses found for "${term}"</div>`;
      return;
    }

    resultsContainer.innerHTML = list.map(c => `
      <div class="modal-result-item" onclick="closeSearchAndOpenProgram('${c.id}')">
        <div class="result-main">
          <h4>${c.title}</h4>
          <span>${c.categoryName} • ${c.duration} • ${c.price}</span>
        </div>
        <span style="font-size: 0.8rem; font-weight:700; color: #b31b1b;">View Syllabus &rarr;</span>
      </div>
    `).join("");
  }
}

function populateSearch(topic) {
  const input = document.getElementById("modalSearchInput");
  if (input) {
    input.value = topic;
    input.dispatchEvent(new Event("input"));
  }
}

function closeSearchAndOpenProgram(id) {
  const modal = document.getElementById("searchModal");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "auto";
  openProgramModal(id);
}

// ==========================================================================
// 13. Mobile Drawer Navigation
// ==========================================================================
function initMobileDrawer() {
  const toggle = document.getElementById("btnMobileToggle");
  const drawer = document.getElementById("mobileDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  const btnClose = document.getElementById("btnCloseDrawer");
  const drawerLinks = document.querySelectorAll(".drawer-link");
  const mobileSearch = document.getElementById("mobileSearchInput");

  if (!drawer) return;

  function openDrawer() {
    drawer.classList.add("open");
    if (backdrop) backdrop.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    if (backdrop) backdrop.classList.remove("show");
    document.body.style.overflow = "auto";
  }

  if (toggle) toggle.addEventListener("click", openDrawer);
  if (btnClose) btnClose.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  if (mobileSearch) {
    mobileSearch.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        closeDrawer();
        const mainInput = document.getElementById("courseLiveFilterInput");
        if (mainInput) {
          mainInput.value = mobileSearch.value;
          currentSearchQuery = mobileSearch.value;
          renderCertificates();
          scrollToSection("programFinderSection");
        }
      }
    });
  }
}

// ==========================================================================
// 14. Live Chat Simulation Widget
// ==========================================================================
function initChatWidget() {
  const btnToggle = document.getElementById("btnToggleChat");
  const btnClose = document.getElementById("btnCloseChat");
  const btnFooter = document.getElementById("btnFooterChat");
  const windowEl = document.getElementById("chatWindow");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInputText");
  const msgContainer = document.getElementById("chatMessages");

  if (!windowEl) return;

  function toggleChat() {
    const isHidden = windowEl.style.display === "none";
    windowEl.style.display = isHidden ? "flex" : "none";
    if (isHidden && input) input.focus();
  }

  if (btnToggle) btnToggle.addEventListener("click", toggleChat);
  if (btnClose) btnClose.addEventListener("click", () => windowEl.style.display = "none");
  if (btnFooter) btnFooter.addEventListener("click", () => {
    windowEl.style.display = "flex";
    if (input) input.focus();
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      const userBubble = document.createElement("div");
      userBubble.className = "chat-msg user";
      userBubble.textContent = text;
      msgContainer.appendChild(userBubble);
      input.value = "";
      msgContainer.scrollTop = msgContainer.scrollHeight;

      setTimeout(() => {
        const botBubble = document.createElement("div");
        botBubble.className = "chat-msg bot";
        botBubble.textContent = generateChatResponse(text);
        msgContainer.appendChild(botBubble);
        msgContainer.scrollTop = msgContainer.scrollHeight;
      }, 700);
    });
  }
}

function generateChatResponse(userMsg) {
  const query = userMsg.toLowerCase();
  if (query.includes("cost") || query.includes("price") || query.includes("tuition") || query.includes("fee")) {
    return "Course fees range from INR 20,000 to INR 1,10,000 depending on the domain. With discount code LEARN30, you save 30% on prepayment today!";
  } else if (query.includes("ai") || query.includes("prompt") || query.includes("generative")) {
    return "We offer 15 AI & Modern Workflow courses including 'Generative AI Prompt Engineering for Enterprise Workflows' (20 Days) and 'AI-Powered Automation for Small Business Operations' (30 Days).";
  } else if (query.includes("construction") || query.includes("bim") || query.includes("site") || query.includes("billing")) {
    return "Our Construction certification portfolio includes 50+ specialized masterclasses covering Project Management & Billing, Site Safety, BIM Software Coordination, and Modern Building Materials.";
  } else if (query.includes("excel") || query.includes("supply chain") || query.includes("logistics")) {
    return "Our Corporate Operations portfolio includes 'Advanced Microsoft Excel & Data Dashboarding' (20 Days), 'Supply Chain Logistics', and 'Lean Six Sigma Foundations'.";
  } else if (query.includes("duration") || query.includes("time") || query.includes("days")) {
    return "Masterclasses range from 10 to 30 days and are 100% self-paced with online study materials and video lectures.";
  } else {
    return "Thank you for reaching out! Our certification advisors are ready to assist you. Fill out the Request Information form to receive your course syllabus and 30% discount code.";
  }
}

// ==========================================================================
// 15. Smooth Scrolling & Back To Top
// ==========================================================================
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    const header = document.getElementById("mainHeader");
    const headerHeight = header ? header.offsetHeight : 72;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 12;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

function initBackToTop() {
  const btn = document.getElementById("btnBackToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
