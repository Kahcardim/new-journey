import assert from "node:assert/strict";
import test from "node:test";

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
}

async function render(worker, path = "/") {
  const normalizedPath = path === "/" || path.endsWith("/") ? path : `${path}/`;
  return worker.fetch(new Request(`http://localhost${normalizedPath}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders branded metadata and conversion entry points", async () => {
  const worker = await loadWorker();
  const response = await render(worker);

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>New Journey \| Orientação que transforma<\/title>/i);
  assert.match(html, /Agendar conversa/i);
  assert.match(html, /Clínica parceira/i);
  assert.match(html, /wa\.me\/5511999999999/i);
  assert.doesNotMatch(html, /Starter Project/i);
});

test("renders every public route", async () => {
  const worker = await loadWorker();
  const routes = [
    "/agendamento",
    "/tratamentos",
    "/familias",
    "/clinicas",
    "/sobre",
    "/qa",
    "/privacidade",
    "/quando-procurar-ajuda",
    "/dependencia-quimica",
    "/alcool",
    "/drogas",
    "/perguntas-frequentes",
  ];
  for (const route of routes) {
    const response = await render(worker, route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, route);
  }
});
