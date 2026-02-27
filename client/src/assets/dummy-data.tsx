import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Upload',
        desc: 'Drag and drop your assets. We auto-optimize formats and sizes.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant Generation',
        desc: ' Optimized models deliver output in seconds with great fidelity.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring product shots to life with shoty-form, social-ready videos.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '₹199',
        desc: 'Try the platform at low cost.',
        credits: 25,
        features: [
            '25 Credits',
            'Standard quality',
            'Slower generation speed',
            'No watermark',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'pro',
        price: '₹499',
        desc: 'Creator & small teams.',
        credits: 100,
        features: [
            '100 Credits',
            'HD quality',
            'Video generation',
            'No watermark',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'ultra',
        price: '₹799',
        desc: 'Scale across team & agencies.',
        credits: 300,
        features: [
            '300 Credits',
            'FHD quality',
            'Fast generation speed',
            'No watermark',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does the AI generation work?',
        answer: 'We leverage state-of-the-art diffusion models trained on millions of product images to blend your product into realistic scenes while preserving details, lighting and reflextion.'
    },
    {
        question: 'Can I cancel anytime?',
        answer: 'Yes - you can  cancel from your dashboard. You will remain access through the end of the billing period.'
    },
    {
        question: 'Do I own the generated images?',
        answer: 'Yes -you recieve full  commercial rights to any images and videos generated on the platform. Use  them for ads, ecommerce, social media and more.'
    },
    {
        question: 'What imput format do you support?',
        answer: ' We accept JPG, PNG and WEBP. Outputs are high-resolution PNGs and MP4s optimized for social platforms.'
    }
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];