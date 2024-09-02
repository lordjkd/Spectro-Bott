const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({ authStrategy: new LocalAuth() });

// Quando o cliente estiver pronto
client.on('ready', () => {
    console.log('Bot está pronto!');
});

// Mensagens recebidas
client.on('message', message => {
    // Se a mensagem for um comando para exibir o menu
    if (message.body === '!menu') {
        const menuMessage = `
🌟 **Bem-vindo ao Bot de Atendimento!** 🌟

Aqui estão alguns dos comandos e funcionalidades que você pode usar:

1. **🕒 Horário de Atendimento**
   - Comando: \`!horario\`
   - Descrição: Exibe nosso horário de atendimento.

2. **📍 Localização**
   - Comando: \`!localizacao\`
   - Descrição: Mostra a localização da nossa empresa.

3. **📋 Serviços**
   - Comando: \`!servicos\`
   - Descrição: Lista todos os serviços que oferecemos.

4. **💬 Fale Conosco**
   - Comando: \`!contato\`
   - Descrição: Fornece informações de contato direto com nossa equipe.

5. **🛠 Suporte Técnico**
   - Comando: \`!suporte\`
   - Descrição: Receba ajuda e suporte técnico para nossos produtos e serviços.

6. **📅 Agendar Consulta**
   - Comando: \`!agendar\`
   - Descrição: Agende uma consulta ou reunião com nossa equipe.

Para obter mais informações sobre cada comando, basta enviar o comando desejado!

Se você precisar de ajuda com algo mais, basta enviar \`!ajuda\` e nossa equipe estará pronta para ajudar.

📞 **Entre em contato conosco:**
- E-mail: suporte@empresa.com
- Telefone: +55 41 9813-3362

Obrigado por entrar em contato! 😊
        `;
        message.reply(menuMessage);
    }
});

// Inicializa o cliente do WhatsApp
client.initialize();

