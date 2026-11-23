# 🐾 AuMigo — Adoção Inteligente com Geolocalização, Mapas e QR Code

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)

Aplicação mobile desenvolvida em **React Native** e **TypeScript** (ecossistema **Expo**) que conecta mídias físicas *Out-of-Home* (OOH) ao ambiente digital para incentivar a adoção responsável de animais na Região Metropolitana do Recife (RMR).

---

## 📋 Sobre o Projeto

Cartazes físicos de adoção espalhados pelas ruas sofrem com desatualização imediata, falta de espaço para informações médicas do animal e ausência de direcionamento geográfico até o abrigo.

O **AuMigo** resolve esse gargalo utilizando os sensores nativos do smartphone (Câmara e GPS):
1. O cidadão aponta a câmara do aplicativo para o **QR Code** impresso no cartaz físico.
2. O sistema intercepta o protocolo de **Deep Linking** (`aumigo://pet/{id}`), extrai o identificador do animal e abre sua ficha completa em tempo real.
3. Através da geolocalização (WGS-84), o app exibe no mapa interativo a posição atual do usuário e os abrigos parceiros em Recife, como o **Hospital Veterinário do Recife** (Cordeiro) e a **ONG Anjos do Poço** (Poço da Panela).

---

## ✨ Funcionalidades Principais

- **Geolocalização Nativa (`expo-location`):** Solicitação assíncrona de permissões em primeiro plano (*Runtime Permissions*) e captura de coordenadas geodésicas com precisão balanceada.
- **Mapa Interativo e Pontos de Interesse (`react-native-maps`):** Enquadramento automático de região (`latitudeDelta` e `longitudeDelta`) e marcadores georreferenciados dos abrigos da RMR.
- **Leitor Óptico em Tempo Real (`expo-camera`):** Varredura contínua de quadros otimizada exclusivamente para matrizes `qr`, economizando processamento e bateria.
- **Roteamento via Deep Linking (`@react-navigation/native`):** Interpretação dinâmica do payload `aumigo://pet/p1` e navegação parametrizada para a tela de detalhes do animal.
- **Robustez e Tratamento de Edge Cases:**
  - **Prevenção do "Bug da Ilha Nula":** Guarda de renderização condicional com `<ActivityIndicator />` que impede o mapa de abrir nas coordenadas `(0, 0)` antes da resposta do GPS.
  - **Bloqueio de Loop de Navegação:** Trava síncrona de estado (`scannerEnabled`) que desativa o leitor imediatamente após o primeiro QR Code válido, evitando empilhamento duplicado de telas.
  - **Fallback de Permissões:** Alertas nativos explicativos caso o usuário recuse o acesso ao GPS ou à câmara.

---

## 🏗️ Estrutura do Projeto

```text
src/
├── components/
│   ├── QRScanner.tsx          # Câmara, leitura óptica e bloqueio de disparos múltiplos
│   └── ShelterMap.tsx         # Mapa vetorial, marcadores e guarda contra "Ilha Nula"
├── data/
│   └── mockData.ts            # Base local de pets (ex: p1) e coordenadas dos abrigos da RMR
├── hooks/
│   ├── useAppLocation.ts      # Hook customizado para permissões e captura assíncrona de GPS
│   └── useQRResolver.ts       # Hook customizado para validação de URI e extração do petId
├── routes/
│   └── index.tsx              # Configuração do React Navigation e esquema Deep Link
├── screens/
│   ├── HomeScreen.tsx         # Tela principal de navegação entre mapa e leitor
│   └── PetDetails.tsx         # Tela de ficha detalhada do animal carregada via Deep Link
└── types/
    └── index.ts               # Interfaces TypeScript (Coordinates, ShelterData, PetData)
```

---

## 🛠️ Tecnologias e Bibliotecas

- **React Native & Expo SDK:** Desenvolvimento multiplataforma (Android e iOS) com acesso simplificado às APIs nativas.
- **TypeScript:** Tipagem estática para coordenadas, abrigos, rotas e resultados do scanner (`BarcodeScanningResult`).
- **expo-location:** Integração com *FusedLocationProvider* (Android) e *CoreLocation* (iOS).
- **expo-camera:** Componente `<CameraView />` para visão computacional e leitura de códigos 2D.
- **react-native-maps:** Renderização nativa do Google Maps / Apple Maps.
- **React Navigation:** Gerenciamento de pilha de telas e parâmetros de rota.

---

## 🚀 Instalação e Execução

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão LTS)
- Aplicativo **Expo Go** instalado no smartphone (Android/iOS) ou emulador configurado.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/aumigo-app.git](https://github.com/seu-usuario/aumigo-app.git)
   cd aumigo-app
   ```

2. **Instale as dependências base do projeto:**
   ```bash
   npm install
   ```

3. **Instale os módulos nativos de Hardware (GPS, Câmara e Mapas):**
   ```bash
   npx expo install expo-location expo-camera react-native-maps
   ```

4. **Instale os pacotes de Navegação:**
   ```bash
   npm install @react-navigation/native @react-navigation/native-stack
   npx expo install react-native-screens react-native-safe-area-context
   ```

5. **Inicie o servidor de desenvolvimento Expo:**
   ```bash
   npx expo start
   ```

6. Leia o QR Code exibido no terminal utilizando o aplicativo **Expo Go** no seu dispositivo.

---

## 🎓 Contexto Acadêmico

- **Instituição:** Centro de Formação Profissional Joseph Turton Junior
- **Curso:** Técnico em Desenvolvimento de Sistemas
- **Unidade Curricular:** Desenvolvimento de Aplicativos Mobile
- **Autora:** Sara Lima
- **Orientador:** Professor Ewerson Alves
- **Local / Ano:** Recife - PE, 2026
