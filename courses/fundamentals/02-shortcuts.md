# 2. 覚えるショートカット

まずはこれだけで日常の 8 割がいけます。設定で変わっている場合があるので、合わないときは **Cursor → Keyboard Shortcuts** で確認してください。

> **表記は Windows が基本です。** Mac の人は `Ctrl` を `Cmd` に、`Alt` を `Option` に読み替えてください（`Tab` と `Shift+Tab` は両方同じ）。

## 必須 9 個

| 操作 | Windows | Mac | 覚える一言 |
|------|---------|-----|------------|
| Agent パネル開閉 | `Ctrl+I` | `Cmd+I` | AI 呼ぶ（`Ctrl+L` も同系統） |
| モード順送り | `Shift+Tab` | `Shift+Tab` | Agent→Plan→… |
| モードメニュー | `Ctrl+.` | `Cmd+.` | 一覧から選ぶ |
| モデル切替 | `Ctrl+/` | `Cmd+/` | Auto ↔ 個別モデル |
| インライン編集 | `Ctrl+K` | `Cmd+K` | 今ここだけ直す |
| Tab 提案を受諾 | `Tab` | `Tab` | 灰文字を採用 |
| 単語だけ受諾 | `Ctrl+→` | `Cmd+→` | 少しだけ採用 |
| 選択を**新規**チャットへ | `Ctrl+Shift+L` | `Cmd+Shift+L` | 選択を持って新しい会話を始める |
| Skill をモードに固定 | `Alt+Enter` | `Option+Enter` | Custom Mode（セッション中ずっと効く） |

## あると便利

| 操作 | Windows | Mac |
|------|---------|-----|
| 変更を全部採用 | `Ctrl+Enter` | `Cmd+Enter` |
| 変更を全部却下 | `Ctrl+Backspace` | `Cmd+Backspace` |
| 生成を中止 | `Ctrl+Shift+Backspace` | `Cmd+Shift+Backspace` |
| コマンドパレット | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| キューを飛ばして送信 | `Ctrl+Enter` | `Cmd+Enter`（`Enter` は次のターンに積む） |
| Design Mode 切替 | `Ctrl+Shift+D` | `Cmd+Shift+D`（ブラウザ表示中） |
| 新しいチャット | （パネルの New Chat / 設定による） | 同左 |
| 提案を拒否 | `Esc` またはそのまま打ち続ける | 同左 |
| Agent サイドバーの左右入れ替え | `Ctrl+E` | `Cmd+E` |

## 差分の扱い（概念）

- Agent の変更は作業中に適用されていくので、**diff を見て不要なら Undo**
- 採用するなら **Keep**。パネル下部の変更バーにも `Undo` / `Keep` / `Review` が出る
- `Ctrl+K` のインライン編集だけは **Accept / Reject** 表記（意味は同じ）
- まとめて決めるなら `Ctrl+Enter`（全部採用）/ `Ctrl+Backspace`（全部却下）
- 大きく戻したいときは対象メッセージの **Restore Checkpoint**
- 「全部受け入れたつもり」でも、必ず git / 目視で最終確認する癖をつける

## 実習

1. `practice/greeter.js` を開く
2. 関数の中を選択 → `Ctrl+K` → `丁寧な日本語の挨拶に変えて`
3. 別の行でタイピングし、灰色の Tab 提案が出たら `Tab` と `Ctrl+→` を両方試す
4. `Ctrl+I` → Ask → 選択中のコードについて質問

参考: [Keyboard Shortcuts](https://cursor.com/docs/reference/keyboard-shortcuts)

次: [03-context.md](03-context.md)
