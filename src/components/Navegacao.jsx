import { NavLink } from 'react-router-dom';

let linkCorrent = {
  color: '#027399'
};

export default function Navegacao() {
  return (

    <ul>
      <li><NavLink exact='true' activestyle={linkCorrent} to='/'>Home</NavLink></li>
      <li><NavLink exact='true' activestyle={linkCorrent} to='/frontend'>Frontend</NavLink></li>
      <li><NavLink exact='true' activestyle={linkCorrent} to='/programacao'>Programacao</NavLink></li>
      <li><NavLink exact='true' activestyle={linkCorrent} to='/design'>Design</NavLink></li>
      <li><NavLink exact='true' activestyle={linkCorrent} to='/catalogo'>Catálogo</NavLink></li>
    </ul>
  );
}
