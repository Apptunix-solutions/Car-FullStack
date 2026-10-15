import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

/**
 * Custom Missing Translation Handler
 * 
 * Handles missing translation keys by logging warnings and returning a fallback
 */
export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    console.warn(`Missing translation for key: ${params.key}`);
    const fallback = params.key.split('.').pop()?.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[-_]/g, ' ') ?? params.key;
    return fallback.charAt(0).toUpperCase() + fallback.slice(1);
  }
}
