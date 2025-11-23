* CADÊ MEU MÉDICO?

1. IDENTIFICAÇÃO DO GRUPO:

   - Guilherme Gorte e Guilherme Valente;
   
| 410124 | Guilherme Gorte Alves | [@guilhermegorte2-beep](https://github.com/guilhermegorte2-beep) |
| 409915 | Guilherme Lamera Valente | [@Gui-Valente](https://github.com/Gui-Valente) |

2. DESCRIÇÃO DO PROJETO:

   - O projeto consiste em uma API REST desenvolvida com NestJS e TypeORM para gerenciar médicos, especialidades, cidades e autenticação de usuários.
Seu objetivo é permitir que usuários encontrem médicos filtrando por especialidade e localização, além de possibilitar o cadastro e consulta dessas entidades. As principais
funcionalidades incluem CRUD completo para médicos, cidades e especialidades, autenticação via rota auth, e relacionamentos entre as entidades para consultas mais eficientes.

3. TECNOLOGIAS UTILIZADAS:

   - **Linguagem**: [TypeScript/Node.js/TypeORM]
   - **Framework**: [NestJS]
   - **Banco de Dados**: PostgreSQL
   - **Documentação API**: Postman

4. ARQUITETURA DO SISTEMA:

   -
   
     ### Decisões Técnicas
1. **Por que [NestJS]**: É um framework que organiza o projeto em módulos, serviços, controllers e repositórios, criando uma arquitetura limpa e profissional. Facilita
manutenção, testes e escalabilidade.
3. **Por que [Node.js]**: Foi escolhido por ser rápido, escalável e muito utilizado em APIs modernas. Permite trabalhar com JavaScript/TypeScript no backend, facilitando
produtividade e integração com outras ferramentas.
5. **Por que [TypeScript]**: Adiciona tipagem estática ao JavaScript, evitando erros comuns em tempo de execução. Melhora legibilidade, autocompletes e segurança do código.
6. **Por que [TypeORM]**: Permite trabalhar com banco de dados usando classes e entidades ao invés de SQL bruto. Facilita criação de relacionamentos, migrações e sincronizaçã
com o schema do PostgreSQL.
8. **Por que [PostgreSQL]**: Banco de dados relacional robusto, seguro e muito utilizado em aplicações sérias. Possui ótimo suporte a relacionamentos.

### 5. ARQUITETURA DO SISTEMA

![Arquitetura do Sistema](docs/arquitetura.png)

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

## 📁 Estrutura Obrigatória do Repositório

cade-meu-medico-[nome-grupo]/
├── README.md                    # Documentação principal (OBRIGATÓRIO)
├── docker-compose.yml           # Orquestração dos containers (OBRIGATÓRIO)
├── Dockerfile                   # Build da aplicação (OBRIGATÓRIO)
├── .env.example                 # Exemplo de variáveis de ambiente (OBRIGATÓRIO)
├── postman_collection.json      # Collection do Postman exportado (OBRIGATÓRIO)
├── /src                         # Código fonte da aplicação



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
