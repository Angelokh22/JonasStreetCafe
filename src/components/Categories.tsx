import "./Categories.css";

function Categories() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Categories" id="Cat">
      <div className="categories">
        <h1 className="categoriestitle">Categories</h1>
        <div className="categories-elements">
          <img
            src="./hotdrinks1.png"
            className="catimg"
            alt="Hot Drinks"
            onClick={() => scrollToSection("hot")}
          />
          <img
            src="./colddrinks1.png"
            className="catimg"
            alt="Cold Drinks"
            onClick={() => scrollToSection("cold")}
          />
          <img
            src="./salads.jpg"
            className="catimg"
            alt="Salads"
            onClick={() => scrollToSection("salads")}
          />
          <img
            src="./sandwishes.png"
            className="catimg"
            alt="Sandwiches"
            onClick={() => scrollToSection("sandwiches")}
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
