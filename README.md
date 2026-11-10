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
title: Planimetria Casa & Clima
show_climate: true
home_temperature: sensor.awg_casa_temperatura
home_humidity: sensor.awg_casa_umidita
outdoor_temperature: sensor.awg_esterno_temperatura
outdoor_humidity: sensor.awg_esterno_umidita
rooms:
  - id: soggiorno
    name: Salone
    window: 'binary_sensor.finestra_salone'
    shutter: 'cover.tapparella_salone'
    presence: 'binary_sensor.presenza_salone'
    temperature: 'sensor.awg_salone_temperatura'
    humidity: 'sensor.awg_salone_umidita'
    air_quality: 'sensor.purificatore_xiaomi_pm25'
  - id: camera_1
    name: Camera da letto
    window: 'binary_sensor.finestra_camera_da_letto'
    shutter: 'cover.tapparella_camera_da_letto'
    presence: 'binary_sensor.presenza_camera_da_letto'
    temperature: 'sensor.awg_camera_da_letto_temperatura'
    humidity: 'sensor.awg_camera_da_letto_umidita'
    air_quality: 'sensor.qualita_aria_camera_1'
  - id: studio
    name: Studio / Garage
    window: ''
    shutter: ''
    presence: 'binary_sensor.presenza_studio'
    temperature: ''
    humidity: ''
    air_quality: 'sensor.qualita_aria_studio'
  - id: cucina
    name: Studio
    window: 'binary_sensor.finestra_studio'
    shutter: 'cover.tapparella_studio'
    presence: 'binary_sensor.presenza_studio'
    temperature: 'sensor.awg_studio_temperatura'
    humidity: 'sensor.awg_studio_umidita'
    air_quality: 'sensor.qualita_aria_cucina'
  - id: disimpegno
    name: Bagnetto
    window: 'binary_sensor.finestra_bagnetto'
    shutter: 'cover.tapparella_bagnetto'
    presence: 'binary_sensor.presenza_bagnetto'
    temperature: 'sensor.awg_bagnetto_temperatura'
    humidity: 'sensor.awg_bagnetto_umidita'
    air_quality: 'sensor.qualita_aria_disimpegno'
  - id: bagno_1
    name: Ingresso cucina
    window: ''
    shutter: ''
    presence: 'binary_sensor.presenza_bagno_1'
    temperature: ''
    humidity: ''
    air_quality: 'sensor.qualita_aria_bagno_1'
  - id: camera_2
    name: Cucina
    window: 'binary_sensor.finestra_cucina'
    shutter: 'cover.tapparella_cucina'
    presence: 'binary_sensor.presenza_cucina'
    temperature: 'sensor.awg_cucina_temperatura'
    humidity: 'sensor.awg_cucina_umidita'
    air_quality: 'sensor.qualita_aria_camera_2'
  - id: corridoio
    name: Ingresso
    window: ''
    shutter: ''
    presence: 'binary_sensor.sensore_movimento_ingresso'
    temperature: 'sensor.awg_ingresso_temperatura'
    humidity: 'sensor.awg_ingresso_umidita'
    air_quality: ''
  - id: ripostiglio
    name: Ingresso Camere
    window: ''
    shutter: ''
    presence: 'binary_sensor.presenza_ripostiglio'
    temperature: ''
    humidity: ''
    air_quality: 'sensor.qualita_aria_ripostiglio'
  - id: bagno_2
    name: Bagno
    window: 'binary_sensor.finestra_bagno'
    shutter: 'cover.tapparella_bagno'
    presence: 'binary_sensor.presenza_bagno'
    temperature: 'sensor.awg_bagno_temperatura'
    humidity: 'sensor.awg_bagno_umidita'
    air_quality: 'sensor.qualita_aria_bagno_2'
  - id: loggia
    name: Balcone
    window: 'binary_sensor.finestra_balcone'
    shutter: 'cover.tapparella_balcone'
    presence: 'binary_sensor.presenza_balcone'
    temperature: 'sensor.awg_balcone_temperatura'
    humidity: 'sensor.awg_esterno_umidita'
    air_quality: 'sensor.qualita_aria_loggia'
  - id: camera_3
    name: Cameretta
    window: 'binary_sensor.finestra_cameretta'
    shutter: 'cover.tapparella_cameretta'
    presence: 'binary_sensor.presenza_cameretta'
    temperature: 'sensor.awg_cameretta_temperatura'
    humidity: 'sensor.awg_cameretta_umidita'
    air_quality: 'sensor.qualita_aria_camera_3'
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
