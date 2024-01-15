import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  email: string
  telefone: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number

  constructor(
    nome: string,
    email: string,
    telefone: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Contato
