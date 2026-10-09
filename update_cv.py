import os
import shutil

for file_path in [r'C:\Users\ghali\Downloads\CV_Ghali_ATS.html', r'C:\Users\ghali\.gemini\antigravity\scratch\personal-portfolio\CV_Ghali_ATS.html']:
    if not os.path.exists(file_path): continue
    html = open(file_path, 'r', encoding='utf-8').read()

    # Update English proficiency
    html = html.replace('Inggris (Professional Working Proficiency)', 'Inggris (Standar/Pasif)')

    # Add AI Club
    ai_club_html = '''    <h3>AI Club Indonesia</h3>
    <div class="subtitle"><span>Anggota Aktif</span><span>2024 – Sekarang</span></div>
    <ul>
        <li>Aktif berpartisipasi dalam diskusi dan eksplorasi teknologi kecerdasan buatan, machine learning, serta implementasi AI di Indonesia.</li>
    </ul>

    <h3>Lembaga Sertifikasi Edutech Cendikia Nusantara</h3>'''
    if 'AI Club' not in html:
        html = html.replace('    <h3>Lembaga Sertifikasi Edutech Cendikia Nusantara</h3>', ai_club_html)

    # Add Trakindo project
    trakindo_html = '''<li class="project-item"><strong>Aplikasi Manajemen Inventaris PT Trakindo Utama Palembang:</strong> Membangun aplikasi pelacakan transaksi suku cadang dan inventaris B2B terstruktur.</li>
        <li class="project-item"><strong>Aplikasi Penjadwalan Kuliah & Bimbingan Skripsi Interaktif (Android):'''
    if 'Trakindo' not in html:
        html = html.replace('<li class="project-item"><strong>Aplikasi Penjadwalan Kuliah & Bimbingan Skripsi Interaktif (Android):', trakindo_html)

    open(file_path, 'w', encoding='utf-8').write(html)

print("CV Updated")
