import re
with open('c:/Users/jose_/OneDrive/Documentos/Sites/quimicarevisada/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace NOx videos to have playlist: "nox"
new_content = re.sub(
    r'(id: "res-eletro-nox-01".*?duration: "5:23")', 
    r'\1,\n        playlist: "nox",\n        showOnMain: true', 
    content, flags=re.DOTALL
)

new_content = re.sub(
    r'(id: "res-eletro-nox-(0[2-9]|10)".*?duration: ".*?")', 
    r'\1,\n        playlist: "nox"', 
    new_content, flags=re.DOTALL
)

# Remove the old dummy Pilhas playlist
new_content = re.sub(
    r'\s*{\s*id: "res-eletro-pilhas-playlist".*?showOnMain: true\s*},?', 
    '', 
    new_content, flags=re.DOTALL
)

# Append new Pilhas nodes
with open('c:/Users/jose_/OneDrive/Documentos/Sites/quimicarevisada/pilhas_nodes.js', encoding='utf-8') as f:
    pilhas = f.read()

target = 'id: "res-eletro-nox-10",\n        youtubeId: "es1NZGXBoBw",\n        title: "Oxidou ou Reduziu?",\n        description: "Revisão final sobre identificação de processos redox.",\n        duration: "5:50",\n        playlist: "nox"\n      }\n    ]\n  },'

replacement = 'id: "res-eletro-nox-10",\n        youtubeId: "es1NZGXBoBw",\n        title: "Oxidou ou Reduziu?",\n        description: "Revisão final sobre identificação de processos redox.",\n        duration: "5:50",\n        playlist: "nox"\n      },\n' + pilhas + '\n    ]\n  },'

new_content = new_content.replace(target, replacement)

with open('c:/Users/jose_/OneDrive/Documentos/Sites/quimicarevisada/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
