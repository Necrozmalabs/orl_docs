---
title: Quantum Circuit Composer
description: Quantum Circuit Composer used to crease and visualize quantum circuits.
---

The **Quantum Circuit Composer** is an interactive, visual tool designed to allow users to create, edit, and simulate quantum circuits using IBM’s open-source framework **Qiskit**. It provides an intuitive interface for both beginners and advanced users to experiment with quantum gates, observe the resulting circuit behavior, and understand quantum computation concepts through real-time feedback and visualizations.

This composer integrates seamlessly with **Qiskit’s backend**, enabling local or cloud-based execution and allowing users to simulate quantum algorithms, build entangled qubit states, and explore quantum measurements.


### Key Features

#### Drag-and-Drop Circuit Builder

* Users can drag and drop standard quantum gates (e.g., `X`, `H`, `CX`, `T`, `Y`, `Z`, `RX`, `RY`, `RZ`, etc.) onto qubit wires.
* Gates can be reordered or deleted using a clean and responsive UI.

#### Multi-Qubit Support

* Compose circuits with **multiple qubits**, allowing the creation of entangled states (e.g., Bell states, GHZ states).
* Support for controlled gates (like `CX`, `CY`, `CZ`, `CRZ`) and custom rotations.

#### Powered by Qiskit

* The composer generates **Qiskit Python code** in real time.
* Users can export the code for simulation or execution on IBM Quantum systems.
* Built-in simulator for instant feedback with `qasm_simulator`.

#### Output Visualization

* **Histogram of measurement results** displayed after execution.
* Optional visualization of state vectors and Bloch spheres.
* Dynamic updates after each circuit modification.

### Supported Gates

| Gate      | Description                    |
| --------- | ------------------------------ |
| `X`       | Pauli-X (NOT) Gate             |
| `H`       | Hadamard Gate                  |
| `Z`       | Pauli-Z Gate                   |
| `Y`       | Pauli-Y Gate                   |
| `T`       | T Gate                         |
| `CX`      | Controlled-X (CNOT)            |
| `CZ`      | Controlled-Z                   |
| `RX`      | Rotation around X              |
| `RY`      | Rotation around Y              |
| `RZ`      | Rotation around Z              |
| `Measure` | Measurement into classical bit |

