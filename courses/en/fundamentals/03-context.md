# 3. `@` で文脈を渡す

入力欄で `@` を打つと、会話に載せたい情報を選べます。

公式の考え方: **関係ファイルが分かっているなら `@` する。分からないなら付けず、Agent に探させる。**

## よく使うもの

| 指定 | 使いどころ |
|------|------------|
| `@ファイル名` | 「このファイルを前提に話して/直して」 |
| `@フォルダ/` | 「この範囲だけ見て」 |
| `@Docs` | 登録済みドキュメントを参照（追加も可） |
| `@Terminals` | エラー出力や実行結果を見せる |
| `@Past Chats` | 以前の会話の続き |
| `@Commit` / `@Branch` | 未コミット差分や main との差分 |
| `@Browser` | 組み込みブラウザの文脈（→ [16-browser-design.md](16-browser-design.md)） |

画像も使えます: スクショを `Ctrl+V`（Mac は `Cmd+V`）、またはドラッグ&ドロップ。

## 良い例 / 弱い例

弱い:

```text
バグ直して
```

良い:

```text
@practice/cart.js @Terminals
「小計が NaN になる」問題を直して。
再現手順: addItem に price 未定義の商品を入れたあと getSubtotal を呼ぶ。
```

## やりすぎ注意

- 無関係な大きなフォルダを全部 `@` するとノイズになる
- 同じ長いファイルを何度も貼り直すより、必要な範囲を選んで渡す
- Ask で調査 → Agent で実装、のようにコンテキストを段階的に使う

## 実習

Ask モード:

```text
@practice/calculator.js @practice/greeter.js
2ファイルの共通点と、あえて分けている理由を推測して
```

続けて Agent モード:

```text
@practice/cart.js
getSubtotal が price や qty の欠けたアイテムを無視するようにして。
空カートが 0 を返す今の挙動は変えないで。ついでに JSDoc を1つ追加
```

次: [04-tab-and-inline.md](04-tab-and-inline.md)
