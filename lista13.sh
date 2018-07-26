#!/bin/bash
clear
echo -n "Nome do diretório: "; read nome
echo -n "1-Uppercase ou 2-Lowercase? "; read opc

if [ ! -d $nome ]; then
 echo "$nome  inexistente."
fi

if [ "$opc" = "1" ]; then
 for file in "$nome"/*;do
  mv $file $nome/`echo$i | tr [a-z] [A-Z]`;
done
elif
[ "$opc" = "2" ]; then
 for file in "$nome"/*;do
  mv $file $nome/`echo$i | tr [A-Z] [a-z];
done 
else
echo "Opção inválida!"
fi
