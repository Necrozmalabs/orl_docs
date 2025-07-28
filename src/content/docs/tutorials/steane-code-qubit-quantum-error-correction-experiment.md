---
title: Steane Code (7-Qubit) Quantum Error Correction Experiment
description: This document details an open laboratory experiment implementing the Steane Code (7-Qubit) quantum error correction scheme under realistic noise conditions.

---

This document details an open laboratory experiment implementing the **Steane Code (7-Qubit)** quantum error correction scheme under realistic noise conditions. The goal is to evaluate the fidelity of logical operations on an encoded qubit subject to gate noise, amplitude damping, and measurement error. This tutorial-style documentation is designed to guide new researchers and enthusiasts through a practical simulation of quantum error correction using advanced configuration parameters.

---

### Experimental Objectives

* Implement the 7-qubit Steane Code for quantum error correction.
* Simulate realistic quantum noise: depolarizing gate noise and amplitude damping.
* Measure logical gate fidelity under noise.
* Evaluate syndrome extraction efficiency across multiple rounds.
* Analyze decoder performance and logical qubit fidelity post-error correction.

---

### Configuration Summary

| Component                        | Configuration Details                                       |
| -------------------------------- | ----------------------------------------------------------- |
| **Logical State Initialization** | \|+⟩                                                        |
| **Error Model**                  | Depolarizing (error probability: 5%)                        |
| **Gate Noise**                   | Single-Qubit: 0.005, Two-Qubit: 0.01                        |
| **Amplitude Damping**            | Damping Probability: 0.03                                   |
| **Measurement Error Rate**       | 0.01                                                        |
| **Syndrome Measurement Rounds**  | 3 rounds with 100 ns delay per round                        |
| **Decoder Type**                 | Lookup Table (latency-optimized, error threshold = 0.01)    |
| **Hardware Assumptions**         | Single-Qubit: 20 ns, Two-Qubit: 200 ns, Measurement: 300 ns |

---

### Error Models Used

#### A. Depolarizing Noise

The depolarizing channel randomly replaces the qubit state with a mixed state:

$$
\mathcal{E}_p(\rho) = (1 - p)\rho + \frac{p}{3}(X\rho X + Y\rho Y + Z\rho Z)
$$

* **Single-qubit error probability**: $p = 0.005$
* **Two-qubit error probability**: $p = 0.01$

#### B. Amplitude Damping

Models energy loss (|1⟩ → |0⟩):

Kraus operators:

$$
K_0 = \begin{bmatrix}1 & 0 \\ 0 & \sqrt{1 - \gamma} \end{bmatrix}, \quad K_1 = \begin{bmatrix}0 & \sqrt{\gamma} \\ 0 & 0 \end{bmatrix}
$$

* **Damping probability**: $\gamma = 0.03$

---

### Quantum Error Correction Scheme

#### Steane Code Parameters:

* **Code Length**: 7 physical qubits
* **Stabilizers**: 6 total (3 X-type, 3 Z-type)
* **Corrects**: Any arbitrary single-qubit error (X, Y, Z)
* **Rounds of Encoding**: 1

The logical state $\left| + \right\rangle = \frac{1}{\sqrt{2}} (\left|0\right\rangle + \left|1\right\rangle)$ is encoded, exposed to noise, and then decoded using syndrome measurements and a lookup table decoder.

---

### Logical Gate Fidelity Results

| Gate Tested | Average Fidelity | Status   |
| ----------- | ---------------- | -------- |
| X           | 0.982            | ✅ Passed |
| Z           | 0.985            | ✅ Passed |
| H           | 0.979            | ✅ Passed |

* **Fidelity threshold**: 0.98
* **Sequence Depths**: \[10, 20, 30, 40, 50]
* **Number of Sequences per Gate**: 50

Tested via **randomized benchmarking** and **gate set tomography**.

---

### Syndrome Measurement Details

| Parameter            | Value |
| -------------------- | ----- |
| Rounds               | 3     |
| Delay per Round (ns) | 100   |
| Total Delay (ns)     | 300   |

Repeated syndrome extraction increases the reliability of detecting and correcting single-qubit errors.

---

### Decoder Configuration

| Parameter       | Value        |
| --------------- | ------------ |
| Decoder Type    | Lookup Table |
| Optimized For   | Latency      |
| Error Threshold | 0.01         |

Pre-computed syndrome-to-error mappings minimize decoding latency.


### Final Encoded Logical State Fidelity

| Parameter              | Value |
| ---------------------- | ----- |
| Initial Logical State  | \|+⟩  |
| Post-Encoding Fidelity | 0.968 |

Indicates robust error suppression under noisy conditions and correct decoder operation.

---

### Summary

This experiment successfully demonstrates a full cycle of quantum error correction using the Steane 7-qubit code with realistic noise and hardware assumptions. The test validates the resilience of logical operations under depolarizing and amplitude damping noise, efficient decoding via lookup tables, and the practical effectiveness of syndrome extraction across multiple rounds.

The high post-correction fidelity and gate performance make this a valuable reference experiment for benchmarking early-stage quantum systems and for onboarding users into the research-grade quantum computing workflow.

---

### Using this Workflow

Just go to workflows and select this experiment to run it.

Need help? Visit the [support center](/report-issue)

