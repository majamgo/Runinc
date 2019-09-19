import React, { useState } from 'react';
import SkoListe from './SkoListe';

const Shop = () => {

    const [sko, setSko] = useState(
        [
          { skoimg: "shoe_01.jpg", titel: "Puma Highland 3000 - Brown", id: 1 },
          { skoimg: "shoe_02.jpg", titel: "Asics Free Street", id: 2 },
          { skoimg: "shoe_03.jpg", titel: "New Balance Runner Bounce", id: 3 },
          { skoimg: "shoe_04.jpg", titel: "New Balance New York 2018", id: 4 },
          { skoimg: "shoe_01.jpg", titel: "Puma Highland 3000 - brown", id: 5 },
          { skoimg: "shoe_04.jpg", titel: "New Balance New York 2018", id: 6 },
        ]
      );

    return (
        <div className="shop">
            <div className="shop__txt">
              <h3>SHOP</h3>
              <h2>RUNINC SHOP</h2>
              <p>Gratis fragt ved over kr. 500,-</p>
              <p className="txt--14">Nike</p>
              <p className="txt--14">Adidas</p>
              <p className="txt--14">Puma</p>
              <p className="txt--14">Asics</p>
              <p className="txt--14">Hummel</p>
            </div>
            <div className="shop__images">
                <div className="shopimg__txt"><h2>SHOP</h2></div>
            <SkoListe alleSkoProp={sko} />
            </div>
        </div>
    )
}

export default Shop
