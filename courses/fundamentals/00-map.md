# 0. Cursor の全体像

Cursor は VS Code 系のエディタに、**コードを読んで・書いて・実行できる AI** が載ったものです。

## 3つの使い分け（覚えると混乱が減る）

| 手段 | 用途 | 典型シーン |
|------|------|------------|
| **Tab** | 入力中に続きを提案 | 関数の続き、import、繰り返しパターン |
| **インライン編集（Cmd+K）** | 選択範囲だけ直す | 「この関数を async に」「この文言を変えて」 |
| **Agent パネル（Cmd+I）** | 会話しながら複数ファイルを扱う | 機能追加、調査、リファクタ、バグ修正 | 

昔の「Chat / Composer」という呼び分けより、今は **Agent パネル + モード切替** が中心です。

## 2つのビュー（先に知っておくと迷わない）

Cursor には**画面の作りが2つ**あり、行き来できます。**どちらか一方を選ぶものではありません。**

| | **IDE ビュー** | **Agents Window** |
|---|---|---|
| 見た目 | 従来のエディタ。中央にコード、横に Agent パネル | エージェント中心。チャットを並べて回す |
| 向くこと | **自分でコードを読み書きする作業** | 複数の作業を並列で進める、ブラウザで動作確認する |
| 持っているもの | エディタ、ターミナル、Agent パネル | Agent タブ（並べて表示）、**内蔵ブラウザ**、Design Mode |

- **切り替え**: `Ctrl+Shift+P`（Mac は `Cmd+Shift+P`）→ `Agents Window`
- **いつでも IDE ビューに戻れます。両方同時に開いておくこともできます**

**普段は IDE ビューで十分です。** 内蔵ブラウザも IDE ビューのまま開けるので、動作確認のために切り替える必要はありません。

Agents Window を開く価値があるのは、**複数のエージェントを同時に走らせたいとき**と、**ローカル以外（worktree / クラウド / リモート SSH）で走らせたいとき**です。1人で1つの作業をしている限り、開かなくても困りません。

> 詳しくは [12-agents-window.md](12-agents-window.md)、ブラウザは [16-browser-design.md](16-browser-design.md)。

## UI で見る場所

- **エディタ中央**: いつもどおりコードを書く場所。Tab 補完がここに出る
- **右側（または専用レイアウト）の Agent パネル**: AI との対話。ここでモードを選ぶ
- **Agents Window**: 複数のエージェントを並べて回す画面。内蔵ブラウザと Design Mode もここ
- **差分（diff）ビュー**: Agent が直した箇所。**Keep**（採用）/ **Undo**（取り消し）で決める

> **表記に注意**: Cursor 3.16 の Agent の差分は **Keep / Undo / Review** です。
> `Cmd + K` のインライン編集のバーだけは **Accept / Reject** と表示されます。同じ意味です。
- **コンテキストリング**: 入力欄付近。会話がどれだけコンテキストを使っているか

## 学習のゴール（このコース）

### 基礎 00〜05 — 1人で使えるようになる

- モードを使い分けられる
- 必要なショートカットを指が覚える
- `@` で意図した文脈を渡せる
- Tab / Cmd+K / Agent をシーンごとに選べる
- 「曖昧な依頼」を「実行可能な依頼」に変えられる

### 発展 06〜13 — 前提と安全をコードで持つ

- Rules / Skills / Hooks の役割分担が言える
- MCP・Cloud Agents・PR レビューの位置づけが分かる
- 秘密情報・実行制限・並列エージェントの注意を押さえる

### 応用 14〜18 — チームで配る、自動で回す

- 仕事を Subagent に切り出せる
- 一式を Plugin にまとめて配れる
- 画面・ターミナル・外部サービスから Agent を動かせる

## 章の一覧

| 章 | 内容 |
|----|------|
| [01](01-modes.md) | モード（Agent / Plan / Debug / Multitask / Ask）と Custom Mode |
| [02](02-shortcuts.md) | 覚えるショートカット |
| [03](03-context.md) | `@` で文脈を渡す |
| [04](04-tab-and-inline.md) | Tab 補完とインライン編集 |
| [05](05-prompting.md) | うまく頼む言い方 |
| [06](06-rules.md) | Project Rules |
| [07](07-skills.md) | Skills |
| [08](08-hooks.md) | Hooks |
| [09](09-mcp.md) | MCP |
| [10](10-cloud-agents.md) | Cloud Agents（Builds / Automations） |
| [11](11-bugbot-pr.md) | Bugbot / PR レビュー |
| [12](12-agents-window.md) | Agents Window / Worktrees |
| [13](13-safety-ignore.md) | 秘密情報・実行制限・安全運用 |
| [14](14-subagents.md) | Subagents |
| [15](15-plugins.md) | Plugins とマーケットプレイス |
| [16](16-browser-design.md) | ブラウザと Design Mode |
| [17](17-cli.md) | CLI |
| [18](18-integrations.md) | 外部サービス連携 |

次: [01-modes.md](01-modes.md)
