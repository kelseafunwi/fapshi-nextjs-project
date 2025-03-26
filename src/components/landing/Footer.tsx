'use client';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cameroon-sun">Company</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">Careers</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cameroon-sun">Help Center</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">Contact Us</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cameroon-sun">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cameroon-sun">Twitter</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Fapshi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 