import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContato from '../../containers/ListaDeContato'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={true} />
      <ListaDeContato />
      <BotaoAdicionar />
    </>
  )
}

export default Home
