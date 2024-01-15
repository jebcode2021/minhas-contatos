import { ChangeEvent, SetStateAction, useEffect, useState } from 'react'
import * as S from '../../css'
import { useDispatch } from 'react-redux'
import { remover, editar, alteraStatus } from '../../store/reducers/contato'
import ContatoClass from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type Props = ContatoClass

const Contato = ({
  descricao: descricaoOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  prioridade,
  status,
  nome,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [descricaoOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  function atualizarDescricao() {
    return (e: { target: { value: SetStateAction<string> } }) =>
      setDescricao(e.target.value)
  }

  function atualizarEmail() {
    return (e: { target: { value: SetStateAction<string> } }) =>
      setEmail(e.target.value)
  }

  function atualizarTelefone() {
    return (e: { target: { value: SetStateAction<string> } }) =>
      setTelefone(e.target.value)
  }

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    console.log(evento.target.checked)
    dispatch(alteraStatus({ id, finalizado: evento.target.checked }))
  }

  return (
    <S.CardContato>
      <label htmlFor={nome}>
        <input
          type="checkbox"
          id={nome}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {nome}
        </S.Titulo>
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={email}
        onChange={atualizarEmail()}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={telefone}
        onChange={atualizarTelefone()}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={atualizarDescricao()}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    status,
                    nome,
                    email,
                    telefone,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover
              onClick={() => {
                cancelarEdicao()
              }}
            >
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.CardContato>
  )
}

export default Contato
