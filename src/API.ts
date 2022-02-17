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
export type zielgruppen = "Geschäftsführung" | "Umweltbeauftragte" | "Fachabteilung" | "Mitarbeiter" | "externe Stakeholder" | "Behörden"

export type ProductType = {
  // product_id: number;
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
    "externe Stakeholder": Boolean;
    Behörden: Boolean;
  }
  // anwendungsbereich: string;
  // gradDerIntegrierung: string;
  // objektAspekt: string;
  // systemgrenzen: string;
  // betrachtungskonzept: string;
}

export type ProductResultType = {
  products: ProductType[],
}

export function GetProducts(): Promise<AxiosResponse<ProductResultType>>

{
  return axios.get<ProductResultType>('http://localhost:8000/products');
  }
