# 12. Agents Window / Worktrees / Multitask（おすすめ）

基礎レッスンの続きとして、**複数エージェントを扱う画面**を押さえておくと後が楽です。[01-modes.md](01-modes.md) の Multitask 節の深掘りです。

## 3つの言葉

| 言葉 | 一言 |
|------|------|
| **Agents Window** | 複数エージェントの作業を並べて見る／回す場所 |
| **`/multitask`** | キュー待ちではなく並列サブエージェントで進める |
| **Worktrees** | 別ブランチ用の作業ツリーで、ファイル衝突を減らす |

開き方は環境によって差があります。コマンドパレットで **Agents Window** / **Open Agents Window** を探すのが確実です（macOS では `Cmd + Shift + A` のこともあります）。

## いつ使うか

- 無関係な2作業を同時に進めたい → `/multitask` または並列エージェント
- 同じファイルを安全に並行実験したい → **worktree**（別チェックアウト）
- 手元で1ファイルだけ直す → 普通の Agent パネルで十分

## 実習

Ask:

```text
@docs/01-modes.md
Multitask と worktree を併用すると良い例・やめた方がいい例を
それぞれ1つずつ挙げて。
```

余裕があれば Agents Window を開き、小さな無関係な2依頼で `/multitask` を一度試す。

次: [13-safety-ignore.md](13-safety-ignore.md)
