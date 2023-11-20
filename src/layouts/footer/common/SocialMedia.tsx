const SocialMedia: React.FC = () => {
  return (
    <ul className="d-flex align-items-center">
      <li>
        <a href="https://accounts.google.com/" target="_blank">
          <i className="fab  fa-whatsapp"></i>
        </a>
      </li>
      <li
        style={{
          width: "1px",
          height: "20px",
          backgroundColor: "white",
          color: "white",
        }}
      />
      <li>
        <a href="https://www.instagram.com/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li
        style={{
          width: "1px",
          height: "20px",
          backgroundColor: "white",
          color: "white",
        }}
      />
      <li>
        <a href="https://www.facebook.com/" target="_blank">
          <i className="fab fa-facebook-f "></i>
        </a>
      </li>
      <li
        style={{
          width: "1px",
          height: "20px",
          backgroundColor: "white",
          color: "white",
        }}
      />
      <li>
        <a href="https://twitter.com/" target="_blank">
          {/* <i className="fab fa-x-twitter" style={{ color: "#ffffff" }}></i> */}
          <i className="fab fa-twitter"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
