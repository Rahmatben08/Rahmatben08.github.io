import re
file_path = r'C:\Users\ghali\.gemini\antigravity\scratch\personal-portfolio\style.css'
css = open(file_path, 'r', encoding='utf-8').read()

css = css.replace(':root {\n', ':root {\n    --nav-bg: rgba(255, 255, 255, 0.75);\n    --nav-border: rgba(0, 0, 0, 0.08);\n')
css = css.replace('.dark {\n', '.dark {\n    --nav-bg: rgba(11, 19, 38, 0.75);\n    --nav-border: rgba(255, 255, 255, 0.08);\n')

css = css.replace('background: rgba(11, 19, 38, 0.75);', 'background: var(--nav-bg);')
css = css.replace('border: 1px solid rgba(255, 255, 255, 0.08);', 'border: 1px solid var(--nav-border);')
css = css.replace('background-color: #0b1326;', 'background-color: var(--color-surface);')
css = css.replace('border-left: 1px solid rgba(255, 255, 255, 0.08);', 'border-left: 1px solid var(--nav-border);')
css = css.replace('color: #9ca3af;', 'color: var(--color-on-surface-variant);')

open(file_path, 'w', encoding='utf-8').write(css)
print('Updated nav and drawer CSS')
