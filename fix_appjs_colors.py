import re
file_path = r'C:\Users\ghali\.gemini\antigravity\scratch\personal-portfolio\app.js'
js = open(file_path, 'r', encoding='utf-8').read()

# Fix Project Card creation
js = js.replace('bg-white/5 border border-white/10', 'bg-surface-variant border border-outline-variant')
js = js.replace('text-[#c0c1ff]', 'text-indigo-accent')
js = js.replace('text-white', 'text-on-surface')

# Modal fix
# In modal we might have text-white
# The replace above will catch it globally

# Let's restore any hover:text-white to hover:text-on-surface if it exists, wait, I already replaced text-white with text-on-surface.
# If there was a hover:text-white, it becomes hover:text-on-surface.

open(file_path, 'w', encoding='utf-8').write(js)
print('Updated app.js text colors')
