# Portfolio - Roberto Rabelo

Portfolio profissional desenvolvido em Angular, apresentando experiência, projetos e habilidades como Desenvolvedor Full Stack.

## 🚀 Tecnologias

- **Angular 17** - Framework principal
- **TypeScript** - Linguagem de programação
- **SCSS** - Estilização
- **RxJS** - Programação reativa

## ✨ Funcionalidades

- ✅ Design moderno e responsivo
- ✅ Suporte a múltiplos idiomas (Português/Inglês)
- ✅ Navegação suave entre seções
- ✅ Animações e transições
- ✅ Seções: Hero, Sobre, Experiência, Educação, Projetos, Habilidades, Extracurriculares, Contato

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Build para produção
npm run build
```

## 🎨 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Cabeçalho com navegação
│   │   ├── hero/            # Seção inicial
│   │   ├── about/           # Sobre mim
│   │   ├── experience/      # Experiências profissionais
│   │   ├── education/       # Formação e cursos
│   │   ├── projects/        # Projetos
│   │   ├── skills/         # Habilidades
│   │   ├── extracurricular/ # Atividades extracurriculares
│   │   └── contact/        # Contato
│   ├── models/             # Interfaces TypeScript
│   ├── services/           # Serviços (Data, Translation)
│   └── app.component.*     # Componente principal
└── styles.scss             # Estilos globais
```

## 📊 Contagem de visitantes (Google Analytics)

Para saber quantas pessoas acessaram o site:

1. Crie uma conta em [Google Analytics](https://analytics.google.com/) (é gratuito).
2. Crie uma **propriedade** (site) e escolha **Google Analytics 4**.
3. Copie o **ID de medição** (formato `G-XXXXXXXXXX`).
4. No projeto, abra `src/index.html` e substitua **todas** as ocorrências de `G-XXXXXXXXXX` pelo seu ID (são 2: uma na URL do script e uma no `gtag('config', ...)`).

Depois disso, acesse [analytics.google.com](https://analytics.google.com) para ver:
- **Tempo real** — quem está no site agora
- **Relatórios** — total de usuários, páginas vistas e sessões por dia/semana/mês

Nenhum código adicional é necessário; o script já registra cada visita automaticamente.

## 🌐 Publicar no GitHub Pages

O projeto está configurado para publicar no **GitHub Pages** de forma automática.

### Passos

1. **Crie um repositório** no GitHub (ex.: `portfolio`) e envie o código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/portfolio.git
   git push -u origin main
   ```

2. **Ative o GitHub Pages** no repositório:
   - Abra o repositório no GitHub → **Settings** → **Pages**
   - Em **Source**, escolha **GitHub Actions**
   - Salve (não é preciso escolher branch)

3. **Pronto.** A cada `git push` na branch `main`, o workflow publica o site. A primeira execução pode levar 1–2 minutos.
   - URL do site: `https://SEU-USUARIO.github.io/portfolio/`  
   - (troque `SEU-USUARIO` e `portfolio` pelo seu usuário e nome do repositório)

O `base-href` é definido automaticamente pelo nome do repositório no GitHub, então funciona com qualquer nome (ex.: `meu-portfolio`, `site-pessoal`).

### Build local (opcional)

Para testar o build como no GitHub Pages (útil se o repositório se chama `portfolio`):

```bash
npm run build:gh-pages
```

Os arquivos para publicar ficam em `dist/portfolio/browser/`.

## 🌐 Outras opções de deploy

O projeto também pode ser publicado em:
- Netlify
- Vercel
- Azure Static Web Apps

## 📝 Licença

Este projeto é pessoal e privado.

---

Desenvolvido com ❤️ por Roberto Rabelo
