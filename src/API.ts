import axios, { Axios, AxiosResponse } from 'axios';

export type AccountsType = {
  isAdmin: boolean;
  emailAddress: string;
  password: string;
  firstName: string;
  lastName: string;
  companyName: string;
  lastLogin: string;
};

export type AccountResultType = {
  accounts: AccountsType[];
};

export type SingleAccountResultType = {
  singleAccount: AccountsType;
};

export type AccountCreatedResultType = AccountsType | string;

/*CRUD*SECTION*ACCOUNT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*CREATE*************************************************************************************************/

export function CreateAccount(
  account: AccountsType
): Promise<AxiosResponse<AccountCreatedResultType>> {
  return axios.post<AccountCreatedResultType>(
    'http://localhost:8000/accounts',
    account
  );
}

/*READ***************************************************************************************************/

export function GetAccounts(): Promise<AxiosResponse<AccountResultType>> {
  return axios.get<AccountResultType>('http://localhost:8000/accounts');
}

export function GetAccountByEmail(
  email: string
): Promise<AxiosResponse<SingleAccountResultType>> {
  return axios.get<SingleAccountResultType>(
    `http://localhost:8000/accounts/${email}`
  );
}

/*UPDATE*************************************************************************************************/

export function PutAccounts(
  account: AccountsType
): Promise<AxiosResponse<AccountResultType>> {
  return axios.put<AccountResultType>(
    'http://localhost:8000/accounts',
    account
  );
}

/*DELETE*************************************************************************************************/

export function DeleteAccount(account: AccountsType): Promise<AxiosResponse> {
  return axios.delete<AccountsType>('http://localhost:8000/accounts', {
    data: { emailAddress: account.emailAddress },
  });
}
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ACCOUNT*CRUD*SECTION*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

export type ProductType = {
  _id: number | undefined;
  // account_id: number;
  productName: string;
  // productImage: string;
  // productLink: string;
  // productCompany: string;
  productDescription: string;
  zielgruppe: {
    Geschäftsführung: Boolean;
    Umweltbeauftragte: Boolean;
    Fachabteilung: Boolean;
    Mitarbeiter: Boolean;
    'externe Stakeholder': Boolean;
    Behörden: Boolean;
  };
  anwendungsbereich: {
    Gesetzeskonformität: Boolean;
    Zertifizierung: Boolean;
    Ökobilanzierung: Boolean;
    Berichterstattung: Boolean;
    Entscheidungsunterstützung: Boolean;
    Arbeitsschutz: Boolean;
  };
  gradDerIntegrierung: {
    integriert: Boolean;
    AddOn: Boolean;
    StandAlone: Boolean;
    SaaSLösung: Boolean;
  };
  objektAspekt: {
    Abfall: Boolean;
    Anlagen: Boolean;
    Gefahrstoffe: Boolean;
    Emissionen: Boolean;
    Energie: Boolean;
    StoffeStoffströme: Boolean;
    Kosten: Boolean;
  };
  systemgrenzen: {
    StandortBetrieb: Boolean;
    Prozess: Boolean;
    Produkt: Boolean;
  };
  betrachtungskonzept: {
    Verwaltungszentriert: Boolean;
    Bewertungszentriert: Boolean;
    Managementzentriert: Boolean;
  };
};

export type ProductResultType = {
  products: ProductType[];
};

export type ProductCreatedResultType = ProductType | string;

/*CRUD*SECTION*PRODUCT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*CREATE*************************************************************************************************/

export function CreateProduct(
  product: ProductType
): Promise<AxiosResponse<ProductCreatedResultType>> {
  return axios.post<ProductCreatedResultType>(
    'http://localhost:8000/products',
    product
  );
}

/*READ***************************************************************************************************/
export function GetProducts(): Promise<AxiosResponse<ProductResultType>> {
  return axios.get<ProductResultType>('http://localhost:8000/products');
}

/*UPDATE*************************************************************************************************/

export function PutProducts(
  product: ProductType
): Promise<AxiosResponse<ProductResultType>> {
  return axios.put<ProductResultType>(
    'http://localhost:8000/products',
    product
  );
}

/*DELETE*************************************************************************************************/

export function DeleteProduct(product: ProductType): Promise<AxiosResponse> {
  //change data identificator
  return axios.delete<ProductType>('http://localhost:8000/products', {
    data: { emailAddress: product },
  });
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<PRODUCT*CRUD*SECTION*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

/*USER AUTHENTICATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*LOGIN *************************************************************************************************/

export function checkAuthentication(
  emailaddress: string,
  password: string
): Promise<AxiosResponse<string>> {
  return axios.post<string>('http://localhost:8000/authentication', {
    emailaddress,
    password,
  });
}

export function checkDeAuthentication(
  emailaddress: string
): Promise<AxiosResponse<string>> {
  return axios.post<string>('http://localhost:8000/authentication', {
    emailaddress,
  });
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<PRODUCT*CRUD*SECTION*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
