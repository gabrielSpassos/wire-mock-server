# Wire Mock Server

## Get Started
- Access the [official website](http://wiremock.org/docs/running-standalone/), and click on "_downloaded the standalone JAR_" to download the standalone wire mock jar.

- Clone this repository, and put it at the **same** folder where you putted the standalone wire mock jar. 

- Run with: 
```
java -jar wiremock-standalone-[version].jar --port [port]
```  
- I'm using version: 2.16.0 and port: 9090

## Getting Mock Data with Node Application

- Run with: 
```
nodemon
```

**[GET] PESSOA BY ID**
>
http://localhost:4500/api/v1/people/2647

**Check the console !!**
This way you can see that i'm getting the data from one application (wire-mock), with a request from a completely separate node application :thumbsup: :smile:

## Usage Of Wire Mock

_Usando CPF 49818430620_

**[GET] LISTAR CONTAS BY CPF**  
```
http://localhost:9090/api/pessoas/listar-contas?numeroReceitaFederal=49818430620
```
**[GET] PESSOA BY ID**
```
http://localhost:9090/api/pessoas/2647
```
**[GET] PESSOA DETALHES BY ID**  
```
http://localhost:9090/api/pessoas-detalhes/2647
```
**[GET] STATUS CARTOES** 
```
http://localhost:9090/api/status-cartoes
```
**[GET] CARTOES BY CONTA ID** 
```
http://localhost:9090/api/cartoes?idConta=2647
http://localhost:9090/api/cartoes?idConta=148839
http://localhost:9090/api/cartoes?idConta=261420
```

**[POST] PESSOA BY ID** 
```
http://localhost:9090/api/pessoas
```
_BODY_

```javascript
{
	"id": 2648,
	"nome": "RENATO RYAN RENAN CAVALCANTI",
	"tipo": "PF",
	"cpf": "58038373006",
	"cnpj": "",
	"dataNascimento": "1985-03-19T00:00:00.000Z",
	"sexo": "M",
	"numeroIdentidade": "27.476.780-6",
	"orgaoExpedidorIdentidade": "SSP",
	"unidadeFederativaIdentidade": "RS"
}
```

**[PATCH] PESSOA BY ID** 
```
http://localhost:9090/api/pessoas/2647
```
_BODY_

```javascript
{
  "nome": "ABADIA ROSA RAMOS",
  "numeroIdentidade": "442862337",
  "orgaoExpedidorIdentidade": "SSP",
  "unidadeFederativaIdentidade": "SC"
}
```