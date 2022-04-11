import axios, { Axios, AxiosResponse } from 'axios';

export type AccountType = {
  _id: string | undefined;
  isAdmin: boolean;
  emailAddress: string;
  password: string;
  firstName: string;
  lastName: string;
  companyName: string;
  lastLogin: string;
};

export type AccountsResultType = {
  accounts: AccountType[];
};

export type AccountResultType = {
  account: AccountType;
};

export type AccountCreatedResultType = AccountType | string;

/*CRUD*SECTION*ACCOUNT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*CREATE*************************************************************************************************/

export function CreateAccount(
  account: AccountType
): Promise<AxiosResponse<AccountCreatedResultType>> {
  return axios.post<AccountCreatedResultType>(
    'http://localhost:8000/accounts',
    account
  );
}

/*READ***************************************************************************************************/

export function GetAccounts(): Promise<AxiosResponse<AccountsResultType>> {
  return axios.get<AccountsResultType>('http://localhost:8000/accounts');
}

export function GetAccountByEmail(
  email: string
): Promise<AxiosResponse<AccountResultType>> {
  return axios.get<AccountResultType>(
    `http://localhost:8000/accounts/${email}`
  );
}

/*UPDATE*************************************************************************************************/

export function PutAccount(
  account: AccountType
): Promise<AxiosResponse<AccountResultType>> {
  return axios.put<AccountResultType>(
    'http://localhost:8000/accounts',
    account
  );
}

/*DELETE*************************************************************************************************/

export function DeleteAccount(account: AccountType): Promise<AxiosResponse> {
  return axios.delete<AccountType>('http://localhost:8000/accounts', {
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
  productLink: string;
  productCompany: string;
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
    Gesetzeskonformität: boolean;
    Zertifizierung: Boolean;
    Ökobilanzierung: Boolean;
    Berichterstattung: Boolean;
    Entscheidungsunterstützung: Boolean;
    Arbeitsschutz: Boolean;
  };
  gradDerIntegrierung: {
    integriert: Boolean;
    'Add-On': Boolean;
    'Stand-Alone': Boolean;
    'SaaS-Lösung': Boolean;
  };
  objektAspekt: {
    Abfall: Boolean;
    Anlagen: Boolean;
    Gefahrstoffe: Boolean;
    Emissionen: Boolean;
    Energie: Boolean;
    'Stoffe/Stoffströme': Boolean;
    Kosten: Boolean;
  };
  systemgrenzen: {
    'Standort/Betrieb': Boolean;
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
    // account_id has to be replaced
    { ...product, account_id: 0 }
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
