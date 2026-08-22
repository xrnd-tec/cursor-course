# 12. Agents Window / Worktrees（おすすめ）

`/multitask` そのものは [01-modes.md](01-modes.md) で説明しました。この章では、**それを回すための場所（Agents Window）** と **衝突を防ぐ仕組み（worktree）** だけを扱います。

## Agents Window は「もう1つのビュー」

Cursor には **IDE ビュー**（従来のエディタ）と **Agents Window** の2つがあり、行き来できます（→ [00-map.md](00-map.md)）。

開き方は `Ctrl + Shift + P`（Mac は `Cmd + Shift + P`）のコマンドパレットで **Agents Window** を選ぶのが確実です。**いつでも IDE ビューに戻れますし、両方同時に開いておけます。**

### Agents Window にあるもの

| | 中身 |
|---|---|
| **Agent タブ** | 複数のチャットを**並べて / グリッドで**同時に表示する。リポジトリをまたいでもよい |
| **内蔵ブラウザ** | 動いているアプリを開き、Agent に操作させる（→ [16-browser-design.md](16-browser-design.md)） |
| **Design Mode** | 画面の要素を指して修正を頼む。`Ctrl+Shift+D` |
| **実行環境の選択** | ローカル / worktree / クラウド / リモート SSH |

エージェントを走らせる場所が、ローカルだけでなく worktree やクラウドも選べるのがこの画面の要点です。

### 開かなくてよい場面のほうが多い

**1人で1つの作業をしているなら、IDE ビューのままで困りません。** 内蔵ブラウザも IDE ビューで開けます。

Agents Window を開く価値があるのは、次のどちらかに当てはまるときだけです。

- **複数のエージェントを同時に走らせたい**（並べて進捗を見たい）
- **ローカル以外で走らせたい**（worktree / クラウド / リモート SSH）

「新しい画面があるから使わなければ」と考える必要はありません。

> `Cmd + Shift + A` は Cursor 3.16 では**行コメントの切り替え**などに割り当たっており、Agents Window ではありません。

## Worktrees

git の worktree は、**同じリポジトリの別ブランチを、別のディレクトリに同時にチェックアウトする**仕組みです。エージェントを並列で走らせるとき、同じファイルを取り合わないために使います。

Cursor 側にも worktree 用の操作が用意されています。

| 操作 | 何をするか |
|------|------------|
| Open new window in worktree | worktree のフォルダを新しいウィンドウで開く |
| Open terminal in worktree | worktree の場所でターミナルを開く |
| Copy worktree path | worktree のパスをコピーする |

## 3つを混同しない

| 言葉 | 何を決めるか |
|------|--------------|
| **Agents Window** | 複数エージェントを **どこで見るか** |
| **`/multitask`** | 仕事を **同時にやるか**（→ [01-modes.md](01-modes.md)） |
| **Worktrees** | 作業を **どこまで隔離するか** |

「並列」と「隔離」は別の話です。**並列にしても隔離しなければ、同じファイルを複数のエージェントが書いて壊れます。**

## いつ使うか

- 無関係な2作業を同時に進めたい → `/multitask`
- 同じファイルを安全に並行実験したい → **worktree**（別チェックアウト）
- 手元で1ファイルだけ直す → 普通の Agent パネルで十分。並列にしない

## 実習

Ask:

```text
@courses/fundamentals/01-modes.md
Multitask と worktree を併用すると良い例・やめた方がいい例を
それぞれ1つずつ挙げて。
```

余裕があれば Agents Window を開き、小さな無関係な2依頼で `/multitask` を一度試す。

次: [13-safety-ignore.md](13-safety-ignore.md)
