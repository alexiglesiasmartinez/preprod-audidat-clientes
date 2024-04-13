import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request) {
   try {
      const body = await request.json();
      const { email, password } = body;

      if (email === 'audidat' && password === 'audidat') {
         const token = jwt.sign({
            userId: 1,
            email: email,
            name: 'Alex',
            lastName: 'Iglesias'
         },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
         );

         let response = NextResponse.json({ success: true });

         response.cookies.set('auth-token', token, {
            httpOnly: true,
            sameSite: 'strict',
            path: '/',
            maxAge: 3600,
         });

         return response;
      } else {
         return new Response(JSON.stringify({ error: 'Credenciales inválidas' }), {
            status: 401,
            headers: {
               'Content-Type': 'application/json',
            },
         });
      }
   } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
         status: 500,
         headers: {
            'Content-Type': 'application/json',
         },
      });
   }
}
