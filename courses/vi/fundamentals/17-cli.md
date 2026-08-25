# 17. CLI（ターミナルの Agent）

同じ Agent を、エディタを開かずに**ターミナルから**使えます。エディタ版が「見ながら直す」のに対し、CLI は **手順に組み込む**ためのものです。

## インストール

```bash
# macOS / Linux / WSL
curl https://cursor.com/install -fsS | bash
```

Windows（PowerShell）:

```powershell
irm 'https://cursor.com/install?win32=true' | iex
```

コマンド名は `agent` です。

## 2つの使い方

### 1. 対話モード

```bash
agent
agent "practice/cart.js の getSubtotal を安全にして"
```

エディタの Agent パネルと同じ感覚で会話します。

### 2. print モード（ヘッドレス）

```bash
agent -p "変更をセキュリティ観点でレビューして" --output-format text
agent -p "テストの失敗を直して" --model "gpt-5"
```

`-p` を付けると**対話せずに1回答えて終わる**ので、スクリプトや CI に組み込めます。ここが CLI 最大の価値です。

## 覚えておくもの

| 機能 | 使い方 |
|------|--------|
| モード指定 | `--mode` またはスラッシュコマンド。`agent` / `plan` / `ask` |
| セッション再開 | `agent resume` / `agent --continue` |
| Cloud へ渡す | プロンプトの先頭に `&` を付けると、そのままクラウドで走らせる |
| サンドボックス | `/sandbox` または `--sandbox <mode>` でコマンド実行の制限を変える |

## 何に使うか

- **CI で使う** — PR ごとにレビューを1回走らせる、失敗したテストの原因を要約させる
- **定型作業** — 「全ファイルの見出しレベルを揃える」のような機械的な一括処理
- **エディタを開けない場所** — サーバ上、コンテナの中

対話しながら考える作業はエディタ側の方が速いです。**CLI は自動化のための入口**と考えてください。

## 注意

- `-p` は人間が差分を読まないまま進むことがある。**必ず git 管理下で走らせる**
- CI に入れるときはトークンの権限を最小にする（[13-safety-ignore.md](13-safety-ignore.md)）

## 実習

ターミナルで:

```bash
agent -p "practice/ にあるファイルの役割を1行ずつ列挙して。コードは変更しないで" --output-format text
```

エディタの Ask で同じことを聞いて、返り方の違いを見比べてください。

参考: [CLI](https://cursor.com/docs/cli/overview)

次: [18-integrations.md](18-integrations.md)
