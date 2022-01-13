import axios, { Axios, AxiosResponse } from 'axios';

export type AccountsType = {
  id: number;
  emailAddress: string;
  firstName: string;
  lastName: string;
  companyName: string;
  lastLogin: string;
}

export type AccountResultType = {
  accounts: AccountsType[],
}

export function GetAccounts(): Promise<AxiosResponse<AccountResultType>>

{
  return axios.get<AccountResultType>('http://localhost:8000/accounts');
  }

export type ProductType = {
  product_id: number;
  account_id: number;
  productName: string;
  productImage: string;
  productLink: string;
  productCompany: string;
  productDescription: string;
  zielgruppe: string;
  anwendungsbereich: string;
  gradDerIntegrierung: string;
  objektAspekt: string;
  systemgrenzen: string;
  betrachtungskonzept: string;
}

export type ProductResultType = {
  products: ProductType[],
}

export function GetProducts(): Promise<AxiosResponse<ProductResultType>>

{
  return axios.get<ProductResultType>('http://localhost:8000/products');
  }
