
type Props = {
  token: string
}

export default async function Validate({token}: Props) {
  const res: Response = await fetch('https://rest-api.lamdem.co.il/v1/ping-auth', {
    method: 'HEAD',
    headers: {
      "Authorization": `Bearer ${token}`
    },
  });
  if (!res.ok) throw new Error('No Authorization');
}