---
title: Creating a Bell State Circuit 
description: In this guide, we’ll walk through how to build a Bell State using open research laboratory.
---

Welcome to Open Research Laboratory

In this guide, we’ll walk through how to build a **Bell State** — one of the most important entangled states in quantum computing — and simulate it using our platform.

### What is a Bell State?

A **Bell State** is a maximally entangled quantum state of two qubits. The most common Bell state is:

$$

|\Phi^+\rangle = \frac{1}{\sqrt{2}} (|00\rangle + |11\rangle)

$$

This means when one qubit is `0`, the other is guaranteed to be `0`, and if one is `1`, the other will be `1` — no matter how far apart they are!

---

###  Steps to Build a Bell State Circuit

##### Go to Open Research Laboratory

Visit the [Open Research Laboratory Quantum Composer](https://openresearchlab.example.com/simulator).


#### Add Gates

Apply the following gates in order:

1. **Hadamard Gate (H)** on **Qubit 0**
2. **CNOT Gate (CX)** with:
   - Control: **Qubit 0**
   - Target: **Qubit 1**
3. **Measure** both Qubit 0 and Qubit 1

Here’s how the circuit looks in ASCII:

```
     ┌───┐     ┌─┐   
q_0: ┤ H ├──■──┤M├───
     └───┘┌─┴─┐└╥┘┌─┐
q_1: ─────┤ X ├─╫─┤M├
          └───┘ ║ └╥┘
q_2: ───────────╫──╫─
                ║  ║ 
q_3: ───────────╫──╫─
                ║  ║ 
q_4: ───────────╫──╫─
                ║  ║ 
c: 5/═══════════╩══╩═
                0  1 

```


### Configure Parameters

Set the simulator parameters:

- **Shots**: `1024`
- **Temperature (K)**: `0.015` ( or 15 MK)
- **Frequency (GHz)**: `5.0`

These values simulate low thermal noise and realistic qubit decoherence.

---

### Run the Quantum Composer

Click **"Run"**.

The backend will:

- Apply thermal decoherence using \( T_1 \), \( T_2 \) calculated from:

$$
n_{th} = \frac{1}{e^{hf/kT} - 1}
$$

$$
T_1 = \frac{100000}{n_{th} + 1}, \quad T_2 = \frac{80000}{n_{th} + 1}
$$

- Build a noise model accordingly
- Simulate the quantum circuit using Qiskit’s `Aer` backend

---

### Expected Output

Here’s a real example from the Quantum Composer:

![Bell State Histogram](https://private-user-images.githubusercontent.com/85983956/465158927-ee8f085a-70d2-489d-9fe6-c515a75a946e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTIyMjI4ODcsIm5iZiI6MTc1MjIyMjU4NywicGF0aCI6Ii84NTk4Mzk1Ni80NjUxNTg5MjctZWU4ZjA4NWEtNzBkMi00ODlkLTlmZTYtYzUxNWE3NWE5NDZlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzExVDA4Mjk0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI1ZTQ3MzZmMWJlNzM0YTdlMGJhYjZhNzRmYzJhNmY1Y2Y1NWJlMzc3ODFkYTM0NGE3MDM3NzQzMmJkNTJiMDAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Ko1EPHVqj1UwrlMYBezHJPSNLOtSge64oZzKUIhOIgw
)

![Image](https://private-user-images.githubusercontent.com/85983956/465160267-3f4b80e5-4bbc-4d54-bbd0-9afbca9074d9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTIyMjI4ODcsIm5iZiI6MTc1MjIyMjU4NywicGF0aCI6Ii84NTk4Mzk1Ni80NjUxNjAyNjctM2Y0YjgwZTUtNGJiYy00ZDU0LWJiZDAtOWFmYmNhOTA3NGQ5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzExVDA4Mjk0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZkZDIyYzA0NjI5NzhmOWJmNGViNmRkZjJjMWY4ZWM2MzQ0MzUwMDM4NGM5NTBjNzgzNmNiZWM1NmQyM2FiMGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.QZryT4dAPmnso-6r_CtGpqqAkCNNi5Jr7835zWECx70)


> `00000` → Qubit 0 = 0, Qubit 1 = 0  
> `00011` → Qubit 0 = 1, Qubit 1 = 1  
> `10000` → Rare noise on Qubit 4 (can be ignored)

As you can see, the system measured:
- **546 times** in state `|00⟩`
- **476 times** in state `|11⟩`
- Minimal noise (2 times) in `|10000⟩`

This confirms that we successfully created:

$$
|\Phi^+\rangle = \frac{1}{\sqrt{2}} (|00\rangle + |11\rangle)
$$

---


### Formula Summary

#### Entangled Bell State:

$$
|\Phi^+\rangle = \frac{1}{\sqrt{2}} (|00\rangle + |11\rangle)
$$

#### Decoherence Model:

$$
n_{th} = \frac{1}{e^{hf/kT} - 1}
$$

$$
T_1 = \frac{100000}{n_{th} + 1}, \quad T_2 = \frac{80000}{n_{th} + 1}
$$

