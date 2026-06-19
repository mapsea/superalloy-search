# スーパーアロイ成分検索

スーパーアロイを合金名、元素、成分レンジから検索・比較できるサイトです。

## データ追加

合金データの正本は `data/alloys.csv` です。Excel、Numbers、Google Sheets などでこのCSVを編集してデータを追加します。

多言語表示用に、CSVには日本語の基本列に加えて `name_en`、`name_zh`、`category_en`、`category_zh`、`usage_en`、`usage_zh`、`properties_en`、`properties_zh`、`representative_makers_en`、`representative_makers_zh`、`japanese_makers_en`、`japanese_makers_zh`、`source_notes_en`、`source_notes_zh` を入力します。ページ右上の言語切替では、これらの列から生成された表示データが使われます。

`src/data/generated/alloys.js` はサイト表示用に自動生成されるファイルなので、手で編集しません。

CSVを編集した後は、このプロジェクトのフォルダで以下を実行してサイト用データを再生成します。

```bash
python3 scripts/build-data.py
```

成功すると `Generated src/data/generated/alloys.js from ... records.` と表示されます。その後、テストページでPASSを確認してから公開します。

詳しい列定義、入力形式、検証手順は [データ取り込み手順](docs/data-import-workflow.md) を参照してください。

## 钨行情日报/周报

本地报告生成器用于生成钨金属日报和周报：

```bash
python3 scripts/tungsten_report.py daily
python3 scripts/tungsten_report.py weekly
```

报告输出到：

- `reports/daily/`
- `reports/weekly/`

铁合金在线账号密码不要写进代码。复制 `.env.example` 为 `.env`，在本机填写：

```env
CNFEOL_USERNAME=你的账号
CNFEOL_PASSWORD=你的密码
```

`.env` 已被 git 忽略。当前第一版不会绕过人机验证；如果铁合金在线要求手动验证，报告会在“数据缺口”中标注。

离线测试报告可以运行：

```bash
python3 scripts/tungsten_report.py daily --fixture --date 2026-06-19
python3 scripts/tungsten_report.py weekly --fixture --date 2026-06-19
```
