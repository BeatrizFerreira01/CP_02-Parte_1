# 📄 Projeto Situação Militar BR

**Aplicativo de Informações sobre Alistamento Militar**  
Projeto desenvolvido para a disciplina de **Mobile Application Development**.

---

## 🚀 Tecnologias Usadas
- React Native
- React Navigation (`@react-navigation/native`, `@react-navigation/bottom-tabs`)
- Expo
- API pública [ViaCEP](https://viacep.com.br/)

---

## 🛠️ Como Rodar o Projeto

### 1. Pré-requisitos
- Node.js instalado
- Expo CLI instalado
- Celular com o app **Expo Go** ou emulador Android/iOS

### 2. Clonar o repositório
```bash
git clone https://github.com/BeatrizFerreira01/CP_02-Parte_1.git
```

### 3. Navegar até o projeto
```bash
cd CP_02-Parte_1
```

### 4. Instalar dependências
```bash
npm install
```

### 5. Executar o projeto
```bash
expo start
```

Abra o **Expo Go** no seu celular e escaneie o QR Code para visualizar o app.

---

## 📱 Funcionalidades do App

| Função | Descrição |
|:------:|:---------|
| Tela Inicial | Informações básicas sobre a situação militar. |
| Telas Informativas | Explicações sobre o alistamento e regularização. |
| Formulário de CEP | Preenche automaticamente cidade e estado via API. |
| Tela de Desenvolvedores | Informações sobre a equipe e link para o site do Exército. |
| Navegação por Abas | Acesso rápido às telas usando Bottom Tabs Navigation. |

---

## 🌐 API Integrada

| API | Função |
|:---:|:-------|
| [ViaCEP](https://viacep.com.br/) | Buscar cidade e estado automaticamente a partir do CEP informado. |

**Exemplo de requisição:**
```bash
https://viacep.com.br/ws/89010025/json/
```

---

## 📋 Observações

- A navegação é feita por abas na parte inferior da tela (Bottom Tabs).
- O formulário permite que o usuário encontre cidade e estado apenas digitando o CEP.
- O aplicativo possui design limpo e responsivo, visando a melhor experiência para o usuário.
- Este projeto foi criado com foco em praticar integração de APIs e navegação em React Native.

---

## 👥 Desenvolvedoras
- **Beatriz Ferreira Cruz**
- **Gabrielly Campos Macedo**

---

## 📚 Observações Finais

Este projeto foi desenvolvido como parte da disciplina de **Mobile Application Development** no curso de graduação, focando nos conceitos de:
- Desenvolvimento de aplicações móveis usando React Native.
- Integração de APIs públicas externas.
- Navegação entre telas com React Navigation.
- Boas práticas de organização e estilização de apps.

---
