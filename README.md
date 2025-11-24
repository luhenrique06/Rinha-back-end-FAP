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

   -[![Arquitetura do Sistema](docs/arquitetura.png)](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22P%C3%A1gina-1%22%20id%3D%22qkqXeXuYoAPpkJWtlQlh%22%3E5Vldk5owFP01PrpjCPjxSIGqU607ZWe2%2B%2BSkkgo7YJgQV%2Bmvb5AgZq1bVGgc%2BwT35AM49%2BTm5tKCVrQdUhT7U%2BLhsKV1vG0L2i1NA10N8kuGpDkCB3oOLGngiU4l4Aa%2FsAA7Al0HHk6kjoyQkAWxDC7IaoUXTMIQpWQjd%2FtJQvmpMVriI8BdoPAYfQ485udoX%2BuV%2BAgHS794MugO8pYIFZ3FlyQ%2B8sjmAIJOC1qUEJbfRVsLhxl5BS%2F5uM8nWvcvRvGKVRnw6iTz8VTXH6Mvo0V%2FBPX2xmoD8R3YO6KhnFdACVnTBf5gMk30Y2nBXjatK0xCmU%2BWZIVCp0Q%2FUbJeeTh7xQ63yj4TQmIOAg6%2BYsZSoQy0ZoRDPotC0crfkqbfxfid8ZIZD0Zh2tvDRjsVltASokvMPiKou3cV1zgmEeaT8IEUh4gFbzJpSIhtue9X%2BoPfCJec4R7NuB%2F3lB55kRxylXs0Xal7TjujJFmmcOMHDLsx2nlqw2OmTFc%2B%2Bg2FazF6MhuOvwoUU4a3B485%2Fmz%2FIBT1RdzZlGELFLFIzNIu7FQOuvUT1a1Rx7oKHVfU40ClHPXm5WiNbdN23IsE2a0gSADfKRI2JUmg1yhJ44YlCTSVmgR17mA3TTNUSbNRaen7JPqxTi7Zhcbukzl0pvOpY4%2Bt2WXr%2F08bUk9e%2FxDIy19vbEOqM%2B8d3LAs1eZH%2Ff%2BEZbWnhEGzi98ybdN9%2BjabZ2vfnDW19kFx2Cm2fq2xrb9S3s4nCuIEX0CY4z461ticXJErVUjejcaydQCb5eeaJPIcYlJ5SP081RneQFdFfGu4emIo3X06d%2BSeRqonSk%2BrBaNNHlevSVcrHFeBIUeaxg6rRRX9LuqAuiZpud156IDeXwS9sx4xDTifmJ6ncrUp8KBOzykpfZ0KQqCeIKS0PKH9g5pZDelgldLZu1ruJcGIm%2BX%2FqF3bwV896PwG%3C%2Fdiagram%3E%3C%2Fmxfile%3E)
   
     ### Decisões Técnicas
1. **Por que [NestJS]**: É um framework que organiza o projeto em módulos, serviços, controllers e repositórios, criando uma arquitetura limpa e profissional. Facilita
manutenção, testes e escalabilidade.
3. **Por que [Node.js]**: Foi escolhido por ser rápido, escalável e muito utilizado em APIs modernas. Permite trabalhar com JavaScript/TypeScript no backend, facilitando
produtividade e integração com outras ferramentas.
5. **Por que [TypeScript]**: Adiciona tipagem estática ao JavaScript, evitando erros comuns em tempo de execução. Melhora legibilidade, autocompletes e segurança do código.
6. **Por que [TypeORM]**: Permite trabalhar com banco de dados usando classes e entidades ao invés de SQL bruto. Facilita criação de relacionamentos, migrações e sincronizaçã
com o schema do PostgreSQL.
8. **Por que [PostgreSQL]**: Banco de dados relacional robusto, seguro e muito utilizado em aplicações sérias. Possui ótimo suporte a relacionamentos.

### 5. DIVISÃO DE TAREFAS

| Integrante | Responsabilidades | % Commits |
|------------|-------------------|-----------|
| Guilherme Gorte | API, Documentação, Rotas, Autenticação | 60%|
| Guilherme Valente | Banco de Dados, Queries, Seeds, Testes | 40% |

