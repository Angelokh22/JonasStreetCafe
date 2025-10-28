import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Jonas Street Cafe</h5>
            <p>Premium Quality Good Taste</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
                <li>
                  <a href={`/`} className="text-light">Home</a>
                </li>
                <li>
                  <a href={`/menu`} className="text-light">Menu</a>
                </li>
                <li>
                  <a href={`/menu#Cat`} className="text-light">Catergories</a>
                </li>
                <li>
                  <a href={`/#aboutus`} className="text-light">About us</a>
                </li>  
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="text-light me-2"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="text-light me-2"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="text-light"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center mt-3">
          &copy; 2025 Jonas Street Cafe. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;