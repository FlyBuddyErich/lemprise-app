import { Github } from "lucide-react";
import logo from "../assets/logo png.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 m-0 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-4">
          <div>
            <img src={logo} alt="logo" className="h-24 mt-8" />
          </div>

          <div>
            <h3 className="font-medium mb-4">FAQ</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="https://github.com/FlyBuddyErich"
                  target="_blank"
                  className="hover:text-black"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FlyBuddyErich"
                  target="_blank"
                  className="hover:text-black"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FlyBuddyErich"
                  target="_blank"
                  className="hover:text-black"
                >
                  How to contact us
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FlyBuddyErich"
                  target="_blank"
                  className="hover:text-black"
                >
                  Vacancies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="https://github.com/FlyBuddyErich"
                  target="_blank"
                  className="hover:text-black"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FlyBuddyErich"
                  target="_blank"
                  className="hover:text-black"
                >
                  Best practices
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FlyBuddyErich"
                  target="_blank"
                  className="hover:text-black"
                >
                  Colors
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FlyBuddyErich"
                  target="_blank"
                  className="hover:text-black"
                >
                  Color wheel
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="https://github.com/FlyBuddyErich"
                  target="_blank"
                  className="hover:text-black"
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FlyBuddyErich"
                  target="_blank"
                  className="hover:text-black"
                >
                  Our authors
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FlyBuddyErich"
                  target="_blank"
                  className="hover:text-black"
                >
                  Clothing features
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FlyBuddyErich"
                  target="_blank"
                  className="hover:text-black"
                >
                  Design systems
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-gray-600 pt-8 border-t border-gray-200 flex justify-between">
          <div>
            <p>© {currentYear} Lemprise. All rights reserved.</p>
            <p>Designed and Developed by Kokorev Maxim</p>
          </div>
          <a href="https://github.com/FlyBuddyErich" target="_blank">
            <Github className="size-8 hover:text-black/80 text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
