import { HttpErrorResponse, HttpInterceptor, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const ErrorResponseInterceptor: HttpInterceptorFn = (req, next) =>
    next(req).pipe(catchError(handlerErrorResponse))

function handlerErrorResponse(error: HttpErrorResponse){
    const errorResponse  = {
        "Error status": error.status, 
        message: error.error.error_message
    };
    alert(errorResponse.message);
    return throwError(() => errorResponse);
}
