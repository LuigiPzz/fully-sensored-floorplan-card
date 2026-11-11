/**
 * FULLY SENSORED FLOORPLAN CARD - Home Assistant Lovelace Custom Card
 * v0.0.3-alfa - Luxury Dark Architectural Edition
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
    "id": "studio_garage",
    "aliases": [
      "garage"
    ],
    "label": "Studio / Garage",
    "icon": "\ud83d\udce6",
    "entities": {
      "window": "",
      "shutter": "",
      "presence": "binary_sensor.presenza_garage",
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
      "presence": "binary_sensor.presenza_ingresso_cucina",
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
      "presence": "binary_sensor.presenza_ingresso_camere",
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
      "window": "binary_sensor.finestra_balcone",
      "shutter": "cover.tapparella_balcone",
      "presence": "binary_sensor.presenza_balcone",
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
        title: "Planimetria Casa & Clima",
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
        title: "Planimetria Casa",
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
            background: var(--ha-card-background, #0b111e);
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
            background: linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(129, 140, 248, 0.2));
            border: 1px solid rgba(56, 189, 248, 0.35);
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
            background: radial-gradient(ellipse at 50% 25%, #182234 0%, #080d17 100%);
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
            stroke: #38bdf8 !important;
            stroke-width: 1.8px !important;
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
              <span class="card-title">${title}</span>
            </div>
            <div class="chips">
              <span class="chip chip-climate" id="chip-home" style="display:none;"></span>
              <span class="chip chip-climate" id="chip-outdoor" style="display:none;"></span>
              <span class="chip active-door" id="chip-door" style="display:none;">🚨 Porta Aperta</span>
              <span class="chip" id="chip-win">0 Finestre</span>
              <span class="chip" id="chip-shut">0 Chiuse</span>
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

        // 6. Presence Beacon (Animated ripple ring + golden person badge)
        const bG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        bG.setAttribute("id", "pres-" + canonicalId);
        bG.setAttribute("opacity", "0");
        bG.style.pointerEvents = "none";
        bG.style.transition = "opacity 0.4s ease";

        const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ring.setAttribute("class", "beacon-ring");
        ring.setAttribute("cx", cx);
        ring.setAttribute("cy", cy - 10);
        ring.setAttribute("r", "10");
        ring.setAttribute("stroke", "#f59e0b");
        ring.setAttribute("stroke-width", "2");
        ring.setAttribute("fill", "none");
        bG.appendChild(ring);

        const core = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        core.setAttribute("cx", cx);
        core.setAttribute("cy", cy - 10);
        core.setAttribute("r", "9");
        core.setAttribute("fill", "#f59e0b");
        core.setAttribute("filter", "url(#glow-amber)");
        bG.appendChild(core);

        const iconTxt = document.createElementNS("http://www.w3.org/2000/svg", "text");
        iconTxt.setAttribute("x", cx);
        iconTxt.setAttribute("y", cy - 6);
        iconTxt.setAttribute("text-anchor", "middle");
        iconTxt.setAttribute("font-size", "9.5");
        iconTxt.setAttribute("fill", "#0f172a");
        iconTxt.textContent = "👤";
        bG.appendChild(iconTxt);

        gBeacons.appendChild(bG);

        // 7. Labels: Icon + Clean Uppercase Room Title
        const lG = document.createElementNS("http://www.w3.org/2000/svg", "g");
        lG.style.pointerEvents = "none";

        const icoEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
        icoEl.setAttribute("x", cx);
        icoEl.setAttribute("y", cy - 24);
        icoEl.setAttribute("text-anchor", "middle");
        icoEl.setAttribute("font-size", "14");
        icoEl.setAttribute("filter", "url(#shadow-text)");
        icoEl.textContent = icon;
        lG.appendChild(icoEl);

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
        bgRect.setAttribute("fill", "rgba(15, 23, 42, 0.88)");
        bgRect.setAttribute("stroke", "rgba(255, 255, 255, 0.16)");
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
      let winCount = 0, shutCount = 0, presCount = 0, doorCount = 0;

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
        const shutEntity = (room.shutter && room.shutter !== "") ? this._hass.states[room.shutter] : null;
        const isShutClosed = shutEntity && (shutEntity.state === "closed" || shutEntity.state === "closing");
        if (isShutClosed) shutCount++;

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

      // Global Header Chips
      const chipHome = this.shadowRoot.getElementById("chip-home");
      if (chipHome) {
        const homeTemp = (this._config.home_temperature && this._hass.states[this._config.home_temperature]) ? this._hass.states[this._config.home_temperature].state : null;
        const homeHum = (this._config.home_humidity && this._hass.states[this._config.home_humidity]) ? this._hass.states[this._config.home_humidity].state : null;
        if (homeTemp || homeHum) {
          const tPart = homeTemp ? Math.round(parseFloat(homeTemp)*10)/10 + "°" : "";
          const hPart = homeHum ? Math.round(parseFloat(homeHum)) + "%" : "";
          chipHome.innerHTML = `🏠 Casa: <b>${[tPart, hPart].filter(Boolean).join(" • ")}</b>`;
          chipHome.style.display = "inline-flex";
        } else {
          chipHome.style.display = "none";
        }
      }

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

      const chipWin = this.shadowRoot.getElementById("chip-win");
      const chipShut = this.shadowRoot.getElementById("chip-shut");
      const chipPres = this.shadowRoot.getElementById("chip-pres");

      if (chipWin) {
        chipWin.textContent = `${winCount} Finestr${winCount === 1 ? 'a' : 'e'}`;
        chipWin.className = `chip ${winCount > 0 ? 'active-win' : ''}`;
      }
      if (chipShut) {
        chipShut.textContent = `${shutCount} Chius${shutCount === 1 ? 'a' : 'e'}`;
        chipShut.className = `chip ${shutCount > 0 ? 'active-shut' : ''}`;
      }
      if (chipPres) {
        chipPres.textContent = `${presCount} Presenz${presCount === 1 ? 'a' : 'e'}`;
        chipPres.className = `chip ${presCount > 0 ? 'active-pres' : ''}`;
      }

      const chipDoor = this.shadowRoot.getElementById("chip-door");
      if (chipDoor) {
        if (doorCount > 0) {
          chipDoor.textContent = `🚨 ${doorCount} Port${doorCount === 1 ? 'a Aperta' : 'e Aperte'}`;
          chipDoor.style.display = "inline-flex";
        } else {
          chipDoor.style.display = "none";
        }
      }
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
