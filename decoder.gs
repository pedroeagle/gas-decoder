function myFunction() {
  //DIRETÓRIO DO ARQUIVO A SER DECODIFICADO
  var input_folder_name = "input_folder_name";
  //NOME DO ARQUIVO A SER DECODIFICADO
  var file_name = "download.pdf";
  //PROCURANDO PELO DIRETÓRIO
  var folders = DriveApp.getFolders();
  while(folders.hasNext()){
    var f = folders.next();
    if(f.getName() == input_folder_name){
      var input_folder = f;
    }
  }
  //PEGANDO OS ARQUIVOS DA PASTA DE ENTRADA
  var files = input_folder.getFiles();
  var file;
  //PASSANDO POR TODOS OS ARQUIVOS DA PASTA DE ENTRADA
  while(files.hasNext()){
    var f = files.next();
    //VERIFICA SE ENCONTRAMOS O ARQUIVO
    if(f.getName() == file_name){
      file = f;
    }
  }
  decode(file);
}
  function decode(file){
    var image = file.getBlob();
    //FAZENDO A DECODIFICAÇÃO E SALVANDO EM UM DOCUMENTO DO GOOGLE
    var file = {
      title: 'OCR File',
      mimeType: file.mimeType
    };
    file = Drive.Files.insert(file, image, {ocr: true});
    var document_id = file.id;
    var document = DocumentApp.openById(document_id);
    //CAPTURANDO O TEXTO DO DOCUMENTO DO GOOGLE GERADO
    var text = document.getBody().getText().replace("n", "");
    //SALVANDO NA PRIMEIRA POSIÇÃO DA SPREADSHET
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var cell = sheet.getRange(1,1);
    cell.setValue(text);
    //APAGANDO O DOCUMENTO GOOGLE GERADO
    Drive.Files.remove(document.getId());
  }