import React, { Component } from 'react';
import './Header.scss';
import logo from './assets/images/s5_logo.png';


class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header>
                <div className="container header-container">
                    <div className="titulo">
                        <img src={logo} alt="Logo Alagoas" />
                    </div>
                    <div className="orgao">
                        <h5 className="orgao-titulo">{this.props.title}</h5>
                        <p className="orgao-descricao">{this.props.description}</p>
                    </div>
                    <div className="busca">
                        <input type="text" name="" id="busca-principal" />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
