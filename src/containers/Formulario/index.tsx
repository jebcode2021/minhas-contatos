import { useDispatch } from 'react-redux'
import * as S from '../../css'
import { ChangeEvent, FormEvent, useState } from 'react'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  function Nome(evento: ChangeEvent<HTMLInputElement>) {
    return evento.target.value === ''
      ? setNome('Nome')
      : setNome(evento.target.value)
  }

  function Email(evento: ChangeEvent<HTMLInputElement>) {
    return evento.target.value === ''
      ? setEmail('Email')
      : setEmail(evento.target.value)
  }

  function Telefone(evento: ChangeEvent<HTMLInputElement>) {
    return evento.target.value === ''
      ? setTelefone('Telefone')
      : setTelefone(evento.target.value)
  }

  function Descricao(evento: ChangeEvent<HTMLTextAreaElement>) {
    return evento.target.value === ''
      ? setDescricao('Descrição')
      : setDescricao(evento.target.value)
  }

  function Prioridade() {
    return (target: { value: enums.Prioridade }) => {
      setPrioridade(target.value as enums.Prioridade)
    }
  }

  return (
    <S.MainContainer>
      <S.TituloP>Nova contato</S.TituloP>
      <S.Form onSubmit={cadastrarTarefa}>
        <S.Campo
          value={nome}
          onChange={Nome}
          type="text"
          placeholder="Nome de completo"
        />{' '}
        <S.Campo
          value={email}
          onChange={Email}
          type="text"
          placeholder="E-mail"
        />
        <S.Campo
          value={telefone}
          onChange={Telefone}
          type="tel"
          placeholder="Telefone"
        />
        <S.Campo
          value={descricao}
          onChange={Descricao}
          as="textarea"
          placeholder="Descrição da contato"
        />
        <S.Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <S.Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={Prioridade}
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </S.Opcao>
          ))}
        </S.Opcoes>
        <S.BotaoSalvar type="submit">Cadastrar</S.BotaoSalvar>
      </S.Form>
    </S.MainContainer>
  )
}

export default Formulario
