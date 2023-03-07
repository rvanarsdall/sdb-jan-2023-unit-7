import "./Footer.css";

const styles = {
  h6: {
    fontSize: "23px",
    border: "solid 3px black",
  },
};

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <h6 className="footer" style={styles.h6}>
        Copyright {currentYear}
      </h6>
    </>
  );
}

export default Footer;
