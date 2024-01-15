import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Jonathan Euzébio Boza',
      email: 'jebcode@outlook.com.br',
      telefone: '11 99999-9999',
      descricao: 'descrição Contato Jonathan Euzébio Boza',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 2,
      nome: 'Teste Euzébio Boza',
      email: 'teste@outlook.com.br',
      telefone: '11 99999-9999',
      descricao: 'descrição Contato Teste Euzébio Boza',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA
    },
    {
      id: 3,
      nome: 'PHP Euzébio Boza',
      email: 'php@outlook.com.br',
      telefone: '11 99999-9999',
      descricao: 'descrição Contato PHP Euzébio Boza',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    remover(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaContato >= 0) {
        state.itens[indexDaContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe uma contato com esse nome completo')
      } else {
        const ultimaContato = state.itens[state.itens.length - 1]

        const contatoNova = {
          ...action.payload,
          id: ultimaContato ? ultimaContato.id + 1 : 1
        }
        state.itens.push(contatoNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaContato >= 0) {
        state.itens[indexDaContato].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } =
  contatosSlice.actions

export default contatosSlice.reducer
