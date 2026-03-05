# Química Revisada — Revisão de Química para o ENEM

Plataforma gratuita de revisão de Química para o ENEM com vídeos, conteúdos essenciais e simulados interativos.

## � Estrutura do Projeto

```
quimicarevisada/
├── index.html      ← Página principal (seções, textos, layout)
├── style.css       ← Estilos visuais e design
├── script.js       ← Lógica interativa (menu, filtros, quiz)
├── questions.js    ← Banco de questões do simulado
└── README.md       ← Este arquivo
```

---

## �🚀 Primeiro Deploy (fazer apenas uma vez)

### 1. Instale o Git (se ainda não tiver)

Baixe e instale em: https://git-scm.com/download/win

Após instalar, abra o **Terminal** (PowerShell ou Git Bash).

### 2. Crie o repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Em **Repository name**, digite: `quimicarevisada`
3. Selecione **Public**
4. **NÃO** marque "Add a README file" (já temos um)
5. Clique em **Create repository**

### 3. Envie os arquivos pela primeira vez

No terminal, navegue até a pasta do projeto e execute os comandos abaixo.
Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub:

```bash
cd "C:\Users\jose_\OneDrive\Documentos\Sites\quimicarevisada"

git init
git add .
git commit -m "Primeiro commit - site Química Revisada"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/quimicarevisada.git
git push -u origin main
```

### 4. Ative o GitHub Pages

1. No repositório, clique em **Settings** (⚙️ na barra superior)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Em **Branch**, selecione `main` e pasta `/ (root)`
5. Clique em **Save**
6. Aguarde 2–3 minutos e acesse: `https://SEU-USUARIO.github.io/quimicarevisada/`

---

## 🔄 Como Atualizar o Site (fazer sempre que quiser publicar mudanças)

Sempre que você editar qualquer arquivo (`index.html`, `style.css`, `script.js`, `questions.js`),
siga estes 3 passos no terminal para publicar as mudanças:

### Passo 1 — Adicionar as mudanças

```bash
cd "C:\Users\jose_\OneDrive\Documentos\Sites\quimicarevisada"
git add .
```

> Isso diz ao Git: "quero enviar todas as alterações que fiz".

### Passo 2 — Criar um commit (salvar as mudanças com uma mensagem)

```bash
git commit -m "Descreva aqui o que você mudou"
```

Exemplos de mensagens de commit:
- `git commit -m "Adicionei 5 novas questões de orgânica"`
- `git commit -m "Atualizei os links dos vídeos do YouTube"`
- `git commit -m "Corrigi erro na questão 3 de eletroquímica"`
- `git commit -m "Mudei o email de contato no footer"`

### Passo 3 — Enviar para o GitHub

```bash
git push
```

> Pronto! Em 1–2 minutos o site será atualizado automaticamente no GitHub Pages.

### ⚡ Resumo rápido (copie e cole):

```bash
cd "C:\Users\jose_\OneDrive\Documentos\Sites\quimicarevisada"
git add .
git commit -m "Descreva o que mudou"
git push
```

---

## ✏️ O que posso editar?

### Trocar os vídeos por links do YouTube

No arquivo `index.html`, procure os blocos `<div class="video-thumb">` e substitua o conteúdo por um iframe do YouTube:

```html
<div class="video-thumb">
  <iframe
    width="100%" height="100%"
    src="https://www.youtube.com/embed/ID_DO_VIDEO"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
    allowfullscreen>
  </iframe>
</div>
```

> Substitua `ID_DO_VIDEO` pelo código do vídeo (ex: `dQw4w9WgXcQ`).

### Adicionar mais questões ao simulado

No arquivo `questions.js`, adicione um novo objeto ao final do array `QUESTIONS_DB`:

```javascript
{
  id: 19,  // use o próximo número disponível
  topic: "Nome do Tema",
  text: "Texto da pergunta aqui?",
  options: [
    "Alternativa A",
    "Alternativa B",
    "Alternativa C",
    "Alternativa D",
    "Alternativa E"
  ],
  answer: 2,  // índice da resposta correta (0=A, 1=B, 2=C, 3=D, 4=E)
  explanation: "Explicação detalhada da resposta."
},
```

### Atualizar informações de contato

No arquivo `index.html`, procure a seção `<footer>` e altere:
- O email em `href="mailto:..."`
- Os links do YouTube e Instagram em `href="..."`

---

## ❓ Problemas comuns

| Problema | Solução |
|---|---|
| `git` não é reconhecido | Instale o Git: https://git-scm.com/download/win |
| Erro "remote already exists" | Execute: `git remote remove origin` e refaça o passo 3 |
| Página não atualiza no GitHub | Aguarde 2–3 minutos e limpe o cache do navegador (Ctrl + Shift + R) |
| Erro ao fazer push | Verifique se está logado no GitHub no terminal |
