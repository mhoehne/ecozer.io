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
    Geschäftsführung: boolean;
    Umweltbeauftragte: boolean;
    Fachabteilung: boolean;
    Mitarbeiter: boolean;
    'externe Stakeholder': boolean;
    Behörden: boolean;
  };
  anwendungsbereich: {
    Gesetzeskonformität: boolean;
    Zertifizierung: boolean;
    Ökobilanzierung: boolean;
    Lebenszyklus: boolean;
    Berichterstattung: boolean;
    Entscheidungsunterstützung: boolean;
    Arbeitsschutz: boolean;
  };
  gradDerIntegrierung: {
    integriert: boolean;
    'Add-On': boolean;
    'Stand-Alone': boolean;
    'SaaS-Lösung': boolean;
  };
  objektAspekt: {
    Abfall: boolean;
    Anlagen: boolean;
    Gefahrstoffe: boolean;
    Emissionen: boolean;
    Energie: boolean;
    'Stoffe/Stoffströme': boolean;
    Kosten: boolean;
  };
  systemgrenzen: {
    'Standort/Betrieb': boolean;
    Prozess: boolean;
    Produkt: boolean;
    Zwischenbetrieblich: boolean;
  };
  betrachtungskonzept: {
    Verwaltungszentriert: boolean;
    Bewertungszentriert: boolean;
    Managementzentriert: boolean;
  };
};

export type ProductResultType = {
  products: ProductType[];
};

export type ProductCreatedResultType = ProductType | string;

// add a query to /products API to pass a limit and sort by parameters
// /products?limit=3&sortBy=createdAt&sortOrder=desc

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

export function ListNewestProducts(): Promise<
  AxiosResponse<ProductResultType>
> {
  return axios.get<ProductResultType>(
    'http://localhost:8000/products?limit=3&sortBy=createdAt&sortOrder=desc'
  );
}

export function ListMostViewedProducts(): Promise<
  AxiosResponse<ProductResultType>
> {
  return axios.get<ProductResultType>(
    'http://localhost:8000/products?limit=3&sortBy=viewCounter&sortOrder=asc'
  );
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
