import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../assets/bnmlogo.svg";
import cardblack from "../assets/Front - Black.png"
import { Nav } from "react-bootstrap";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="innver-navbar">
          <img className="bnm-logo" src={logo} alt="bnm logo" /><span className="bnm-wordmark">BNM</span>
        </div>
        <div className="navmenu">
          <Nav>
              <NavLink className="navlink" to="/">Dashboard</NavLink>
              <NavLink className="navlink" to="/Client">Client</NavLink>
              <NavLink className="navlink" to="/NewClient">New Client</NavLink>
              <NavLink className="navlink" to="/Transact">Transact</NavLink>
              <NavLink className="navlink" to="/TransactionHistory">Transaction History</NavLink>
          </Nav>
        </div>
        <div className="sign-in">
          <NavLink className="navlink" to="/SignIn">Log Out</NavLink>
        </div>
      </div>
        
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="client" element={<Client />} />
        <Route path="newclient" element={<NewClient />} />
        <Route path="transact" element={<Transact />} />
        <Route path="transactionhistory" element={<TransactionHistory />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>

      
      
      <Footer />
    </div>
  );
}

// DASHBOARD
function Dashboard() {
  return (
    <>
      <main className="main-dash">
        <div className="dashboard">
          <h2>Welcome to <span className="bankname-styling">BANK OF NEW MAHARLIKA</span></h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore esse quasi facere ratione impedit consequuntur iste tenetur officia cum ipsum. Accusamus, quibusdam provident voluptates natus velit fugit vero minus, praesentium eaque mollitia officiis delectus quia amet vel, obcaecati veritatis sunt laborum explicabo. Reiciendis recusandae, officia animi, natus accusantium et cumque quod perferendis veniam adipisci velit reprehenderit veritatis, ipsa id magni? Nulla id quis recusandae ea facere temporibus suscipit rerum quibusdam error, eveniet distinctio earum voluptatibus aut beatae! Fugit sed quam suscipit deserunt minus hic recusandae et tenetur sit libero corporis quisquam alias quaerat voluptatem nulla nostrum mollitia, cumque amet placeat?</p>
        </div>
        <div className="dashboard2">
          <img className="cardblack" src={cardblack} alt="bnm" />
        </div>
      </main>
    </>
  );
}

// CLIENT
function Client() {
  return (
    <div>
      <div className="client">
        <h2>Client Database</h2>
      </div>
      <div className="client">

      </div>
    </div>
  );
}

// NEW CLIENT
function NewClient() {
  return (
    <div>
      <div className="newclient">
        <h2>New Client</h2>
      </div>
      <div>
        
      </div>
    </div>
  );
}

// TRANSACT
function Transact() {
  return (
    <div>
      <div className="transact">
        <h2>Transact</h2>
      </div>
      <div className="transact">
        
      </div>
    </div>
  );
}

// TRANSACTION HISTORY
function TransactionHistory() {
  return (
    <div>
      <div className="transactionhistory">
        <h2>Transaction History</h2>
      </div>
      <div className="transactionhistory">
        
      </div>
    </div>
  );
}

// SIGN IN / LOG OUT
function SignIn() {
  return (
    <div>
      <div className="signin">
        <h2>Have a great day!</h2>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
