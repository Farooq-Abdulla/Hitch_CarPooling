// global.d.ts
export { };

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    grecaptcha: any;
  }
}
