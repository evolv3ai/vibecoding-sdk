# Changelog

## 0.1.0-alpha.1 (2025-08-24)

Full Changelog: [v0.0.1-alpha.1...v0.1.0-alpha.1](https://github.com/evolv3ai/vibecoding-sdk/compare/v0.0.1-alpha.1...v0.1.0-alpha.1)

### Features

* **mcp:** add code execution tool ([d145ca5](https://github.com/evolv3ai/vibecoding-sdk/commit/d145ca5b94918f3d3df9928d498827d73bbe1b2d))
* **mcp:** add logging when environment variable is set ([38067e2](https://github.com/evolv3ai/vibecoding-sdk/commit/38067e277e8ad8f372bbf490d912e93f676bad9e))
* **mcp:** add option to infer mcp client ([32ed789](https://github.com/evolv3ai/vibecoding-sdk/commit/32ed789edc0cb9ddd38ee1a99ce80cc4212fa861))
* **mcp:** add unix socket option for remote MCP ([19efbd2](https://github.com/evolv3ai/vibecoding-sdk/commit/19efbd2005817f6ab50d45623cfedca38f94ba59))
* **mcp:** parse query string as mcp client options in mcp server ([dc4d446](https://github.com/evolv3ai/vibecoding-sdk/commit/dc4d44620526a3695a18816b741ff002207e6261))
* **mcp:** remote server with passthru auth ([45fc8ff](https://github.com/evolv3ai/vibecoding-sdk/commit/45fc8ff9b45aa0615c2bf9a09ce0af55a5b4f3c5))
* **mcp:** support filtering tool results by a jq expression ([c776acb](https://github.com/evolv3ai/vibecoding-sdk/commit/c776acb9b415adfde5c94a56dc2a7c5d184548dd))


### Bug Fixes

* **client:** get fetchOptions type more reliably ([5968f6e](https://github.com/evolv3ai/vibecoding-sdk/commit/5968f6e01ea7313e31b8b84f743c2bf2f412cb08))
* **mcp:** avoid sending `jq_filter` to base API ([3d799f3](https://github.com/evolv3ai/vibecoding-sdk/commit/3d799f30e6d2761009f0cdbc414b25a1f55f358f))
* **mcp:** fix bug in header handling ([e3e3bc9](https://github.com/evolv3ai/vibecoding-sdk/commit/e3e3bc9eb6566fe15fa8baea3171bf6f18df2e2b))
* **mcp:** include required section for top-level properties and support naming transformations ([2ad1853](https://github.com/evolv3ai/vibecoding-sdk/commit/2ad1853c0cc67dff03a1b8c634c9654399b3f5f8))
* **mcp:** relax input type for asTextContextResult ([b9fd01b](https://github.com/evolv3ai/vibecoding-sdk/commit/b9fd01bec94eecbd3b84987e93c010344fc473ea))
* **mcp:** reverse validJson capability option and limit scope ([d6af980](https://github.com/evolv3ai/vibecoding-sdk/commit/d6af98018b6cd4c9617110d8bd5afc5ac446d574))
* **mcp:** support jq filtering on cloudflare workers ([905ae38](https://github.com/evolv3ai/vibecoding-sdk/commit/905ae38bf7474f1d5159e91fcc62414111b0775f))


### Chores

* add docs to RequestOptions type ([3785e62](https://github.com/evolv3ai/vibecoding-sdk/commit/3785e62e5256b32d57feb9e82f5eaee28c19ba50))
* add package to package.json ([fcc85b4](https://github.com/evolv3ai/vibecoding-sdk/commit/fcc85b41cade711df8abebe85d0083034f1788c0))
* **ci:** only run for pushes and fork pull requests ([2726440](https://github.com/evolv3ai/vibecoding-sdk/commit/27264405b2fcf592460b2e586c752368696039f5))
* **client:** improve path param validation ([706a0b3](https://github.com/evolv3ai/vibecoding-sdk/commit/706a0b3099f70c4639011b615b3f7f0d3acabe90))
* **client:** qualify global Blob ([d5f6a50](https://github.com/evolv3ai/vibecoding-sdk/commit/d5f6a50fff3f4283f7edf0ca3a6971372dcf08dc))
* **deps:** update dependency @types/node to v20.17.58 ([07c5e31](https://github.com/evolv3ai/vibecoding-sdk/commit/07c5e31808319c627d7c158c88b21ca21352e59e))
* **internal:** codegen related update ([a98370f](https://github.com/evolv3ai/vibecoding-sdk/commit/a98370f915bc324afa14cb9bc5cffd0fcb6cde21))
* **internal:** codegen related update ([a68386a](https://github.com/evolv3ai/vibecoding-sdk/commit/a68386a0f8a6ce56e074a5d6be3e6955ac13bfe9))
* **internal:** codegen related update ([550fa2a](https://github.com/evolv3ai/vibecoding-sdk/commit/550fa2aa13cb0692a5c598ca2ee0fa006ec31752))
* **internal:** codegen related update ([3fd4eb4](https://github.com/evolv3ai/vibecoding-sdk/commit/3fd4eb417e4d3a25eb37ac082076afeadef131fa))
* **internal:** formatting change ([04038b0](https://github.com/evolv3ai/vibecoding-sdk/commit/04038b0121c5557dad39ba5d7acca17593f21b61))
* **internal:** make mcp-server publishing public by defaut ([43e912f](https://github.com/evolv3ai/vibecoding-sdk/commit/43e912f6e43126bfde68d8b9c14afa0999f870b2))
* **internal:** move publish config ([dec55e0](https://github.com/evolv3ai/vibecoding-sdk/commit/dec55e0a56cba453ddc794faa5c68a59fe45f1e7))
* **internal:** refactor array check ([7eba61d](https://github.com/evolv3ai/vibecoding-sdk/commit/7eba61debeff9a55e10d95028c47aa69efc264bf))
* **internal:** remove redundant imports config ([d55ae56](https://github.com/evolv3ai/vibecoding-sdk/commit/d55ae569687ad2b650b9e0b61a55fdba5e850db5))
* **internal:** update comment in script ([b258ce5](https://github.com/evolv3ai/vibecoding-sdk/commit/b258ce56db375a77111f1779bcfe956879499344))
* make some internal functions async ([906a73f](https://github.com/evolv3ai/vibecoding-sdk/commit/906a73fc0ef02afe058978008b8d1ea6f2749f85))
* **mcp:** add cors to oauth metadata route ([f6ee905](https://github.com/evolv3ai/vibecoding-sdk/commit/f6ee9059f439529f2c62ff48887526c8c2b2a23f))
* **mcp:** document remote server in README.md ([c6c8916](https://github.com/evolv3ai/vibecoding-sdk/commit/c6c891655d5f536b9fe75377d5d94b219489c563))
* **mcp:** formatting ([4c3a0c7](https://github.com/evolv3ai/vibecoding-sdk/commit/4c3a0c70e4a8d482c91a782f2da0654207d82897))
* **mcp:** minor cleanup of types and package.json ([5c414fd](https://github.com/evolv3ai/vibecoding-sdk/commit/5c414fddb56aeb9ec4a2a4d30c06a90ed817de8f))
* **mcp:** refactor streamable http transport ([e869f02](https://github.com/evolv3ai/vibecoding-sdk/commit/e869f024411dd41f8553664b4dab96c5debdf2ba))
* **mcp:** rework imports in tools ([ce01482](https://github.com/evolv3ai/vibecoding-sdk/commit/ce01482ed25c9ae580e1a7e0c578f20c667dbe40))
* **mcp:** update package.json ([5a714d0](https://github.com/evolv3ai/vibecoding-sdk/commit/5a714d0be6c9b9a09ddec8b79c55eed541dc616a))
* **mcp:** update README ([9b6e424](https://github.com/evolv3ai/vibecoding-sdk/commit/9b6e424635765ecbbc56b2a1d75956308ad6487d))
* **mcp:** update types ([6d7e15b](https://github.com/evolv3ai/vibecoding-sdk/commit/6d7e15b889ccedb8f1eedfec9d7cc27c382afa8b))
* **ts:** reorder package.json imports ([d58c2f2](https://github.com/evolv3ai/vibecoding-sdk/commit/d58c2f2d278d508889c77abe41ddf4e87c8a5a6a))
* update @stainless-api/prism-cli to v5.15.0 ([0178f7e](https://github.com/evolv3ai/vibecoding-sdk/commit/0178f7e23c33feafe44f5fe649e5e505836aefa1))
* update CI script ([5a416cf](https://github.com/evolv3ai/vibecoding-sdk/commit/5a416cf09492ec7a138027b462c553ac05d881c2))

## 0.0.1-alpha.1 (2025-06-25)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/evolv3ai/vibecoding-sdk/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Chores

* configure new SDK language ([89edfbe](https://github.com/evolv3ai/vibecoding-sdk/commit/89edfbec11ac9d257a22513271a6a17d83c4b39c))
* update SDK settings ([674685f](https://github.com/evolv3ai/vibecoding-sdk/commit/674685fb591f4dd77e6b23069bbe60aa8f264127))
