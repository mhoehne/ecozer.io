import axios, { Axios, AxiosResponse } from 'axios';

export type AccountsType = {
  isAdmin: boolean;
  emailAddress: string;
  password: string;
  firstName: string;
  lastName: string;
  companyName: string;
  lastLogin: string;
}

export type AccountResultType = {
  accounts: AccountsType[],
}

export type AccountCreatedResultType = AccountsType | string

/*CRUD*SECTION*ACCOUNT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*CREATE*************************************************************************************************/

export function CreateAccount(account: AccountsType): Promise<AxiosResponse<AccountCreatedResultType>> {

  return axios.post<AccountCreatedResultType>('http://localhost:8000/accounts', account,);
}

/*READ***************************************************************************************************/

export function GetAccounts(): Promise<AxiosResponse<AccountResultType>>

{
  return axios.get<AccountResultType>('http://localhost:8000/accounts');
  }

/*UPDATE*************************************************************************************************/

export function PutAccounts(account: AccountsType): Promise<AxiosResponse<AccountResultType>>
{
  return axios.put<AccountResultType>('http://localhost:8000/accounts', account);
}

/*DELETE*************************************************************************************************/

export function DeleteAccount(account: AccountsType): Promise<AxiosResponse>
{
  return axios.delete<AccountsType>('http://localhost:8000/accounts', {data: {emailAddress: account.emailAddress}});
}
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ACCOUNT*CRUD*SECTION*/

export type ProductType = {
  // product_id: number;
  // account_id: number;
  productName: string;
  // productImage: string;
  // productLink: string;
  // productCompany: string;
  productDescription: string;
  zielgruppe: {
    "Geschäftsführung": Boolean;
    "Umweltbeauftragte": Boolean;
    "Fachabteilung": Boolean;
    "Mitarbeiter": Boolean;
    "externe Stakeholder": Boolean;
    "Behörden": Boolean;
  },
  anwendungsbereich: {
    "Gesetzeskonformität": Boolean,
    "Zertifizierung": Boolean,
    "Ökobilanzierung": Boolean,
    "Berichterstattung": Boolean,
    "Entscheidungsunterstützung": Boolean,
    "Arbeitsschutz": Boolean
  },
  gradDerIntegrierung: {
    "integriert": Boolean,
    "AddOn": Boolean,
    "StandAlone": Boolean,
    "SaaSLösung": Boolean
  },
  objektAspekt: {
    "Abfall": Boolean,
    "Anlagen": Boolean,
    "Gefahrstoffe": Boolean,
    "Emissionen": Boolean,
    "Energie": Boolean,
    "StoffeStoffströme": Boolean,
    "Kosten": Boolean
  },
  systemgrenzen: {
    "StandortBetrieb": Boolean,
    "Prozess": Boolean,
    "Produkt": Boolean
  },
  betrachtungskonzept: {
    "Verwaltungszentriert": Boolean,
    "Bewertungszentriert": Boolean,
    "Managementzentriert": Boolean
  }
}

export type ProductResultType = {
  products: ProductType[],
}

/*CRUD*SECTION*PRODUCT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*CREATE*************************************************************************************************/



/*READ***************************************************************************************************/
export function GetProducts(): Promise<AxiosResponse<ProductResultType>>

{
  return axios.get<ProductResultType>('http://localhost:8000/products');
  }


/*UPDATE*************************************************************************************************/



/*DELETE*************************************************************************************************/



/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ACCOUNT*CRUD*SECTION*/
