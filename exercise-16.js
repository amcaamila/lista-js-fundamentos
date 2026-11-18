// 16. Status HTTP
const codigo = Number(prompt("Digite o código de status HTTP:"));

switch (codigo) {
  case 200:
    console.log("200 OK");
    break;
  case 201:
    console.log("201 Created");
    break;
  case 301:
    console.log("301 Moved Permanently");
    break;
  case 400:
    console.log("400 Bad Request");
    break;
  case 401:
    console.log("401 Unauthorized");
    break;
  case 403:
    console.log("403 Forbidden");
    break;
  case 404:
    console.log("404 Not Found");
    break;
  case 500:
    console.log("500 Internal Server Error");
    break;
  default:
    if (codigo >= 200 && codigo < 300) {
      console.log("2xx - Sucesso");
    } else if (codigo >= 400 && codigo < 500) {
      console.log("4xx - Erro do cliente");
    } else if (codigo >= 500 && codigo < 600) {
      console.log("5xx - Erro do servidor");
    } else {
      console.log("Código fora das categorias mapeadas.");
    }
}
