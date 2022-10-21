<h1 align="center">Node com TDD e SOLID</h1>
<p align="center">Como podemos criar uma aplicação</p>


## Introdução

Antes de começarmos a nossa aplicação gostaria de definir alguns termos que iremos nesse repositório. Para isso vamos começar falando sobre o que é **Node,Test-driven development, SOLID**. 

### Node.js


Node.js é uma tecnologia bem conhecida dentro do mundo da tecnologia, assim vamos definir de maneira breve. No final haverá referencias sobro Node e outras ferramentas.

Mas o que é o Node? 

Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.

O runtime de JavaScript é constituído pelos seguintes comandos: node package manager (npm), e npx (node package extractor),o npx foi introduzido na versão 5.2.0 do JavaScript, pois a antes deveria ser instalado individualmente; onde o primeiro tem o propósito de executar código armazenado num package de nodejs, instalando o software globalmente ou localmente, já o segundo tem o propósito de instalar ao nível local o código instalado globalmente. Um exemplo disso é o npx create-react-app que tem como propósito instalar ao nível local um template vazio de um site de react, pronto a ser usado, através de uma fórmula instalada com npm.

A tecnologia robusta C++ e boost, como era conhecido no final da década de 1990 (quando a sintaxe foi completamente alterada, mantendo-se para fins de compatibilidade backward). Usando também recorrentemente para este fim a linguagem bindings com sistemas de JavaScript mais universais, garantindo que há o mínimo de deprecações no código com o passar do tempo. Exceções disso, são alguns de JavaScript vanilla, que não são incluídos em node, que podem ser importados para nodejs. Um exemplo disso é o comando readine(), que precisa de ser importado e sofre de algumas alterações. Ainda assim, o código é bem mais buletproof do que o código de Python, que depreca com relativa facilidade.

O código de nodejs é baseado na arquitetura event-driven, capaz de entrada/saída assíncrona. Otimizado para ser corrido em tempo real tratando-se também de um distribuído.

### Test-Driven Development
Desenvolvimento Orientado por Testes (Test Driven Development), é uma técnica de desenvolvimento de software que se relaciona com o conceito de verificação e validação e se baseia em um ciclo curto de repetições: primeiramente o desenvolvedor escreve um caso de teste automatizado que define uma melhoria desejada ou uma nova funcionalidade.
 
### SOLID
O último tópico é falta falar é sobre o SOLID, mas o que é SOLID? 

SOLID é um acrônimo para cinco postulados de design, destinados a facilitar a compreensão, o desenvolvimento e a manutenção de software.

De fato, os postulados SOLID foram apresentados por Robert C. Martin em um artigo publicado no ano 2000 cujo título, em tradução livre, é "Postulados de Projeto e Padrões de Projeto". O acrônimo SOLID propriamente dito teria sido cunhado mais tarde por Michael Feathers.

#### Significados

SOLID

Artigo
Discussão
Ler
Editar
Ver histórico
Origem: Wikipédia, a enciclopédia livre.
Na programação de computadores orientada a objetos, o termo SOLID é um acrônimo para cinco postulados de design, destinados a facilitar a compreensão, o desenvolvimento e a manutenção de software.

Os postulados SOLID não devem ser confundidos com as orientações conhecidas como GRASP.

De fato, os postulados SOLID foram apresentados por Robert C. Martin em um artigo publicado no ano 2000 cujo título, em tradução livre, é "Postulados de Projeto e Padrões de Projeto". O acrônimo SOLID propriamente dito teria sido cunhado mais tarde por Michael Feathers.

#### Noções
* Princípio de única responsabilidade
> "uma classe deve ter apenas uma única responsabilidade (mudanças em apenas uma parte da especificação do software, devem ser capaz de afetar a especificação da classe)."
* Princípio de aberto/fechado
> "entidades de software devem ser abertas para extensão, mas fechadas para modificação."
* Princípio da substituição de Liskov
> "objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa." deve ser capaz de afetar apenas a especificação da classe
* Princípio da segregação de Interface
> "muitas interfaces de clientes específicas, são melhores do que uma para todos propósitos."
* Princípio da inversão de dependência
> "deve-se depender de abstrações, não de objetos concretos."
 
## 💻 Projeto
Para abordar essas técnicas iremos propor o seguinte problema: 
> Queremos uma aplicação onde um aluno poderá submeter a resolução de um desafio e aplicação deve corrigir e enviar uma nota. 

A partir daqui temos um problema proposto para podermos começar a explorar os conceitos citados acimar e assim conseguir desenvolver nossa aplicação.

O nosso projeto irá se basear nessa situação. Iremos criar usandos os conceitos usando TDD.

## ✨ Tecnologia
O projeto foi desenvolvido utilizando as seguintes tecnologias:
- [Node](https://nodejs.org/en/)
- [Jest](https://jestjs.io/pt-BR/)
- [Typescript](https://www.typescriptlang.org/)

## 🚀 Como executar

Para executar esse repositório basta clonar e ir para o diretório. E execute o seguints comandos:
```bash
npm i 
npm test
```


## 📄 Licença

Os projetos estão sob a licença do MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes

---
## Autor

Made with ♥ by Rafael 👋🏻


[![Linkedin Badge](https://img.shields.io/badge/-Rafael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/rafael-mgr/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-red?style=flat-square&link=mailto:nelsonsantosaraujo@hotmail.com)](mailto:ribeirorafaelmatehus@gmail.com)

## Referências

* [Tutorial](https://www.youtube.com/watch?v=mjBsii0eiuI)
* [SOLID](https://pt.wikipedia.org/wiki/SOLID)
* [TDD](https://pt.wikipedia.org/wiki/Test-driven_development)
* Blogs:
  * [Treina web](https://www.treinaweb.com.br/blog/afinal-o-que-e-tdd)
  * [Caelum](https://tdd.caelum.com.br/)
  * [Digite](https://www.digite.com/pt-br/agile/desenvolvimento-orientado-a-testes-tdd/)
  * [Medium](https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)
  * [Free Code Camp](https://www.freecodecamp.org/portuguese/news/os-principios-solid-da-programacao-orientada-a-objetos-explicados-em-bom-portugues/)
