EXCL=(-not -path "*/node_modules/*" -not -path "*/dist/*" -not -path "*/docs/*" -not -path "*/android/*" -not -path "*/.git/*" -not -name "package-lock.json")

# 1. code files -> code.md
{
  find . -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.css" -o -name "*.html" -o -name "*.yaml" -o -name "*.svg" \) "${EXCL[@]}" -print0 | sort -z | while IFS= read -r -d '' f; do
    echo "## File: $f"
    echo '```'
    cat "$f"
    echo '```'
    echo ""
  done
} > code.md

# 2. data files (json, db) -> data.md
{
  find . -type f \( -name "*.json" -o -name "*.db" \) "${EXCL[@]}" -print0 | sort -z | while IFS= read -r -d '' f; do
    case "$f" in
      *.db) echo "## File: $f (binary, skipped)"; echo "" ;;
      *) echo "## File: $f"; echo '```'; cat "$f"; echo '```'; echo "" ;;
    esac
  done
} > data.md

echo "code.md: $(grep -c '^## File' code.md) files"
echo "data.md: $(grep -c '^## File' data.md) files"
