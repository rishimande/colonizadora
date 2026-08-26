# Colonizadora Feliz

Website institucional responsivo desenvolvido em Next.js, React, TypeScript e Payload CMS.

## Requisitos

- Node.js 22+
- PostgreSQL

## Configuração local

1. Copie `.env.example` para `.env`.
2. Defina uma URL válida do PostgreSQL e um `PAYLOAD_SECRET` seguro.
3. Instale as dependências com `npm install`.
4. Inicie o projeto com `npm run dev`.

O site fica disponível em `http://localhost:3000` e o painel do Payload em
`http://localhost:3000/admin`.

## Conteúdo administrável

- Empreendimentos
- Páginas institucionais
- Artigos e categorias do blog
- Biblioteca de mídia
- Home
- Telefone, WhatsApp, horários e redes sociais
- Usuários e permissões editoriais

## Comandos

- `npm run dev`: desenvolvimento
- `npm run build`: build de produção
- `npm run start`: execução do build
- `npm run payload:types`: regenera os tipos do CMS
- `npm run payload:importmap`: regenera o mapa de componentes do painel
- `npm run db:generate`: cria uma nova migração do Payload

## Conteúdo temporário

O vídeo institucional e alguns destinos de links permanecem demonstrativos até
o recebimento dos materiais e URLs finais da agência. Esses itens já têm campos
correspondentes no Payload para substituição sem alteração de código.
