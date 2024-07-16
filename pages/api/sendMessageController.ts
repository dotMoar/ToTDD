// import { setupServices } from 'services.setup.server';
import { getResponseMessage } from '@/app/services/openIAService';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { message } = req.body;

    
	return res.status(200).json(await getResponseMessage(message));
} 
