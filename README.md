# Cursor 基礎学習ワークスペース

少し使ったことがある方向けの、**対話パネル・モード・ショートカット・@参照**を一気に固める教材です。  
あわせて **90分 × 4回の実践コース** もここに置いています。

## ディレクトリの役割

| パス | 役割 |
|------|------|
| [`courses/`](courses/) | **コース資料**（自習レッスン・実践4回） |
| [`docs/`](docs/) | **プロジェクト資料**（制作タスクなど） |
| [`practice/`](practice/) | 手を動かすサンプルコード |

## 進め方

### 自習する場合

1. このチャットで一緒に進める（おすすめ）
2. [`courses/fundamentals/`](courses/fundamentals/) を上から読む
3. 各レッスン末尾の **実習** を `practice/` でやってみる
4. わからない操作が出たら、そのままここに質問する

基礎（0〜5）が終わったら発展編（6〜13）へ。

### 実践コース（90分 × 4回）を運営する場合

進行の正本は [`courses/4sessions/overview.md`](courses/4sessions/overview.md)。

## レッスン一覧（自習）

### 基礎

| # | ファイル | 内容 | 目安 |
|---|----------|------|------|
| 0 | [courses/fundamentals/00-map.md](courses/fundamentals/00-map.md) | Cursor の全体像 | 5分 |
| 1 | [courses/fundamentals/01-modes.md](courses/fundamentals/01-modes.md) | Agent / Ask / Plan / Debug / Multitask | 15分 |
| 2 | [courses/fundamentals/02-shortcuts.md](courses/fundamentals/02-shortcuts.md) | 覚えるショートカット | 10分 |
| 3 | [courses/fundamentals/03-context.md](courses/fundamentals/03-context.md) | `@` で文脈を渡す | 15分 |
| 4 | [courses/fundamentals/04-tab-and-inline.md](courses/fundamentals/04-tab-and-inline.md) | Tab 補完とインライン編集 | 15分 |
| 5 | [courses/fundamentals/05-prompting.md](courses/fundamentals/05-prompting.md) | うまく頼む言い方 | 10分 |

### 発展

| # | ファイル | 内容 | 目安 |
|---|----------|------|------|
| 6 | [courses/fundamentals/06-rules.md](courses/fundamentals/06-rules.md) | Project Rules | 15分 |
| 7 | [courses/fundamentals/07-skills.md](courses/fundamentals/07-skills.md) | Skills | 15分 |
| 8 | [courses/fundamentals/08-hooks.md](courses/fundamentals/08-hooks.md) | Hooks | 15分 |
| 9 | [courses/fundamentals/09-mcp.md](courses/fundamentals/09-mcp.md) | MCP | 10分 |
| 10 | [courses/fundamentals/10-cloud-agents.md](courses/fundamentals/10-cloud-agents.md) | Cloud Agents | 10分 |
| 11 | [courses/fundamentals/11-bugbot-pr.md](courses/fundamentals/11-bugbot-pr.md) | Bugbot / PR レビュー | 10分 |
| 12 | [courses/fundamentals/12-agents-window.md](courses/fundamentals/12-agents-window.md) | Agents Window / Worktrees | 10分 |
| 13 | [courses/fundamentals/13-safety-ignore.md](courses/fundamentals/13-safety-ignore.md) | 秘密情報・ignore | 10分 |

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
- Cursor の UI / 機能が変わったら **該当する `courses/fundamentals/` の章だけ**直し、公式リンクを合わせて確認する
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
