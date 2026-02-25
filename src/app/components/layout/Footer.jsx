import React from 'react';

/**
 * Footer
 * Site-wide footer with informational columns and legal bar.
 */
const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-9/10 mx-auto">
                {/* Content columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-xl font-bold mb-4 text-white">Hotellsidan</h2>
                        <p className="text-sm text-white">
                            Providing the most luxurious adventures and stays for your next journey since 2024.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white">Support</h4>
                        <ul className="text-sm  space-y-2">
                            <li>Help Center</li>
                            <li>Safety information</li>
                            <li>Cancellation options</li>
                            <li>Our COVID-19 Response</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white">Community</h4>
                        <ul className="text-sm  space-y-2">
                            <li>Disaster relief housing</li>
                            <li>Support Afghan refugees</li>
                            <li>Celebrating diversity</li>
                            <li>Combating discrimination</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-white">About</h4>
                        <ul className="text-sm  space-y-2">
                            <li>Newsroom</li>
                            <li>Learn about new features</li>
                            <li>Letter from our founders</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
                {/* Legal / language bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <div className="mb-4 md:mb-0">
                        © 2024 Hotellsidan Inc. · Privacy · Terms · Sitemap
                    </div>
                    <div className="flex space-x-6">
                        <span>English (US)</span>
                        <span>$ USD</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
