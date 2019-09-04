import { Injectable, ErrorHandler, isDevMode } from '@angular/core';
import * as Sentry from '@sentry/browser';

@Injectable()
export class SentryErrorHandler extends ErrorHandler {

  static init(dsn: string, release: string, environment: string) {
    Sentry.init({
      dsn,
      release,
      environment,
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

  handleError(error: any) {
    if (isDevMode()) {
      super.handleError(error);
    } else {
      Sentry.captureException(error.originalError || error);
    }
  }

}
