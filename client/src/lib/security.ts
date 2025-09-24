import DOMPurify from 'dompurify';

/**
 * Security utilities for preventing HTML injection attacks
 */

export interface SanitizeOptions {
  allowedTags?: string[];
  allowedAttributes?: string[];
  allowedCssProperties?: string[];
}

/**
 * Sanitizes HTML content to prevent XSS attacks
 */
export function sanitizeHtml(
  dirty: string, 
  options: SanitizeOptions = {}
): string {
  const defaultConfig = {
    ALLOWED_TAGS: options.allowedTags || ['b', 'i', 'em', 'strong', 'p', 'br'],
    ALLOWED_ATTR: options.allowedAttributes || ['class'],
    FORBID_TAGS: ['script', 'object', 'embed', 'form', 'input'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus', 'onblur'],
  };

  return DOMPurify.sanitize(dirty, defaultConfig);
}

/**
 * Sanitizes CSS content to prevent CSS injection attacks
 */
export function sanitizeCss(cssText: string): string {
  // Remove dangerous CSS properties and values
  const dangerousPatterns = [
    /javascript:/gi,
    /expression\(/gi,
    /vbscript:/gi,
    /data:/gi,
    /@import/gi,
    /behavior:/gi,
    /-moz-binding/gi,
  ];

  let sanitized = cssText;
  dangerousPatterns.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '');
  });

  return sanitized;
}

/**
 * Validates and sanitizes color values for CSS
 */
export function sanitizeColorValue(color: string): string {
  // Allow standard color formats: hex, rgb, rgba, hsl, hsla, named colors
  const colorPattern = /^(#[0-9a-f]{3,8}|rgb\([^)]*\)|rgba\([^)]*\)|hsl\([^)]*\)|hsla\([^)]*\)|[a-z]+)$/i;
  
  if (colorPattern.test(color.trim())) {
    return color.trim();
  }
  
  // Return a safe default if color is invalid
  return '#000000';
}

/**
 * Validates URL to prevent XSS through malicious URLs
 */
export function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:', 'mailto:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
}

/**
 * Sanitizes text input to prevent injection attacks
 */
export function sanitizeTextInput(input: string): string {
  return input
    .replace(/[<>'"&]/g, (char) => {
      const entities: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return entities[char] || char;
    });
}