# Floor Modifier Floats
BPM generates 10 float32 values that are stored int ContinueStateV2.sav.  The first 7 of these values correspond to Asgard 1 through Helheim 1.  This document is an attempt to analyse which values correspond to which floor modifiers.

My research thus far appears to show that modifiers have an associated range, e.g. values n ≥13 and n<17 will result in a Castle floor for Asgard 1.  The tables below will show what range the value N must lay between to result in the modifier for the specified floor.

<details>
<summary>Asgard 1</summary>

| float32 range | Modifier  |
| ------------- | --------- |
| >0 N <1       | N/A       |
| ≥1 N <5       | Dark      |
| ≥5 N <9       | Space     |
| ≥9 N <11      | Glass     |
| ≥11 N <13     | Frozen    |
| ≥13 N <17     | Castle    |
| ≥17 N <19     | Explosive |
| ≥19 N <21     | Midas     |
| ≥21 N <23     | Barren    |
| ≥23 N <26     | Infested  |
| ≥26 N <27     | Shopless  |
| ≥27 N <31     | Barren    |
| ≥27 N ≤100    | N/A       |

Asgard 1 does not appear to be able to naturally generate with Pitted or Bountiful, and I've been unable to find the float for Inverted.
</details>

<details>
<summary>Asgard 2</summary>

| float32 range | Modifier  |
| ------------- | --------- |
| >0 N <1       | N/A       |
| ≥1 N <5       | Dark      |
| ≥5 N <9       | Space     |
| ≥9 N <11      | Glass     |
| ≥11 N <15     | Frozen    |
| ≥15 N <19     | Explosive |
| ≥19 N <21     | Midas     |
| ≥21 N <27     | Barren    |
| ≥27 N <33     | Infested  |
| ≥33 N <36     | Shopless  |
| ≥36 N <37     | Bountiful |
| ≥37 N <100    | N/A       |

</details>