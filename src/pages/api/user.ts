import { UserPost } from './../../utils/interfaces/postInterface';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const urlPost = 'https://629f52338b939d3dc29519e3.mockapi.io/api/challenge/user'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //Criar metodo post e get
  if (req.method === 'POST') {
    const { firstName,
      lastName,
      email,
      dateOfBirthday,
      password,
      country,
      bio,
      receiveNotifications }: UserPost = req.body

    const response = await fetch(urlPost, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        dateOfBirthday,
        password,
        country,
        bio,
        receiveNotifications
      }),
    })

    if (response.ok) {
      return res.status(201).json(response.formData)
    } else {
      return res.status(response.status)
    }

  }

}


