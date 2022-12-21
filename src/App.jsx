import { Route, Routes } from 'react-router-dom';
import Catalogo from './components/Catalogo';
import Design from './components/Design';
import Frontend from './components/Frontend';
import Home from './components/Home';
import Livro from './components/Livro';
import NotFound from './components/NotFound';
import Programacao from './components/Programacao';
import Topo from './components/Topo';

import axios from 'axios';
import { Component } from 'react';
import './index.css';

class App extends Component {
  state = {
    livros: [],
  };

  async componentDidMount() {
    try {
      const { data: livros } = await axios.get('/api/todosOsLivros.json');
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll('.principal')[0]
        .insertAdjacentHTML('beforeend', "<p class='erro'>Mensagem de erro</p>");
    }
  }
  render() {
    return (
      <>
        <Topo />
        <Routes>

          <Route path="/" element={<Home livros={this.state.livros} />} />
          <Route path="/frontend" element={<Frontend livros={this.state.livros} />} />
          <Route path="/programacao" element={<Programacao livros={this.state.livros} />} />
          <Route path="/design" element={<Design livros={this.state.livros} />} />
          <Route path="/catalogo" element={<Catalogo livros={this.state.livros} />} />
          <Route path='/livro/:livroSlug' render={props => {
            const livro = this.state.livros.find(
              livro => livro.slug === props.match.params.livroSlug);
            if (livro) return <Livro livro={livro} />;
            else return <NotFound />;
          }} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </>
    );
  }
}

export default App;
