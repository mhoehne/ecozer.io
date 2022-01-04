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