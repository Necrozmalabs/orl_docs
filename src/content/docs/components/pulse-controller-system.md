---
title: Virtual Pulse Controller
description: High-level architecture and working of the virtual pulse controller for quantum systems.
---

The **Virtual Pulse Controller** (VPC) is a simulated quantum control module designed to generate, modulate, and visualize quantum pulses (like Gaussian, Square, DRAG) applied to qubits. It enables the **study of qubit evolution under time-dependent Hamiltonians** without requiring physical hardware.

## Objectives

- Simulate qubit state evolution under different pulse sequences
- Test and optimize quantum gate fidelities
- Visualize qubit dynamics on the Bloch sphere
- Enable experimentation with different qubit types (transmon, flux, charge)
- Support Rabi and Ramsey experiments virtually


## Architecture

```plaintext
┌────────────────────────────┐
│  User Input (Pulse Config) │
└────────────┬───────────────┘
             ▼
      ┌─────────────┐
      │ Pulse Shape │◄──── Gaussian, Square, DRAG
      └─────┬───────┘
            ▼
     ┌──────────────┐
     │ Carrier Mod. │◄──── phase, detuning
     └─────┬────────┘
           ▼
    ┌───────────────┐
    │ Hamiltonian H │◄──── dynamic over time
    └─────┬─────────┘
          ▼
 ┌──────────────────────┐
 │ Qubit State Evolution│◄──── Solves Schrödinger Eq.
 └─────┬────────────────┘
       ▼
┌─────────────────────┐
│ Bloch Vector Tracker│
└────────┬────────────┘
         ▼
  ┌──────────────┐
  │ Visualization│◄──── (Bloch Sphere / Oscillations)
  └──────────────┘
```


## Pulse Types Supported

| Shape        | Description                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------- |
| **Gaussian** | Smooth, time-symmetric envelope; ideal for minimal spectral leakage                             |
| **Square**   | Constant amplitude; useful for sharp, fast gates                                                |
| **DRAG**     | Derivative-Removed Adiabatic Gate; reduces leakage in weakly anharmonic qubits (like transmons) |


## Qubit Evolution (Simulation)

The VPC simulates how a qubit evolves under the influence of a time-dependent Hamiltonian:

```math
H(t) = \frac{1}{2} \Omega(t) \cdot \sigma_x
```

where:

* $\Omega(t)$: the pulse amplitude envelope
* $\sigma_x$: Pauli-X operator
* $H(t)$: time-dependent Hamiltonian

Evolution is computed via:

```math
\psi(t + \delta t) = \exp(-i H(t) \cdot \delta t) \cdot \psi(t)
```
where:

* $\Omega(t)$: envelope of the pulse
* $\delta t$: small time step


## Features

* Time evolution based on realistic pulses
* Bloch sphere visualization
* Suitable for qubit training & ML applications
* Supports decoherence-free simulations (idealized)

## Bloch Sphere Visualization

At each time step, the system computes:

* ⬅️ ⟨σₓ⟩ (X projection)
* ⬆️ ⟨σᵧ⟩ (Y projection)
* ⬆️ ⟨σ\_z⟩ (Z projection)

These are plotted to create a **vector trajectory** showing how the qubit state changes on the Bloch sphere over time.


## Supported Use Cases

* Gate calibration visualization
* Rabi oscillation & Ramsey fringe simulation
* Pulse shape comparison (DRAG vs Gaussian)
* Teaching & demos for quantum mechanics
* Rapid prototyping of pulse schedules