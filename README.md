# Julia Mutheu — Editorial & High Fashion Portfolio

Portfólio de moda editorial e alta costura com estética *haute couture*, tipografia editorial Didone e animações fluidas.

Desenvolvido com foco em alta performance visual, contrastes monocromáticos e suporte a ensaios fotográficos de alta resolução.

---

## ✨ Características do Projeto

- **Hero Editorial com Inversão Tipográfica**:
  - Camada de texto traseira posicionada atrás da silhueta da modelo.
  - Camada de texto frontal com efeito de inversão luminosa (`mix-blend-mode: difference`), mantendo legibilidade total das letras.
- **Galeria de Ensaios Diversificada**:
  - Filtros dinâmicos por categoria: *Todos os Ensaios*, *Lingerie & Intimates*, *Vestidos & Alta Moda*, *Swimwear* e *Editorial P&B*.
  - Modal editorial imersivo em tela cheia com detalhes, créditos de iluminação/styling e ano de produção.
- **Ficha Técnica & Medidas**:
  - Seção com retrato de apoio e especificações para agenciamento internacional (Paris, Milão, São Paulo, Nova York).
- **Rodapé & Contato**:
  - Links diretos para booking e assessoria de imprensa.
  - Créditos: *Site desenvolvido por mastim.vision*.
- **Configuração Centralizada**:
  - Todas as fotos, categorias, medidas e contatos podem ser editados em um único arquivo: `src/config/portfolioConfig.ts`.

---

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **TypeScript**
- **Vite 8**
- **Tailwind CSS v4**
- **Lucide React** (Ícones editoriais)

---

## 🚀 Como Executar Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/negojapis/Site-de-Modelo-.git
cd Site-de-Modelo-
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
O projeto estará disponível em `http://localhost:5173` ou `http://localhost:5174`.

### 4. Compilar para produção
```bash
npm run build
```

---

## 📁 Estrutura do Projeto

```text
├── public/
│   ├── assets/              # Silhuetas recortadas e fotos principais
│   └── Img/                 # Ensaios da galeria (Lingerie, Vestidos, Swimwear, P&B)
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Barra de navegação editorial e monograma
│   │   ├── Hero.tsx         # Seção de destaque com silhueta e blend mode
│   │   ├── About.tsx        # Perfil, biografia e ficha técnica de medidas
│   │   ├── WorksGallery.tsx # Grade de ensaios e abas de categorias
│   │   ├── WorkModal.tsx    # Visualizador de ensaios em alta resolução
│   │   ├── Contact.tsx      # Formulário e dados de agenciamento
│   │   └── Footer.tsx       # Rodapé com créditos (mastim.vision)
│   ├── config/
│   │   └── portfolioConfig.ts # Centralização de textos, medidas e ensaios
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json
```

---

## 👤 Créditos

- **Modelo**: Julia Mutheu
- **Desenvolvimento & Design**: [mastim.vision](https://mastim.vision)
