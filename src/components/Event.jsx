import '../Event.css';

export default function Event() {
    const card_images = {
        osaka: "https://media-cdn.tripadvisor.com/media/photo-s/1a/91/0e/81/suspiro-nikkei.jpg",
        frost_science: "https://www.frostscience.org/wp-content/themes/frost-science/images/frost-science-aerial-view.jpg",
        art_deco: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/19/e2/6f/beautiful-ocean-drive.jpg?w=1000&h=400&s=1",
        ica: "https://media-icamiami-org.imgix.net/2022/12/ec9eec92-screen-shot-2022-12-13-at-2.09.06-pm-800x432.png?auto=compress,format",
        faena: "https://www.faena.com/sites/default/files/styles/card/public/2023-03/08.%20Faena%20Theater.jpg?h=d25a7658&itok=DUe_7hLY",
        design_district: "https://www.miamidesigndistrict.com/images/events/medium/2666_public-art-tour-celebrating-black-history-month_781247.jpg",
        casuarina: "https://vmmiamibeach.com/wp-content/uploads/elementor/thumbs/Accommodation-Aurora-Suite-005-q4uy5gzvvwjln5z0udtgm2fk4qnihr561ln705pqt8.jpg",
        new_world_center: "https://www.nws.edu/media/200740/home-new-world-center-rent.jpg?width=758&height=620&center=0.5,0.5&mode=crop",
        perez_art: "https://livepammdotorg.imgix.net/wp-content/uploads/2023/02/Exhibition_LIC_ErnieGalan_WebDSC05916.jpg?ixlib=js-3.3.0&auto=format&w=100%25&h=100%25&dpr=1&q=75",
        buena_vista: "https://tse2.mm.bing.net/th?id=OIP.jIu4UtyKhrPvD57OP7xcyQHaE7&pid=Api&P=0&h=220"
    }
    return (
        <div className="container">
            <div className="Card">
                <img src={card_images.osaka}/>
                <h3>Osaka Nikkei Miami</h3>
                <h4>Restaurant</h4>
                <a href='https://www.tripadvisor.com/Restaurant_Review-g34438-d19853815-Reviews-Osaka_Nikkei_Miami-Miami_Florida.html'>
                    <button>View Menu</button>
                </a>
            </div>
            <div className="Card">
                <img src={card_images.frost_science}/>
                <h3>Frost Science Museum</h3>
                <h4>Museum</h4>
                <a href='https://www.frostscience.org/'>
                    <button>View Tickets</button>
                </a>
            </div>
            <div className="Card">
                <img src={card_images.art_deco}/>
                <h3>The Official Art Deco Walking Tour</h3>
                <h4>Touring</h4>
                <a href='https://mdpl.org/tours/art-deco-walking-tour/'>
                    <button>View Tours</button>
                </a>
            </div>
            <div className="Card">
                <img src={card_images.ica}/>
                <h3>Institute of Contemporary Art Miami</h3>
                <h4>Museum</h4>
                <a href='https://icamiami.org/'>
                    <button>View Tickets</button>
                </a>
            </div>
            <div className="Card">
                <img src={card_images.faena}/>
                <h3>Faena Theater</h3>
                <h4>Theater</h4>
                <a href='https://www.faena.com/miami-beach/dining/faena-theater'>
                    <button>View Tickets</button>
                </a>
            </div>
            <div className="Card">
                <img src={card_images.design_district}/>
                <h3>Miami Design District</h3>
                <h4>Museum</h4>
                <a href='https://www.miamidesigndistrict.com/'>
                    <button>View Bookings</button>
                </a>
            </div>
            <div className="Card">
                <img src={card_images.casuarina}/>
                <h3>The Villa Casa Casuarina</h3>
                <h4>Touring</h4>
                <a href='https://vmmiamibeach.com/hotel/'>
                    <button>View Tours</button>
                </a>
            </div>
            <div className="Card">
                <img src={card_images.new_world_center}/>
                <h3>New World Center</h3>
                <h4>Dining</h4>
                <a href='https://www.nws.edu/new-world-center/'>
                    <button>View Reservations</button>
                </a>
            </div>
            <div className="Card">
                <img src={card_images.perez_art}/>
                <h3>Perez Art Museum Miami</h3>
                <h4>Museum</h4>
                <a href='https://www.pamm.org/en/'>
                    <button>View Tickets</button>
                </a>
            </div>
            <div className="Card">
                <img src={card_images.buena_vista}/>
                <h3>Upper Buena Vista Miami</h3>
                <h4>Touring</h4>
                <a href='https://www.upperbuenavista.com/'>
                    <button>View Tours</button>
                </a>
            </div>
        </div>
    );
}