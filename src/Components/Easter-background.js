function EasterFooter() {
  const changeBackground = () => {
    const header = document.querySelector('header');
    const myColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    header.style.backgroundColor = myColor;
  };

  return (
    <footer onClick={changeBackground}>
      <p id="easter-egg">&copy; 2024 Jana Johansson.</p>
    </footer>
  );
}
export default EasterFooter;
