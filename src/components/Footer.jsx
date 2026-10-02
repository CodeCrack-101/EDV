function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Practical Library</h2>
        <p>College Practical Resources</p>
        <p className="built-with">Built with React &copy; {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
