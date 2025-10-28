import Card from "../components/Card"
import Categories from "../components/Categories"
import "../components/Card.css"

function Menu() {
  return (
    <>
    
     <div className="container my-4">

      <h2 className="text-center fw-bold mb-5 titlemain">MOST RECOMMENDED</h2>
           <div className="row row-cols-1 row-cols-md-5 g-3 mb-5" >
               <Card imagePath="./espresso1.jpg" title="Espresso" price="4.50$" />
               <Card imagePath="./mixedberries.jpg" title="mixedberries" price="8.49$" />
               <Card imagePath="./caramelfrap.jpg" title="Caramel-Frappuccino" price="6.99$" />
               <Card imagePath="./nicoisesalad.jpg" title="Nicoisesalad" price="6.49$" />
               <Card imagePath="./yogurtbowl.jpg" title="yogurtbowl" price="5.79$" />
  
      </div>

        <Categories/>


      {/* HOT DRINKS */}
      <h2 id="hot" className="fw-bold mb-4 text-center">Hot Drinks</h2>
      <div className="row row-cols-1 row-cols-md-5 g-3 mb-5" >
         <Card imagePath="./espresso1.jpg" title="Espresso" price="4.50$" />
        <Card imagePath="./americano.jpg" title="Americano" price="5.99$" />        
        <Card imagePath="./capuccino.jpg" title="Cappuccino" price="6.20$" />
        <Card imagePath="./latte.jpg" title="Latte" price="6.55$" />
        <Card imagePath="./matcha2.jpg" title="Matcha-Latte" price="8.00$" />
      </div>

      {/* COLD DRINKS */}
      <h2 id="cold" className="fw-bold mb-4 text-center">Cold Drinks</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4 mb-5" id="cold">
        <Card imagePath="./mixedberries.jpg" title="mixedberries" price="6.49$" />
        <Card imagePath="./caramelfrap.jpg" title="Caramel-Frappuccino" price="6.99$" />
        <Card imagePath="./icedamericano1.jpg" title="Cold Brew" price="4.79$" />
        <Card imagePath="./blueberry.jpg" title="blueberry" price="6.99$" />
        <Card imagePath="./frap.jpg" title="Mocha-Frappuccino" price="8.79$" />
      </div>

         {/* Salades */}
      <h2 id="salads"className="fw-bold mb-4 text-center">Salads</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4 mb-5" id="salad">
        <Card imagePath="./nicoisesalad.jpg" title="Nicoisesalad" price="6.49$" />
        <Card imagePath="./salmonsalad.jpg" title="Salmonsalad" price="6.99$" />
        <Card imagePath="./legume.jpg" title="Chickensalad" price="5.79$" />
        <Card imagePath="./leg2.jpg" title="CeaserSalad" price="6.99$" />
        <Card imagePath="./yogurtbowl.jpg" title="yogurtbowl" price="5.79$" />
        
      </div>

      {/* SANDWICHES */}
      <h2 id="sandwiches" className="fw-bold mb-4 text-center">Sandwiches</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4 mb-5" id="sand">
        <Card imagePath="./CHIKEN.jpg" title="Club Sandwich" price="7.99$" />
        <Card imagePath="./sand1.jpg" title="Chicken Panini" price="8.49$" />
        <Card imagePath="./teryaki.jpg" title="Tuna Melt" price="7.59$" />
        <Card imagePath="./club.jpg" title="Chicken Panini" price="8.49$" />
        <Card imagePath="./sand2.jpg" title="Tuna Melt" price="7.59$" />
      </div>

    </div>
   
    </>
  )
}

export default Menu
