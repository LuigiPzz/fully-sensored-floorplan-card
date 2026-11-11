/**
 * FULLY SENSORED FLOORPLAN CARD - Home Assistant Lovelace Custom Card
 * v0.0.4-alfa - Luxury Dark Architectural Edition
 *
 * Visualizza planimetria ad alta fedeltà con:
 * - Finestre (glow cyan luce naturale + diffusione ambientale)
 * - Tapparelle (veneziane viola con micro-lamelle e neon glow esterno)
 * - Presenza (illuminazione calda radiante 'luce accesa' + beacon animato)
 * - Clima (pillole glassmorphic con tipografia ad alto contrasto, PM2.5 LED Xiaomi)
 * - Muri & Tratti grafici (finitura dark graphite / architettura di lusso)
 */

(function () {
  if (customElements.get("fully-sensored-floorplan-card")) return;

  const BASE_IMAGE = "data:image/png;base64,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";

  const ROOM_DEFS = [
  {
    "id": "salone",
    "aliases": [
      "soggiorno"
    ],
    "label": "Salone",
    "icon": "\ud83d\udecb\ufe0f",
    "entities": {
      "window": "binary_sensor.finestra_salone",
      "shutter": "cover.tapparella_salone",
      "presence": "binary_sensor.presenza_salone",
      "temperature": "sensor.awg_salone_temperatura",
      "humidity": "sensor.awg_salone_umidita",
      "air_quality": "sensor.purificatore_xiaomi_pm25"
    },
    "env_defaults": {
      "temp": 21.8,
      "humidity": 48,
      "air_quality": "11"
    },
    "path": "M 40,20 L 648,20 L 648,281 L 70,281 L 27,281 L 27,60 L 40,20 Z",
    "cx": 337,
    "cy": 145,
    "windows": [
      {
        "x": 18,
        "y": 67,
        "w": 8,
        "h": 167
      }
    ],
    "shutters": [
      {
        "x": 9,
        "y": 65,
        "w": 7,
        "h": 171
      }
    ]
  },
  {
    "id": "camera_da_letto",
    "aliases": [
      "camera_1",
      "camera_matrimoniale"
    ],
    "label": "Camera da letto",
    "icon": "\ud83d\udecf\ufe0f",
    "entities": {
      "window": "binary_sensor.finestra_camera_da_letto",
      "shutter": "cover.tapparella_camera_da_letto",
      "presence": "binary_sensor.presenza_camera_da_letto",
      "temperature": "sensor.awg_camera_da_letto_temperatura",
      "humidity": "sensor.awg_camera_da_letto_umidita",
      "air_quality": "sensor.qualita_aria_camera_da_letto"
    },
    "env_defaults": {
      "temp": 20.2,
      "humidity": 52,
      "air_quality": "good"
    },
    "path": "M 655,20 L 980,20 L 995,35 L 995,268 L 655,268 Z",
    "cx": 825,
    "cy": 143,
    "windows": [
      {
        "x": 996,
        "y": 75,
        "w": 8,
        "h": 136
      }
    ],
    "shutters": [
      {
        "x": 1006,
        "y": 73,
        "w": 7,
        "h": 140
      }
    ]
  },
  {
    "id": "terrazzo",
    "aliases": [
      "terrazza",
      "studio_garage",
      "garage"
    ],
    "label": "Terrazzo",
    "icon": "\ud83e\udeb4",
    "entities": {
      "window": "",
      "shutter": "",
      "presence": "binary_sensor.presenza_terrazzo",
      "temperature": "",
      "humidity": "",
      "air_quality": ""
    },
    "env_defaults": {},
    "path": "M 17,285 L 228,285 L 228,690 L 17,690 Z",
    "cx": 122,
    "cy": 488,
    "windows": [],
    "shutters": []
  },
  {
    "id": "studio",
    "aliases": [
      "cucina"
    ],
    "label": "Studio",
    "icon": "\ud83d\udcbb",
    "entities": {
      "window": "binary_sensor.finestra_studio",
      "shutter": "cover.tapparella_studio",
      "presence": "binary_sensor.presenza_studio",
      "temperature": "sensor.awg_studio_temperatura",
      "humidity": "sensor.awg_studio_umidita",
      "air_quality": "sensor.qualita_aria_studio"
    },
    "env_defaults": {
      "temp": 21.0,
      "humidity": 49,
      "air_quality": "good"
    },
    "path": "M 236,276 L 528,276 L 528,418 L 236,418 Z",
    "cx": 382,
    "cy": 347,
    "windows": [
      {
        "x": 228,
        "y": 303,
        "w": 8,
        "h": 84
      }
    ],
    "shutters": [
      {
        "x": 218,
        "y": 303,
        "w": 7,
        "h": 84
      }
    ]
  },
  {
    "id": "bagnetto",
    "aliases": [
      "disimpegno"
    ],
    "label": "Bagnetto",
    "icon": "\ud83d\udebf",
    "entities": {
      "window": "binary_sensor.finestra_bagnetto",
      "shutter": "cover.tapparella_bagnetto",
      "presence": "binary_sensor.presenza_bagnetto",
      "temperature": "sensor.awg_bagnetto_temperatura",
      "humidity": "sensor.awg_bagnetto_umidita",
      "air_quality": "sensor.qualita_aria_bagnetto"
    },
    "env_defaults": {
      "temp": 22.0,
      "humidity": 55,
      "air_quality": "good"
    },
    "path": "M 236,425 L 448,425 L 448,506 L 236,506 Z",
    "cx": 342,
    "cy": 465,
    "windows": [
      {
        "x": 228,
        "y": 443,
        "w": 8,
        "h": 61
      }
    ],
    "shutters": [
      {
        "x": 218,
        "y": 443,
        "w": 7,
        "h": 61
      }
    ]
  },
  {
    "id": "ingresso_cucina",
    "aliases": [
      "bagno_1"
    ],
    "label": "Ingresso cucina",
    "icon": "\ud83d\udeaa",
    "entities": {
      "window": "",
      "shutter": "",
      "presence": "",
      "temperature": "",
      "humidity": "",
      "air_quality": ""
    },
    "env_defaults": {},
    "path": "M 456,425 L 528,425 L 528,506 L 456,506 Z",
    "cx": 492,
    "cy": 465,
    "windows": [],
    "shutters": []
  },
  {
    "id": "cucina",
    "aliases": [
      "camera_2"
    ],
    "label": "Cucina",
    "icon": "\ud83c\udf73",
    "entities": {
      "window": "binary_sensor.finestra_cucina",
      "shutter": "cover.tapparella_cucina",
      "presence": "binary_sensor.presenza_cucina",
      "temperature": "sensor.awg_cucina_temperatura",
      "humidity": "sensor.awg_cucina_umidita",
      "air_quality": "sensor.qualita_aria_cucina"
    },
    "env_defaults": {
      "temp": 20.5,
      "humidity": 50,
      "air_quality": "good"
    },
    "path": "M 236,514 L 528,514 L 528,688 L 236,688 Z",
    "cx": 382,
    "cy": 601,
    "windows": [
      {
        "x": 228,
        "y": 556,
        "w": 8,
        "h": 85
      }
    ],
    "shutters": [
      {
        "x": 218,
        "y": 556,
        "w": 7,
        "h": 85
      }
    ]
  },
  {
    "id": "ingresso",
    "aliases": [
      "corridoio"
    ],
    "label": "Ingresso",
    "icon": "\ud83d\udd11",
    "entities": {
      "door": "binary_sensor.sensore_porta_ingresso_contact",
      "window": "",
      "shutter": "",
      "presence": "binary_sensor.sensore_movimento_ingresso",
      "temperature": "sensor.awg_ingresso_temperatura",
      "humidity": "sensor.awg_ingresso_umidita",
      "air_quality": ""
    },
    "env_defaults": {
      "temp": 21.2,
      "humidity": 47
    },
    "path": "M 536,276 L 648,276 L 648,617 L 536,617 Z",
    "cx": 592,
    "cy": 446,
    "windows": [],
    "shutters": []
  },
  {
    "id": "ingresso_camere",
    "aliases": [
      "ripostiglio"
    ],
    "label": "Ingresso Camere",
    "icon": "\ud83d\udeaa",
    "entities": {
      "window": "",
      "shutter": "",
      "presence": "",
      "temperature": "",
      "humidity": "",
      "air_quality": ""
    },
    "env_defaults": {},
    "path": "M 655,276 L 727,276 L 727,390 L 655,390 Z",
    "cx": 691,
    "cy": 333,
    "windows": [],
    "shutters": []
  },
  {
    "id": "bagno",
    "aliases": [
      "bagno_2"
    ],
    "label": "Bagno",
    "icon": "\ud83d\udec1",
    "entities": {
      "window": "binary_sensor.finestra_bagno",
      "shutter": "cover.tapparella_bagno",
      "presence": "binary_sensor.presenza_bagno",
      "temperature": "sensor.awg_bagno_temperatura",
      "humidity": "sensor.awg_bagno_umidita",
      "air_quality": "sensor.qualita_aria_bagno"
    },
    "env_defaults": {
      "temp": 22.4,
      "humidity": 58,
      "air_quality": "good"
    },
    "path": "M 735,276 L 908,276 L 908,390 L 735,390 Z",
    "cx": 821,
    "cy": 333,
    "windows": [
      {
        "x": 908,
        "y": 305,
        "w": 8,
        "h": 61
      }
    ],
    "shutters": [
      {
        "x": 918,
        "y": 305,
        "w": 7,
        "h": 61
      }
    ]
  },
  {
    "id": "balcone",
    "aliases": [
      "loggia"
    ],
    "label": "Balcone",
    "icon": "\ud83c\udf3f",
    "entities": {
      "window": "",
      "shutter": "cover.tapparella_balcone",
      "presence": "binary_sensor.esp32_multi_sensore_02_movimento",
      "temperature": "sensor.awg_balcone_temperatura",
      "humidity": "sensor.awg_esterno_umidita",
      "air_quality": "sensor.qualita_aria_balcone"
    },
    "env_defaults": {
      "temp": 16.5,
      "humidity": 64,
      "air_quality": "good"
    },
    "path": "M 915,271 L 1005,271 L 1005,429 L 915,429 Z",
    "cx": 960,
    "cy": 350,
    "windows": [
      {
        "x": 930,
        "y": 427,
        "w": 50,
        "h": 6
      }
    ],
    "shutters": [
      {
        "x": 930,
        "y": 435,
        "w": 50,
        "h": 7
      }
    ]
  },
  {
    "id": "cameretta",
    "aliases": [
      "camera_3"
    ],
    "label": "Cameretta",
    "icon": "\ud83e\uddf8",
    "entities": {
      "window": "binary_sensor.finestra_cameretta",
      "shutter": "cover.tapparella_cameretta",
      "presence": "binary_sensor.presenza_cameretta",
      "temperature": "sensor.awg_cameretta_temperatura",
      "humidity": "sensor.awg_cameretta_umidita",
      "air_quality": "sensor.qualita_aria_cameretta"
    },
    "env_defaults": {
      "temp": 20.8,
      "humidity": 51,
      "air_quality": "good"
    },
    "path": "M 655,398 L 995,398 L 995,617 L 655,617 Z",
    "cx": 825,
    "cy": 508,
    "windows": [
      {
        "x": 996,
        "y": 479,
        "w": 8,
        "h": 120
      }
    ],
    "shutters": [
      {
        "x": 1006,
        "y": 477,
        "w": 7,
        "h": 123
      }
    ]
  }
];

  function parseAirQuality(val) {
    if (val === undefined || val === null || val === "" || val === "unknown" || val === "unavailable") return null;
    const num = parseFloat(val);
    if (!isNaN(num)) {
      if (num <= 15) return { label: `${Math.round(num)} µg/m³`, status: "Buona", color: "#10b981", bg: "rgba(16, 185, 129, 0.15)" };
      if (num <= 35) return { label: `${Math.round(num)} µg/m³`, status: "Moderata", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)" };
      if (num <= 55) return { label: `${Math.round(num)} µg/m³`, status: "Scadente", color: "#f97316", bg: "rgba(249, 115, 22, 0.15)" };
      return { label: `${Math.round(num)} µg/m³`, status: "Critica", color: "#ef4444", bg: "rgba(239, 68, 68, 0.18)" };
    }
    const s = String(val).toLowerCase().trim();
    if (["good", "buona", "ottima", "eccellente"].includes(s)) return { label: "Buona", status: "Buona", color: "#10b981", bg: "rgba(16, 185, 129, 0.15)" };
    if (["moderate", "moderata", "discreta", "fair"].includes(s)) return { label: "Moderata", status: "Moderata", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)" };
    if (["poor", "scadente", "cattiva", "unhealthy"].includes(s)) return { label: "Scadente", status: "Scadente", color: "#ef4444", bg: "rgba(239, 68, 68, 0.18)" };
    return { label: String(val), status: String(val), color: "#38bdf8", bg: "rgba(56, 189, 248, 0.15)" };
  }

    function findRoomDef(roomId) {
    if (!roomId) return null;
    const lower = String(roomId).toLowerCase().trim();
    const exact = ROOM_DEFS.find(x => x.id === lower);
    if (exact) return exact;
    return ROOM_DEFS.find(x => x.aliases && x.aliases.includes(lower)) || null;
  }

  class FullySensoredFloorplanCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._showClimate = true;
    }

    static getStubConfig() {
      return {
        type: "custom:fully-sensored-floorplan-card",
        title: "Casa",
        show_climate: true,
        home_temperature: "sensor.awg_casa_temperatura",
        home_humidity: "sensor.awg_casa_umidita",
        outdoor_temperature: "sensor.awg_esterno_temperatura",
        outdoor_humidity: "sensor.awg_esterno_umidita",
        rooms: ROOM_DEFS.map(r => ({
          id: r.id,
          name: r.label,
          window: r.entities.window || "",
          shutter: r.entities.shutter || "",
          presence: r.entities.presence || "",
          temperature: r.entities.temperature || "",
          humidity: r.entities.humidity || "",
          air_quality: r.entities.air_quality || ""
        }))
      };
    }

    setConfig(config) {
      this._config = Object.assign({
        title: "Casa",
        show_climate: true,
        rooms: ROOM_DEFS
      }, config);
      this._showClimate = this._config.show_climate !== false;
      this._render();
      this._buildSvgStructure();
      this._updateStates();
    }

    set hass(hass) {
      this._hass = hass;
      this._updateStates();
    }

    _render() {
      const title = this._config.title || "Planimetria Casa";
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
          ha-card {
            border-radius: var(--ha-card-border-radius, 20px);
            background: var(--ha-card-background, #101012);
            box-shadow: var(--ha-card-box-shadow, 0 16px 40px -8px rgba(0,0,0,0.6));
            border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
            overflow: hidden;
            font-family: var(--paper-font-body1_-_font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
            color: var(--primary-text-color, #f8fafc);
          }
          .card-header {
            padding: 16px 20px 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%);
            backdrop-filter: blur(8px);
          }
          .title-area {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .title-icon-badge {
            width: 32px;
            height: 32px;
            border-radius: 9px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 16px;
          }
          .card-title {
            font-size: 1.12rem;
            font-weight: 700;
            letter-spacing: -0.01em;
            color: #f8fafc;
          }
          .chips {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            font-size: 11.5px;
            font-weight: 600;
          }
          .chip {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 4px 10px;
            border-radius: 9999px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: #94a3b8;
            backdrop-filter: blur(6px);
            transition: all 0.3s ease;
          }
          .chip.active-door {
            background: rgba(239, 68, 68, 0.2);
            border-color: rgba(239, 68, 68, 0.5);
            color: #f87171;
            box-shadow: 0 0 14px rgba(239, 68, 68, 0.35);
            animation: pulse-red 1.8s infinite;
          }
          @keyframes pulse-red {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.85; transform: scale(1.02); }
          }
          .chip.active-win {
          .chip.active-shut {
            background: rgba(168, 85, 247, 0.18);
            border-color: rgba(192, 132, 252, 0.45);
            color: #c084fc;
            box-shadow: 0 0 12px rgba(168, 85, 247, 0.28);
          }
          .chip.active-pres {
            background: rgba(245, 158, 11, 0.18);
            border-color: rgba(251, 191, 36, 0.45);
            color: #fbbf24;
            box-shadow: 0 0 12px rgba(245, 158, 11, 0.28);
          }
          .chip.chip-climate {
            background: rgba(255, 255, 255, 0.04);
            border-color: rgba(255, 255, 255, 0.1);
            color: #e2e8f0;
          }
          .viewport {
            position: relative;
            width: 100%;
            aspect-ratio: 1024 / 711;
            background: radial-gradient(ellipse at 50% 25%, #161618 0%, #09090b 100%);
            overflow: hidden;
          }
          /* Subtle architectural micro-grid */
          .viewport::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
            background-size: 28px 28px;
            pointer-events: none;
            z-index: 0;
          }
          svg {
            width: 100%;
            height: 100%;
            display: block;
          }
          .room-poly {
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .room-poly:hover {
            stroke: rgba(255, 255, 255, 0.45) !important;
            stroke-width: 1.5px !important;
            stroke-dasharray: 4 2 !important;
          }
          @keyframes beacon-ripple {
            0% { r: 6px; opacity: 0.95; stroke-width: 2.2px; }
            100% { r: 24px; opacity: 0; stroke-width: 0.5px; }
          }
          @keyframes aq-pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.75; }
          }
          .beacon-ring {
            animation: beacon-ripple 2s cubic-bezier(0.2, 0.8, 0.4, 1) infinite;
            transform-origin: center;
          }
          .aq-led {
            transform-origin: center;
          }
        </style>

        <ha-card>
          <div class="card-header">
            <div class="title-area">
              <div class="title-icon-badge">🏠</div>
              <span class="card-title">${title || "Casa"}</span>
            </div>
            <div class="chips">
              <!-- Sensori Clima dedicati per Casa -->
              <span class="chip chip-temp" id="chip-temp" style="display:none;"></span>
              <span class="chip chip-hum" id="chip-hum" style="display:none;"></span>
              <span class="chip chip-climate" id="chip-outdoor" style="display:none;"></span>
              <!-- Allarme Porta Ingresso -->
              <span class="chip active-door" id="chip-door" style="display:none;">🚨 Porta Aperta</span>
              <!-- Conteggio Finestre Aperte/Chiuse -->
              <span class="chip" id="chip-win">0 Finestre</span>
              <!-- Conteggio Tapparelle Chiuse/Aperte -->
              <span class="chip" id="chip-shut">0 Tapparelle</span>
              <!-- Presenze Rilevate -->
              <span class="chip" id="chip-pres">0 Presenze</span>
            </div>
          </div>

          <div class="viewport">
            <svg id="svg-layer" viewBox="0 0 1024 711"></svg>
          </div>
        </ha-card>
      `;
    }

    _buildSvgStructure() {
      const svg = this.shadowRoot.getElementById("svg-layer");
      if (!svg) return;

      const configuredRooms = this._config.rooms || ROOM_DEFS;

      // Build defs with filters & gradients
      let defsHtml = `
        <defs>
          <!-- Shadow filters -->
          <filter id="shadow-badge" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#000000" flood-opacity="0.65"/>
          </filter>
          <filter id="shadow-text" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" flood-color="#000000" flood-opacity="0.95"/>
          </filter>
          <filter id="glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#38bdf8" flood-opacity="0.95"/>
          </filter>
          <filter id="glow-purple" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#a855f7" flood-opacity="0.95"/>
          </filter>
          <filter id="glow-amber" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#f59e0b" flood-opacity="0.85"/>
          </filter>
      `;

      configuredRooms.forEach(room => {
        const r = ROOM_DEFS.find(x => x.id === room.id) || room;
        const cx = r.cx || 500, cy = r.cy || 350;
        defsHtml += `
          <!-- Presence radiant warm glow -->
          <radialGradient id="pres-grad-${room.id}" cx="${cx}" cy="${cy}" r="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.28"/>
            <stop offset="55%" stop-color="#f59e0b" stop-opacity="0.09"/>
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
          </radialGradient>
          <!-- Window airflow sky-blue glow -->
          <radialGradient id="win-grad-${room.id}" cx="${cx}" cy="${cy}" r="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25"/>
            <stop offset="60%" stop-color="#0284c7" stop-opacity="0.08"/>
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
          </radialGradient>
        `;
      });
      defsHtml += `</defs>`;

      svg.innerHTML = `
        ${defsHtml}
        <image id="svg-walls-img" href="${BASE_IMAGE}" x="0" y="0" width="1024" height="711" preserveAspectRatio="none" style="pointer-events: none; filter: drop-shadow(0 8px 24px rgba(0,0,0,0.65));" />
        <g id="g-room-bases"></g>
        <g id="g-room-fills"></g>
        <g id="g-presence-glow"></g>
        <g id="g-windows"></g>
        <g id="g-shutters"></g>
        <g id="g-presence-beacons"></g>
        <g id="g-labels"></g>
        <g id="g-climate"></g>
      `;

      const gBases = this.shadowRoot.getElementById("g-room-bases");
      const gFills = this.shadowRoot.getElementById("g-room-fills");
      const gPresGlow = this.shadowRoot.getElementById("g-presence-glow");
      const gWins = this.shadowRoot.getElementById("g-windows");
      const gShut = this.shadowRoot.getElementById("g-shutters");
      const gBeacons = this.shadowRoot.getElementById("g-presence-beacons");
      const gLbl = this.shadowRoot.getElementById("g-labels");
      const gClim = this.shadowRoot.getElementById("g-climate");

      configuredRooms.forEach(room => {
        const r = findRoomDef(room.id) || ROOM_DEFS.find(x => x.id === room.id) || room;
        const canonicalId = r.id || room.id;
        const displayName = room.name || r.label || r.id;
        const icon = r.icon || "🏠";
        const cx = r.cx, cy = r.cy;

        // 1. Room Base Floor (subtle sleek charcoal)
        const basePoly = document.createElementNS("http://www.w3.org/2000/svg", "path");
        basePoly.setAttribute("d", r.path);
        basePoly.setAttribute("fill", "rgba(255, 255, 255, 0.01)");
        basePoly.setAttribute("stroke", "transparent");
        basePoly.setAttribute("stroke-width", "1");
        basePoly.setAttribute("class", "room-poly");
        basePoly.addEventListener("click", () => this._handleRoomClick(room));
        gBases.appendChild(basePoly);

        // 2. Room Fill (Active when window opens -> cyan airflow)
        const poly = document.createElementNS("http://www.w3.org/2000/svg", "path");
        poly.setAttribute("id", "poly-" + canonicalId);
        poly.setAttribute("d", r.path);
        poly.setAttribute("fill", `url(#win-grad-${room.id})`);
        poly.setAttribute("fill-opacity", "0");
        poly.setAttribute("stroke", "#38bdf8");
        poly.setAttribute("stroke-width", "1.5");
        poly.setAttribute("stroke-opacity", "0");
        poly.setAttribute("class", "room-poly");
        poly.addEventListener("click", () => this._handleRoomClick(room));
        gFills.appendChild(poly);

        // 3. Presence Warm Radiant Glow
        const presGlow = document.createElementNS("http://www.w3.org/2000/svg", "path");
        presGlow.setAttribute("id", `pres-glow-${canonicalId}`);
        presGlow.setAttribute("d", r.path);
        presGlow.setAttribute("fill", `url(#pres-grad-${room.id})`);
        presGlow.setAttribute("opacity", "0");
        presGlow.style.pointerEvents = "none";
        presGlow.style.transition = "opacity 0.45s ease";
        gPresGlow.appendChild(presGlow);

        // 4. Windows (Frosted architectural glass + cyan neon glow)
        (r.windows || []).forEach((win, idx) => {
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("id", `window-${canonicalId}-${idx}`);
          rect.setAttribute("x", win.x);
          rect.setAttribute("y", win.y);
          rect.setAttribute("width", win.w);
          rect.setAttribute("height", win.h);
          rect.setAttribute("rx", "2");
          rect.setAttribute("ry", "2");
          rect.setAttribute("fill", "#38bdf8");
          rect.setAttribute("fill-opacity", "0");
          rect.setAttribute("stroke", "#0284c7");
          rect.setAttribute("stroke-width", "1");
          rect.setAttribute("stroke-opacity", "0");
          rect.setAttribute("filter", "url(#glow-cyan)");
          rect.style.transition = "all 0.35s ease";
          gWins.appendChild(rect);
        });

        // 5. Shutters (Micro-slatted purple shutters + neon glow outside windows)
        (r.shutters || []).forEach((sh, idx) => {
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("id", `shutter-${canonicalId}-${idx}`);
          rect.setAttribute("x", sh.x);
          rect.setAttribute("y", sh.y);
          rect.setAttribute("width", sh.w);
          rect.setAttribute("height", sh.h);
          rect.setAttribute("rx", "1.5");
          rect.setAttribute("ry", "1.5");
          rect.setAttribute("fill", "#9333ea");
          rect.setAttribute("fill-opacity", "0");
          rect.setAttribute("stroke", "#c084fc");
          rect.setAttribute("stroke-width", "1");
          rect.setAttribute("stroke-opacity", "0");
          rect.setAttribute("filter", "url(#glow-purple)");
          rect.style.transition = "all 0.35s ease";
          gShut.appendChild(rect);
        });

        // 6. Presence Beacon (Animated ripple ring + golden person badge, positioned neatly above room label)
        const bG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        bG.setAttribute("id", "pres-" + canonicalId);
        bG.setAttribute("opacity", "0");
        bG.style.pointerEvents = "none";
        bG.style.transition = "opacity 0.4s ease";

        const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ring.setAttribute("class", "beacon-ring");
        ring.setAttribute("cx", cx);
        ring.setAttribute("cy", cy - 22);
        ring.setAttribute("r", "10");
        ring.setAttribute("stroke", "#f59e0b");
        ring.setAttribute("stroke-width", "2");
        ring.setAttribute("fill", "none");
        bG.appendChild(ring);

        const core = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        core.setAttribute("cx", cx);
        core.setAttribute("cy", cy - 22);
        core.setAttribute("r", "9");
        core.setAttribute("fill", "#f59e0b");
        core.setAttribute("filter", "url(#glow-amber)");
        bG.appendChild(core);

        const iconTxt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        iconTxt.setAttribute("x", cx);
        iconTxt.setAttribute("y", cy - 18);
        iconTxt.setAttribute("text-anchor", "middle");
        iconTxt.setAttribute("font-size", "9.5");
        iconTxt.setAttribute("fill", "#09090b");
        iconTxt.textContent = "👤";
        bG.appendChild(iconTxt);

        gBeacons.appendChild(bG);

        // 7. Labels: Clean Uppercase Room Title (emoji removed)
        const lG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        lG.style.pointerEvents = "none";

        const lbl = document.createElementNS("http://www.w3.org/2000/svg", "text");
        lbl.setAttribute("x", cx);
        lbl.setAttribute("y", cy - 8);
        lbl.setAttribute("text-anchor", "middle");
        lbl.setAttribute("font-size", "11");
        lbl.setAttribute("font-weight", "700");
        lbl.setAttribute("letter-spacing", "0.08em");
        lbl.setAttribute("fill", "#e2e8f0");
        lbl.setAttribute("filter", "url(#shadow-text)");
        lbl.textContent = displayName.toUpperCase();
        lG.appendChild(lbl);

        gLbl.appendChild(lG);

        // 8. Climate Glassmorphic Pill at (cx, cy + 14)
        const cG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        cG.setAttribute("id", "clim-" + canonicalId);
        cG.style.display = "none";
        cG.style.pointerEvents = "none";

        const bx = cx - 44, by = cy + 4;
        const bgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        bgRect.setAttribute("id", `clim-rect-${canonicalId}`);
        bgRect.setAttribute("x", bx);
        bgRect.setAttribute("y", by);
        bgRect.setAttribute("width", "88");
        bgRect.setAttribute("height", "22");
        bgRect.setAttribute("rx", "11");
        bgRect.setAttribute("ry", "11");
        bgRect.setAttribute("fill", "rgba(24, 24, 27, 0.92)");
        bgRect.setAttribute("stroke", "rgba(255, 255, 255, 0.12)");
        bgRect.setAttribute("stroke-width", "1");
        bgRect.setAttribute("filter", "url(#shadow-badge)");
        cG.appendChild(bgRect);

        const aqDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        aqDot.setAttribute("id", `aq-dot-${canonicalId}`);
        aqDot.setAttribute("class", "aq-led");
        aqDot.setAttribute("cx", bx + 11);
        aqDot.setAttribute("cy", by + 11);
        aqDot.setAttribute("r", "4");
        aqDot.setAttribute("fill", "#10b981");
        cG.appendChild(aqDot);

        const climTxt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        climTxt.setAttribute("id", `clim-txt-${canonicalId}`);
        climTxt.setAttribute("x", bx + 22);
        climTxt.setAttribute("y", by + 14.5);
        climTxt.setAttribute("font-size", "9.5");
        climTxt.setAttribute("font-weight", "700");
        climTxt.setAttribute("fill", "#f8fafc");
        cG.appendChild(climTxt);

        gClim.appendChild(cG);
      });
    }

    _updateStates() {
      if (!this._hass) return;

      const configuredRooms = this._config.rooms || ROOM_DEFS;
      let winCount = 0, totalWindows = 0;
      let shutClosedCount = 0, totalShutters = 0;
      let presCount = 0, doorCount = 0;

      configuredRooms.forEach(room => {
        const rDef = findRoomDef(room.id) || ROOM_DEFS.find(x => x.id === room.id) || room;
        const canonicalId = rDef.id || room.id;

        // Window & Contact Sensor state (supports single entity, comma-separated or array)
        let winEntities = [];
        if (Array.isArray(room.window)) {
          winEntities = room.window;
        } else if (typeof room.window === "string" && room.window.trim() !== "") {
          winEntities = room.window.split(",").map(s => s.trim());
        }

        if (winEntities.length > 0 || (rDef.windows && rDef.windows.length > 0)) totalWindows++;
        const isWinOpen = winEntities.some(entId => {
          const ent = this._hass.states[entId];
          return ent && (ent.state === "on" || ent.state === "open");
        });
        if (isWinOpen) winCount++;

        // Door contact sensor
        let doorEntities = [];
        const doorCfg = room.door || room.entities?.door;
        if (Array.isArray(doorCfg)) {
          doorEntities = doorCfg;
        } else if (typeof doorCfg === "string" && doorCfg.trim() !== "") {
          doorEntities = doorCfg.split(",").map(s => s.trim());
        }

        const isDoorOpen = doorEntities.some(entId => {
          const ent = this._hass.states[entId];
          return ent && (ent.state === "on" || ent.state === "open");
        });
        if (isDoorOpen) {
          doorCount++;
          if (poly) {
            poly.setAttribute("fill", "#ef4444");
            poly.setAttribute("fill-opacity", "0.25");
            poly.setAttribute("stroke", "#ef4444");
            poly.setAttribute("stroke-opacity", "0.9");
          }
        }

        const poly = this.shadowRoot.getElementById("poly-" + canonicalId) || this.shadowRoot.getElementById("poly-" + room.id);
        if (poly) {
          poly.setAttribute("fill-opacity", isWinOpen ? "0.28" : "0");
          poly.setAttribute("stroke-opacity", isWinOpen ? "0.85" : "0");
        }

        (rDef.windows || []).forEach((win, idx) => {
          const wEl = this.shadowRoot.getElementById(`window-${canonicalId}-${idx}`) || this.shadowRoot.getElementById(`window-${room.id}-${idx}`);
          if (wEl) {
            wEl.setAttribute("fill-opacity", isWinOpen ? "1" : "0");
            wEl.setAttribute("stroke-opacity", isWinOpen ? "1" : "0");
          }
        });

        // Shutter state
        if ((room.shutter && room.shutter !== "") || (rDef.shutters && rDef.shutters.length > 0)) totalShutters++;
        const shutEntity = (room.shutter && room.shutter !== "") ? this._hass.states[room.shutter] : null;
        const isShutClosed = shutEntity && (shutEntity.state === "closed" || shutEntity.state === "closing");
        if (isShutClosed) shutClosedCount++;

        (rDef.shutters || []).forEach((sh, idx) => {
          const shEl = this.shadowRoot.getElementById(`shutter-${canonicalId}-${idx}`) || this.shadowRoot.getElementById(`shutter-${room.id}-${idx}`);
          if (shEl) {
            shEl.setAttribute("fill-opacity", isShutClosed ? "0.95" : "0");
            shEl.setAttribute("stroke-opacity", isShutClosed ? "1" : "0");
          }
        });

        // Presence state
        const presEntity = (room.presence && room.presence !== "") ? this._hass.states[room.presence] : null;
        const isPresent = presEntity && (presEntity.state === "on" || presEntity.state === "home");
        if (isPresent) presCount++;

        const presEl = this.shadowRoot.getElementById("pres-" + canonicalId) || this.shadowRoot.getElementById("pres-" + room.id);
        if (presEl) {
          presEl.setAttribute("opacity", isPresent ? "1" : "0");
        }

        const presGlow = this.shadowRoot.getElementById("pres-glow-" + canonicalId) || this.shadowRoot.getElementById("pres-glow-" + room.id);
        if (presGlow) {
          presGlow.setAttribute("opacity", isPresent ? "1" : "0");
        }

        // Climate data
        const tempState = (room.temperature && this._hass.states[room.temperature]) ? this._hass.states[room.temperature].state : null;
        const humState = (room.humidity && this._hass.states[room.humidity]) ? this._hass.states[room.humidity].state : null;
        const aqState = (room.air_quality && this._hass.states[room.air_quality]) ? this._hass.states[room.air_quality].state : null;

        const hasTemp = tempState !== null && tempState !== undefined && tempState !== "" && tempState !== "unknown" && tempState !== "unavailable";
        const hasHum = humState !== null && humState !== undefined && humState !== "" && humState !== "unknown" && humState !== "unavailable";
        const hasAnyClimate = hasTemp || hasHum;

        const climTxt = this.shadowRoot.getElementById(`clim-txt-${canonicalId}`) || this.shadowRoot.getElementById(`clim-txt-${room.id}`);
        const aqDot = this.shadowRoot.getElementById(`aq-dot-${canonicalId}`) || this.shadowRoot.getElementById(`aq-dot-${room.id}`);
        const climRect = this.shadowRoot.getElementById(`clim-rect-${canonicalId}`) || this.shadowRoot.getElementById(`clim-rect-${room.id}`);
        const climGroup = this.shadowRoot.getElementById("clim-" + canonicalId) || this.shadowRoot.getElementById("clim-" + room.id);

        let hasAq = false;
        if (aqDot) {
          const aqInfo = parseAirQuality(aqState);
          if (aqInfo) {
            aqDot.setAttribute("fill", aqInfo.color);
            aqDot.style.display = "block";
            hasAq = true;
          } else {
            const hasAqSensor = (room.air_quality && room.air_quality !== "");
            aqDot.style.display = hasAqSensor ? "block" : "none";
            hasAq = hasAqSensor;
          }
        }

        if (climTxt) {
          if (hasTemp && hasHum) {
            const tStr = Math.round(parseFloat(tempState) * 10) / 10 + "°";
            const hStr = Math.round(parseFloat(humState)) + "%";
            climTxt.innerHTML = `${tStr} <tspan fill="#64748b">•</tspan> <tspan fill="#38bdf8">${hStr}</tspan>`;
          } else if (hasTemp) {
            climTxt.textContent = Math.round(parseFloat(tempState) * 10) / 10 + "°";
          } else if (hasHum) {
            climTxt.innerHTML = `<tspan fill="#38bdf8">${Math.round(parseFloat(humState))}%</tspan>`;
          } else {
            climTxt.textContent = "";
          }
        }

        // Adjust rect width dynamically based on content
        if (climRect) {
          const w = (hasTemp && hasHum) ? (hasAq ? 96 : 82) : (hasTemp || hasHum) ? 68 : 34;
          const cx = rDef.cx || 500;
          climRect.setAttribute("width", w);
          climRect.setAttribute("x", cx - (w / 2));
          if (aqDot) aqDot.setAttribute("cx", cx - (w / 2) + 11);
          if (climTxt) climTxt.setAttribute("x", hasAq ? (cx - (w / 2) + 22) : (cx - (w / 2) + 10));
        }

        if (climGroup) {
          climGroup.style.display = (this._showClimate && (hasAnyClimate || hasAq)) ? "block" : "none";
        }
      });

      // 1. Sensore Temperatura Dedicato Casa
      const tempEntId = this._config.temperature || this._config.home_temperature || "sensor.awg_casa_temperatura";
      const chipTemp = this.shadowRoot.getElementById("chip-temp");
      if (chipTemp) {
        const tempState = (tempEntId && this._hass.states[tempEntId]) ? this._hass.states[tempEntId].state : null;
        if (tempState !== null && tempState !== undefined && tempState !== "" && tempState !== "unknown" && tempState !== "unavailable") {
          const tVal = Math.round(parseFloat(tempState) * 10) / 10 + "°";
          chipTemp.innerHTML = `🌡️ <b>${tVal}</b>`;
          chipTemp.style.display = "inline-flex";
          chipTemp.onclick = () => this._handleEntityClick(tempEntId);
        } else {
          chipTemp.style.display = "none";
        }
      }

      // 2. Sensore Umidità Dedicato Casa
      const humEntId = this._config.humidity || this._config.home_humidity || "sensor.awg_casa_umidita";
      const chipHum = this.shadowRoot.getElementById("chip-hum");
      if (chipHum) {
        const humState = (humEntId && this._hass.states[humEntId]) ? this._hass.states[humEntId].state : null;
        if (humState !== null && humState !== undefined && humState !== "" && humState !== "unknown" && humState !== "unavailable") {
          const hVal = Math.round(parseFloat(humState)) + "%";
          chipHum.innerHTML = `💧 <b>${hVal}</b>`;
          chipHum.style.display = "inline-flex";
          chipHum.onclick = () => this._handleEntityClick(humEntId);
        } else {
          chipHum.style.display = "none";
        }
      }

      // 3. Esterno (Opzionale)
      const chipOutdoor = this.shadowRoot.getElementById("chip-outdoor");
      if (chipOutdoor) {
        const outTemp = (this._config.outdoor_temperature && this._hass.states[this._config.outdoor_temperature]) ? this._hass.states[this._config.outdoor_temperature].state : null;
        const outHum = (this._config.outdoor_humidity && this._hass.states[this._config.outdoor_humidity]) ? this._hass.states[this._config.outdoor_humidity].state : null;
        if (outTemp || outHum) {
          const tPart = outTemp ? Math.round(parseFloat(outTemp)*10)/10 + "°" : "";
          const hPart = outHum ? Math.round(parseFloat(outHum)) + "%" : "";
          chipOutdoor.innerHTML = `🌤️ Esterno: <b>${[tPart, hPart].filter(Boolean).join(" • ")}</b>`;
          chipOutdoor.style.display = "inline-flex";
        } else {
          chipOutdoor.style.display = "none";
        }
      }

      // 4. Numero Finestre Aperte / Chiuse
      const chipWin = this.shadowRoot.getElementById("chip-win");
      if (chipWin) {
        const winClosedCount = Math.max(0, totalWindows - winCount);
        if (winCount > 0) {
          chipWin.innerHTML = `🪟 <b>${winCount} Apert${winCount === 1 ? 'a' : 'e'}</b> <span style="opacity:0.65;">(${winClosedCount} chius${winClosedCount === 1 ? 'a' : 'e'})</span>`;
          chipWin.className = "chip active-win";
        } else {
          chipWin.innerHTML = `🪟 0 Aperte <span style="opacity:0.65;">(${totalWindows} chiuse)</span>`;
          chipWin.className = "chip";
        }
      }

      // 5. Numero Tapparelle Chiuse / Aperte
      const chipShut = this.shadowRoot.getElementById("chip-shut");
      if (chipShut) {
        const shutOpenCount = Math.max(0, totalShutters - shutClosedCount);
        if (shutClosedCount > 0) {
          chipShut.innerHTML = `🪟 <b>${shutClosedCount} Chius${shutClosedCount === 1 ? 'a' : 'e'}</b> <span style="opacity:0.65;">(${shutOpenCount} aperte)</span>`;
          chipShut.className = "chip active-shut";
        } else {
          chipShut.innerHTML = `🪟 0 Chiuse <span style="opacity:0.65;">(${totalShutters} aperte)</span>`;
          chipShut.className = "chip";
        }
      }

      // 6. Presenze Rilevate
      const chipPres = this.shadowRoot.getElementById("chip-pres");
      if (chipPres) {
        if (presCount > 0) {
          chipPres.innerHTML = `👤 <b>${presCount} Presenz${presCount === 1 ? 'a' : 'e'}</b>`;
          chipPres.className = "chip active-pres";
        } else {
          chipPres.innerHTML = `👤 0 Presenze`;
          chipPres.className = "chip";
        }
      }

      // 7. Allarme Porta d'Ingresso
      const chipDoor = this.shadowRoot.getElementById("chip-door");
      if (chipDoor) {
        if (doorCount > 0) {
          chipDoor.innerHTML = `🚨 <b>${doorCount} Port${doorCount === 1 ? 'a Aperta' : 'e Aperte'}</b>`;
          chipDoor.style.display = "inline-flex";
        } else {
          chipDoor.style.display = "none";
        }
      }
    }

    _handleEntityClick(entityId) {
      if (!entityId) return;
      const event = new CustomEvent("hass-more-info", {
        bubbles: true,
        composed: true,
        detail: { entityId: entityId }
      });
      this.dispatchEvent(event);
    }

    _handleRoomClick(room) {
      const targetEntity = room.presence || room.window || room.shutter || room.temperature;
      if (targetEntity) {
        const event = new CustomEvent("hass-more-info", {
          bubbles: true,
          composed: true,
          detail: { entityId: targetEntity }
        });
        this.dispatchEvent(event);
      }
    }
  }

  customElements.define("fully-sensored-floorplan-card", FullySensoredFloorplanCard);

  window.customCards = window.customCards || [];
  window.customCards.push({
    type: "fully-sensored-floorplan-card",
    name: "Fully Sensored Floorplan Card (Luxury)",
    description: "Planimetria interattiva moderna con finestre, tapparelle, presenze radianti e clima glassmorphism",
    preview: true,
    documentationURL: "https://github.com/LuigiPzz/fully-sensored-floorplan-card"
  });
})();
