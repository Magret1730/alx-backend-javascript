import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const sign = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([sign, upload])
    .then((results) => results.map((result) => ({
      status: 'fulfilled',
      value: result,
    })))
    .catch((error) => [{
      status: 'rejected',
      value: error,
    }]);
}
