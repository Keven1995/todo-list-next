# Todo List

Este é um aplicativo simples de gerenciamento de tarefas (Todo List) que permite aos usuários adicionar, completar e deletar tarefas. Abaixo estão as instruções sobre como usar e entender o funcionamento da aplicação.

## Funcionalidades

- **Adicionar Tarefas**: O usuário pode adicionar novas tarefas à lista.
- **Marcar Tarefas como Concluídas**: Tarefas podem ser marcadas como concluídas, alterando seu estado.
- **Deletar Tarefas**: O usuário pode remover tarefas da lista.

## Estrutura do Código

### Componentes Principais

1. **Home**: Componente principal que gerencia o estado das tarefas e renderiza a interface do usuário.
2. **Header**: Exibe o cabeçalho da aplicação.
3. **Modal**: Usado para adicionar novas tarefas.
4. **ModalDelete**: Usado para confirmar a exclusão de tarefas.

### Estado das Tarefas

O estado das tarefas é gerenciado usando o Hook `useState` do React. As tarefas são armazenadas em um objeto, onde cada chave representa o nome da tarefa e o valor indica se ela foi concluída (`true` ou `false`).

```javascript
const [tasks, setTasks] = useState<Record<string, boolean>>({
  lavarAsMaos: false,
  fazerBolo: false,
  lavarLouca: false,
  levarLixoParaFora: true,
});
```

## Como Usar

### Adicionar Tarefa:

1. Clique no botão "Adicionar nova tarefa".
2. Insira o nome da tarefa no modal e clique em "Adicionar".

### Marcar Tarefa como Concluída:

- Clique na caixa de seleção ao lado da tarefa.

### Deletar Tarefa:

1. Clique no botão de deletar (ícone de lixo) ao lado da tarefa.
2. Confirme a exclusão no modal que aparece.

## Tecnologias Usadas

- React
- TypeScript
- SCSS
