---
title: Time-bin Encoded Free-space QKD Experiment 
description: Time-bin encoding quantum key distribution in free-space horizontal links during nighttime and daytime
---


### Background

Quantum Key Distribution (QKD) enables **unbreakable encryption** by relying on the principles of quantum mechanics. While **fiber-based QKD** is already in advanced deployment in metropolitan networks, **free-space QKD** is essential for **satellite-to-ground communication** and for building the **global quantum internet**.

However, these two types of QKD use **different technologies**:

- **Fiber QKD** uses:
  - **C-band infrared light** (1550 nm) for low-loss in silica fibers.
  - **Time-bin encoding**, as polarization can fluctuate in fibers.

- **Free-space QKD** uses:
  - **Visible or near-infrared light** for better beam divergence control.
  - **Polarization encoding**, since it's robust against atmospheric effects.

This creates a **compatibility problem** between ground-based fiber users and satellite-based free-space links.

---

### What the Original Paper Tried to Achieve

> **Paper Title:**  
> *Time-bin encoding quantum key distribution in free-space horizontal links during nighttime and daytime*  
> **Authors:** Sebastiano Cocchi et al.  
> **arXiv:** [2501.08891v1](https://arxiv.org/abs/2501.08891)

#### Objective:
To demonstrate that **time-bin encoding**, typically used in fibers, can be reliably used in **horizontal free-space channels**, allowing **direct interoperability** between **fiber networks and satellite free-space links** using the **same protocol and wavelength**.

#### Key Highlights from the Paper:
- Implemented time-bin QKD using a **three-state BB84 protocol** with **one-decoy method**.
- Operated at **C-band (1558.98 nm)** using **horizontal free-space links**:
  - One **50-meter link** (lab-to-lab).
  - One **500-meter link** (museum-to-lab).
- Achieved high key rates:
  - **793 kbps** over 50m.
  - **40 kbps** over 500m.
- Used a **photonic integrated circuit** and **adaptive optics** (deformable mirrors) for beam stabilization.

---

### Our Experiment – Replication with a Twist

We replicated this setup in a simulated **open research lab** environment, following all experimental design elements from the paper but with some crazy chnages. This tests the protocol’s robustness in worst-case optical loss conditions—useful for **longer-range** or **deep-space QKD** feasibility studies.


#### Experimental Setup Overview

| **Component**                   | **Description**                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------- |
| **Encoding Scheme**             | Time-bin encoding with 800 ps delay between bins using Intensity Modulator (IM)  |
| **Quantum Signal Laser**        | 1558.98 nm (C-band), Weak Coherent Pulse Laser, 1680 ps pulse width              |
| **Synchronization Laser**       | 1560.61 nm Clock Laser, 10 MHz (50 m), 145 kHz (500 m)                           |
| **Beacon Laser**                | 1310.1 nm for beam alignment                                                     |
| **Pulse Rate**                  | 595 MHz pulse repetition (from laser), modulated at 1.2 GHz via FPGA             |
| **Time-bin Encoder**            | Intensity Modulator with ±12V driver, 800 ps delay                               |
| **Attenuation**                 | Fixed (55 dB) + VOA (15 dB) + Beam Splitter (20 dB) = **Total: 90 dB**           |
| **Photonic Integrated Circuit** | Borosilicate-glass with ion-exchange waveguide, Peltier + PID stabilized         |
| **Measurement – X basis**       | PIC-based IMZI with 800 ps delay                                                 |
| **Measurement – Z basis**       | Direct arrival time with SNSPD (efficiency: 90%)                                 |
| **Detectors**                   | SNSPDs placed after IMZI and Beam Splitter                                       |
| **Receiver Optics**             | Galilean Telescope (Thorlabs GBE10-C, 10× mag, 35 mm lens)                       |
| **Beam Alignment**              | Deformable Mirror + PID Controller (controlled using FQD)                        |
| **Position Detector**           | Thorlabs PDQ30C (FQD) — 0.75 μm resolution, 3.05 mm depth                        |
| **Signal Coupling**             | Fiber Collimator (Thorlabs C80APC-C), 15 mm beam diameter                        |
| **Fiber Link**                  | Single Mode Fiber from telescope to detection unit                               |
| **Synchronization Recovery**    | Photodiode extracts clock from CS via DWDM and HFWDM                             |
| **Wavelength Filtering**        | DWDM (1558.98 + 1560.61 nm), HFWDM (adds 1310.1 nm)                              |
| **Clocking Electronics**        | FPGA (1 V output, 1.2 GHz), Driver Circuit (±12V swing to IM)                    |
| **Time Tagging**                | Time Tagger digitizes detector clicks for analysis                               |
| **Software Stack**              | Computes: QBER\_X, QBER\_Z, Visibility, Secure Key Rate (block size: 10⁷ pulses) |

---

### Mathematical Formulas Used

#### Secure Key Rate in Finite Key Regime:

$$
\text{SKR} = R_{\text{sifted}} \cdot \left[1 - f_{\text{EC}} \cdot H_2(\text{QBER}_Z) - H_2(\text{QBER}_X)\right]
$$

Where:

- $$ H_2(p) = -p \log_2 p - (1 - p) \log_2(1 - p) $$  
  *Binary entropy function*

- $$ f_{\text{EC}} = 1.1 $$  
  *Error correction inefficiency*

- QBER values come from measurement basis statistics.

---

### All Component We have used

These components are created using VIEW AI (Research Assistant in ORL)
```json
{
  "DWDM": {
    "type": "Dense Wavelength Division Multiplexer",
    "combined_wavelengths": [1558.98, 1560.61]
  },
  "HFWDM": {
    "type": "High-Frequency WDM",
    "combined_wavelengths": [1310.1, 1558.98, 1560.61]
  },
  "CW Laser": {
    "linewidth": "< 100 kHz",
    "wavelength": 1558.98
  },
  "Beacon Laser (BL)": {
    "type": "CW laser",
    "wavelength": 1310.1
  },
  "Clock Signal Laser (CS)": {
    "type": "SFP pulsed laser",
    "wavelength": 1560.61,
    "frequencies": {
      "50m_link": "10 MHz",
      "500m_link": "145 kHz"
    }
  },
  "FPGA Pulse Generator": {
    "frequency": 1.2,
    "signal_type": "Electrical drive for IM",
    "voltage_range": "+/-12V (amplified)"
  },
  "Driver Circuit": {
    "function": "Amplifies FPGA output to Vπ of IM",
    "input_voltage": 1,
    "output_voltage": "+/-12V"
  },
  "Intensity Modulator": {
    "type": "Amplitude Modulator",
    "delay": 800,
    "material": "Lithium Niobate"
  },
  "Fiber Collimator": {
    "model": "Thorlabs C80APC-C",
    "diameter_mm": 42.5,
    "output_beam_diameter_mm": 15
  },
  "Galilean Telescope": {
    "model": "Thorlabs GBE10-C",
    "magnification": 10,
    "lens_diameter_mm": 35
  },
  "Deformable Mirror (DFM)": {
    "type": "Tip-Tilt Mirror",
    "control": "Closed-loop PID",
    "correction": "Beam wandering"
  },
  "Dichroic Mirror (DM)": {
    "function": "Separates BL from QS/CS"
  },
  "Photodiode (PD)": {
    "function": "Clock extraction from CS",
    "placement": "After DWDM"
  },
  "Time-Tagger Unit": {
    "input": "Clock from PD",
    "function": "Assign timestamps to SNSPD clicks"
  },
  "Four-Quadrant Detector (FQD)": {
    "model": "Thorlabs PDQ30C",
    "depth_mm": 3.05,
    "function": "Track beacon laser position",
    "resolution_um": 0.75
  },
  "Fixed Attenuator": {
    "attenuation": "Static; part of 75 dB total attenuation"
  },
  "Variable Optical Attenuator": {
    "attenuation": "Adjustable",
    "integration": "Fiber-integrated",
    "max_attenuation": 75
  },
  "SNSPD Z-basis": {
    "type": "Superconducting Nanowire Detector",
    "connected_to": "First output port of BS"
  },
  "SNSPD X-basis": {
    "type": "Superconducting Nanowire Detector",
    "connected_to": "IMZI output"
  },
  "PIC Interferometer (IMZI)": {
    "delay_ps": 800,
    "material": "Borosilicate glass matrix",
    "integration": "Edge-coupled SMF",
    "stabilization": "Peltier + PID",
    "waveguide_tech": "Ion-exchange"
  },
  "Fiber Polarization Controller (FPC)": {
    "function": "Compensate for PIC polarization dependency"
  },
  "Beam Splitter (BS)": {
    "type": "50:50",
    "function": "Bob’s random basis choice"
  },
  "Single Mode Fiber (SMF)": {
    "function": "Captures aligned light from FS channel",
    "wavelength": 1550
  },
  "QKD Software": {
    "formula": "Efficient BB84 with one-decoy, finite-key regime",
    "block_size": 10000000,
    "calculates": [
      "QBER_Z",
      "QBER_X",
      "Visibility",
      "SKR"
    ]
  }
}


```

### Results we got

```json
{
  "loss_db": 90.0002,
  "scintillation_index": 0.0000040727,
  "QBER_Z": 0.0051,
  "QBER_X": 0.01,
  "Visibility": 0.98,
  "Secure_Key_Rate_per_Block": 0
}

```

### Comparison with Real Experiment

| **Metric**              | **Our Setup (90 dB)** | **Paper (50 m link)** | **Paper (500 m link)** |
| ----------------------- | --------------------- | --------------------- | ---------------------- |
| **Attenuation**         | **90.0 dB**           | 7 dB                  | 16–17 dB               |
| **Raw Sifted Key Rate** | Near 0 bps            | \~800 kbps            | \~40 kbps              |
| **Secure Key Rate**     | **0 bps**             | 709–793 kbps          | 35–40 kbps             |
| **QBER Z / X**          | 0.51% / 1%            | Low / Low             | Low / Moderate         |
| **Visibility**          | 98%                   | 94%                   | 85%                    |
| **Num. of Pulses**      | 10 million            | Continuous            | Continuous             |

---

### Reason for Discrepancy

Despite decent **QBER** and **visibility**, our secure key rate is **0**. Here's why:

| **Factor**                   | **Impact** |
|-----------------------------|------------|
| **Extreme Attenuation (90 dB)** | The photon arrival probability is drastically low, leading to very few detection events. Even with a 10 million pulse simulation, only a tiny fraction of signals are received — which is insufficient to generate sifted keys reliably. |
| **Sifted Key Size Too Small** | Finite-key security protocols require minimum detection thresholds to apply privacy amplification. With low detections, the statistical fluctuations dominate, nullifying the key rate. |
| **Block Size Dependency**     | This setup uses a block size of `10⁷` pulses. At high losses, may need longer runtime or higher repetition rate to accumulate enough detections within a block. |
| **Detector Timing + Dark Counts** | Even with good visibility, timing jitter and background noise (dark counts) at very low signal levels can degrade effective SNR, contributing to 0 SKR. |

---

### Suggestions for Future Improvement

- Reduce attenuation to values (e.g., **< 70 dB**) for good space-based scenarios.
- Increase the number of simulation pulses beyond **10 million**.
- Consider using **decoy-state analysis** with **adaptive block sizes** for better SKR estimation under high loss.

---

### Running This in Open Research Laboratory

To run this QKD experiment within the **Open Research Laboratory**, follow these steps:

1. **Go to** the [Open Research Laboratory](https://openresearchlaboratory.necrozmalabs.com) platform (or your deployed instance).
2. Click on the **"Workflow"** tab in the sidebar.
3. Find and click on the experiment titled:  
   **"Time-bin Encoded Free-space QKD Experiment"**
4. Click the **"Enter Workflow"** button on the right-hand side.
5. Once inside, you’ll see the preconfigured simulation pipeline with all components:
   - Photon source
   - Attenuation stage
   - Interferometer (IMZI)
   - Single-photon detectors
6. Click **"Run Workflow"** to start the simulation.
7. Results including QBER, SKR, and visibility will be displayed in the results panel.

> 💡 Tip: You can modify parameters like attenuation, visibility, or pulse rate before running, to explore how they impact the secure key rate.


### Conclusion

Despite achieving low QBER and high visibility (indicating clean interference and good alignment), the secure key rate dropped to zero due to extremely high total loss (90 dB). This shows:

- Time-bin encoding can survive under harsh conditions, but:
- Detection probability becomes too low for a reliable key rate in extreme attenuation scenarios.
- This aligns with the principles of finite-key security: if too few bits are received, no secret key can be distilled, regardless of quality.
---

### Citation

Cocchi, S., Ribezzo, D., Guarda, G., Centorrino, P., Occhipinti, T., Zavatta, A., & Bacco, D. (2025). *Time-bin encoding quantum key distribution in free-space horizontal links during nighttime and daytime*. arXiv preprint arXiv:2501.08891v1. [https://arxiv.org/abs/2501.08891](https://arxiv.org/abs/2501.08891)
