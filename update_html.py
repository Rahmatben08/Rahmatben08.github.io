import os

file_path = r'C:\Users\ghali\.gemini\antigravity\scratch\personal-portfolio\index.html'
html = open(file_path, 'r', encoding='utf-8').read()

mentoring_html = '''                            </ul>
                        </div>
                        
                        <!-- Job 3 -->
                        <div class="glass-card rim-light rounded-2xl p-6 relative">
                            <div class="absolute -left-[35px] top-6 w-4 h-4 rounded-full bg-indigo-accent border-4 border-background"></div>
                            <span class="inline-block text-xs font-bold bg-indigo-accent/10 border border-indigo-accent/20 text-indigo-accent px-2.5 py-1 rounded-full mb-3">2026 - Sekarang</span>
                            <h3 class="text-lg font-bold text-on-surface">Mentor PKM Training</h3>
                            <h4 class="text-sm text-on-surface-variant font-medium">Divisi Risetka FKIA FK Unsri</h4>
                            <ul class="list-disc pl-4 mt-3 text-sm text-on-surface-variant space-y-2">
                                <li>Memberikan pelatihan dan pendampingan kepada mahasiswa Fakultas Kedokteran (FK) Universitas Sriwijaya.</li>
                                <li>Membimbing penyusunan proposal Program Kreativitas Mahasiswa (PKM) dari seluruh program studi di FK Unsri.</li>
                            </ul>
                        </div>
                    </div>'''

achievements_html = '''                    </div>

                    <!-- Prestasi & Publikasi Section -->
                    <div class="mb-8 flex items-center gap-3 mt-10">
                        <span class="material-symbols-outlined text-indigo-accent text-3xl font-bold">emoji_events</span>
                        <h2 class="font-headline-lg text-3xl font-bold text-on-surface">Prestasi & Publikasi</h2>
                    </div>
                    
                    <div class="space-y-4 relative border-l-2 border-outline-variant pl-6 ml-3 mb-10">
                        <!-- Ach 1 -->
                        <div class="glass-card rim-light rounded-xl p-5 relative">
                            <div class="absolute -left-[32px] top-5 w-3 h-3 rounded-full bg-indigo-accent border-2 border-background"></div>
                            <h3 class="font-bold text-on-surface">Lulus Pendanaan PKM 2026</h3>
                            <p class="text-xs text-on-surface-variant mt-1">Program Kreativitas Mahasiswa (PKM)</p>
                        </div>
                        
                        <!-- Ach 2 -->
                        <div class="glass-card rim-light rounded-xl p-5 relative">
                            <div class="absolute -left-[32px] top-5 w-3 h-3 rounded-full bg-indigo-accent border-2 border-background"></div>
                            <h3 class="font-bold text-on-surface">Publikasi Jurnal Sinta 3</h3>
                            <p class="text-xs text-on-surface-variant mt-1">Penulis/Peneliti Jurnal Terindeks Sinta 3</p>
                        </div>
                    </div>

                    <!-- Certifications Section -->
                    <div class="mb-8 flex items-center gap-3">'''

html = html.replace('''                            </ul>
                        </div>
                    </div>''', mentoring_html, 1)

html = html.replace('''                    </div>

                    <!-- Certifications Section -->
                    <div class="mb-8 flex items-center gap-3">''', achievements_html, 1)

open(file_path, 'w', encoding='utf-8').write(html)
