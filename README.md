# Wire Mock Server

## Get Started
- Access the [official website](http://wiremock.org/docs/running-standalone/), and click on "_downloaded the standalone JAR_" to download the standalone wire mock jar.

- Clone this repository, and put it at the **same** folder where you putted the standalone wire mock jar. 

- Run with: 
```
java -jar wiremock-standalone-[version].jar --port [port]
```  
- I'm using version: 2.16.0 and port: 9090

## Usage

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
