#!/bin/bash

# 批量更新HTML文件的导航栏
# Batch update navigation for all HTML files

echo "开始更新所有HTML文件的导航栏..."

# 定义要更新的页面文件列表
pages=(
  "registration.html"
  "phone-card.html" 
  "bank-card.html"
  "waste-sorting.html"
  "introduction.html"
)

# 更新每个页面文件
for page in "${pages[@]}"; do
  file_path="src/pages/$page"
  
  if [ -f "$file_path" ]; then
    echo "正在更新: $file_path"
    
    # 备份原文件
    cp "$file_path" "$file_path.backup"
    
    # 使用sed命令替换header部分
    # 这里使用更安全的方法，先创建临时文件
    awk '
    BEGIN { in_header = 0; header_done = 0 }
    /<header>/ { 
      in_header = 1
      print "    <header>"
      print "      <!-- 导航栏将通过JavaScript动态生成 -->"
      next
    }
    /<\/header>/ && in_header {
      print "    </header>"
      in_header = 0
      header_done = 1
      next
    }
    in_header { next }
    /<script src="\.\.\/js\/main\.js"><\/script>/ {
      print "    <script src=\"../js/navigation-generator.js\"></script>"
      print "    <script src=\"../js/navigation-init.js\"></script>"
      print "    <script src=\"../js/main.js\"></script>"
      next
    }
    { print }
    ' "$file_path" > "$file_path.tmp"
    
    # 替换原文件
    mv "$file_path.tmp" "$file_path"
    
    echo "✓ 完成更新: $file_path"
  else
    echo "⚠ 文件不存在: $file_path"
  fi
done

echo "所有HTML文件导航栏更新完成！"
echo ""
echo "提示："
echo "1. 原文件已备份为 .backup 后缀"
echo "2. 请检查更新后的文件确保正确"
echo "3. 如有问题可以使用备份文件恢复"
