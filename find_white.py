import re
html = open(r'C:\Users\ghali\.gemini\antigravity\scratch\personal-portfolio\index.html', encoding='utf-8').read()
matches = re.finditer(r'class="([^"]*text-white[^"]*)"', html)
for m in matches:
    print(f'Line: {html[:m.start()].count(chr(10))+1} -> {m.group(1)}')
