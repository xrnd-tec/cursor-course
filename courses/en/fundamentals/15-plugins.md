# 15. Plugins とマーケットプレイス

ここまでに出てきた **Rules / Skills / Subagents / Hooks / MCP** は、それぞれ別のファイルに置く別々の仕組みでした。Plugin は、それらを **1つの配布単位にまとめたもの** です。

「この職場のやり方一式」を1回のインストールで配れる、と考えると近いです。

## Plugin に入るもの

| 中身 | 対応する章 |
|------|------------|
| Rules | [06-rules.md](06-rules.md) |
| Skills | [07-skills.md](07-skills.md) |
| Agents（Subagents） | [14-subagents.md](14-subagents.md) |
| Hooks | [08-hooks.md](08-hooks.md) |
| MCP サーバ | [09-mcp.md](09-mcp.md) |
| Commands | スラッシュで呼ぶ定型コマンド |

## 2つの規格

| 規格 | マニフェスト | 中身 |
|------|--------------|------|
| **Agent Plugins** | ルートの `plugin.json` | Skills と MCP が中心。ベンダー中立で、他ツールでも動く |
| **Cursor Plugins** | `.cursor-plugin/plugin.json` | 上記に加えて Rules・Hooks・Commands など Cursor 固有のものも入る |

Cursor は両方を読み込みます。移植性を優先するなら前者、Cursor に閉じた運用なら後者です。

## 入手経路

- **Marketplace** — Cursor 公式。審査済みのものが並ぶ
- **Team Marketplace** — Teams / Enterprise で自社用の配布棚を持てる。グループごとに公開範囲を制限し、**既定オフ / 既定オン / 必須** を選べる
- **ローカル開発** — `~/.cursor/plugins/local` に置くと読み込まれる。自作の動作確認はここ
- **Deeplink** — MCP 設定を URL で共有してインストールさせる

インストール後の管理は **Customize パネル**から行います。ユーザー / チーム / ワークスペースのどの階層に入れるかもここで選べます。

## いつ Plugin にするか

- 1人で使う → ファイルを直接置けばよい（Rules や Skill 単体）
- **チーム全員に同じ前提を配りたい** → Plugin
- 新しいメンバーの環境構築を1手で済ませたい → Plugin

逆に、まだ形が固まっていない手順を Plugin にすると更新が面倒になります。**まず単体で回して、定着してから束ねる**のが順番です。

## 実習（調査）

Ask モードで:

```text
このリポジトリの .cursor/ にあるもの（rules / skills / agents / hooks）を一覧にして。
もし1つの Plugin にまとめるなら、どれを入れてどれを外すべきか理由つきで提案して。
まだファイルは作らないで。
```

参考: [Plugins](https://cursor.com/docs/plugins)

次: [16-browser-design.md](16-browser-design.md)
