export default function getFullResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => new Error());
}
