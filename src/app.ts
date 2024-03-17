import express, { Request, Response } from 'express';
import axios from 'axios';
import querystring from 'querystring';

const app = express();

const CLIENT_ID = 'nd7vTE9m';
const CLIENT_SECRET = '6yok6QzfG6TEGQxt9wMFZcGTX1qMCDcCSoVkGpc0PhUmGwfaV5d3aQfG6H4iadBj';
const REDIRECT_URI = 'http://localhost:3000/callback'; // Debes configurar esto en tu aplicación de Wrike

app.get('/login', (req: Request, res: Response) => {
  const queryParams = querystring.stringify({
    response_type: 'code',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
  });
  res.redirect(`https://login.wrike.com/oauth2/authorize/v4?${queryParams}`);
});

app.get('/callback', async (req: Request, res: Response) => {
  const { code } = req.query;
  if (!code || typeof code !== 'string') {
    return res.status(400).send('Código de autorización no proporcionado');
  }

  try {
    const tokenResponse = await axios.post<{
      access_token: string;
      token_type: string;
      expires_in: number;
      refresh_token: string;
    }>('https://login.wrike.com/oauth2/token', {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URI,
    });

    const accessToken = tokenResponse.data.access_token;
    console.log(accessToken)
    // Aquí puedes guardar el accessToken en la sesión o en la base de datos para usarlo posteriormente

    res.json('Autorización exitosa! Token de acceso: ' + accessToken);
  } catch (error:any) {
    console.error('Error al obtener token de acceso:', error.response?.data || error.message);
    res.status(500).send('Error al obtener token de acceso');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
