import json
items = json.load(open('C:/Users/jose_/.gemini/antigravity/brain/f82168bc-e596-42f7-9b70-0ea2cb10ec11/p.json', encoding='utf-8'))
out = []
for i, item in enumerate(items):
    m = 'true' if i == 0 else 'false'
    s = f'''      {{
        id: "res-eletro-pilhas-{i+1:02d}",
        youtubeId: "{item['id']}",
        title: "{item['title'].replace('"', '\\"')}",
        description: "Vídeo {i+1} da playlist de Pilhas e Eletrólise.",
        duration: "{item['duration']}",
        playlist: "pilhas",
        playlistId: "PL2ieA2EFIpiYkB8QZDwdSQehc53HhX0vj",
        showOnMain: {m}
      }}'''
    out.append(s)
with open('pilhas_nodes.js', 'w', encoding='utf-8') as f:
    f.write(',\n'.join(out))
