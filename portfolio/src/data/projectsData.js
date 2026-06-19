import imageClassificationImg from '../assets/image-classification.png';
import emotionDetectionImg from '../assets/emotion-detection.png';
import skillbridgeImg from '../assets/skillbridge.png';

const projectsData = [
    {
        slug: "trendora",
        title: "Trendora",
        shortDescription: "An AI-powered fashion e-commerce platform with Groq-driven stylist chatbot, Razorpay payments, and personalized shopping experiences.",
        detailedDescription: "Trendora is a full-stack fashion e-commerce platform built with FastAPI, React, and MongoDB Atlas. It features a Groq-powered Gemma 2 AI stylist that provides conversational fashion recommendations and outfit suggestions. The platform includes secure JWT authentication with role-based access control, advanced product filtering with AI-driven recommendation scoring, a complete shopping workflow with cart, wishlist, and Razorpay payment integration, along with an admin analytics dashboard.",
        tech: ["FastAPI", "React", "MongoDB Atlas", "Redux Toolkit", "Tailwind CSS", "Groq API", "Razorpay", "JWT"],
        features: [
            "AI Stylist — Groq-powered Gemma 2 chatbot for conversational fashion recommendations and outfit suggestions",
            "Product Catalog — Advanced filtering, search, and AI-driven recommendation scoring",
            "Shopping Cart & Wishlist — Full cart management with quantity controls and wishlist system",
            "Razorpay Payments — Integrated payment gateway for seamless checkout",
            "Order Management — Real-time order tracking and processing workflows",
            "Auth & RBAC — Secure JWT authentication with role-based access control",
            "Admin Dashboard — Analytics dashboard for product and order management"
        ],
        github: "https://github.com/anand-sunil/trendora",
        live: "https://trendora-ashen.vercel.app/",
        coverImage: "/projects/trendora/landing page.png",
        gallery: [
            { src: "/projects/trendora/landing page.png", caption: "Landing Page" },
            { src: "/projects/trendora/products page.png", caption: "Products Page" },
            { src: "/projects/trendora/product details.png", caption: "Product Details" },
            { src: "/projects/trendora/cart page.png", caption: "Shopping Cart" },
            { src: "/projects/trendora/wishlist page.png", caption: "Wishlist" },
            { src: "/projects/trendora/checkout page.png", caption: "Checkout" },
            { src: "/projects/trendora/my orders page.png", caption: "My Orders" },
            { src: "/projects/trendora/Ai chat bot page.png", caption: "AI Stylist" },
            { src: "/projects/trendora/Ai chat bot interaction.png", caption: "AI Stylist Interaction" },
            { src: "/projects/trendora/login page.png", caption: "Login Page" },
        ]
    },
    {
        slug: "maintrax",
        title: "MaintraX",
        shortDescription: "Enterprise-grade Maintenance Management System (CMMS) with role-based dashboards, work order dispatching, and audit logging.",
        detailedDescription: "MaintraX is a comprehensive Computerized Maintenance Management System (CMMS) designed to streamline maintenance operations across organizations. It features a role-based architecture with dedicated dashboards for Admins, Technicians, and Requesters — enabling efficient work order creation, dispatching, progress tracking, and audit logging with a premium dark-themed interface.",
        tech: ["React", "Django", "DRF", "JWT", "Tailwind CSS", "SQLite"],
        features: [
            "Admin Dashboard — Operational stats, request dispatching, and technician management",
            "Technician Job Board — View assigned jobs, start work, and log completion details",
            "Requester Portal — Submit maintenance tickets with priority, scheduling, and asset selection",
            "Role-Based Access — Custom DRF permissions (Admin, Technician, Requester) with frontend route guards",
            "Work Order Lifecycle — Full status flow from Requested → Assigned → In Progress → Completed",
            "Audit Logging — Detailed maintenance logs with work done, hours spent, and parts replaced",
            "Equipment & Facility Management — Track assets, serial numbers, and facility locations"
        ],
        github: "https://github.com/anand-sunil/maintrax",
        live: null,
        coverImage: "/projects/maintrax/portfolio_landing_page_1781517816643.png",
        gallery: [
            { src: "/projects/maintrax/portfolio_landing_page_1781517816643.png", caption: "Landing Page" },
            { src: "/projects/maintrax/portfolio_product_tour_1781517833196.png", caption: "Product Tour" },
            { src: "/projects/maintrax/portfolio_login_page_1781517851135.png", caption: "Login Page" },
            { src: "/projects/maintrax/portfolio_admin_dashboard_1781517890073.png", caption: "Admin Dashboard" },
            { src: "/projects/maintrax/portfolio_admin_requests_1781517917612.png", caption: "Admin — All Requests" },
            { src: "/projects/maintrax/portfolio_admin_technicians_1781517931519.png", caption: "Admin — Technicians" },
        ]
    },
    {
        slug: "skillbridge",
        title: "SkillBridge",
        shortDescription: "A comprehensive job portal and course platform connecting professionals with companies, featuring messaging and smart auto-replies.",
        detailedDescription: "SkillBridge is a modern, full-stack web portal built on Django and PostgreSQL that bridges the gap between job seekers and recruiters. It features an integrated course marketplace with a payment flow, an internal messaging system with smart auto-replies, and role-based dashboards — all wrapped in a sleek dark/light mode UI with glassmorphism design elements.",
        tech: ["Django", "PostgreSQL", "Tailwind CSS", "Python", "Gunicorn"],
        features: [
            "Job Board — Post, search, filter, and apply to jobs with resume uploads",
            "Recruiter Dashboard — Manage postings, review applicants, and accept/reject candidates",
            "Job Seeker Profile — Biography, skills, resume management, and application tracking",
            "Course Marketplace — Create and list courses with Basic/Standard/Premium listing plans",
            "Mock Payment Gateway — Multi-step checkout with credit card payment simulation",
            "Internal Messaging — Real-time chat between job seekers and recruiters",
            "Smart Auto-Reply — Context-aware automated response generation based on conversation content",
            "Notification System — Event-driven alerts for applications, messages, and status changes"
        ],
        github: "https://github.com/anand-sunil/skillbridge",
        live: null,
        coverImage: skillbridgeImg,
        gallery: [
            { src: "/projects/skillbridge/landing_page.png", caption: "Landing Page" },
            { src: "/projects/skillbridge/login_page.png", caption: "Login Page" },
            { src: "/projects/skillbridge/jobseeker_dashboard.png", caption: "Job Seeker Dashboard" },
            { src: "/projects/skillbridge/jobs_list.png", caption: "Jobs Listing" },
            { src: "/projects/skillbridge/recruiter_dashboard.png", caption: "Recruiter Dashboard" },
            { src: "/projects/skillbridge/recruiter_jobs.png", caption: "Recruiter — Manage Jobs" },
            { src: "/projects/skillbridge/post_job.png", caption: "Post a Job" },
            { src: "/projects/skillbridge/jobseeker_profile.png", caption: "Job Seeker Profile" },
            { src: "/projects/skillbridge/jobseeker_inbox.png", caption: "Inbox / Messaging" },
            { src: "/projects/skillbridge/courses_list.png", caption: "Courses Marketplace" },
        ]
    },
    {
        slug: "image-classification",
        title: "Image Classification App",
        shortDescription: "A machine learning application capable of classifying images into distinct categories with high accuracy.",
        detailedDescription: "A deep learning-powered image classification application that leverages convolutional neural networks to categorize images into distinct classes with high accuracy. Built with Python and modern ML frameworks, this project demonstrates core computer vision concepts including data preprocessing, model training, and inference pipelines.",
        tech: ["Python", "Deep Learning", "Computer Vision"],
        features: [
            "Image Classification — Classify images into multiple categories using trained CNN models",
            "High Accuracy — Optimized model architecture for reliable predictions",
            "Data Pipeline — Preprocessing and augmentation for robust model training"
        ],
        github: "https://github.com/anand-sunil/image-classification-app/tree/main/image-classification-app",
        live: null,
        coverImage: imageClassificationImg,
        gallery: []
    },
    {
        slug: "emotion-detection",
        title: "Emotion Detection System",
        shortDescription: "Real-time facial emotion recognition using deep learning.",
        detailedDescription: "A real-time emotion detection system that uses deep learning and computer vision to analyze facial expressions from live camera feeds or uploaded images. The system can identify emotions such as happiness, sadness, anger, surprise, and more — making it applicable for sentiment analysis, user experience research, and accessibility tools.",
        tech: ["Python", "Deep Learning", "OpenCV"],
        features: [
            "Real-time Detection — Analyze facial expressions from live camera feeds",
            "Multi-Emotion Support — Detect happiness, sadness, anger, surprise, fear, and more",
            "OpenCV Integration — Robust face detection and preprocessing pipeline"
        ],
        github: "https://github.com/anand-sunil/emotion-detection-project",
        live: null,
        coverImage: emotionDetectionImg,
        gallery: []
    }
];

export default projectsData;
