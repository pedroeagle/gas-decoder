# Google Apps Script Decoder
Este projeto tem o intuito de decodificar textos em imagens ou pdfs. A decodificação é feita e enviada para a primeira célula de um documento Sheet do Google.<br>

# Como configurar
1- Entre na [IDE do Google](http://script.google.com) e clique em Novo Projeto. Será aberta uma página para que seja digitado o código.<br>
2 - Cole o código disponível no arquivo decoder.gs deste repositório.<br>
3 - É necessário definir a pasta onde o arquivo se encontra. Isto é feito na linha 3.<br>
4 - É necessário definir o nome do arquivo a ser decodificado. Isto é feito na linha 5.<br>
6 - Para poder visualizar o resultado é necessário ter um documento Google Sheet ativo. Para criar um clique em <b>Arquivo -> Novo -> Planilha<b>. 
7 - É necessário configurar a permissão do Drive. Para isso clique em <b>Recursos</b> e em seguida em <b>Serviços avançados do Google</b>. Em seguida procure por <b>Drive Api</b> e ative clicando no swith a direita.

# Executando
Basta selecionar a função "myFunction" na caixa de selecão e clicar no botão de executar. <b>Serão solicitadas algumas permissões e mostrados alguns avisos, dê permissões a todos.</b> O resultado estará disponível na Google Sheet aberta.