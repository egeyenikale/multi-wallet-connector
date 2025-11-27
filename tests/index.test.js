import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Multi-Wallet Connector exposes project metadata", () => {
  assert.equal(project.slug, "multi-wallet-connector");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
