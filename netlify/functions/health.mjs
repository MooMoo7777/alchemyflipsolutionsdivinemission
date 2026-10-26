export default async () => Response.json({ok:true,service:'Alchemy Restoration Ecosystem',timestamp:new Date().toISOString()})
export const config = { path: '/api/health' }
