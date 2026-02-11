const frontEndSkillsIcons = [
 {
  id: "react",
  name: "React.js",
  redirectUrl: "https://react.dev/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
 },
 {
  id: "next",
  name: "Next.js",
  redirectUrl: "https://nextjs.org/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
 },
 {
  id: "angular",
  name: "Angular",
  redirectUrl: "https://angular.io/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
 },
 {
  id: "javascript",
  name: "JavaScript",
  redirectUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
 },
 {
  id: "typescript",
  name: "TypeScript",
  redirectUrl: "https://www.typescriptlang.org/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
 },
];

const backEndSkillsIcons = [
 {
  id: "nodejs",
  name: "Node.js",
  redirectUrl: "https://nodejs.org/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
 },
 {
  id: "express",
  name: "Express.js",
  redirectUrl: "https://expressjs.com/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
 },
 {
  id: "java",
  name: "Java",
  redirectUrl: "https://www.java.com/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
 },
 {
  id: "spring",
  name: "Spring Boot",
  redirectUrl: "https://spring.io/projects/spring-boot",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
 },
];

const databaseSkillsIcons = [
 {
  id: "mongodb",
  name: "MongoDB",
  redirectUrl: "https://www.mongodb.com/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
 },
 {
  id: "postgresql",
  name: "PostgreSQL",
  redirectUrl: "https://www.postgresql.org/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
 },
 {
  id: "mysql",
  name: "MySQL",
  redirectUrl: "https://www.mysql.com/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
 },
];

const infrastructureSkillsIcons = [
 {
  id: "aws",
  name: "AWS",
  redirectUrl: "https://aws.amazon.com/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
 },
 {
  id: "docker",
  name: "Docker",
  redirectUrl: "https://www.docker.com/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
 },
];

const testSkillsIcons = [
 {
  id: "jest",
  name: "Jest",
  redirectUrl: "https://jestjs.io/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
 },
 {
  id: "vitest",
  name: "Vitest",
  redirectUrl: "https://vitest.dev/",
  imageUrl:
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
 },
];

enum STACK_STATUS {
 ADVANCED = "advanced",
 INTERMEDIATE = "intermediate",
 BEGINNER = "begginer",
}

export interface IStacksList {
 id: number;
 title: string;
 description: string;
 status: string;
 skills: Array<{
  id: string;
  name: string;
  redirectUrl: string;
  imageUrl: string;
 }>;
}

export const stacksList = [
 {
  id: 0,
  title: "Front End",
  description:
   "Experiência sólida no desenvolvimento de interfaces utilizando React.js, Next.js e Angular. Foco em performance, experiência do usuário e integração com serviços backend. Trabalho com sistemas de alto tráfego, otimização de conversão e engajamento de usuários.",
  status: STACK_STATUS.ADVANCED,
  skills: frontEndSkillsIcons,
 },
 {
  id: 1,
  title: "Back End",
  description:
   "Desenvolvimento de APIs e sistemas backend utilizando Node.js, Express.js, Java e Spring Boot. Experiência em arquitetura escalável, performance e integração com bancos de dados relacionais e não relacionais. Trabalho com sistemas críticos e de alto tráfego.",
  status: STACK_STATUS.ADVANCED,
  skills: backEndSkillsIcons,
 },
 {
  id: 2,
  title: "Banco de Dados",
  description:
   "Modelagem e integração com bancos de dados relacionais (PostgreSQL, MySQL) e não relacionais (MongoDB). Experiência em otimização de queries, escalabilidade e garantia de consistência e integridade de dados em sistemas de produção.",
  status: STACK_STATUS.ADVANCED,
  skills: databaseSkillsIcons,
 },
 {
  id: 3,
  title: "Infraestrutura",
  description:
   "Experiência com AWS para infraestrutura e serviços em nuvem, incluindo SQS e SNS. Utilização de Docker para contenerização e padronização de ambientes. Conhecimento em CI/CD para automação de processos de deploy.",
  status: STACK_STATUS.ADVANCED,
  skills: infrastructureSkillsIcons,
 },
 {
  id: 4,
  title: "Testes",
  description:
   "Aplicação de TDD (Test-Driven Development) utilizando Jest e Vitest. Desenvolvimento de testes unitários e de integração para garantir qualidade e manutenibilidade do código em sistemas críticos.",
  status: STACK_STATUS.ADVANCED,
  skills: testSkillsIcons,
 },
 {
  id: 5,
  title: "Arquitetura",
  description:
   "Aplicação de princípios SOLID, TDD e MVC na arquitetura de sistemas escaláveis. Experiência na evolução de sistemas críticos, redução de churn, melhoria de conversão e otimização de performance em ambientes de produção.",
  status: STACK_STATUS.ADVANCED,
  skills: [],
 },
];
