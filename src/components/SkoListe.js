import React from 'react'

const SkoListe = (props) => {

    let skoListe = props.alleSkoProp.map(s => {

        return(
            <div className="skoprodukt">
                <img src={"/img/" + s.skoimg} alt="" className="s__img"/>
                <p>{s.titel}</p>
            </div>
        );
    });

    return (
        <div className="skoliste">
            {skoListe}
        </div>
    )
}

export default SkoListe
