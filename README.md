# 🏠 Fully Sensored Floorplan Card for Home Assistant (Lovelace)

[![version](https://img.shields.io/badge/version-0.0.1--alfa-blue.svg)](https://github.com/LuigiPzz/fully-sensored-floorplan-card)
[![hacs](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Card Lovelace personalizzata e interattiva per **Home Assistant**, progettata per visualizzare lo stato della casa in tempo reale direttamente sulla planimetria dell'appartamento.

---

## ✨ Funzionalità

Per ciascuna stanza della planimetria, la card monitora 6 parametri in tempo reale:

1. 🪟 **Finestre** (`binary_sensor`): la stanza si colora in **blu** semitrasparente quando la finestra è aperta, con bagliore neon sul serramento.
2. 🌃 **Tapparelle** (`cover`): la tapparella viene evidenziata in **viola** all'esterno del perimetro quando è chiusa o in chiusura.
3. 👤 **Presenza** (`binary_sensor`): animazione **radar pulsante arancione** con indicatore centrale al rilevamento di una persona.
4. 🌡️ **Temperatura** (`sensor`): mostrata nel badge climatico della stanza (°C).
5. 💧 **Umidità** (`sensor`): mostrata nel badge climatico della stanza (%).
6. 🍃 **Qualità dell'aria** (`sensor`): semaforo integrato nel badge (🟢 Buona / 🟡 Moderata / 🔴 Scarsa). Supporta sia indici testuali che valori numerici PM2.5 (es. Xiaomi Purifier PM2.5).

Inoltre:
- **Badge Ambientale a scomparsa**: pulsante rapido per mostrare o nascondere i valori di clima con un click.
- **Finestra More-Info nativa**: cliccando su una stanza si apre il pannello dettagli con i controlli delle entità associate.
- **Supporto Temi**: compatibile al 100% con Dark Mode e Light Mode di Home Assistant.

---

## 📦 Installazione

### Metodo 1: HACS (Consigliato)
1. Apri **HACS** in Home Assistant.
2. Clicca sui tre puntini in alto a destra e seleziona **Repository personalizzati**.
3. Incolla l'URL del repository: `https://github.com/LuigiPzz/fully-sensored-floorplan-card`.
4. Come categoria seleziona **Lovelace (Dashboard)** e clicca **Aggiungi**.
5. Clicca **Scarica** e riavvia/aggiorna la dashboard.

### Metodo 2: Manuale
1. Scarica il file `fully-sensored-floorplan-card.js` da questa repository.
2. Copialo nella cartella `config/www/` della tua installazione di Home Assistant (es. `config/www/fully-sensored-floorplan-card.js`).
3. Vai in **Impostazioni** > **Dashboard** > tre puntini in alto a destra > **Risorse**.
4. Clicca **Aggiungi risorsa**:
   - **URL**: `/local/fully-sensored-floorplan-card.js`
   - **Tipo risorsa**: `Modulo JavaScript`
5. Aggiorna la pagina della dashboard (Ctrl + F5).

---

## ⚙️ Configurazione Lovelace

Configurazione completa con la nomenclatura standard dei tuoi sensori:

```yaml
type: custom:fully-sensored-floorplan-card
show_climate: true
rooms:
  - id: soggiorno
    name: Salone
    window: binary_sensor.finestra_soggiorno
    shutter: cover.tapparella_soggiorno
    presence: binary_sensor.presenza_soggiorno
    temperature: sensor.awg_salone_temperatura
    humidity: sensor.awg_salone_umidita
    air_quality: sensor.purificatore_xiaomi_pm25
  - id: camera_1
    name: Camera da letto
    window: binary_sensor.finestra_camera_matrimoniale
    shutter: cover.tapparella_camera_matrimoniale
    presence: binary_sensor.presenza_camera_matrimoniale
    temperature: sensor.temperatura_camera_1
    humidity: sensor.umidita_camera_1
    air_quality: sensor.qualita_aria_camera_1
  - id: studio
    name: Studio / Garage
    window: ''
    shutter: ''
    presence: binary_sensor.presenza_studio
    temperature: sensor.temperatura_studio
    humidity: sensor.umidita_studio
    air_quality: sensor.qualita_aria_studio
  - id: cucina
    name: Studio
    window: binary_sensor.finestra_cucina
    shutter: cover.tapparella_cucina
    presence: binary_sensor.presenza_cucina
    temperature: sensor.temperatura_cucina
    humidity: sensor.umidita_cucina
    air_quality: sensor.qualita_aria_cucina
  - id: disimpegno
    name: Bagnetto
    window: binary_sensor.finestra_disimpegno
    shutter: cover.tapparella_disimpegno
    presence: binary_sensor.presenza_disimpegno
    temperature: sensor.temperatura_disimpegno
    humidity: sensor.umidita_disimpegno
    air_quality: sensor.qualita_aria_disimpegno
  - id: bagno_1
    name: Ingresso cucina
    window: ''
    shutter: ''
    presence: binary_sensor.presenza_bagno_1
    temperature: sensor.temperatura_bagno_1
    humidity: sensor.umidita_bagno_1
    air_quality: sensor.qualita_aria_bagno_1
  - id: camera_2
    name: Cucina
    window: binary_sensor.finestra_camera_2
    shutter: cover.tapparella_camera_2
    presence: binary_sensor.presenza_camera_2
    temperature: sensor.temperatura_camera_2
    humidity: sensor.umidita_camera_2
    air_quality: sensor.qualita_aria_camera_2
  - id: corridoio
    name: Ingresso
    presence: binary_sensor.sensore_movimento_ingresso
    temperature: sensor.awg_ingresso_temperatura
    humidity: sensor.awg_ingresso_umidita
  - id: ripostiglio
    name: Ingresso Camere
    window: ''
    shutter: ''
    presence: binary_sensor.presenza_ripostiglio
    temperature: sensor.temperatura_ripostiglio
    humidity: sensor.umidita_ripostiglio
    air_quality: sensor.qualita_aria_ripostiglio
  - id: bagno_2
    name: Bagno
    window: binary_sensor.finestra_bagno_2
    shutter: cover.tapparella_bagno_2
    presence: binary_sensor.presenza_bagno_2
    temperature: sensor.temperatura_bagno_2
    humidity: sensor.umidita_bagno_2
    air_quality: sensor.qualita_aria_bagno_2
  - id: loggia
    name: Balcone
    window: binary_sensor.finestra_loggia
    shutter: cover.tapparella_loggia
    presence: binary_sensor.presenza_loggia
    temperature: sensor.temperatura_loggia
    humidity: sensor.umidita_loggia
    air_quality: sensor.qualita_aria_loggia
  - id: camera_3
    name: Cameretta
    window: binary_sensor.finestra_camera_3
    shutter: cover.tapparella_camera_3
    presence: binary_sensor.presenza_camera_3
    temperature: sensor.temperatura_camera_3
    humidity: sensor.umidita_camera_3
    air_quality: sensor.qualita_aria_camera_3
```

---

## 🗺️ Mappatura Stanze e ID

| ID Stanza | Nome Stanza Utente | Sensori Principali |
|---|---|---|
| `soggiorno` | **Salone** | Finestra, Tapparella, Presenza, Temp/Umid AWG, PM2.5 Xiaomi Purifier |
| `camera_1` | **Camera da letto** | Finestra, Tapparella, Presenza, Clima Camera 1 |
| `studio` | **Studio / Garage** | Presenza, Clima Studio |
| `cucina` | **Studio** | Finestra, Tapparella, Presenza, Clima Cucina/Studio |
| `disimpegno` | **Bagnetto** | Finestra, Tapparella, Presenza, Clima Bagnetto |
| `bagno_1` | **Ingresso cucina** | Presenza, Clima Ingresso Cucina |
| `camera_2` | **Cucina** | Finestra, Tapparella, Presenza, Clima Cucina |
| `corridoio` | **Ingresso** | Sensore Movimento Ingresso, Temp/Umid AWG |
| `ripostiglio` | **Ingresso Camere** | Presenza, Clima Ingresso Camere |
| `bagno_2` | **Bagno** | Finestra, Tapparella, Presenza, Clima Bagno |
| `loggia` | **Balcone** | Finestra, Tapparella, Presenza, Clima Balcone |
| `camera_3` | **Cameretta** | Finestra, Tapparella, Presenza, Clima Cameretta |

---

## 📄 Licenza

Distribuito sotto licenza [MIT](LICENSE).
