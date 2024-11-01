<h1 align="center">
  React Timing Hooks
</h1>

<h4 align="center">
    <p align="center">
      <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-how-to-run-the-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h4>

[![npm version](https://img.shields.io/npm/v/@codedev-cyou/react-timing-hooks.svg)](https://www.npmjs.com/package/@codedev-cyou/react-timing-hooks)

## 🔖 About

**React Timing Hooks** é uma biblioteca leve que fornece dois hooks: `useDebounceState` e `useThrottleState`, para facilitar a gestão de estados que dependem de temporização. Ideal para aplicações que requerem controle preciso sobre atualizações de estado baseadas em eventos.

## Instalação

```bash
npm install @codedev-cyou/react-timing-hooks
```

ou

```bash
yarn add @codedev-cyou/react-timing-hooks
```

# Hooks Disponíveis

## useDebounceState

Um hook que gerencia um estado com debounce, permitindo que as atualizações sejam agrupadas após um período de inatividade.

```js
import { useDebounceState } from "react-timing-hooks"

function Example() {
  const [debouncedValue, setDebouncedValue] = useDebounceState("", 500)

  const handleChange = e => {
    setDebouncedValue(e.target.value)
  }

  return <input type="text" onChange={handleChange} />
}
```

Parâmetros

- **initialValue**: O valor inicial do estado.
- **delay**: O tempo em milissegundos para o debounce.

## useThrottleState

Um hook que gerencia um estado com throttling, permitindo que as atualizações sejam limitadas a um intervalo de tempo especificado.

```js
import { useThrottleState } from "react-timing-hooks"

function Example() {
  const [throttledValue, setThrottledValue] = useThrottleState("", 1000)

  const handleChange = e => {
    setThrottledValue(e.target.value)
  }

  return <input type="text" onChange={handleChange} />
}
```

Parâmetros

- **initialValue**: O valor inicial do estado.
- **delay**: O tempo em milissegundos para o throttling.

## Exemplos

Veja exemplos na pasta _example_.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

- Faça um fork do projeto
- Crie uma branch para sua feature (git checkout -b feature/- MinhaFeature).
- Faça suas alterações e commit (git commit -m 'Adiciona nova feature').
- Envie para o repositório remoto (git push origin feature/MinhaFeature).
- Abra um Pull Request.

## 📝 License

[MIT](LICENSE.txt)

**Free Software, Hell Yeah!**
