import axios, { AxiosResponse } from 'axios';

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export type AccountType = {
  _id: number | undefined;
  isAdmin: boolean;
  emailAddress: string;
  password: string;
  firstName: string;
  lastName: string;
  companyName: string;
  lastLogin: string;
  acceptedTermAndConditions: boolean;
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
    `http://${process.env.REACT_APP_API_HOSTNAME}/accounts`,
    account, {
      headers: {
        authorization: getCookie('token')
      }
    }
  );
}

/*READ***************************************************************************************************/

export function GetAccounts(): Promise<AxiosResponse<AccountsResultType>> {
  return axios.get<AccountsResultType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/accounts`
  );
}

export function GetAccountByEmail(
  email: string
): Promise<AxiosResponse<AccountResultType>> {
  return axios.get<AccountResultType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/accounts/${email}`
  );
}

/*UPDATE*************************************************************************************************/

export function PutAccount(
  account: AccountType
): Promise<AxiosResponse<AccountResultType>> {
  return axios.put<AccountResultType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/accounts`,
    account, {
      headers: {
        authorization: getCookie('token')
      }
    }
  );
}

/*DELETE*************************************************************************************************/

export function DeleteAccount(account: AccountType): Promise<AxiosResponse> {
  return axios.delete<AccountType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/accounts`,
    {
      data: { emailAddress: account.emailAddress },
    },
    
  );
}
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<ACCOUNT*CRUD*SECTION*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

export type ProductType = {
  _id: number | undefined;
  account_id: number;
  state: string;
  viewCounter: number | undefined;
  productImage: string;
  productName: string;
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

export type ProductsResultType = {
  products: ProductType[];
};

export type ProductResultType = {
  product: ProductType;
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
    `http://${process.env.REACT_APP_API_HOSTNAME}/products`,
    product, {
      headers: {
        authorization: getCookie('token')
      }
    }
  );
}

/*READ***************************************************************************************************/

export function GetProducts(
  searchterm: string | null,
  account_id: number | null,
  zielgruppe: string[],
  anwendungsbereich: string[],
  gradDerIntegrierung: string[],
  objektAspekt: string[],
  systemgrenzen: string[],
  betrachtungskonzept: string[],
  state: string | null
): Promise<AxiosResponse<ProductsResultType>> {
  const url = new URL(
    `http://${process.env.REACT_APP_API_HOSTNAME}/products`
  );
  if (account_id !== null) {
    url.searchParams.append('account_id', String(account_id));
  }

  for (const filter of zielgruppe) {
    url.searchParams.append('zielgruppe[]', filter);
  }

  for (const filter of anwendungsbereich) {
    url.searchParams.append('anwendungsbereich[]', filter);
  }

  for (const filter of gradDerIntegrierung) {
    url.searchParams.append('gradDerIntegrierung[]', filter);
  }

  for (const filter of objektAspekt) {
    url.searchParams.append('objektAspekt[]', filter);
  }
  for (const filter of systemgrenzen) {
    url.searchParams.append('systemgrenzen[]', filter);
  }
  for (const filter of betrachtungskonzept) {
    url.searchParams.append('betrachtungskonzept[]', filter);
  }
  if (state !== null) {
    url.searchParams.append('state', String(state));
  }

  return axios.get<ProductsResultType>(url.toString());
}

export function ListNewestProducts(): Promise<
  AxiosResponse<ProductsResultType>
> {
  return axios.get<ProductsResultType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/products?limit=3&sortBy=createdAt&sortOrder=desc&state=published`
  );
}

export function ListMostViewedProducts(): Promise<
  AxiosResponse<ProductsResultType>
> {
  return axios.get<ProductsResultType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/products?limit=3&sortBy=viewCounter&sortOrder=desc&state=published`
  );
}

export function IncrementProductViewCount(
  productID: string
): Promise<AxiosResponse<ProductType>> {
  return axios.post<ProductType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/products/${productID}/view`
  );
}

export function getProduct(
  productID: string
): Promise<AxiosResponse<ProductType>> {
  return axios.get<ProductType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/products/${productID}`
  );
}

