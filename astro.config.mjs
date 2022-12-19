import { defineConfig } from 'astro/config';
import windicss from 'astro-windicss';

export default defineConfig({
  //...
  integrations: [windicss()],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '769px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    }
  }
})
