import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base='https://gangesh.net';
  const routes=['','/about','/framework','/approach','/expertise','/consulting','/insights','/contact'];
  return routes.map((route)=>({url:`${base}${route}`,lastModified:new Date(),changeFrequency:route===''?'monthly':'monthly',priority:route===''?1:0.7}));
}
