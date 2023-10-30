const url =
  'https://zgrbppnwn2e562xl73uff6nk6u0wfani.lambda-url.us-east-2.on.aws/';

export async function getRates() {
  return fetch(url).then((response) => response.json());
}
