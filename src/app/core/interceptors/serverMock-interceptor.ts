import { HttpInterceptorFn } from '@angular/common/http';

export const serverMockInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method === 'POST' && req.url.includes('/posts')) {
    // const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userData = localStorage.getItem('user');
    const user = userData && userData !== 'undefined' ? JSON.parse(userData) : null;

    const newBody = {
      ...(req.body || {}),
      author: user.name,
      date: new Date().toISOString(),
    };
    req = req.clone({ body: newBody });
  }

  return next(req);
};
