# 7. Skills

Skill は「この種の作業をするときの手順」をまとめたパッケージです。Rules が常時の方針なら、Skills は **必要なときだけ読み込むプレイブック** です。

## 置き場所

| 種類 | パス | スコープ |
|------|------|----------|
| プロジェクト | `.cursor/skills/<名前>/SKILL.md` | このリポジトリ |
| 個人 | `~/.cursor/skills/<名前>/SKILL.md` | 自分の全プロジェクト |

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

## description が重要

Agent は **description を見て**「この会話にこの Skill を使うか」を判断します。  
「何のとき使うか」を description に書いておくのがコツです。

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
