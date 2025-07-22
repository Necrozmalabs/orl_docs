---
title: Quantum Key Distribution using B448 Protocol 
description: To implement and simulate a Quantum Key Distribution (QKD) experiment based on the B448 protocol using open research laboratory
---

### **Objective**

To implement and simulate a Quantum Key Distribution (QKD) experiment based on the B448 protocol using open research laboratory, demonstrating secure key exchange through polarization encoding of weak coherent pulses over a free-space optical channel.

---

### Components lists and configurations

| **Component**                   | **Inputs / Properties**                                                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **448 nm Pulsed Laser Source**  | Power: `0.0005 mW`<br>Wavelength: `448 nm`<br>Pulse Width: `100 ps`<br>Repetition Rate: `10 MHz`                                                            |
| **Pulse Generator**             | Amplitude: `5 V`<br>Pulse Shape: `Gaussian`<br>Rise Time: `50 ps`<br>Frequency: `20 MHz`                                                                    |
| **Lithium Niobate Modulator**   | Modulation: `ON/OFF Keying`<br>Extinction Ratio: `30 dB`<br>Insertion Loss: `1.5 dB`<br>Modulation Frequency: `10 GHz`<br>Synchronized with pulse generator |
| **Variable Optical Attenuator** | Wavelength: `1550 nm`<br>Attenuation: `30 dB`                                                                                                               |
| **Half-Wave Plate (HWP)**       | Wavelength: `1558 nm`<br>Rotation Angle: `22.5°`<br>Transmission Efficiency: `99.5%`                                                                        |
| **Linear Polarizer**            | Angle: `0° or 45°` (sets rectilinear or diagonal basis)                                                                                                     |
| **Focusing Lens / Collimator**  | Diameter: `25.4 mm`<br>Position: `100 mm`<br>Wavelength: `1550 nm`<br>Focal Length: `50 mm`                                                                 |
| **Free-Space Optical Channel**  | Distance: `1 km`<br>Atmospheric Loss: `3 dB/km`<br>Turbulence: `Moderate`<br>Pointing Error: `0.5 dB`                                                       |
| **Polarizing Beam Splitter**    | Wavelength: `800 nm`<br>Extinction Ratio: `1000:1`<br>Power Handling: `500 mW`                                                                              |
| **SPAD Detectors (×2)**         | Detection Efficiency: `70%`<br>Dark Count Rate: `1000 cps`<br>Timing Resolution: `50 ps`<br>Afterpulsing Probability: `1%`                                  |
| **Time-to-Digital Converter**   | Resolution: `10 ps`<br>Dead Time: `5 ns`<br>Channels: `4`<br>Range: `1000 ns`                                                                               |

### **Experimental Procedure**

1. Photon Generation
   The 448 nm laser emits weak coherent pulses with 100 ps duration at 10 MHz. The pulse generator shapes and triggers the modulator for random bit encoding.

2. Polarization Encoding
The LiNbO₃ modulator gates light based on a quantum bit stream. HWPs rotate polarization by 0°, 22.5°, etc. Polarizers define the quantum basis: 0° (H) or 45° (D).

3. Transmission
The attenuated pulses propagate through a 1 km free-space optical channel with moderate turbulence and 3 dB/km atmospheric loss. A lens collimates the beam.

4. Measurement (Bob)
PBS directs photons into SPADs according to polarization. Detectors timestamp the events. Bob’s basis is randomly set using HWPs and polarizers.

5. Post-processing
Basis reconciliation, QBER calculation, error correction, and privacy amplification are applied over a classical authenticated channel.
---

### **Results**

| **Metric**            | **Value**                    |
| --------------------- | ---------------------------- |
| QBER                  | `~0.0226`                    |
| Raw Key Rate          | `4.86 Mbps`                  |
| Secure Key Rate       | `4.64 Mbps`                  |
| Detected Photons      | `486` (in simulation window) |
| Channel Transmittance | `0.4467`                     |
| System Efficiency     | `0.2034`                     |
| Photons per Pulse     | `0.001126`                   |
| Input Laser Power     | `0.0005 mW`                  |
| Attenuated Power      | `~5 × 10⁻⁹ mW`               |


---

### **Justification of Results**
* Low QBER (~2.26%)
Caused by moderate turbulence, detector afterpulsing, and optical misalignment—still within secure QKD tolerance.

* Key Rates (Raw: 4.86 Mbps, Secure: 4.64 Mbps)
Matches expectations given mean photon number, detector efficiency, and channel loss.

* Photon Budget
Mean photon number per pulse (μ ≈ 0.0011) ensures security against photon-number splitting attacks.

* System Efficiency (20.3%)
Includes modulator insertion loss, collimator transmission, PBS loss, and detector quantum efficiency.


### **Conclusion**

This simulated QKD experiment using the B448 protocol demonstrates:

* Polarization-encoded secure communication over a lossy and turbulent free-space link,
* Effective use of standard quantum optics components,
* Practical key rates and low QBER under realistic lab settings.

The results validate the effectiveness of the B448 protocol for short-range secure quantum communication using commercially available components in a virtual research laboratory.
