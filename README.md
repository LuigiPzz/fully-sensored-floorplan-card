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
6. 🍃 **Qualità dell'aria** (`sensor`): semaforo integrato nel badge (🟢 Buona / 🟡 Moderata / 🔴 Scarsa).

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

Aggiungi una card di tipo **Manuale** nella tua dashboard con il seguente YAML:

```yaml
type: custom:fully-sensored-floorplan-card
title: "Planimetria Casa & Clima"
show_climate: true
image: /local/planimetria.png
rooms:
  - id: soggiorno
    name: "Soggiorno"
    window: binary_sensor.finestra_soggiorno
    shutter: cover.tapparella_soggiorno
    presence: binary_sensor.presenza_soggiorno
    temperature: sensor.temperatura_soggiorno
    humidity: sensor.umidita_soggiorno
    air_quality: sensor.qualita_aria_soggiorno

  - id: camera_1
    name: "Camera Matrimoniale"
    window: binary_sensor.finestra_camera_matrimoniale
    shutter: cover.tapparella_camera_matrimoniale
    presence: binary_sensor.presenza_camera_matrimoniale
    temperature: sensor.temperatura_camera_matrimoniale
    humidity: sensor.umidita_camera_matrimoniale
    air_quality: sensor.qualita_aria_camera_matrimoniale

  - id: cucina
    name: "Cucina"
    window: binary_sensor.finestra_cucina
    shutter: cover.tapparella_cucina
    presence: binary_sensor.presenza_cucina
    temperature: sensor.temperatura_cucina
    humidity: sensor.umidita_cucina
    air_quality: sensor.qualita_aria_cucina
```

---

## 🗺️ ID Stanze Mappate

| ID Stanza | Descrizione |
|---|---|
| `soggiorno` | Salone / Living (Superiore SX) |
| `camera_1` | Camera Padronale (Superiore DX) |
| `studio` | Studio / Garage (Inferiore SX) |
| `cucina` | Cucina / Pranzo |
| `disimpegno` | Disimpegno Notte SX |
| `bagno_1` | Bagno SX |
| `camera_2` | Camera 2 (Inferiore Centro-SX) |
| `corridoio` | Corridoio Centrale |
| `ripostiglio` | Ripostiglio / Antibagno |
| `bagno_2` | Bagno DX |
| `loggia` | Balcone / Loggia DX |
| `camera_3` | Camera 3 / Salotto DX (Inferiore DX) |

---

## 📄 Licenza

Distribuito sotto licenza [MIT](LICENSE).
