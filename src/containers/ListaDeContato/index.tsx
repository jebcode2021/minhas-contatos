import Contato from '../../components/Contato'
import * as S from '../../css'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaDeContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltradas = itens
    if (termo !== undefined) {
      contatosFiltradas = contatosFiltradas.filter(
        (item) => item.nome.toLocaleLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        contatosFiltradas = contatosFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        contatosFiltradas = contatosFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return contatosFiltradas
    } else {
      return contatosFiltradas
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contato(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) encontrada(s) como: "${`${criterio}=${valor}`}" ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <S.MainContainer>
      <S.TituloP as="p">{mensagem}</S.TituloP>
      <ul>
        {contatos.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              descricao={t.descricao}
              nome={t.nome}
              email={t.email}
              telefone={t.telefone}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </S.MainContainer>
  )
}

export default ListaDeContato
