'use client';

export function Footer() {
  return (
    <footer className="px-4 py-12 text-white bg-gray-900 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-bold">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cameroon-sun">Company</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">Careers</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cameroon-sun">Help Center</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">Contact Us</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cameroon-sun">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cameroon-sun">Twitter</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cameroon-sun">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Fapshi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 