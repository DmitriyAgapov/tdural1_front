export const CreateCustomer = `mutation CreateUser($data: UsersPermissionsUserInput!) {
  createUsersPermissionsUser(data: $data) {    
    data {
      attributes {
        username
      }
    }
  }
}`
export const CreateOrder = `mutation OrderParts($data: OrderInput!) {
  createOrder(data: $data) {
    data {
      id
    }
  }
}`