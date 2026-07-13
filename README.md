# Mildivet

Statická webstránka pre veterinárnu kliniku Mildivet v Komárne.

## Lokálny náhľad

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Potom otvoriť `http://127.0.0.1:5173`.

## Cloudflare Pages

Projekt je pripravený ako čistý statický web:

- build command: nechaj prázdne
- output directory: `/`
- framework preset: None / Static HTML

Po napojení GitHub repozitára bude Cloudflare Pages nasadzovať zmeny automaticky.

## Doplniteľné údaje

- presné ordinačné hodiny
- ďalšie fotky tímu a kliniky
- finálne texty k službám
- napojenie formulára cez Cloudflare Pages Function alebo externú formulárovú službu
