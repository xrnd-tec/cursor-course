# 7. Skills

Skill は「この種の作業をするときの手順」をまとめたパッケージです。Rules が常時の方針なら、Skills は **必要なときだけ読み込むプレイブック** です。

## 置き場所

| 種類 | パス | スコープ |
|------|------|----------|
| プロジェクト | `.cursor/skills/<名前>/SKILL.md` または `.agents/skills/<名前>/SKILL.md` | このリポジトリ |
| 個人 | `~/.cursor/skills/<名前>/SKILL.md` または `~/.agents/skills/<名前>/SKILL.md` | 自分の全プロジェクト |

`.claude/skills/` も互換で読み込まれるので、他ツール向けに書いた資産をそのまま置けます。サブフォルダで分類しても認識されます。

> Cursor 本体の内蔵スキルは `~/.cursor/skills-cursor/` にあります。**触らない・上書きしない。**

最小構成:

```text
.cursor/skills/mini-cart-check/
  SKILL.md
```

```markdown
---
name: mini-cart-check
description: practice/ のカート実装を確認し、責務と不足を短く報告するときに使う
---

# Mini cart check

1. practice/cart.js / calculator.js / index.js を読む
2. 追加・削除・小計・税込の有無を表にする
3. 壊れている点があれば再現手順つきで1つだけ指摘する
4. コード変更はユーザーが求めたときだけ
```

フロントマターの必須項目は **`name` と `description` の2つだけ**です。`name` は小文字・数字・ハイフンのみで、**親フォルダ名と一致させます**。

## description が重要

Agent は **description を見て**「この会話にこの Skill を使うか」を判断します。  
「何のとき使うか」を description に書いておくのがコツです。

## 3つの呼び出し方

| 呼び方 | 効く範囲 | 操作 |
|--------|----------|------|
| **自動** | 必要と判断されたとき | 何もしない。Agent が description を見て決める |
| **スラッシュ** | **そのメッセージ1回だけ** | 入力欄で `/` → Skill 名を選ぶ |
| **Custom Mode** | **セッション全体** | Skill を選んで `Alt+Enter`（Mac は `Option+Enter`）、または **Use as Mode** |

Custom Mode にすると入力欄にバッジが出て、会話の間ずっとその手順が効きます。「今日はこの規約でレビューし続けてほしい」というときはこれです（→ [01-modes.md](01-modes.md)）。

## Rules との使い分け

- 毎回守らせたい → **Rule**
- 「PR を作る」「週次レポート」「この API の直し方」など手順が長い → **Skill**
- イベントで止めたい／直したい → **Hook**（次章）

## 実習

Agent に:

```text
.cursor/skills/mini-cart-check/SKILL.md を上記の最小構成で作って。
余計なファイルは増やさないで。
```

新規チャットで:

```text
practice/ のカート実装をチェックして（Skill があれば従って）
```

次: [08-hooks.md](08-hooks.md)
