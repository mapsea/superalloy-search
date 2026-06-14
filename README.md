# スーパーアロイ成分検索

スーパーアロイを合金名、元素、成分レンジから検索・比較できるサイトです。

## データ追加

合金データの正本は `data/alloys.csv` です。CSV を編集した後は、リポジトリルートで `python3 scripts/build-data.py` を実行してサイト用データを再生成してください。

詳しい列定義、入力形式、検証手順は [Data Import Workflow](docs/data-import-workflow.md) を参照してください。
