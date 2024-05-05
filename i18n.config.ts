{
  "name": "tournament-app",
  "version": "0.1.0",
  "description": "Basketball Tournament App",
  "contributors": [
    {
      "name": "botprzemek",
      "email": "przemek@notbyte.com",
      "url": "https://github.com/botprzemek"
    }
  ],
  "license": "Apache-2.0",
  "keywords": [
    "basketball",
    "authentication",
    "typescript",
    "nodejs",
    "socketio",
    "jwt",
    "nuxt",
    "vue"
  ],
  "homepage": "https://github.com/not-byte/tournament-app#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/not-byte/tournament-app.git"
  },
  "bugs": {
    "url": "https://github.com/not-byte/tournament-app/issues",
    "email": "support@notbyte.com"
  },
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev --host",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  },
  "engines": {
    "node": ">=v20.7.0"
  },
  "dependencies": {
    "@nuxt/image": "^1.5.0",
    "nodemailer": "^6.9.13",
    "nuxt": "^3.10.3",
    "vue": "^3.4.19",
    "vue-router": "^4.3.0"
  },
  "devDependencies": {
    "@nuxt/test-utils": "^3.12.0",
    "@nuxtjs/device": "^3.1.1",
    "@nuxtjs/i18n": "^8.2.0",
    "@nuxtjs/tailwindcss": "^6.11.4",
    "@types/nodemailer": "^6.4.15",
    "@vite-pwa/nuxt": "^0.6.0",
    "@vue/test-utils": "^2.4.5",
    "happy-dom": "^13.10.1",
    "nuxt-simple-sitemap": "^4.4.1",
    "playwright-core": "^1.43.0",
    "prettier": "^3.2.5",
    "vitest": "^1.4.0"
  }
}
