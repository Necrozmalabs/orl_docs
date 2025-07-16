---
title: Quantum Key Distribution 
description: Build and simulate customizable QKD protocols with defined parameters, channel noise, and key measurement.
---


This tutorial guides you through building and simulating a **Quantum Key Distribution (QKD)** protocol in the Necrozma Quantum Lab. You will use various modular components to customize the protocol, evaluate its performance, and simulate quantum network transmission.

> All components in this tutorial have a standard credit cost of **8**.

The workflow you'll build simulates a **polarization-based QKD system** with:
- Signal attenuation
- Weak coherent pulses
- Quantum state encoding
- Channel noise
- Detection at the receiver
- Final key storage

---

## Objective

To simulate a basic QKD protocol with realistic noise, attenuation, and encoding mechanisms using the following configuration:

```json
{
  "Attenuator": { "attenuation": 90 },
  "Bob Measurement": { "basis": "Z", "detector_efficiency": 0.9 },
  "Quantum Channel": { "loss_db": 3, "noise_model": "depolarizing" },
  "Weak Coherent Pulse Laser": {
    "wavelength": 1550,
    "pulse_width": 55,
    "average_photon_number": 0.4,
    "pulse_repetition_rate": 50
  },
  "Polarization Encoder (Alice)": {
    "hwp_angle": 22.5,
    "qwp_angle": 45,
    "motorized_control": "Manual"
  }
}
````

---

## Workflow Components & Configuration

### 1. **Weak Coherent Pulse Laser**

This laser emits low-intensity light pulses suitable for QKD. The pulse intensity is governed by the **average photon number** μ.

#### Parameters:

* Wavelength (λ): **1550 nm**
* Pulse Width (τ): **55 ps**
* Average Photon Number (μ): **0.4**
* Pulse Repetition Rate: **50 MHz**

> **Photon emission follows a Poisson distribution:**
>
> $P(n) = \frac{μ^n e^{-μ}}{n!}$
> where $P(n)$ is the probability of emitting *n* photons per pulse.

---

### 2. **Attenuator**

Controls signal intensity to limit multiphoton events and simulate fiber loss.

#### Parameters:

* Attenuation: **90 dB**

> **Attenuated Power Equation:**
>
> $P_{\text{out}} = P_{\text{in}} \cdot 10^{-\frac{\text{Attenuation (dB)}}{10}}$

This results in a very low output photon rate suitable for QKD.

---

### 3. **Polarization Encoder (Alice)**

Applies waveplates to encode qubits into polarization states for transmission.

#### Parameters:

* Half-Wave Plate (HWP) angle: **22.5°**
* Quarter-Wave Plate (QWP) angle: **45°**
* Control: **Manual**

> These angles allow encoding into superposition states, such as:
>
> $|+\rangle = \frac{1}{\sqrt{2}}(|H\rangle + |V\rangle)$

---

### 4. **Quantum Channel**

Simulates optical fiber with configurable loss and noise.

#### Parameters:

* Loss: **3 dB**
* Noise Model: **Depolarizing**

> **Depolarizing Noise Model:**
>
> $ρ \rightarrow (1 - p)ρ + \frac{p}{3}(XρX + YρY + ZρZ)$
> where $p$ is the depolarizing probability related to channel quality.

---

### 5. **Bob Measurement**

Measures the incoming qubits in a specific basis.

#### Parameters:

* Measurement Basis: **Z-basis** (|0⟩, |1⟩)
* Detector Efficiency: **90%**

> Realistic detectors miss some photons.
> Effective detection rate =
> $R = η \cdot T \cdot μ \cdot f$
> where:
>
> * $η$: detector efficiency
> * $T$: channel transmission
> * $μ$: average photon number
> * $f$: pulse repetition rate

---

### 6. **Quantum Key Storage**

Stores the final key after post-processing (reconciliation + privacy amplification).

This component finalizes the secure key and prepares it for usage or export.

---

## Step-by-Step Instructions

### Step 1: Launch the Quantum Lab

Open the **Quantum Lab** from the Necrozma dashboard.

### Step 2: Create a New Experiment

Click **"+ New Experiment"** and select the **Quantum Communication** environment.

### Step 3: Add Components

Manually or with **View AI**, add the following components in this order:

* Weak Coherent Pulse Laser
* Attenuator
* Polarization Encoder (Alice)
* Quantum Channel
* Bob Measurement
* Quantum Key Storage

> You can ask View AI:

### Step 4: Configure Parameters

Input the values listed above into each component’s settings panel.

### Step 5: Provide Research Description

For best accuracy with View AI, enter a research description like:

> *“Simulating BB84 with a depolarizing channel and single-photon detection in Z-basis. Photon number = 0.4, 3 dB loss. Target: evaluate raw key rate.”*

### Step 6: Run the Simulation

Start the simulation. Credits will be deducted per component. Output graphs, detection stats, and key generation rates will be shown.

---

## Expected Output

* Polarization histograms at Bob’s detector
* Raw key generation rate and error rate
* Photon loss rate over the channel
* Final key bits stored in **Quantum Key Storage**

---

## Tips

* Use **Decoy States** if you're testing against PNS attacks.
* You can chain workflows to simulate full QKD protocols with **error correction** and **privacy amplification**.
* Save and export keys for further cryptographic processing.

---

## Conclusion

This tutorial covered how to build a working QKD system using configurable components in Necrozma Quantum Lab. With precise values and customizable parameters, you can simulate realistic quantum communication protocols and evaluate their performance under various physical conditions.

Need help? Visit the [support center](/report-issue)

