## Configurações do Projeto

### 1. Configuração do Prettier
Essa configuração adiciona um plugin específico do Tailwind CSS ao Prettier, que é uma ferramenta de formatação de código.

```json
// Arquivo: .prettierrc
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```
- **plugins:** Lista de plugins para o Prettier. O plugin prettier-plugin-tailwindcss ajuda a ordenar as classes do Tailwind CSS de maneira consistente.

### 2. Configuração do Lint-Staged
Lint-Staged é uma ferramenta que permite aplicar linters aos arquivos que estão sendo commitados (ou seja, somente aos arquivos que foram alterados e que estão prestes a ser commitados).

```json
// Arquivo: .lintstagedrc.json
{
  "*.ts?(x)": ["eslint --fix", "prettier --write"]
}
```
- **"*.ts?(x)":** Essa expressão regular se aplica a todos os arquivos com extensão ".ts" ou ".tsx."

- **"eslint --fix":** Executa o ESLint e tenta corrigir automaticamente os problemas encontrados.

- **"prettier --write":** Formata os arquivos usando Prettier.

### 3. Configuração do Husky para Mensagens de Commit
Husky é uma ferramenta que permite criar hooks de Git, como pre-commit e commit-msg, que são acionados em eventos específicos no fluxo de trabalho do Git.

```sh
# Arquivo: .husky/commit-msg
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

.git/hooks/commit-msg $1
```
- **commit-msg:** Hook que verifica a mensagem de commit. Este script é um wrapper que chama o script "commit-msg" dentro do diretório ".git/hooks" com o argumento "$1", que é a mensagem de commit.

### 4. Hook de Pre-Commit
Este script é executado antes de um commit ser criado. Ele usa o lint-staged para aplicar as verificações e correções configuradas somente aos arquivos que estão sendo commitados.

```sh
# Arquivo: .husky/pre-commit
npx lint-staged
```
- **npx lint-staged:** Executa o lint-staged para aplicar os comandos de linting e formatação definidos no ."lintstagedrc.json" aos arquivos que estão sendo commitados.