export interface XMLType {
    _declaration: Declaration;
    nfeProc:      NfeProc;
}

export interface Declaration {
    _attributes: DeclarationAttributes;
}

export interface DeclarationAttributes {
    version:  string;
    encoding: string;
}

export interface NfeProc {
    _attributes: NfeProcAttributes;
    NFe:         NFe;
    protNFe:     ProtNFe;
}

export interface NFe {
    _attributes: SignatureAttributes;
    infNFe:      InfNFe;
    Signature:   Signature;
}

export interface Signature {
    _attributes:    SignatureAttributes;
    SignedInfo:     SignedInfo;
    SignatureValue: SignatureValue;
    KeyInfo:        KeyInfo;
}

export interface KeyInfo {
    X509Data: X509Data;
}

export interface X509Data {
    X509Certificate: SignatureValue;
}

export interface SignatureValue {
    _text: string;
}

export interface SignedInfo {
    CanonicalizationMethod: CanonicalizationMethod;
    SignatureMethod:        CanonicalizationMethod;
    Reference:              Reference;
}

export interface CanonicalizationMethod {
    _attributes: CanonicalizationMethodAttributes;
}

export interface CanonicalizationMethodAttributes {
    Algorithm: string;
}

export interface Reference {
    _attributes:  ReferenceAttributes;
    Transforms:   Transforms;
    DigestMethod: CanonicalizationMethod;
    DigestValue:  SignatureValue;
}

export interface Transforms {
    Transform: CanonicalizationMethod[];
}

export interface ReferenceAttributes {
    URI: string;
}

export interface SignatureAttributes {
    xmlns: string;
}

export interface InfNFe {
    _attributes: InfNFeAttributes;
    ide:         { [key: string]: SignatureValue };
    emit:        Emit;
    dest:        Dest;
    det:         Det;
    total:       Total;
    transp:      Transp;
    cobr:        Cobr;
    pag:         Pag;
    infAdic:     InfAdic;
    infRespTec:  InfRespTec;
}

export interface InfNFeAttributes {
    Id:     string;
    versao: string;
}

export interface Cobr {
    fat: Fat;
}

export interface Fat {
    nFat:  SignatureValue;
    vOrig: SignatureValue;
    vLiq:  SignatureValue;
}

export interface Dest {
	CPF:       SignatureValue;
    CNPJ:      SignatureValue;
    xNome:     SignatureValue;
    enderDest: Ender;
    indIEDest: SignatureValue;
    IE:        SignatureValue;
}

export interface Ender {
    xLgr:    SignatureValue;
    nro:     SignatureValue;
    xBairro: SignatureValue;
    cMun:    SignatureValue;
    xMun:    SignatureValue;
    UF:      SignatureValue;
    CEP:     SignatureValue;
    cPais:   SignatureValue;
    xPais:   SignatureValue;
    fone?:   SignatureValue;
}

export interface Det {
    _attributes: DetAttributes;
    prod:        { [key: string]: SignatureValue };
    imposto:     Imposto;
}

export interface DetAttributes {
    nItem: string;
}

export interface Imposto {
    ICMS:   Icms;
    PIS:    Pis;
    COFINS: Cofins;
}

export interface Cofins {
    COFINSNT: Snt;
}

export interface Snt {
    CST: SignatureValue;
}

export interface Icms {
    ICMS00: { [key: string]: SignatureValue };
}

export interface Pis {
    PISNT: Snt;
}

export interface Emit {
    CPF:       SignatureValue;
    xNome:     SignatureValue;
    xFant:     SignatureValue;
    enderEmit: Ender;
    IE:        SignatureValue;
    CRT:       SignatureValue;
}

export interface InfAdic {
    infCpl: SignatureValue;
}

export interface InfRespTec {
    CNPJ:     SignatureValue;
    xContato: SignatureValue;
    email:    SignatureValue;
    fone:     SignatureValue;
}

export interface Pag {
    detPag: DetPag;
}

export interface DetPag {
    indPag: SignatureValue;
    tPag:   SignatureValue;
    vPag:   SignatureValue;
}

export interface Total {
    ICMSTot: { [key: string]: SignatureValue };
    retTrib: RetTrib;
}

export interface RetTrib {
}

export interface Transp {
    modFrete: SignatureValue;
    vol:      Vol;
}

export interface Vol {
    qVol: SignatureValue;
}

export interface NfeProcAttributes {
    versao: string;
    xmlns:  string;
}

export interface ProtNFe {
    _attributes: ProtNFeAttributes;
    infProt:     InfProt;
}

export interface ProtNFeAttributes {
    versao: string;
}

export interface InfProt {
    tpAmb:    SignatureValue;
    verAplic: SignatureValue;
    chNFe:    SignatureValue;
    dhRecbto: SignatureValue;
    nProt:    SignatureValue;
    digVal:   SignatureValue;
    cStat:    SignatureValue;
    xMotivo:  SignatureValue;
}
