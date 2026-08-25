# 14. Subagents（サブエージェント）

Subagent は、メインの Agent が **仕事を切り出して渡す専用のエージェント** です。自分専用のコンテキストを持つので、メインの会話を汚さずに調査・検証・修正を任せられます。

`/multitask`（[01-modes.md](01-modes.md)）が「並列にする」という**やり方**の名前なら、Subagent は「誰に振るか」という**相手**の定義です。

## 何が嬉しいか

- 長い調査の結果だけがメインの会話に返ってくる（途中の大量の読み込みが載らない）
- 役割ごとにモデル・ツール権限を変えられる（例: レビュー役は読み取り専用）
- 複数の Subagent を同時に走らせられる

## 置き場所

| 種類 | パス |
|------|------|
| プロジェクト | `.cursor/agents/` |
| 個人 | `~/.cursor/agents/` |

`.claude/agents/` や `.codex/agents/` も互換で読み込まれます。他ツールの資産をそのまま使えます。

## 定義ファイル

Markdown + YAML フロントマターです。

```markdown
---
name: cart-verifier
description: practice/ のカート実装を読み、仕様どおりか検証するときに使う。コードは書き換えない。
model: inherit
readonly: true
is_background: false
---

practice/cart.js と calculator.js を読み、次を報告する。

1. 小計・割引・税込の計算が仕様どおりか
2. 壊れている点があれば再現手順つきで
3. コードの変更は絶対にしない
```

| フィールド | 意味 |
|------------|------|
| `name` | 呼び出し名。フォルダ／ファイル名と揃える |
| `description` | **いつ使うか**。Agent はここを見て自動で振るか判断する |
| `model` | `inherit`（親と同じ）か、特定のモデル ID |
| `readonly` | `true` で読み取り専用。レビュー役・調査役に有効 |
| `is_background` | `true` でバックグラウンド実行 |

## 呼び出し方

1. **自動** — Agent が `description` を見て、必要と判断したら勝手に振る
2. **明示** — `/cart-verifier 仕様どおりか見て` のようにスラッシュで指名する
3. **自然文** — 「cart-verifier に確認させて」でも通る
4. **並列** — 複数を同時に指名すると同時に走る

Cloud 側では、Subagent を**隔離された仮想マシン**（プロジェクトのクリーンなコピー）で走らせることもできます。並列でテストを回しても互いに壊し合いません。

## Rules / Skills / Subagents の使い分け

| 仕組み | 何を決めるか |
|--------|--------------|
| **Rules** | いつも効く方針（[06-rules.md](06-rules.md)） |
| **Skills** | 手順書。誰がやるかは決めない（[07-skills.md](07-skills.md)） |
| **Subagents** | **誰にやらせるか**。専用の文脈・権限・モデルを持つ |

## 注意

- `description` が曖昧だと自動で呼ばれない。「いつ使うか」を必ず書く
- 書き換えさせたくない役割には `readonly: true` を付ける
- 増やしすぎると Agent がどれを呼ぶか迷う。まず1つから

## 実習

Agent モードで:

```text
.cursor/agents/cart-verifier.md を作って。
practice/ のカート実装を読んで仕様どおりか報告するだけの読み取り専用サブエージェントにして。
コードは書き換えない設定にすること。
```

新規チャットで:

```text
/cart-verifier practice/ のカートを検証して
```

参考: [Subagents](https://cursor.com/docs/subagents)

次: [15-plugins.md](15-plugins.md)
