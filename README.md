# FS25 Management Portal: Project AURA (Advanced Unified Resource Analyzer) - [W.I.P]

![Project Status](https://img.shields.io/badge/Status-Prototype-cyan?style=flat-square) ![FS25](https://img.shields.io/badge/Game-Farming%20Simulator%2025-green?style=flat-square) ![Mommers Co](https://img.shields.io/badge/Design-Mommers%20Co-00f3ff?style=flat-square)

## 🚀 Overview

The **FS25 Management Portal (Project AURA)** is the definitive, next-generation farm management ecosystem for Farming Simulator 25. Built with a futuristic, data-driven aesthetic inspired by **Mommers Co Branding**, AURA transcends traditional modding tools by offering a professional-grade "Command Center" experience.

It connects a high-performance **Lua Game Mod** with a **Modern Web Application** to provide real-time oversight, advanced agronomic planning, and deep financial analysis for both singleplayer and multiplayer servers.

---

## 💻 Web Portal: The Management Portal

The web interface utilizes a **Modular, Dark-Mode UI** focused on high-contrast data visualization and "kinetic" interactions.

### 1. 🏠 Holo-Dashboard (Farm Management Portal)
* **Operational Velocity Index (OVI):** A composite score (0-100) reflecting overall farm efficiency, blending time usage, profit margin, and active machine utilization.
* **Live Financials:** Real-time tracking of cash flow, total debt, and land value with depreciation simulation.
* **Kinetic Weather:** Integrated forecast timeline showing rain/snow windows relative to crop growth stages.
* **Priority Alerts:** "Top 5" critical actions (e.g., "Loan Payment Due," "Tractor Fuel < 10%").

### 2. 🗺️ Geospatial Intelligence (GIS Map)
* **Layered Visualizations:**
    * **Yield Potential:** Heatmaps based on historical harvest data.
    * **Soil Composition:** pH, Nitrogen, and moisture levels (simulated from FS25 data).
    * **Growth Stage:** Real-time crop progress overlay.
* **Field History:** A permanent log of every liter of seed, fertilizer, and lime applied to specific coordinates.

### 3. ✅ Operations Kanban & Tasks
* **Kanban Workflow:** Drag-and-drop tasks between "To Do," "In Progress," and "Done."
* **Recurring Checklists:** Automated generation of daily tasks (e.g., "Feed Pigs," "Check Greenhouse Water").
* **Multiplayer Assignment:** Assign tasks to specific users (e.g., "Commander Mommer") or Roles (e.g., "Logistics").

### 4. 📝 Smart Knowledge Hub
* **Global Scratchpad:** A persistent, quick-access notes widget available on every screen.
* **Contextual Asset Notes:** Attach permanent maintenance notes to specific tractors (e.g., "Clutch slips in 4th gear") or fields (e.g., "Avoid rock pile in North corner").
* **Wiki Integration:** Built-in storage for server rules, mod manuals, and crop rotation guides.

### 5. 🚜 Fleet & Maintenance
* **Telematics:** Live engine RPM, fuel levels, and location tracking.
* **Predictive Maintenance:** Schedules service based on engine hours rather than just generic "damage" percentages.

---

## 🛠️ Mod Integration (Technical Arch)

The bridge between FS25 and the Web Portal is built on robust, low-latency protocols.

### 1. The Core Mod (`FS25_AuraConnector`)
* **Language:** Optimized Lua.
* **Communication:**
    * **WebSocket/HTTP Server:** Runs locally within the game client/server to push state changes immediately.
    * **Fallback Mode:** File-based syncing (XML/JSON) for dedicated servers where port forwarding is restricted.
* **Security:** Uses a revocable **Bearer Token** system to ensure only authorized web clients can read/write data.

### 2. Data Payloads
* **High Frequency (1Hz):** Vehicle coordinates, fuel, active tool state.
* **Low Frequency (Event-based):** Silo inventory changes, animal birth/death, field growth transitions, financial transactions.

---

## 🎨 Design System: "Mommers Co Future"

The UI follows strict design guidelines to ensure a premium feel:

* **Palette:**
    * Background: Deep Space Blue (`#0b0c15`)
    * Panels: Glassmorphism (`rgba(19, 21, 31, 0.7)`)
    * Accents: Cyber Cyan (`#00f3ff`) & Emerald Success (`#00ff9d`)
* **Typography:** `Rajdhani` for headers (Technical/Sci-Fi), `Inter` for body copy (Readability), `JetBrains Mono` for data (Precision).
* **Visuals:** Subtle glow effects, holographic borders, and "Glitch" animations on interaction.

---

## 📦 Installation (Projected)

1.  **Install Mod:** Place `FS25_AuraConnector.zip` in your `My Games/FarmingSimulator2025/mods` folder.
2.  **Launch Game:** Enable the mod on your savegame.
3.  **Link Account:** Open the in-game menu (Alt + A), generate a **Sync Token**.
4.  **Connect Web App:** Enter the token on the AURA Web Portal to begin the uplink.

---

*Property of Mommers Co. All Rights Reserved.*