# 6. Project Rules（`.cursor/rules`）

毎回のプロンプトに書かなくてよい **チーム／リポジトリの約束** を Rules に置きます。Agent がその前提で動きます。

## Rules / Skills / Hooks の違い（先にこれだけ）

| 仕組み | 役割 | 典型例 |
|--------|------|--------|
| **Rules** | いつも効く方針・制約 | 「コミットは日本語」「CSS は modules」 |
| **Skills** | 特定タスクの手順書 | PR 作成手順、週次レポートの型 |
| **Hooks** | イベント時にプログラムで介入 | 危険な shell を止める、編集後フォーマット |

## 置き場所

```text
.cursor/rules/
  coding-style.mdc
  practice-js.mdc
```

各ファイルは `.mdc`（Markdown + YAML フロントマター）です。

```markdown
---
description: practice/ の JS は ESM・小さな関数優先
globs: practice/**/*.js
alwaysApply: false
---

# practice JS

- `export` を使う（CommonJS にしない）
- 1 関数は短く。副作用は index 側に寄せる
```

### フロントマターの意味

| フィールド | 用途 |
|------------|------|
| `description` | ルール一覧に出る短い説明 |
| `globs` | このパターンのファイル作業時に効かせる |
| `alwaysApply` | `true` なら毎回必ず載せる |

**User Rules**（Cursor Settings）は個人全プロジェクト向け。**Project Rules** はリポジトリ共有向け、と覚えるとよいです。

## 書き方のコツ

- 短く具体的に（長い百科事典より、守れる 5〜15 行）
- 「やる / やらない」を書く
- ファイル種別に分ける（`alwaysApply: true` の乱用はコンテキストを食う）

## 実習

Agent モードで:

```text
このリポジトリ用に .cursor/rules/practice-js.mdc を作って。
practice/**/*.js にだけ効くようにして。
内容は「ESM」「関数は小さく」「テストは依頼されない限り作らない」の3点だけ。
```

できたら新規チャット（Ask）で:

```text
@practice/calculator.js
新しい関数を1つ足すなら、このプロジェクトのルール上どう書くべき？
```

次: [07-skills.md](07-skills.md)
