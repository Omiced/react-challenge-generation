import { addresses } from "../data/address";

export const geolocationAddresses = [];

const getGeolocation = async (address) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address.Address.replaceAll(
      " ",
      "+"
    )}&key=AIzaSyDMfVZT89Ler-GKBgvzZPhE82eWJHYbLRM`
  );
  const { results } = await response.json();
  geolocationAddresses.push({
    Name: address.Name,
    geolocation: results[0].geometry.location,
    code: address.Name.slice(16, address.Name.length),
  });
};
Promise.allSettled(addresses.map((address) => getGeolocation(address)));
