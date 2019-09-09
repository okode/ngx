import { Injectable, ErrorHandler, isDevMode } from '@angular/core';
import * as Sentry from '@sentry/browser';
import { HttpErrorResponse } from '@angular/common/http';
import { Platform } from '@ionic/angular';

@Injectable()
export class SentryErrorHandler extends ErrorHandler {

  constructor(
    private platform: Platform,
  ) {
    super();
  }

  static init(dsn: string, release: string, environment: string, ignoreErrors = []) {
    Sentry.init({
      dsn,
      release,
      environment,
      ignoreErrors,
      transport: Sentry.Transports.FetchTransport,
      beforeSend: (event) => {
        if (event && event.tags && event.tags.url) {
          event.tags.url = new URL(event.tags.url).pathname;
        }
        const stack = event.stacktrace || event.exception && event.exception.values[0].stacktrace;
        if (stack) {
          stack.frames.forEach((frame) => {
            frame.filename = frame.filename.substring(frame.filename.lastIndexOf('/'));
          });
        }
        return event;
      }
    });
  }

  static sendServerError(error: HttpErrorResponse) {
    Sentry.captureEvent({
      message: `ServerError [${error.status}] ${new URL(error.url).pathname}`,
      level: Sentry.Severity.Warning,
      transaction: `[${error.status}] ${error.url}`,
      extra: { response: error }
    });
  }

  static sendServerErrorHandled(error: HttpErrorResponse, errorCode: string) {
    Sentry.captureEvent({
      message: `ServerErrorHandled [${errorCode}]`,
      level: Sentry.Severity.Debug,
      transaction: `[${error.status}] ${error.url}`,
      extra: { response: error }
    });
  }

  static sendCustomError(title: string, level: Sentry.Severity, transaction: string, error: any) {
    Sentry.captureEvent({
      message: title,
      level: level,
      transaction: transaction,
      extra: { response: error }
    });
  }

  handleError(error) {
    if (error instanceof HttpErrorResponse) {
      SentryErrorHandler.sendServerError(error);
    } else {
      if (this.platform.is('hybrid')) {
        Sentry.captureException(error.originalError || error);
      } else {
        super.handleError(error);
      }
      if (isDevMode()) { console.log('ErrorHandler:', error.originalError || error); }
    }
  }

}