/*UPDATE*************************************************************************************************/

export function PutProducts(
  product: ProductType
): Promise<AxiosResponse<ProductsResultType>> {
  return axios.put<ProductsResultType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/products`,
    product, {
      headers: {
        authorization: getCookie('token')
      }
    }
  );
}

export function PublishProduct(
  productID: string
): Promise<AxiosResponse<ProductType>> {
  return axios.post<ProductType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/products/${productID}/publish`, {
      headers: {
        authorization: getCookie('token')
      }
    }
  );
}

export function RejectProduct(
  productID: string, 
  rejectionReason: string
): Promise<AxiosResponse<ProductType>> {
  return axios.post<ProductType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/products/${productID}/reject`, {rejectionReason} ,{
      headers: {
        authorization: getCookie('token')
      }
    }
  );
}

export function AssignProduct(product: ProductType): Promise<AxiosResponse<ProductType>> {
  return axios.post<ProductType>(`http://${process.env.REACT_APP_API_HOSTNAME}/products/assign`, product)
  
}

/*DELETE*************************************************************************************************/

export function DeleteProduct(product: ProductType): Promise<AxiosResponse> {
  //change data identificator
  return axios.delete<ProductType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/products`,
    {
      data: { ...product },
    }
  );
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<PRODUCT*CRUD*SECTION*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

/*USER AUTHENTICATION >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
/*LOGIN *************************************************************************************************/

// authentication
// check for the jwt token

export function checkAuthenticate(
  emailaddress: string,
  password: string,
): Promise<AxiosResponse<string>> {
  
  return axios.post<string>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/authentication`,
    { emailaddress, password},
  );
}



export function checkDeAuthentication(
): Promise<AxiosResponse<string>> {
  return axios.post<string>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/authentication`,
    {
      headers: {
        authorization: getCookie('token')
      }
    }
  );
}

// create new endpoint to revalidate token
// create new postman call to check revalidate authentication and get new token

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<PRODUCT*CRUD*SECTION*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

export type NotificationType = {
  _id: number;
  account_id: number;
  productName: string;
  message: string;
  messageType:
    | 'pending'
    | 'published'
    | 'unpublished'
    | 'rejected'
    | 'assigned';
  rejectReason: string | null;
  createdAt: Date;
  isRead: boolean;
};

export type NotificationsType = {
  notifications: NotificationType[];
};

/* NOTIFICATIONS */

export function GetNotifications(): Promise<AxiosResponse<NotificationsType>> {
  return axios.get<NotificationsType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/notifications?limit=5`,
    
    {
      headers: {
        authorization: getCookie('token')
      }
    }
  );
}

export function markAsReadNotification(notification: number): Promise<AxiosResponse<NotificationsType>> {
  return axios.post<NotificationsType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/notifications/${notification}`, {}, {
      headers: {
        authorization: getCookie('token')
      }
    }
  );
}


/* REPORTING */
export type ReportingType = {
  _id: number | undefined;
  name: string;
  emailAddress: string;
  issue: string;
  browser: string;
  pageName: string;
  feedbackField: string;
};
export type ReportingsResultType = {
  reportings: ReportingType[];
};

export type ReportingCreatedResultType = ReportingType | string;

export function CreateReporting(
  reporting: ReportingType
): Promise<AxiosResponse<ReportingCreatedResultType>> {
  return axios.post<ReportingCreatedResultType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/reportings`,
    reporting
  );
}

export function GetReportings(): Promise<AxiosResponse<ReportingsResultType>> {
  return axios.get<ReportingsResultType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/reportings`
  );
}

export function DeleteReporting(reporting: ReportingType): Promise<AxiosResponse> {
  return axios.delete<ReportingType>(
    `http://${process.env.REACT_APP_API_HOSTNAME}/reportings`,
    {
      data: { ...reporting },
    }
  );
}

