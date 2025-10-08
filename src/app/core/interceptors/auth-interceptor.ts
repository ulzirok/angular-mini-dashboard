import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token')
  
  if (token) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log('🔒 Интерсептор добавил токен:', clonedReq.headers.get('Authorization'));
    return next(clonedReq)
  }
  return next(req);
};
