# INSTRUÇÕES DE ENTREGA - Projeto "Cadê meu Médico?"

## 🎯 Formato de Entrega

### Repositório Git
- **Plataforma**: GitHub
- **Visibilidade**: Público 
- **Commits**: Mínimo 4 commits significativos por integrante

## 📁 Estrutura Obrigatória do Repositório

```
cade-meu-medico-[nome-grupo]/
├── README.md                    # Documentação principal (OBRIGATÓRIO)
├── docker-compose.yml           # Orquestração dos containers (OBRIGATÓRIO)
├── Dockerfile                   # Build da aplicação (OBRIGATÓRIO)
├── .env.example                 # Exemplo de variáveis de ambiente (OBRIGATÓRIO)
├── postman_collection.json      # Collection do Postman exportado (OBRIGATÓRIO)
├── /src                         # Código fonte da aplicação

```

## 📝 README.md - Estrutura Obrigatória

O README.md do seu projeto DEVE conter TODAS as seções abaixo:

### 1. IDENTIFICAÇÃO DO GRUPO (Obrigatório)

```markdown
# Cadê meu Médico? - [Nome do Grupo]

## 👥 Integrantes do Grupo

| RA | Nome Completo | GitHub |
|----|--------------|--------|
| 12345678 | João Silva Santos | [@joaosilva](https://github.com/joaosilva) |
| 87654321 | Maria Oliveira | [@mariaoliveira](https://github.com/mariaoliveira) |
| 11223344 | Pedro Costa | [@pedrocosta](https://github.com/pedrocosta) |
| 44332211 | Ana Paula Souza | [@anasouza](https://github.com/anasouza) |
```

### 2. DESCRIÇÃO DO PROJETO (Obrigatório)

```markdown
## 📋 Descrição

[Descrever em 3-5 linhas o que é o projeto, seu objetivo e principais funcionalidades]

## 🎯 Objetivos Alcançados

- ✅ API REST completa com [X] endpoints
- ✅ Autenticação JWT implementada
- ✅ Sistema de busca por especialidade e cidade
- ✅ [Outras funcionalidades implementadas]
```

### 3. TECNOLOGIAS UTILIZADAS (Obrigatório)

```markdown
## 🚀 Tecnologias Utilizadas

- **Linguagem**: [Python/Node.js/Java/etc] versão X.X
- **Framework**: [Django/Express/Spring/etc] versão X.X
- **Banco de Dados**: PostgreSQL 15
- **Documentação API**: Postman

```

### 4. ARQUITETURA DO SISTEMA (Obrigatório)

```markdown
## 🏗️ Arquitetura

### Diagrama de Arquitetura
![Arquitetura do Sistema](docs/arquitetura.png)


### Decisões Técnicas
1. **Por que [tecnologia X]**: Justificativa...
2. **Por que [abordagem Y]**: Justificativa...
```

### Passo a Passo

1. Clone o repositório:
\```bash
git clone https://github.com/[usuario]/cade-meu-medico-[grupo].git
cd cade-meu-medico-[grupo]
\```

2. Configure as variáveis de ambiente:
\```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
\```

3. Execute com Docker Compose:
\```bash
docker-compose up -d
\```

4. Aguarde a inicialização (aproximadamente 30 segundos)

5. Acesse a API:
\```
http://localhost:3000/api/v1
\```

### Verificar se está funcionando
\```bash
curl http://localhost:3000/api/v1/health
# Deve retornar: {"status": "ok"}
\```

### Parar a aplicação
\```bash
docker-compose down
\```



### 9. DIVISÃO DE TAREFAS (Obrigatório)

```markdown
## 👨‍💻 Divisão de Trabalho

| Integrante | Responsabilidades | % Commits |
|------------|-------------------|-----------|
| João Silva | Backend (Autenticação, JWT), Docker | 28% |
| Maria Oliveira | Banco de Dados, Queries, Seeds | 25% |
| Pedro Costa | Testes de Carga, Performance | 22% |
| Ana Paula | API de Busca, Documentação | 25% |



## ✅ Checklist de Entrega

Antes de entregar, verifique:

### Repositório Git
- [ ] README.md completo com TODAS as seções
- [ ] Commits de todos os integrantes (mínimo 4 cada)
- [ ] Código organizado em pastas


### Docker
- [ ] docker-compose.yml funcional
- [ ] Aplicação inicia sem erros

### Documentação
- [ ] Diagrama de arquitetura (PNG/JPG)
- [ ] Collection do Postman exportada


### Funcionalidades
- [ ] Todos endpoints obrigatórios funcionando
- [ ] Autenticação JWT implementada
- [ ] Busca por especialidade e cidade
- [ ] Paginação funcionando
- [ ] Tratamento de erros adequado



---

**Boa sorte! Qualquer dúvida, so me procurar.**