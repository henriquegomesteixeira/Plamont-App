/*
Esse arquivo é responsável por exportar as funções de autenticação
do usuário para serem utilizadas em outros arquivos da aplicação.
Ele exporta as funções GET e POST, que são utilizadas para fazer
requisições de autenticação, além das funções signIn e signOut, que
são utilizadas para autenticar e desautenticar o usuário,
respectivamente. Por fim, ele exporta a configuração completa de
autenticação, que é utilizada para configurar o NextAuth.
*/

import { GET, POST } from '@/auth';

export { GET, POST };