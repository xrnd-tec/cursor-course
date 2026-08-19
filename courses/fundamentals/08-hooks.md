# 8. Hooks

Hook は Agent のライフサイクルに割り込む **自動化・ガードレール** です。方針（Rules）や手順（Skills）と違い、シェルやスクリプトで **許可・拒否・加工・監査** ができます。

## 置き場所

| 種類 | 設定 | スクリプト例 |
|------|------|--------------|
| プロジェクト | `.cursor/hooks.json` | `.cursor/hooks/*.sh` |
| ユーザー | `~/.cursor/hooks.json` | `~/.cursor/hooks/*.sh` |

チームで共有したいならプロジェクト Hook を推奨します。

## よく使うイベント（学習用に絞る）

| イベント | 用途 |
|----------|------|
| `beforeShellExecution` | 危険なコマンドを止める／確認する |
| `afterFileEdit` | 編集後にフォーマットなど |
| `beforeSubmitPrompt` | プロンプトに秘密情報が無いかチェック |
| `sessionStart` | セッション開始時のセットアップ |

その他に MCP 前後、サブエージェント前後、Tab 編集前後などもあります。まず1つだけで十分です。

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

## 注意

- 失敗時にすべてブロック（fail closed）すると開発が止まりやすい
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
