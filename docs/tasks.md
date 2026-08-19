# タスク一覧

Cursor 基礎学習ワークスペースの制作タスク（プロジェクト資料）。  
受講者向けコース資料は [`courses/`](../courses/) を参照。

Epic > User Story > Task の 3 層。ID は `CUR-EEUU-TTT`（EE=Epic, UU=User Story, TTT=Task）。

完了は各タスクの **完了の定義** のチェックボックスが全て埋まった時点。

## CUR-01: 基礎編（0〜5）

### CUR-0101: 基礎レッスンの執筆

#### CUR-0101-001 | 0. Cursor の全体像

**完了の定義:**
- [x] `courses/fundamentals/00-map.md` に本文を書いた

#### CUR-0101-002 | 1. モードと Multitask

**完了の定義:**
- [x] `courses/fundamentals/01-modes.md` に本文を書いた
- [x] 実習を入れた

#### CUR-0101-003 | 2. 覚えるショートカット

**完了の定義:**
- [x] `courses/fundamentals/02-shortcuts.md` に本文を書いた
- [x] 実習を入れた

#### CUR-0101-004 | 3. `@` で文脈を渡す

**完了の定義:**
- [x] `courses/fundamentals/03-context.md` に本文を書いた
- [x] 実習を入れた

#### CUR-0101-005 | 4. Tab 補完とインライン編集

**完了の定義:**
- [x] `courses/fundamentals/04-tab-and-inline.md` に本文を書いた
- [x] 実習を入れた

#### CUR-0101-006 | 5. うまく頼む言い方

**完了の定義:**
- [x] `courses/fundamentals/05-prompting.md` に本文を書いた
- [x] 実習を入れた

## CUR-02: 発展編（6〜13）

### CUR-0201: 発展レッスンの執筆

#### CUR-0201-001 | 6. Project Rules

**完了の定義:**
- [x] `courses/fundamentals/06-rules.md` に本文を書いた
- [x] 実習を入れた

#### CUR-0201-002 | 7. Skills

**完了の定義:**
- [x] `courses/fundamentals/07-skills.md` に本文を書いた
- [x] 実習を入れた

#### CUR-0201-003 | 8. Hooks

**完了の定義:**
- [x] `courses/fundamentals/08-hooks.md` に本文を書いた
- [x] 実習を入れた

#### CUR-0201-004 | 9. MCP

**完了の定義:**
- [x] `courses/fundamentals/09-mcp.md` に本文を書いた
- [x] 実習を入れた

#### CUR-0201-005 | 10. Cloud Agents

**完了の定義:**
- [x] `courses/fundamentals/10-cloud-agents.md` に本文を書いた
- [x] 実習を入れた

#### CUR-0201-006 | 11. Bugbot / PR レビュー連携

**完了の定義:**
- [x] `courses/fundamentals/11-bugbot-pr.md` に本文を書いた
- [x] 実習を入れた

#### CUR-0201-007 | 12. Agents Window / Worktrees

**完了の定義:**
- [x] `courses/fundamentals/12-agents-window.md` に本文を書いた
- [x] 実習を入れた

#### CUR-0201-008 | 13. 秘密情報・安全運用

**完了の定義:**
- [x] `courses/fundamentals/13-safety-ignore.md` に本文を書いた
- [x] 実習を入れた

## CUR-03: 演習環境

### CUR-0301: 実習用ワークスペース

#### CUR-0301-001 | 実習用の JS 一式を用意する

**完了の定義:**
- [x] `practice/` に calculator / greeter / cart / index を置いた
- [x] `practice/README.md` に各ファイルの練習用途を書いた

#### CUR-0301-002 | 進め方を README にまとめる

**完了の定義:**
- [x] レッスン一覧（基礎・発展）を表にした
- [x] 進め方の手順を書いた

#### CUR-0301-003 | `practice/` を Node でそのまま実行できるようにする

`package.json` が無いと ESM が Node のバージョン依存になり、受講者の環境差で落ちる。

**完了の定義:**
- [x] リポジトリ直下に `package.json`（`"type": "module"`）を置いた
- [x] `node practice/index.js` が動くことを確認した
- [x] `practice/README.md` の実行方法を実態に合わせた

## CUR-04: 実践コース（90分 × 4回）

### CUR-0401: 進行台本の執筆

#### CUR-0401-001 | 全体設計（overview）

**完了の定義:**
- [x] `courses/4sessions/overview.md` に4回分の構成・ゴール・共通フォーマットを書いた
- [x] 既存の自習教材との役割分担を書いた
- [x] 各回の詳細ファイルへの導線を張った

#### CUR-0401-002 | 第1回：基本操作

**完了の定義:**
- [x] `courses/4sessions/session-01.md` に分単位のタイムテーブルを書いた
- [x] 事前準備（インストール・クローン）の案内を入れた
- [x] 講師デモ手順と受講者課題を入れた
- [x] 講師チェックリスト（詰まりポイント）を入れた

#### CUR-0401-003 | 第2回：バイブ → 仕様駆動

**完了の定義:**
- [x] `courses/4sessions/session-02.md` に分単位のタイムテーブルを書いた
- [x] 神経衰弱の最小仕様（配布物）を入れた
- [x] 「壊す」デモの依頼文を入れた

#### CUR-0401-004 | 第3回：チーム開発・前半

**完了の定義:**
- [x] `courses/4sessions/session-03.md` に分単位のタイムテーブルを書いた
- [x] 仕様テンプレと Git / PR の最小フローを入れた
- [x] 役割の型を入れた

#### CUR-0401-005 | 第4回：仕上げ＋発表

**完了の定義:**
- [x] `courses/4sessions/session-04.md` に分単位のタイムテーブルを書いた
- [x] 発表フォーマット（3分）を入れた
- [x] 振り返りの進め方を入れた

### CUR-0402: 実施前の受け入れ確認

#### CUR-0402-001 | 教材の記述を実機と照合する

**完了の定義:**
- [x] ショートカット表を Cursor 実機のキーバインドと照合した
- [x] `practice/` の実習が前提どおり成立するか実行して確認した
- [x] 既定ブランチを `main` にした
- [ ] README の「今すぐ試す」を実機で通した
- [ ] 第1回の進行を通しリハーサルした

#### CUR-0402-002 | 第2回の配布物・置き場を決める

**完了の定義:**
- [ ] 神経衰弱の最小仕様を配布形式（スライド / 共有ドキュメント）に落とした
- [ ] スターター／完成例の置き場を決めた（`practice/` とは分離）

#### CUR-0402-003 | 第3〜4回の運用を決める

**完了の定義:**
- [ ] チーム人数とリポジトリ運用（共有 / fork）を決めた
- [ ] 発表の持ち時間と人数に応じたタイムテーブルを作った
