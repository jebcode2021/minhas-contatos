import { useDispatch, useSelector } from 'react-redux'
import * as S from '../../css'
import * as enums from '../../utils/enums/Contato'
import { alterarFilter } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const vertificarAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todas') {
      return contatos.itens.length
    }
    if (criterio === 'prioridade') {
      return contatos.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return contatos.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFilter({
        criterio,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = vertificarAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
