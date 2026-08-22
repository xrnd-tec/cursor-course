# 2. 覚えるショートカット（macOS）

まずはこれだけで日常の 8 割がいけます。設定で変わっている場合があるので、合わないときは **Cursor → Keyboard Shortcuts** で確認してください。

## 必須 9 個

| 操作 | ショートカット | 覚える一言 |
|------|----------------|------------|
| Agent パネル開閉 | `Cmd + I`（`Cmd + L` も同系統） | AI 呼ぶ |
| モード順送り | `Shift + Tab` | Agent→Plan→… |
| モードメニュー | `Cmd + .` | 一覧から選ぶ |
| モデル切替 | `Cmd + /` | Auto ↔ 個別モデル |
| インライン編集 | `Cmd + K` | 今ここだけ直す |
| Tab 提案を受諾 | `Tab` | 灰文字を採用 |
| 単語だけ受諾 | `Cmd + →` | 少しだけ採用 |
| 選択を**新規**チャットへ | `Cmd + Shift + L` | 選択を持って新しい会話を始める |
| Skill をモードに固定 | `Option + Enter` | Custom Mode（セッション中ずっと効く） |

## あると便利

| 操作 | ショートカット |
|------|----------------|
| 変更を全部採用 | `Cmd + Enter` |
| 変更を全部却下 | `Cmd + Backspace` |
| 生成を中止 | `Cmd + Shift + Backspace` |
| コマンドパレット | `Cmd + Shift + P` |
| キューを飛ばして送信 | `Cmd + Enter`（`Enter` は次のターンに積む） |
| Design Mode 切替 | `Cmd + Shift + D`（Agents Window のブラウザ表示中） |
| 新しいチャット | （パネルの New Chat / 設定による） |
| 提案を拒否 | `Esc` またはそのまま打ち続ける |
| Agent サイドバーの左右入れ替え | `Cmd + E` |

## 差分の扱い（概念）

- Agent の変更は作業中に適用されていくので、**diff を見て不要なら Undo**
- 採用するなら **Keep**。パネル下部の変更バーにも `Undo` / `Keep` / `Review` が出る
- `Cmd + K` のインライン編集だけは **Accept / Reject** 表記（意味は同じ）
- まとめて決めるなら `Cmd + Enter`（全部採用）/ `Cmd + Backspace`（全部却下）
- 大きく戻したいときは対象メッセージの **Restore Checkpoint**
- 「全部受け入れたつもり」でも、必ず git / 目視で最終確認する癖をつける

## 実習

1. `practice/greeter.js` を開く
2. 関数の中を選択 → `Cmd + K` → `丁寧な日本語の挨拶に変えて`
3. 別の行でタイピングし、灰色の Tab 提案が出たら `Tab` と `Cmd + →` を両方試す
4. `Cmd + I` → Ask → 選択中のコードについて質問

参考: [Keyboard Shortcuts](https://cursor.com/docs/reference/keyboard-shortcuts)

次: [03-context.md](03-context.md)
