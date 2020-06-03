import { RegisterUserSchema } from '../utils/graphQLQuerySchema';


export default function RegisterUser(url, userInfo) {
  const parameterQuery = userInfo;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: RegisterUserSchema(parameterQuery),
    }),
  });
}
