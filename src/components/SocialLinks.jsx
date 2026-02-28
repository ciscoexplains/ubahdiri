import React from 'react';
import { Youtube, Instagram, Music2 } from 'lucide-react'; // Music2 acts as TikTok fallback icon

const SocialLinks = ({ className = "" }) => {
    const socials = [
        {
            name: "YouTube",
            username: "@ubahdiri111",
            icon: <Youtube size={24} />,
            href: "https://youtube.com/@ubahdiri111",
            hoverClass: "hover:text-red-500 hover:bg-red-50"
        },
        {
            name: "TikTok",
            username: "@ubahdiri111",
            icon: <Music2 size={24} />,
            href: "https://tiktok.com/@ubahdiri111",
            hoverClass: "hover:text-black hover:bg-gray-100" // using standard neutral hover for TikTok
        },
        {
            name: "Instagram",
            username: "@ubahdiri111",
            icon: <Instagram size={24} />,
            href: "https://instagram.com/ubahdiri111",
            hoverClass: "hover:text-pink-600 hover:bg-pink-50"
        }
    ];

    return (
        <div className={`flex flex-col sm:flex-row gap-4 items-center justify-center ${className}`}>
            {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm border border-brand-sand-light transition-all duration-300 w-full sm:w-auto ${social.hoverClass}`}
                >
                    <div className="flex-shrink-0">
                        {social.icon}
                    </div>
                    <div className="text-left">
                        <span className="block text-xs font-semibold text-brand-brown-warm uppercase tracking-wider">{social.name}</span>
                        <span className="block font-medium text-brand-brown-dark">{social.username}</span>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
