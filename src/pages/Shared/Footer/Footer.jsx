
import logo from '../../../assets/images/home-logo.png'

const Footer = () => {
  return (
    <footer className="footer h-full md:h-80 px-10 py-20 bg-black text-white mt-20">
      <aside>
        <img className='w-32 h-12' src={logo} alt="" />
        <p className='ml-2'>Homez<br />Parturient porttitor quam mattis ipsum imperdiet habitasse orci. Risus integer.</p>
      </aside>
      <nav>
        <header className="footer-title">Our address</header>
        <a className="link link-hover">Homez</a>
        <a className="link link-hover">40 Park Ave, Brooklyn, New York 70250</a>
        <a className="link link-hover font-extrabold text-white">View On Map</a>
      
       

      </nav>
      <nav>
        <header className="footer-title">Contact us</header>
        <a className="link link-hover">Main Email: 7oroof@7oroof.com</a>
        <a className="link link-hover">Phone: 02 01065370701</a>
        <a className="link link-hover font-extrabold text-white">Send Us Message</a>

      </nav>
      <nav>
        <header className="footer-title">OPEN HOURS:</header>
        <a className="link link-hover">Monday - Friday: 10 AM - 11 PM</a>
        <a className="link link-hover">Saturday - Sunday: 9 AM - 1 PM</a>

      </nav>
    </footer>
  );
};

export default Footer;