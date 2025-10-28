# Desafio "Cadê meu Médico?" 

/// Alunos: **Guilherme Gorte e Guilherme Valente**

/// Arquitetura: https://excalidraw.com/#json=PeD6wSLiCZWDIvbHUKZGa,FlaQM1JDm9iTlb9QvNyOWA

## Descrição do Projeto

Desenvolver uma API REST para um sistema de busca de médicos por especialidade e localização. O sistema deve permitir que usuários encontrem profissionais de saúde em suas cidades, com informações sobre especialidades, avaliações e disponibilidade.
@@ -13,7 +15,7 @@ Desenvolver uma API REST para um sistema de busca de médicos por especialidade

### Stack Tecnológica
- **Linguagem**: **C**
- **Banco de Dados**: **PostgreSQL**

## Endpoints Obrigatórios
### 👨‍⚕️ Médicos (Endpoints abertos)
```
GET    /api/v1/doctors          - Listar todos médicos (paginado)
GET    /api/v1/doctors/{id}     - Detalhes de um médico
```
### 👨‍⚕️ Médicos (Endpoints admin)
```
POST   /api/v1/doctors          - Cadastrar médico (admin/médico)
PUT    /api/v1/doctors/{id}     - Atualizar médico
DELETE /api/v1/doctors/{id}     - Remover médico (admin)
```
### 🔍 Busca
```
GET    /api/v1/search/doctors   - Busca avançada de médicos
  Query params:
    - specialty: Filtrar por especialidade
    - city: Filtrar por cidade
    - name: Buscar por nome
```
### 📋 Dados Auxiliares
```
GET    /api/v1/specialties      - Listar especialidades disponíveis
GET    /api/v1/cities           - Listar cidades cadastradas
GET    /api/v1/health          - Health check da aplicação
```
## Regras de Negócio
### Médicos
- CRM único e obrigatório
- Mínimo 1 especialidade
- Mínimo 1 cidade de atendimento
- Campos obrigatórios: nome, CRM, especialidade, cidade
### Especialidades (seed inicial)
- Cardiologia
- Dermatologia
- Pediatria
- Clínica Geral
### Cidades (seed inicial)
- São Paulo/SP
- Apucarana/PR
- Rio de Janeiro/RJ
## Códigos HTTP
- `200` - Sucesso (GET, PUT, PATCH)
- `201` - Criado (POST)
- `204` - Sem conteúdo (DELETE)
- `400` - Requisição inválida
- `401` - Não autorizado
- `404` - Não encontrado
- `422` - Entidade não processável
- `500` - Erro interno
### Distribuição de Notas
- **Fase 1** (20%): Documentação da Arquitetura (27/10 entrega por email)
        - Desenho da arquitura, definição da linguagem, banco de dados, definição dos json do endpoints,link do repo
- **Fase 2** (80%): Entrega Final + Performance (01/12 projeto completo no github)
## Links Úteis
- [Docker Documentation](https://docs.docker.com/)
- [JWT.io](https://jwt.io/)
- [REST API Best Practices](https://restfulapi.net/)
- [K6 Documentation](https://k6.io/docs/)
- [Postman Learning Center](https://learning.postman.com/)
---
Footer
