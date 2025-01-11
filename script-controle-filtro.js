    function categorizeAndLabelEmails() {
        // Configuração: defina os critérios e nomes dos marcadores aqui
        const emailFilters = {
            'Marcador/Categoria': {
                from: ['exemplo@dominio.com'] // Substitua pelo endereço de e-mail desejado
                },
            'Marcador/Categoria': {
                from: ['exemplo@dominio.com'] // Substitua pelo endereço de e-mail desejado
            }
        };

            // Seu e-mail de administrador para receber notificações
            const adminEmail = 'seu-email@exemplo.com'; // Substitua pelo seu endereço de e-mail

            let emailSubject = '';
            let emailBody = '';
            let totalProcessed = 0;

        try {
        // Processa cada filtro
            for (const labelName in emailFilters) {
                totalProcessed += processEmailsByFilter(labelName, emailFilters[labelName]);
            }

            emailSubject = "Status do Script - Controle de Filtros dos E-mails";
            emailBody = `Olá!\n\nO script de gerenciamento de filtros foi executado com sucesso.\n\nTotal de e-mails processados: ${totalProcessed}.\n`;
            } 
        catch (e) {
            emailSubject = "Erro no Script - Controle de Filtros dos E-mails";
            emailBody = `Olá!\n\nOcorreu um erro durante a execução do script:\n\n${e.message}\n\nStack trace:\n${e.stack}`;
            } 
        finally {
        // Envia o e-mail de notificação
            MailApp.sendEmail(adminEmail, emailSubject, emailBody);
            Logger.log("Notificação enviada.");
            }
    }

    /**
    * Função auxiliar para processar e-mails com base em um filtro, aplicar um marcador e arquivá-los.
    */
    function processEmailsByFilter(labelName, filter) {
    // Obtém ou cria o marcador
        let label = GmailApp.getUserLabelByName(labelName);
        if (!label) {
            label = GmailApp.createLabel(labelName);
        }

    // Constrói a consulta de pesquisa
    let query = 'is:inbox ';
    if (filter.from) {
        query += `from:(${filter.from.join(' OR ')}) `;
    }

    // Pesquisa e processa threads
    Logger.log(`Query para ${labelName}: ${query}`); // Útil para depuração
    const threads = GmailApp.search(query);
    for (const thread of threads) {
        thread.addLabel(label); // Aplica o marcador
        thread.moveToArchive(); // Remove da caixa de entrada e arquiva
    }

        return threads.length; // Retorna o número de threads processadas
    }

        /**
         * Define um acionador baseado em tempo para executar a função `categorizeAndLabelEmails` periodicamente.
         */
        function createTrigger() {
            ScriptApp.newTrigger('categorizeAndLabelEmails')
            .timeBased()
            .everyMinutes(60) // Define a frequência (por exemplo, a cada 10 minutos)
            .create();
        }