const variavel = {
    avdi: 76,
    bcdd: 114,
    bio: 76,
    web: 76,
    efi: 76,
    fil: 76,
    fis: 76,
    his: 76,
    lbp: 114,
    lpl: 114,
    mat: 114,
    qui: 76,
    sgds: 76
};

const total = 1140;

console.log('Selecione: \n1-AVDI\n2-BCDD\n3-BIO\n4-WEB\n5-EFI\n6-FIL\n7-FIS\n8-HIS\n9-LBP\n10-LPL\n11-MAT\n12-QUI\n13-SGDS\n14-TOTAL NO ANO\n');

let materia = 2; //não pode entrada de dados, então já está colocado dentro do código

switch (materia){
    case 1:
        FaltasAvdi = (variavel.avdi * 75)/100;
        console.log('Faltas que pode ter em avdi:', FaltasAvdi);
        break;
    case 2:
        FaltasBcdd = (variavel.bcdd * 75)/100;
        console.log('Faltas que pode ter em bcdd:', FaltasBcdd); //não pode usar função, então o valor vai ficar como float
        break;
    case 3:
        FaltasBio = (variavel.bio * 75)/100;
        console.log('Faltas que pode ter em bio:', FaltasBio);
        break;
    case 4:
        FaltasWeb = (variavel.web * 75)/100;
        console.log('Faltas que pode ter em web:', FaltasWeb);
        break;
    case 5:
        FaltasEfi = (variavel.efi * 75)/100;
        console.log('Faltas que pode ter em efi:', FaltasEfi);
        break;
    case 6:
        FaltasFil = (variavel.fil * 75)/100;
        console.log('Faltas que pode ter em fil:', FaltasFil);
        break;
    case 7:
        FaltasFis = (variavel.fis * 75)/100;
        console.log('Faltas que pode ter em fis:', FaltasFis);
        break;
    case 8:
        FaltasHis = (variavel.his * 75)/100;
        console.log('Faltas que pode ter em his:', FaltasHis);
        break;
    case 9:
        FaltasLbp = (variavel.lbp * 75)/100;
        console.log('Faltas que pode ter em lbp:', FaltasLbp); //não pode usar função, então o valor vai ficar como float
        break;
    case 10:
        FaltasLpl = (variavel.lpl * 75)/100;
        console.log('Faltas que pode ter em lpl:', FaltasLpl); //não pode usar função, então o valor vai ficar como float
        break;
    case 11:
        FaltasMat = (variavel.mat * 75)/100;
        console.log('Faltas que pode ter em mat:', FaltasMat); //não pode usar função, então o valor vai ficar como float
        break;
    case 12:
        FaltasQui = (variavel.qui * 75)/100;
        console.log('Faltas que pode ter em qui:', FaltasQui);
        break;
    case 13:
        FaltasSgds = (variavel.sgds * 75)/100;
        console.log('Faltas que pode ter em sgds:', FaltasSgds);
        break;
    case 14:
        FaltasemTotal = (total * 75)/100;
        console.log('Faltas que pode ter no total:', FaltasemTotal);
        break;
    default:
        console.log('Opcao invalida');
        break;
}
