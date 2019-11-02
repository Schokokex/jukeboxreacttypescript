import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link, NavLink} from "react-router-dom";
import store from "./Store";
import ILobby from "./ILobby";

export default class Footer extends React.Component {
    constructor(props: any) {
        super(props);
        store.on("change", ()=>{
           this.setState({lobby: store.getCurrentLobby()})
        });
    }
    state = {lobby: store.getCurrentLobby()};


    render() {
        const {lobby} = this.state;
        const hash = (lobby) ? (lobby! as ILobby).hash : undefined;
        const currentLink = (lobby) ? <Link className={"nav-link"} to={"../lobby/"+hash}>Current</Link> : <></>;
        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <NavLink className={"nav-link"} exact={true} to={"/"}>Home</NavLink>
                    {currentLink}
                </Nav>
                <Navbar.Brand href="">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5ba9e4fd7d0c91794c7a0d05/1553782990501-ZKR3KHOP2DPGGFZTFBDD/ke17ZwdGBToddI8pDm48kLkOk2-PBAPfkws_PZGGIvVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx1mKApGnLuyf_QWDLzisLJ1TTVDReRUp4eP8s7DtZ5HGrhpxTElWSNBwV_R_WsKXM/BuyNow.png"
                        width="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Navbar>
        );
    }
}