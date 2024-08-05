// import { setupServices } from 'services.setup.server';
import { testConnectionConfiguration } from '@/app/services/openIAService';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { key = '', model } = req.headers;

    if (!key) res.status(403).json({ message: 'Key is required' });
    const response = await testConnectionConfiguration(atob(key as string), model as string)
    
    if ('statusCode' in response && response.statusCode === 401) {
        console.log(response);
        res.status(401).json({ message: 'Unauthorized' });
    }

    return res.status(200).json(response);
} 
