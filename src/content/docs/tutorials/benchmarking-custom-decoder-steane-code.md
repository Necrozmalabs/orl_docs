---
title: Benchmarking a Custom Decoder for Steane Code (7-Qubit)
description: To evaluate the performance of a custom quantum error decoder in comparison with a pre-built lookup table decoder, using the 7-qubit Steane Code.

---

To evaluate the performance of a custom quantum error decoder in comparison with a pre-built lookup table decoder, using the 7-qubit Steane Code. The experiment includes noise simulation, syndrome extraction, decoding, and benchmarking based on logical fidelity and decoding latency.
We have used [Steane Code (7-Qubit) Quantum Error Correction Experiment](/tutorials/steane-code-qubit-quantum-error-correction-experiment/) as our base and added custom decoder in that experiment

---

### Components Used:

#### Quantum Error Correction Code:

* **Code**: Steane Code (7-Qubit)
* **Stabilizers**: 6 total (3 X-type, 3 Z-type)
* **Code Distance**: 3
* **Rounds of Encoding**: 1

#### Initial Logical Qubit:

* `|+⟩` state (superposition of `|0⟩` and `|1⟩`)

#### Noise Model:

* **Gate Noise**: Depolarizing Channel

  * Probability: `0.05`
* **Measurement Noise**:

  * Probability: `0.01`

#### **Custom Decoder** 

ML-based decoder

   * `architecture`: Feedforward Neural Network
   * `training_data_size`: 10,000 noisy syndrome samples
   * `loss_metric`: Categorical Cross-Entropy
   * `optimizer`: Adam
   * `inference_latency`: Tracked per shot

---

### Experimental Procedure:

1. **Initialization**
   Prepare logical qubit `|+⟩` and encode using Steane Code.

2. **Noise Injection**
   Apply simulated gate-level depolarizing noise and measurement noise.

3. **Syndrome Extraction**
   Measure stabilizer generators to obtain syndrome.

4. **Decoding**
   Run both:

   * Lookup Table decoder (baseline)
   * Custom decoder (inference from trained model)

5. **Recovery**
   Apply corrections from both decoders.

6. **Benchmarking**
   Compare both decoders over 1000 trials using:

   * Logical Fidelity
   * Latency per decoding step
   * Accuracy of correction (how often logical error is prevented)

---

### Output:

```json
{
  "decoder_results": {
    "lookup_table": {
      "logical_fidelity": 0.91,
      "average_latency_ms": 0.04,
      "correction_success_rate": 0.91
    },
    "custom_decoder": {
      "logical_fidelity": 0.94,
      "average_latency_ms": 0.10,
      "correction_success_rate": 0.94
    }
  },
  "benchmark_summary": {
    "winner": "custom_decoder",
    "justification": "Higher logical fidelity and correction rate despite higher latency"
  }
}
```

---

### Conclusion:

The custom decoder outperforms the baseline in terms of logical fidelity and error correction success rate. However, it trades off some latency. This makes it ideal for high-fidelity systems where correction accuracy is critical.
