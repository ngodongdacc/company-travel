# api-company-cost

This repo is functionality complete — PRs and issues welcome!
### I. To get the Node server running locally:

- Clone this repo
- `yarn` to install all required dependencies
- `yarn start:dev` to start the local server
- Swagger documentation for all Api http://localhost:4007/explorer

### II. Enviroment variable
Basically, environment variables are located in the `.env` file. environment variables:
- APP_PORT=4007
- API_DOMAIN=https://5f27781bf5d27e001612e057.mockapi.io

### II. Document api

#### 1. Calculate total costs for the company in tree form
- **Method** : GET
- **Router** : path : "/company/cost"
- **Params** : 
- **Response** :
    + *Success** (Type Object):
        |Property| Type | Description |
        |------ | ------ | ------ |
        |   statusCode      |   Number     | successful return status (200)   |
        |   data    |   Object      |  return data                       |

        **data** (CompanyCostResponse) (Type Object):
        |Property| Type | Description |
        |------ | ------ | ------ |
        |   id      |   String     | Company id   |
        |   name    |   String      | Company name                       |
        |   parentId    |   String      | Parent company id                       |
        |   cost    |   Number      | Total cost of the company                       |
        |   children    |   Array<"CompanyCostResponse">      | List of subsidiaries                       |

    + **Failed** (Type Object) :
        | Property | Type | Description |
        | ------  | ------ | ------ |
        |  statusCode  |  Number  |  Failed return status (500)    |
        |  Error  |  String  |  Object error    |
        |  Message|  String  |  Detailt error     |

#### 2. Get company list
- **Method** : GET
- **Router** : path : "/company"
- **Params** : 
    |Property| Type | requied | Description |
    |------ | ------ | ------ |------ |
    |   skip      |   Number     | false | Number of records ignored (0)   |
    |   limit    |   Number      | false | Number of records retrieved (10)                       |
    |   name   |   string     | false | Look for information by field "name"                      |
    |   parentId   |   string     | false | Get the list for the same parentId                     |

- **Response** :
    + *Success** (Type Object):
        |Property| Type | Description |
        |------ | ------ | ------ |
        |   statusCode      |   Number     | successful return status (200)   |
        |   data    |   Object      |  return data                       |

        **data** (CompanyResponse) (Type Object):
        |Property| Type | Description |
        |------ | ------ | ------ |
        |   id      |   String     | Company id   |
        |   name    |   String      | Company name                       |
        |   parentId    |   String      | Parent company id                       |

    + **Failed** (Type Object) :
        | Property | Type | Description |
        | ------  | ------ | ------ |
        |  statusCode  |  Number  |  Failed return status (500)    |
        |  Error  |  String  |  Object error    |
        |  Message|  String  |  Detailt error     |
#### 3. Get a list of company employee expenses
- **Method** : GET
- **Router** : path : "/company/travel"
- **Params** : 
    |Property | Type | requied | Description |
    |------ | ------ | ------ |------ |
    |   skip      |   Number     | false | Number of records ignored (0)   |
    |   limit    |   Number      | false | Number of records retrieved (10)                       |
    |   search   |   string     | false | Look for information           |
    |   field   |   string     | false | Field search, default(employeeName)                     |

- **Response** :
    + *Success** (Type Object):
        |Property| Type | Description |
        |------ | ------ | ------ |
        |   statusCode      |   Number     | successful return status (200)   |
        |   data    |   Object      |  return data                       |

        **data** (CompanyTravelResponse) (Type Object):
        |Property| Type | Description |
        |------ | ------ | ------ |
        |   id      |   String     | Travel id   |
        |   price    |   String      | expense                       |
        |   companyId    |   String      | company id                       |
        |   employeeName    |   String      | employee Name                       |
        |   departure    |   String      | departure                       |
        |   destination    |   String      | destination                       |

    + **Failed** (Type Object) :
        | Property | Type | Description |
        | ------  | ------ | ------ |
        |  statusCode  |  Number  |  Failed return status (500)    |
        |  Error  |  String  |  Object error    |
        |  Message|  String  |  Detailt error     |

## Contact
Copyright (c) 2023 ngodongdac
