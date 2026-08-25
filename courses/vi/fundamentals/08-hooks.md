# 8. Hooks

Hook は Agent のライフサイクルに割り込む **自動化・ガードレール** です。方針（Rules）や手順（Skills）と違い、シェルやスクリプトで **許可・拒否・加工・監査** ができます。

## 置き場所

| 階層 | 設定 | スクリプト例 |
|------|------|--------------|
| Enterprise | OS 共通の設定ディレクトリ | 管理者が配布 |
| Team | クラウドのダッシュボード（Enterprise のみ） | 全メンバーに配る |
| プロジェクト | `.cursor/hooks.json` | `.cursor/hooks/*.sh` |
| ユーザー | `~/.cursor/hooks.json` | `~/.cursor/hooks/*.sh` |

**優先順位は上ほど強い**（Enterprise → Team → プロジェクト → ユーザー）。チームで共有したいならプロジェクト Hook を推奨します。

## よく使うイベント（学習用に絞る）

| イベント | 用途 |
|----------|------|
| `beforeShellExecution` | 危険なコマンドを止める／確認する |
| `afterFileEdit` | 編集後にフォーマットなど |
| `beforeSubmitPrompt` | プロンプトに秘密情報が無いかチェック |
| `sessionStart` | セッション開始時のセットアップ |

このほかに、ツール実行の前後（`preToolUse` / `postToolUse` / `postToolUseFailure`）、サブエージェントの前後（`subagentStart` / `subagentStop`）、MCP 実行の前後、ファイル読み取り前（`beforeReadFile`）、応答後（`afterAgentResponse`）、Tab 補完の前後、ワークスペースを開いたときなどがあります。まず1つだけで十分です。

## 最小イメージ

```json
{
  "version": 1,
  "hooks": {
    "beforeShellExecution": [
      {
        "command": ".cursor/hooks/check-shell.sh"
      }
    ]
  }
}
```

Hook は **stdin の JSON を読み、stdout に JSON で応答**する形が基本です（詳細は公式／create-hook スキル）。最初は「ログだけ出す観察 Hook」から始めると安全です。

各 Hook には次のオプションを付けられます。

| オプション | 意味 |
|------------|------|
| `type` | `"command"`（既定）か `"prompt"`。後者は**スクリプトではなく LLM に判定させる** |
| `matcher` | 対象を絞る（ツール種別・サブエージェント種別・コマンドのパターン） |
| `timeout` | 秒数 |
| `failClosed` | `true` で、Hook が失敗したときに**通さない** |

応答の JSON では `permission` に `allow` / `deny` / `ask` を返せます。終了コード `2` は `deny` と同じ扱いです。

## 注意

- 失敗時にすべてブロック（`failClosed: true`）すると開発が止まりやすい。既定は「失敗したら通す」
- まず観察 → 必要なら拒否、の順がおすすめ
- Secrets を Hook のログに出さない

## 実習（読む／設計する）

Ask モードで:

```text
このリポジトリ向けに、beforeShellExecution で
「rm -rf /」「git push --force」だけ拒否する Hook の設計を書いて。
まだファイルは作らないで。
```

方針が納得できたら Agent で実装を頼んでください。

次: [09-mcp.md](09-mcp.md)
