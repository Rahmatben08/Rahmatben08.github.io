import re
file_path = r'C:\Users\ghali\.gemini\antigravity\scratch\personal-portfolio\app.js'
js = open(file_path, 'r', encoding='utf-8').read()

js = js.replace('"contact.cta": "Kirim Email",', '"contact.cta": "Kirim Email",\n    "contact.copyEmail": "Salin Email",\n    "contact.openApp": "Atau buka aplikasi email",\n    "contact.copied": "Tersalin!",')
js = js.replace('"contact.cta": "Send Email",', '"contact.cta": "Send Email",\n    "contact.copyEmail": "Copy Email",\n    "contact.openApp": "Or open email app",\n    "contact.copied": "Copied!",')

old_js_logic = '''        // Original icon and text replacement
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = 'Tersalin! <span class="material-symbols-outlined text-[18px]">check</span>';'''

new_js_logic = '''        // Original icon and text replacement
        const originalHTML = copyBtn.innerHTML;
        const currentLang = document.documentElement.lang || 'id';
        const copiedText = currentLang === 'id' ? 'Tersalin!' : 'Copied!';
        copyBtn.innerHTML = `${copiedText} <span class="material-symbols-outlined text-[18px]">check</span>`;'''

js = js.replace(old_js_logic, new_js_logic)

open(file_path, 'w', encoding='utf-8').write(js)
print('Updated app.js with translation keys and toast logic')
