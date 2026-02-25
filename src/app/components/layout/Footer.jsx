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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="col-span-1">
                        <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">Hotelify</h2>
                        <p className="text-sm text-white/80 leading-relaxed max-w-xs">
                            Curating the world's most exceptional stays for travelers who seek luxury beyond stress.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h4 className="font-bold mb-4 text-white uppercase text-xs tracking-widest">Explore</h4>
                        <ul className="text-sm space-y-2 text-white/80">
                            <li className="hover:text-white transition-colors cursor-pointer">Destinations</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Our Story</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Gift Cards</li>
                        </ul>
                    </div>

                    {/* Contact/Support Section */}
                    <div>
                        <h4 className="font-bold mb-4 text-white uppercase text-xs tracking-widest">Support</h4>
                        <ul className="text-sm space-y-2 text-white/80">
                            <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>
                </div>

                {/* Legal / language bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/60">
                    <div className="mb-4 md:mb-0">
                        © 2024 Hotelify Inc. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <span className="hover:text-white cursor-pointer transition-colors">English (US)</span>
                        <span className="hover:text-white cursor-pointer transition-colors">$ USD</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
