# Cursor 基礎学習ワークスペース

少し使ったことがある方向けの、**対話パネル・モード・ショートカット・@参照**を一気に固める教材です。

## 進め方

1. このチャットで一緒に進める（おすすめ）
2. `docs/` を上から読む
3. 各レッスン末尾の **実習** をこのフォルダでやってみる
4. わからない操作が出たら、そのままここに質問する

基礎（0〜5）が終わったら発展編（6〜13）へ。詰まったらこのチャットで質問してください。

## レッスン一覧

### 基礎

| # | ファイル | 内容 | 目安 |
|---|----------|------|------|
| 0 | [docs/00-map.md](docs/00-map.md) | Cursor の全体像 | 5分 |
| 1 | [docs/01-modes.md](docs/01-modes.md) | Agent / Ask / Plan / Debug / Multitask | 15分 |
| 2 | [docs/02-shortcuts.md](docs/02-shortcuts.md) | 覚えるショートカット | 10分 |
| 3 | [docs/03-context.md](docs/03-context.md) | `@` で文脈を渡す | 15分 |
| 4 | [docs/04-tab-and-inline.md](docs/04-tab-and-inline.md) | Tab 補完とインライン編集 | 15分 |
| 5 | [docs/05-prompting.md](docs/05-prompting.md) | うまく頼む言い方 | 10分 |

### 発展

| # | ファイル | 内容 | 目安 |
|---|----------|------|------|
| 6 | [docs/06-rules.md](docs/06-rules.md) | Project Rules | 15分 |
| 7 | [docs/07-skills.md](docs/07-skills.md) | Skills | 15分 |
| 8 | [docs/08-hooks.md](docs/08-hooks.md) | Hooks | 15分 |
| 9 | [docs/09-mcp.md](docs/09-mcp.md) | MCP | 10分 |
| 10 | [docs/10-cloud-agents.md](docs/10-cloud-agents.md) | Cloud Agents | 10分 |
| 11 | [docs/11-bugbot-pr.md](docs/11-bugbot-pr.md) | Bugbot / PR レビュー | 10分 |
| 12 | [docs/12-agents-window.md](docs/12-agents-window.md) | Agents Window / Worktrees | 10分 |
| 13 | [docs/13-safety-ignore.md](docs/13-safety-ignore.md) | 秘密情報・ignore | 10分 |

### 手を動かす場所

| # | ファイル | 内容 | 目安 |
|---|----------|------|------|
| — | [practice/](practice/) | サンプルコード | — |

## 今すぐ試す（3分）

1. `Cmd + I` で Agent パネルを開く
2. 入力欄で `Shift + Tab` を押し、**Ask** モードにする
3. 次を送る:

```text
@practice/calculator.js このファイルの役割を3行で説明して
```

4. 説明が出たら `Shift + Tab` で **Agent** に戻し:

```text
practice/calculator.js に「割引率を適用する関数」を追加して。テストは書かなくてよい
```

5. 出てきた差分を確認し、不要なら Reject / Checkpoint で戻す

## メンテ方針（教材を定期更新するとき）

- **正本は GitHub**（このリポジトリ）。下書き用の Notion 等は補助にとどめる
- **`main` は実習できる初期状態**を保つ（例: `applyDiscount` は未実装のまま）
- Cursor の UI / 機能が変わったら **該当する `docs/` 章だけ**直し、公式リンクを合わせて確認する
- 追従作業は Issue で残す（例ラベル想定: `cursor-update` / `docs` / `practice-break`）
- リリース前の受け入れ: README の「今すぐ試す」がそのまま通ること
- 長い完成形の答えは `practice/` に混ぜず、必要なら別ディレクトリやブランチへ

## 公式ドキュメント

- [Agent](https://cursor.com/help/ai-features/agent)
- [Prompting / @ mentions](https://cursor.com/docs/agent/prompting)
- [Tab](https://cursor.com/docs/tab/overview)
- [Rules](https://cursor.com/docs/context/rules)
- [Skills](https://cursor.com/docs/skills)
- [Hooks](https://cursor.com/docs/agent/hooks)
- [MCP](https://cursor.com/docs/context/mcp)
- [Multitask（Changelog 3.2）](https://cursor.com/changelog/04-24-26)
