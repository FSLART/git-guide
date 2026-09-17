import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  // Pages serves one physical 404.html for every missing URL; it has no locale counterparts.
  if (route.id === '404' || route.id.endsWith('/404')) {
    route.head = route.head.filter((entry) =>
      !(entry.tag === 'link' && ['canonical', 'alternate'].includes(String(entry.attrs?.rel))),
    );
    route.head.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } });
  }
});
