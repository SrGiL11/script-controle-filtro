# Gerenciador e Categorizador de E-mails

🚀 Este script foi desenvolvido para organizar e categorizar e-mails recebidos na sua conta do Gmail, aplicando marcadores com base em critérios predefinidos, como o endereço de remetente. Ele cria automaticamente os marcadores necessários e arquiva e-mails para manter sua caixa de entrada limpa. Notificações sobre a execução do script são enviadas para o endereço de e-mail do administrador. 📧✨📋

---

## Funcionalidades

✨ **Categorização de E-mails**: Categoriza automaticamente e-mails com base nos endereços dos remetentes.
🏷️ **Criação de Marcadores**: Cria automaticamente marcadores no Gmail caso não existam.
🗂️ **Limpeza da Caixa de Entrada**: Move os e-mails processados para os marcadores correspondentes, tornando-os visíveis apenas nas pastas do marcador.
📩 **Notificações de Execução**: Envia um e-mail ao administrador com um resumo da execução do script.
🔄 **Execução Periódica**: Pode ser configurado para executar automaticamente em intervalos definidos usando acionadores do Google Apps Script.

---

## Como o Código Funciona

1. **Configuração de Filtros**: Defina os filtros de e-mail no objeto `emailFilters`. Cada filtro inclui o nome do marcador e os endereços de e-mail associados.
2. **Processamento de E-mails**: O script busca e-mails não lidos que correspondem aos filtros, aplica os marcadores correspondentes e move os e-mails para o arquivo do marcador.
3. **Notificações**: Após o processamento, o script envia um resumo para o endereço de e-mail do administrador.
4. **Acionadores**: Um acionador baseado em tempo garante que o script seja executado periodicamente (por exemplo, a cada 15 minutos).

---

## Personalização

🌟 **Adicionar Novos Filtros**: Expanda o objeto `emailFilters` para incluir mais marcadores e endereços de remetentes.
⏳ **Ajustar Frequência**: Modifique a função `createTrigger` para alterar o intervalo de execução.
📧 **E-mail de Notificação**: Atualize a variável `adminEmail` para redirecionar notificações para outro endereço.

---

## Configuração

#### Definir Filtros

Edite o objeto `emailFilters` para incluir os marcadores e endereços de e-mail para categorização. Exemplo:

```javascript
const emailFilters = {
  'Marcador/Categoria': {
    from: ['exemplo@dominio.com']
  }
};
```
---

#### Definir E-mail do Administrador

Substitua `seu-email@exemplo.com` na variável `adminEmail` pelo seu endereço de e-mail:

```javascript
const adminEmail = 'seu-email@exemplo.com';
```
---

#### Criar Acionador

Execute a função `createTrigger` para configurar um acionador baseado em tempo para execução periódica:

```javascript
function createTrigger() {
  ScriptApp.newTrigger('categorizeAndLabelEmails')
    .timeBased()
    .everyMinutes(15)
    .create();
}
```
---

## Como Automatizar no Apps Script

1. **Instalação**:
   - 📊 Abra o Google Sheets ou Gmail.
   - 🔧 Navegue até Extensões > Apps Script.
   - ✂️ Copie e cole o script no editor do Apps Script.
   - 📧 Configure a variável `adminEmail` com seu endereço de e-mail.
   - 🛠️ Personalize o objeto `emailFilters` conforme suas necessidades de categorização.
   - 💾 Salve o projeto.

---

## Exemplo de Resultado

Após a execução, o administrador receberá um e-mail com o seguinte resumo:

```
Olá!

O script de gerenciamento de filtros foi executado com sucesso.

Total de e-mails processados: 10.
```

---

## Observações

- Certifique-se de revisar as permissões do Apps Script para garantir que o script tenha acesso aos e-mails necessários.

---

## Recomendação
- Para manter a sua caixa de entrada sempre organizada, recomenda-se configurar o acionador para executar a cada 6 horas. ⏰

---

## Limitações Conhecidas

- Funciona apenas com contas Gmail.
- Depende de endereços de remetentes predefinidos para categorização.
- Não processa e-mails já lidos, a menos que seja modificado.

---

## Contribuições

🌟 **Contribuições são bem-vindas!** Sinta-se à vontade para enviar um pull request ou abrir uma issue no repositório.

---

## Licença

📚 Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.