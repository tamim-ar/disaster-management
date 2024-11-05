const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-teal-950 text-white">
        <div>
          <span className="footer-title">Our Services</span>
          <a className="link link-hover">Emergency Response</a>
          <a className="link link-hover">Preparedness Training</a>
          <a className="link link-hover">Relief Distribution</a>
          <a className="link link-hover">Evacuation Assistance</a>
        </div>
        <div>
          <span className="footer-title">Resources</span>
          <a className="link link-hover">Disaster Preparedness Guide</a>
          <a className="link link-hover">Community Shelters</a>
          <a className="link link-hover">Volunteer Opportunities</a>
          <a className="link link-hover">Safety Tips</a>
        </div>
        <div>
          <span className="footer-title">Connect with Us</span>
          <a className="link link-hover">Contact Support</a>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Media Center</a>
          <a className="link link-hover">Reports & Updates</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-teal-950 text-white border-base-300">
        <div className="items-center grid-flow-col">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811..."></path>
          </svg>
          <p>
            Disaster Management Initiative <br />
            Supporting communities and saving lives since 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
