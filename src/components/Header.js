
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react'
import Wish from './Wish'

const showNothing = () => {
  return (
    <div className='empty'>
      <h4>Список желаний пуст :(</h4>
    </div>
  )
}

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map(element => (
        <Wish onDelete={props.onDelete} key={element.id} item={element}/>
      ))}
    </div>
  )
}

function OffcanvasExample(props) {
  let [wishOpen, setWishOpen] = useState(false);
  return (
    <div className='header'>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 nav">
          <Container fluid>
          <div className='content'>
            <Navbar.Brand href="/">MySchool</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  MySchool
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >

                
                <button onClick={() => setWishOpen(wishOpen = !wishOpen)} className={`basket ${wishOpen && 'active'}` } >Мои желания</button>
                {wishOpen && (
                    <div className='shop'>
                      {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}

    </div>
  );
}

export default OffcanvasExample;