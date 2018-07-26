------ API CLASS - Instagram -------

Modo SANDBOX - ambiente de teste com dados limitados da api;
ps: api dentro da sandbox !!!!

PASSO A PASSO: 
1. com o instagram, precisarei ter a conta e fazer login;
2. há dois tipos de autenticação: humana e programa; (4 passos)
3. authentication -> server side flow;
4. client id: usuário cliente, não o meu;
5. manage clients ; (sandbox = nível teste // toda api começa nele)
6. criar api -> register a new client -> valid redirect URls (c9 html // exemplo de autenticação: spotify)  
7. criada -> criada cliente id -> manage
8. client id = "login" (59daad867e234eea908a2bf88fd56599) | client secret = "senha" (fd61ec350564419a97a049926873d5f0);
9. pegar o código e depois o acess_token (chave que dará acesso ao instagram);
10. código -> no c9 criar site pois fará interação com a aplicação 
11. criar outro html -> pegar o html (step one | server-side) e o client id/secret -> e mudar o client id e redirect - uri (manage clients e trocar pela url https://jsclass-tcrsilva.c9users.io/AULA7/aula13.html); 
12. código pós autorizar a api = CODE 4f533eb58be94e33b34d3bda9d152e7a; NEW: b3dd9cf0e22543489faa7ecfd2a7589f
13. pegar o curl (comando linux) no c9 do professor (url.txt), trocar: client id/secret e code;
14. json criado!;
15. criar outra página html (aula12.html e aula.js) no js trocar o acess token pelo novo;
16. cria o json da conta;
17. no js (aula12.js) criar as funções para montar na página.. divs etc;
18. manage -> sandbox -> sandbox users -> colocar users dos migos (10) p/ próxima aula
19. sanbox invite -> migos autorizam -> ready;
20. API Endpoints >>>>>LER!!!<<<<< e fazer um mini app para a próxima aula;

(13)
curl -F 'client_id=59daad867e234eea908a2bf88fd56599' \
    -F 'client_secret=fd61ec350564419a97a049926873d5f0' \
    -F 'grant_type=authorization_code' \
    -F 'redirect_uri=https://jsclass-tcrsilva.c9users.io/AULA7/aula13.html' \
    -F 'code=b3dd9cf0e22543489faa7ecfd2a7589f' \
    https://api.instagram.com/oauth/access_token

(14)
{"access_token": "295055576.59daad8.ad2ce1fb8dd24af5995cb5d97ca65288", "user": {"id": "295055576", "username": "tcrsilva", "profile_picture": "https://scontent.cdninstagram.com/vp/e7a62ecf5a14f0861a939a90a3a078e6/5B9C2519/t51.2885-19/s150x150/22639243_122394751775156_2668312251559051264_n.jpg", "full_name": "ta is belta \ud83e\udd84", "bio": "dum vita est, spes est\n|-/ 19, snts\n\ud83d\udc7b taisssilva", "website": "", "is_business": true}}


(16) TRIDIMENSIONAL
{"data":
	 {"id": "295055576", 
	 "username": "tcrsilva", 
	"profile_picture":"https://scontent.cdninstagram.com/vp/e7a62ecf5a14f0861a939a90a3a078e6/5B9C2519/t51.2885-19/s150x150/22639243_122394751775156_2668312251559051264_n.jpg", 
	"full_name": "ta is belta \ud83e\udd84", 
	"bio": "dum vita est, spes est\n|-/ 19, snts\n\ud83d\udc7b taisssilva", 
	"website": "",
	"is_business": true,
	 "counts": {"media": 280,
		 "follows": 545, 
		"followed_by": 1461}
}
,"meta": {"code": 200}
}


https://ide.c9.io/romefeller/jsaula0

---------- AULA QUE VEM::::::::::: 

App;
& mais teoria.



//

{"access_token": "295055576.59daad8.36f72561617c4131b268ca77fed9c92c", "user": {"id": "295055576", "username": "tcrsilva", "profile_picture": "https://scontent.cdninstagram.com/vp/e7a62ecf5a14f0861a939a90a3a078e6/5B9C2519/t51.2885-19/s150x150/22639243_122394751775156_2668312251559051264_n.jpg", "full_name": "ta is belta \ud83e\udd84", "bio": "dum vita est, spes est\n|-/ 19, snts\n\ud83d\udc7b taisssilva", "website": "", "is_business": true}}