import re
import json

file_path = r'C:\Users\ghali\.gemini\antigravity\scratch\personal-portfolio\index.html'
html = open(file_path, 'r', encoding='utf-8').read()

colors_match = re.search(r'colors:\s*(\{.*?\})', html, re.DOTALL)
colors_str = colors_match.group(1).replace(',\n                    }', '\n                    }')
colors_dict = json.loads(colors_str)

if 'indigo-accent' not in colors_dict:
    colors_dict['indigo-accent'] = '#6366f1'

css_dark = '.dark {\n'
css_light = ':root {\n'
new_tailwind_colors = 'colors: {\n'

for name, hex_val in colors_dict.items():
    var_name = f'--color-{name}'
    new_tailwind_colors += f'                        "{name}": "var({var_name})",\n'
    css_dark += f'    {var_name}: {hex_val};\n'
    
    light_val = hex_val
    if name in ['surface', 'background']: light_val = '#f8fafc'
    elif name in ['on-surface', 'on-background']: light_val = '#0f172a'
    elif name == 'surface-container': light_val = '#f1f5f9'
    elif name == 'surface-container-high': light_val = '#e2e8f0'
    elif name == 'surface-container-highest': light_val = '#cbd5e1'
    elif name == 'surface-variant': light_val = '#e2e8f0'
    elif name == 'on-surface-variant': light_val = '#475569'
    elif name == 'outline': light_val = '#94a3b8'
    elif name == 'outline-variant': light_val = '#cbd5e1'
    elif name == 'surface-container-low': light_val = '#ffffff'
    elif name == 'surface-container-lowest': light_val = '#ffffff'
    elif name == 'surface-dim': light_val = '#e2e8f0'
    
    css_light += f'    {var_name}: {light_val};\n'

new_tailwind_colors += '                    }'
css_dark += '}\n'
css_light += '}\n'

new_html = html[:colors_match.start()] + new_tailwind_colors + html[colors_match.end():]
open(file_path, 'w', encoding='utf-8').write(new_html)

style_path = r'C:\Users\ghali\.gemini\antigravity\scratch\personal-portfolio\style.css'
style_content = open(style_path, 'r', encoding='utf-8').read()
open(style_path, 'w', encoding='utf-8').write('/* THEME VARIABLES */\n' + css_light + css_dark + '\n' + style_content)

print('Updated index.html and style.css with theme variables')
