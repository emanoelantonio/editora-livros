import { NavLink } from 'react-router-dom';

let linkCorrent = {
  color: '#027399'
};

export default function Navegacao() {
  return (

    <ul>
      <li><NavLink exact activeStyle={linkCorrent} to='/'>Home</NavLink></li>
      <li><NavLink exact activeStyle={linkCorrent} to='/frontend'>Frontend</NavLink></li>
      <li><NavLink exact activeStyle={linkCorrent} to='/programacao'>Programacao</NavLink></li>
      <li><NavLink exact activeStyle={linkCorrent} to='/design'>Design</NavLink></li>
      <li><NavLink exact activeStyle={linkCorrent} to='/catalogo'>Catálogo</NavLink></li>
    </ul>
  );
}
