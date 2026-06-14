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
