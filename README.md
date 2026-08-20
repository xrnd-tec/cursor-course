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

基礎（0〜5）は上から順に。発展（6〜13）は**逆引きのリファレンス**なので、必要になった章だけ引けば十分です。

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

### 発展（逆引き）

順番に読む必要はありません。**必要になったときに引いてください。**

| こうしたくなったら | 読む章 |
|--------------------|--------|
| 毎回同じ指示を書くのが面倒 | [6. Project Rules](courses/fundamentals/06-rules.md) |
| 決まった手順を AI に覚えさせたい | [7. Skills](courses/fundamentals/07-skills.md) |
| 危ないコマンドを自動で止めたい | [8. Hooks](courses/fundamentals/08-hooks.md) |
| Issue や DB など外部ツールと繋ぎたい | [9. MCP](courses/fundamentals/09-mcp.md) |
| 離席中に重い作業を進めたい | [10. Cloud Agents](courses/fundamentals/10-cloud-agents.md) |
| PR のレビューを自動化したい | [11. Bugbot / PR レビュー](courses/fundamentals/11-bugbot-pr.md) |
| 複数のエージェントを同時に走らせたい | [12. Agents Window / Worktrees](courses/fundamentals/12-agents-window.md) |
| 秘密情報を読ませたくない | [13. 秘密情報・ignore](courses/fundamentals/13-safety-ignore.md) |

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

5. 出てきた差分を確認し、採用するなら **Keep**、不要なら **Undo** で戻す

## メンテ方針（教材を定期更新するとき）

- **正本は GitHub**（このリポジトリ）。下書き用の Notion 等は補助にとどめる
- **`main` は実習できる初期状態**を保つ（例: `applyDiscount` は未実装のまま）
- Cursor の UI / 機能が変わったら **該当する `courses/fundamentals/` の章だけ**直し、公式リンクを合わせて確認する
- **個別のモデル名・世代は教材に書かない**（Grok / GPT / Claude の版は数ヶ月で入れ替わり、書いた時点で陳腐化する）。書くのは「Auto = Cursor Router が自動選択している」という**仕組み**まで
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
