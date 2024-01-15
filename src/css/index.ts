import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import variaveis from '../css/variaveis'
import * as enums from '../utils/enums/Contato'

type Props = {
  ativo: boolean
}

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }
  return '#ccc'
}

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: iniline-block;
`

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
  margin-bottom: 8px;

  &:focus {
    outline: none;
    border-color: #1e90ff;
  }

  &:hover {
    border-color: #1e90ff;
  }
`
export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`
export const Filtro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;
`

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    color: #44bd32;
  }
`
export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
`
export const CardContato = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;
  }
`

export const TituloP = styled.p`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`
export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
export const Label = styled.span`
  font-size: 14px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const BotaoEditar = styled(Botao)`
  background-color: ${variaveis.cinza};
`
export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    resize: none;
    margin: 8px 0;
  }
`
export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
    cursor: pointer;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`

export default GlobalStyle
