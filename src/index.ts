import axios from 'axios';

export async function isVIP(username: string): Promise<boolean> {
  return await axios
    .get(`http://www-dynamic.us.worlds.net/cgi-bin/vip.pl?Username=${username}`)
    .then((response) =>
      response.data.toString().includes("You're already a VIP!"));
}

export async function getInfo(username: string): Promise<string> {
  return await axios
    .get(`http://www-dynamic.us.worlds.net/cgi-bin/profile.pl?${username}`)
    .then((response) => response.data);
}
