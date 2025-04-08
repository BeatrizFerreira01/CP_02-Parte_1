# 📱 Situação Militar BR

Aplicativo desenvolvido em **React Native** com o objetivo de fornecer informações sobre o alistamento militar obrigatório no Brasil.  
Este projeto foi criado como parte da avaliação da disciplina de Desenvolvimento Mobile.

---

## 🎯 Objetivo

- Informar sobre a importância da situação militar no Brasil.
- Ajudar jovens a entenderem como se alistar e regularizar sua situação.
- Facilitar o preenchimento de dados através da integração com API de CEP (ViaCEP).
- Apresentar dados de forma clara, bonita e acessível.

---

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **React Navigation** (`@react-navigation/native`, `@react-navigation/bottom-tabs`)
- **Expo** (facilitador para rodar o projeto)
- **API pública:** [ViaCEP](https://viacep.com.br/) para buscar dados de endereço.

---

## 📋 Funcionalidades

- Tela inicial com explicações sobre a situação militar.
- Telas informativas sobre o processo de alistamento.
- Formulário para buscar cidade e estado através do CEP.
- Tela sobre os desenvolvedores com link para o site oficial do Exército Brasileiro.
- Menu de navegação por abas (Bottom Tabs Navigation).
- Interface moderna, agradável e responsiva.

---

## 🔗 API Integrada

- **ViaCEP**: Utilizada para buscar automaticamente Cidade e Estado a partir do CEP informado no formulário de alistamento.

Exemplo de requisição:

```bash
https://viacep.com.br/ws/89010025/json/
```

---

## 🚀 Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/BeatrizFerreira01/CP_02-Parte_1.git
```

2. Acesse a pasta do projeto:

```bash
cd CP_02-Parte_1
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm start
```

Ou, se estiver usando Expo:

```bash
expo start
```

---

## 👥 Desenvolvedores

- Beatriz Ferreira Cruz
- Gabrielly Campos Macedo

---

## 📜 Licença

Este projeto é apenas para fins educacionais.

---
