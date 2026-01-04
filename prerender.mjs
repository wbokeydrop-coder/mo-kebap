import { createServer } from 'vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import prerenderConfig from './prerender.config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function renderRoute(vite, route, template) {
  const { AppShell } = await vite.ssrLoadModule('/src/App.jsx')
  const { StaticRouter } = await vite.ssrLoadModule('react-router-dom/server')

  const appHtml = ReactDOMServer.renderToString(
    React.createElement(AppShell, {
      RouterWrapper: StaticRouter,
      routerProps: { location: route, basename: '' }
    })
  )

  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )

  const outDir = path.join(__dirname, 'dist', route === '/' ? '' : route)
  const outFile = route === '/' ? 'index.html' : path.join(route, 'index.html')
  const fullOutDir = path.dirname(path.join(__dirname, 'dist', outFile))

  fs.mkdirSync(fullOutDir, { recursive: true })
  fs.writeFileSync(path.join(__dirname, 'dist', outFile), html, 'utf-8')
}

async function run() {
  const vite = await createServer({
    logLevel: 'error',
    server: { middlewareMode: true },
    appType: 'custom'
  })

  try {
    const template = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf-8')
    const routes = prerenderConfig.routes || ['/']

    for (const route of routes) {
      await renderRoute(vite, route, template)
      console.log(`[prerender] rendered ${route}`)
    }
  } finally {
    await vite.close()
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
