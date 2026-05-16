declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.module.css';
declare module '*.module.scss';
declare module '*.module.sass';

// If you use other static assets import types (images, svgs), add them here:
declare module '*.svg' {
  const content: any;
  export default content;
}
