import re
file_path = r'C:\Users\ghali\.gemini\antigravity\scratch\personal-portfolio\index.html'
html = open(file_path, 'r', encoding='utf-8').read()

html = html.replace('hover:text-white', 'hover:text-on-surface')
html = html.replace('text-white', 'text-on-surface')
html = html.replace('border-white/10', 'border-outline-variant')
html = html.replace('border-white/15', 'border-outline-variant')

# Restore button texts that should stay white because they have dark background
html = html.replace('bg-indigo-accent text-on-surface', 'bg-indigo-accent text-white')
html = html.replace('font-headline-lg font-bold text-on-surface text-2xl', 'font-headline-lg font-bold text-white text-2xl')

open(file_path, 'w', encoding='utf-8').write(html)
print('Updated index.html text colors')
