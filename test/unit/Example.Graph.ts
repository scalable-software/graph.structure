const pathway = {
  metadata: {
    id: "c4076ede-bddf-47f3-8237-5712b4d3eda6",
    name: "ACS Diagnostic",
    type: "pathway",
  },
  nodes: [
    {
      id: "35c6779a-fd9d-4089-d1ab-af0b932fc912",
      name: "Start",
      type: "start",
      coordinates: { x: 0, y: 6 },
      icon: "icon.svg",
      metadata: [
        {
          arrival: {
            distribution: "exponential",
            parameters: [{ rate: 0.005469098 }],
          },
        },
      ],
    },
    {
      id: "15b6679a-fd9d-4036-b1ab-af0b932fc903",
      name: "Triage",
      type: "workflow",
      coordinates: { x: 2, y: 6 },
      icon: "icon.svg",
      metadata: [
        {
          duration: {
            distribution: "log normal",
            parameters: [{ meanlog: 0.1640238 }, { sdlog: 0.4169375 }],
          },
        },
      ],
    },
    {
      id: "5a3e4a90-b266-4be3-b04d-abb627d78749",
      name: "ACS",
      type: "decision",
      coordinates: { x: 4, y: 6 },
      direction: "Diverging",
      icon: "icon.svg",
      metadata: [
        {
          prevalence: [
            {
              target: "46b589ed-a2d8-462a-99f5-ad2d82ed44fb",
              probability: 0.84,
            },
            {
              target: "ddacb2ed-231b-4987-aa83-f6af6ee44b02",
              probability: 0.16,
            },
          ],
        },
      ],
    },
    {
      id: "bf6bccfa-4ad5-448a-a307-9061c1de2270",
      name: "12-lead ECG",
      type: "workflow",
      coordinates: { x: 6, y: 4 },
      icon: "icon.svg",
      metadata: [
        {
          duration: {
            distribution: "log normal",
            parameters: [{ meanlog: 1.483285 }, { sdlog: 0.936787 }],
          },
        },
      ],
    },
    {
      id: "50c4405f-8a0f-4dc7-8cea-5cf8d79d98b6",
      name: "Other",
      type: "end",
      coordinates: { x: 6, y: 8 },
      icon: "icon.svg",
    },
    {
      id: "f42ffd29-38ad-488b-b826-bbcadf9043c2",
      name: "Clinical Assessment",
      type: "workflow",
      coordinates: { x: 8, y: 4 },
      icon: "icon.svg",
      metadata: [
        {
          duration: {
            distribution: "exponential",
            parameters: [{ rate: 0.05222437 }],
          },
        },
      ],
    },
    {
      id: "97ad8fe3-f06f-4812-958f-b10388fcb6a6",
      name: "STEMI",
      type: "decision",
      coordinates: { x: 10, y: 4 },
      direction: "Diverging",
      icon: "icon.svg",
      metadata: [
        {
          prevalence: [
            {
              target: "3256b6fc-4eca-4b27-8c75-4569f8ce1404",
              probability: 0.06,
            },
            {
              target: "3a033ff1-4fd1-400b-8f18-4d7a8d8fb5f0",
              probability: 0.94,
            },
          ],
        },
      ],
    },
    {
      id: "b1e8abfc-711b-4d18-b1b4-d5f14d5fd3b9",
      name: "STEMI",
      type: "end",
      coordinates: { x: 12, y: 2 },
      icon: "icon.svg",
    },
    {
      id: "f9fda3d8-2024-4122-b5fd-9a4945183fe0",
      name: "Troponin Biomarker",
      type: "workflow",
      coordinates: { x: 12, y: 6 },
      icon: "icon.svg",
      metadata: [
        {
          duration: {
            distribution: "log normal",
            parameters: [{ meanlog: 3.916128 }, { sdlog: 0.1794249 }],
          },
        },
      ],
    },
    {
      id: "3156a3ff-1bba-463d-ae39-50080409e307",
      name: "Clinical Assessment",
      type: "workflow",
      coordinates: { x: 14, y: 6 },
      icon: "icon.svg",
      metadata: [
        {
          duration: {
            distribution: "exponential",
            parameters: [{ rate: 0.02769111 }],
          },
        },
      ],
    },
    {
      id: "251660a8-0e35-4edd-950d-866c5c7cc92c",
      name: "Biomarker Positive",
      type: "decision",
      coordinates: { x: 16, y: 6 },
      icon: "icon.svg",
      direction: "Diverging",
      metadata: [
        {
          prevalence: [
            {
              target: "a1a29ae1-51ba-4048-a11f-021e00ff5a03",
              probability: 0.14,
            },
            {
              target: "e2e558a9-02b4-4a87-a09c-9a0d4b759693",
              probability: 0.86,
            },
          ],
        },
      ],
    },
    {
      id: "c4347b6b-30ea-46b2-8416-8a999d3a3221",
      name: "NSTEMI",
      type: "decision",
      coordinates: { x: 18, y: 4 },
      icon: "icon.svg",
      direction: "Diverging",
      metadata: [
        {
          prevalence: [
            {
              target: "17f5dd74-826a-4190-b862-57008cb2d520",
              probability: 1,
            },
            {
              target: "a49e86b2-7d9c-4180-88e9-9382002fd5ca",
              probability: 0,
            },
          ],
        },
      ],
    },
    {
      id: "148e9320-6d9f-4131-8786-fba738d26652",
      name: "ACS",
      type: "decision",
      coordinates: { x: 18, y: 8 },
      icon: "icon.svg",
      direction: "Diverging",
      metadata: [
        {
          prevalence: [
            {
              target: "4e2709b7-f64a-4c9a-b070-72e5bd078180",
              probability: 0.14,
            },
            {
              target: "c49ee30b-10ee-4420-bd7b-a873c3035bdc",
              probability: 0.86,
            },
          ],
        },
      ],
    },
    {
      id: "f8a32c44-9353-4c39-8e5e-7ea66c2abf56",
      name: "NSTEMI",
      type: "end",
      coordinates: { x: 20, y: 2 },
      icon: "icon.svg",
    },
    {
      id: "73f06535-1356-4f15-a184-356ea459680d",
      name: "",
      type: "decision",
      coordinates: { x: 20, y: 6 },
      icon: "icon.svg",
      direction: "Converging",
    },
    {
      id: "be255c26-3673-4230-9497-4b8fd4dbffbf",
      name: "Other",
      type: "end",
      coordinates: { x: 20, y: 10 },
      icon: "icon.svg",
    },
    {
      id: "d570e3a3-0396-49a8-8f92-32eaf1ecdcaa",
      name: "Delay",
      type: "delay",
      coordinates: { x: 22, y: 6 },
      icon: "icon.svg",
    },
    {
      id: "8371703f-9bc7-4e7a-9fe0-196cc517fada",
      name: "Troponin Biomarker",
      type: "workflow",
      coordinates: { x: 24, y: 6 },
      icon: "icon.svg",
      metadata: [
        {
          duration: {
            distribution: "log normal",
            parameters: [{ meanlog: 3.808222 }, { sdlog: 0.1548198 }],
          },
        },
      ],
    },
    {
      id: "9712b27a-a951-4355-9c18-16b3868710f7",
      name: "Clinical Assessment",
      type: "workflow",
      coordinates: { x: 26, y: 6 },
      icon: "icon.svg",
      metadata: [
        {
          duration: {
            distribution: "exponential",
            parameters: [{ meanlog: 0.02769111 }],
          },
        },
      ],
    },
    {
      id: "ee97690e-b888-493e-8ae2-0633a1154f35",
      name: "Biomarker Delta Positive",
      type: "decision",
      direction: "Diverging",
      coordinates: { x: 28, y: 6 },
      icon: "icon.svg",
      metadata: [
        {
          prevalence: [
            {
              target: "904fa4d0-6fb6-44c6-a61f-db79f9f387bb",
              probability: 0.08,
            },
            {
              target: "85150dc4-1ee1-4054-a6b2-14b5d12adf5d",
              probability: 0.92,
            },
          ],
        },
      ],
    },
    {
      id: "062400f1-ce9f-4bb3-a5a4-ecebad44159c",
      name: "NSTEMI",
      type: "decision",
      coordinates: { x: 30, y: 4 },
      icon: "icon.svg",
      direction: "Diverging",
      metadata: [
        {
          prevalence: [
            {
              target: "66e3b993-6920-4d9b-9b95-80eaef09291c",
              probability: 1,
            },
            {
              target: "31e8e535-b264-4b42-9da6-cb60917f0054",
              probability: 0,
            },
          ],
        },
      ],
    },
    {
      id: "190d83a7-3b05-4473-b9aa-76c11b6efaf3",
      name: "ACS",
      type: "decision",
      coordinates: { x: 30, y: 8 },
      icon: "icon.svg",
      direction: "Diverging",
      metadata: [
        {
          prevalence: [
            {
              target: "96cbf933-87a3-4522-930e-8b57a8ef7236",
              probability: 0.13,
            },
            {
              target: "ebeedabb-4373-4e3c-85af-0977f6df00e9",
              probability: 0.87,
            },
          ],
        },
      ],
    },
    {
      id: "eb7d2e6f-d382-4a05-b5c4-eb629ee5258a",
      name: "NSTEMI",
      type: "end",
      coordinates: { x: 32, y: 2 },
      icon: "icon.svg",
    },
    {
      id: "947996f0-3ea5-42ae-9a1c-296ec2662f4e",
      name: "",
      type: "decision",
      coordinates: { x: 32, y: 6 },
      icon: "icon.svg",
      direction: "Converging",
    },
    {
      id: "3d66e968-70e2-42bd-9460-c3a924447da3",
      name: "Other",
      type: "end",
      coordinates: { x: 32, y: 10 },
      icon: "icon.svg",
    },
    {
      id: "fd2648ec-8cf9-4d68-80f5-5311298124ef",
      name: "Unstable Angina",
      type: "decision",
      direction: "Diverging",
      coordinates: { x: 34, y: 6 },
      icon: "icon.svg",
      metadata: [
        {
          prevalence: [
            {
              target: "c1a79329-768d-4522-94b5-d958fb247dd9",
              probability: 0.13,
            },
            {
              target: "bc5db781-8879-495d-918d-75ff36355021",
              probability: 0.87,
            },
          ],
        },
      ],
    },
    {
      id: "28928320-9522-4f09-bac2-cda7090101ac",
      name: "Unstable Angina",
      type: "end",
      coordinates: { x: 36, y: 4 },
      icon: "icon.svg",
    },
    {
      id: "2684f4c6-07f8-48b9-9b07-dd096f6240b8",
      name: "Other",
      type: "end",
      coordinates: { x: 36, y: 8 },
      icon: "icon.svg",
    },
  ],
  connections: [
    {
      id: "d5bc29b2-75ea-4d1a-a0ed-22f4de79a580",
      name: "",
      source: "35c6779a-fd9d-4089-d1ab-af0b932fc912",
      target: "15b6679a-fd9d-4036-b1ab-af0b932fc903",
      coordinates: {
        start: { x: 0, y: 6 },
        end: { x: 2, y: 6 },
      },
    },
    {
      id: "d4ae89b2-74ea-4d1a-a0ed-22f4de79a580",
      name: "",
      source: "15b6679a-fd9d-4036-b1ab-af0b932fc903",
      target: "5a3e4a90-b266-4be3-b04d-abb627d78749",
      coordinates: {
        start: { x: 2, y: 6 },
        end: { x: 4, y: 6 },
      },
    },
    {
      id: "46b589ed-a2d8-462a-99f5-ad2d82ed44fb",
      name: "",
      source: "5a3e4a90-b266-4be3-b04d-abb627d78749",
      target: "bf6bccfa-4ad5-448a-a307-9061c1de2270",
      coordinates: {
        start: { x: 4, y: 6 },
        end: { x: 6, y: 4 },
      },
    },
    {
      id: "ddacb2ed-231b-4987-aa83-f6af6ee44b02",
      name: "",
      source: "5a3e4a90-b266-4be3-b04d-abb627d78749",
      target: "50c4405f-8a0f-4dc7-8cea-5cf8d79d98b6",
      coordinates: {
        start: { x: 4, y: 6 },
        end: { x: 6, y: 8 },
      },
    },
    {
      id: "1502ad4e-007d-44f3-b806-54de048f038a",
      name: "",
      source: "bf6bccfa-4ad5-448a-a307-9061c1de2270",
      target: "f42ffd29-38ad-488b-b826-bbcadf9043c2",
      coordinates: {
        start: { x: 6, y: 4 },
        end: { x: 8, y: 4 },
      },
    },
    {
      id: "6b15e892-d6cd-482a-8cfb-3268a1a4eac1",
      name: "",
      source: "f42ffd29-38ad-488b-b826-bbcadf9043c2",
      target: "97ad8fe3-f06f-4812-958f-b10388fcb6a6",
      coordinates: {
        start: { x: 8, y: 4 },
        end: { x: 10, y: 4 },
      },
    },
    {
      id: "3256b6fc-4eca-4b27-8c75-4569f8ce1404",
      name: "",
      source: "97ad8fe3-f06f-4812-958f-b10388fcb6a6",
      target: "b1e8abfc-711b-4d18-b1b4-d5f14d5fd3b9",
      coordinates: {
        start: { x: 10, y: 4 },
        end: { x: 12, y: 2 },
      },
    },
    {
      id: "3a033ff1-4fd1-400b-8f18-4d7a8d8fb5f0",
      name: "",
      source: "97ad8fe3-f06f-4812-958f-b10388fcb6a6",
      target: "f9fda3d8-2024-4122-b5fd-9a4945183fe0",
      coordinates: {
        start: { x: 10, y: 4 },
        end: { x: 12, y: 6 },
      },
    },
    {
      id: "774e2ae7-95b9-4e1e-8f82-586fd7fc69ea",
      name: "",
      source: "f9fda3d8-2024-4122-b5fd-9a4945183fe0",
      target: "3156a3ff-1bba-463d-ae39-50080409e307",
      coordinates: {
        start: { x: 12, y: 6 },
        end: { x: 14, y: 6 },
      },
    },
    {
      id: "fbadf0e6-5249-4320-a701-0d4df586183a",
      name: "",
      source: "3156a3ff-1bba-463d-ae39-50080409e307",
      target: "251660a8-0e35-4edd-950d-866c5c7cc92c",
      coordinates: {
        start: { x: 14, y: 6 },
        end: { x: 16, y: 6 },
      },
    },
    {
      id: "a1a29ae1-51ba-4048-a11f-021e00ff5a03",
      name: "",
      source: "251660a8-0e35-4edd-950d-866c5c7cc92c",
      target: "c4347b6b-30ea-46b2-8416-8a999d3a3221",
      coordinates: {
        start: { x: 16, y: 6 },
        end: { x: 18, y: 4 },
      },
    },
    {
      id: "e2e558a9-02b4-4a87-a09c-9a0d4b759693",
      name: "",
      source: "251660a8-0e35-4edd-950d-866c5c7cc92c",
      target: "148e9320-6d9f-4131-8786-fba738d26652",
      coordinates: {
        start: { x: 16, y: 6 },
        end: { x: 18, y: 8 },
      },
    },
    {
      id: "17f5dd74-826a-4190-b862-57008cb2d520",
      name: "",
      source: "c4347b6b-30ea-46b2-8416-8a999d3a3221",
      target: "f8a32c44-9353-4c39-8e5e-7ea66c2abf56",
      coordinates: {
        start: { x: 18, y: 4 },
        end: { x: 20, y: 2 },
      },
    },
    {
      id: "a49e86b2-7d9c-4180-88e9-9382002fd5ca",
      name: "",
      source: "c4347b6b-30ea-46b2-8416-8a999d3a3221",
      target: "73f06535-1356-4f15-a184-356ea459680d",
      coordinates: {
        start: { x: 18, y: 4 },
        end: { x: 20, y: 6 },
      },
    },
    {
      id: "4e2709b7-f64a-4c9a-b070-72e5bd078180",
      name: "",
      source: "148e9320-6d9f-4131-8786-fba738d26652",
      target: "73f06535-1356-4f15-a184-356ea459680d",
      coordinates: {
        start: { x: 18, y: 8 },
        end: { x: 20, y: 6 },
      },
    },
    {
      id: "c49ee30b-10ee-4420-bd7b-a873c3035bdc",
      name: "",
      source: "148e9320-6d9f-4131-8786-fba738d26652",
      target: "be255c26-3673-4230-9497-4b8fd4dbffbf",
      coordinates: {
        start: { x: 18, y: 8 },
        end: { x: 20, y: 10 },
      },
    },
    {
      id: "b1b974c5-99e5-4c7d-a8b4-34469a01abe7",
      name: "",
      source: "73f06535-1356-4f15-a184-356ea459680d",
      target: "d570e3a3-0396-49a8-8f92-32eaf1ecdcaa",
      coordinates: {
        start: { x: 20, y: 6 },
        end: { x: 22, y: 6 },
      },
    },
    {
      id: "0c80c365-07c0-4788-91cb-5ababef85b06",
      name: "",
      source: "d570e3a3-0396-49a8-8f92-32eaf1ecdcaa",
      target: "8371703f-9bc7-4e7a-9fe0-196cc517fada",
      coordinates: {
        start: { x: 22, y: 6 },
        end: { x: 24, y: 6 },
      },
    },
    {
      id: "3ca4d209-5a84-49c9-a6aa-316fd9b59138",
      name: "",
      source: "8371703f-9bc7-4e7a-9fe0-196cc517fada",
      target: "9712b27a-a951-4355-9c18-16b3868710f7",
      coordinates: {
        start: { x: 24, y: 6 },
        end: { x: 26, y: 6 },
      },
    },
    {
      id: "5f151e9a-5269-4cdc-ba0a-1f5542644441",
      name: "",
      source: "9712b27a-a951-4355-9c18-16b3868710f7",
      target: "ee97690e-b888-493e-8ae2-0633a1154f35",
      coordinates: {
        start: { x: 26, y: 6 },
        end: { x: 28, y: 6 },
      },
    },
    {
      id: "904fa4d0-6fb6-44c6-a61f-db79f9f387bb",
      name: "",
      source: "ee97690e-b888-493e-8ae2-0633a1154f35",
      target: "062400f1-ce9f-4bb3-a5a4-ecebad44159c",
      coordinates: {
        start: { x: 28, y: 6 },
        end: { x: 30, y: 4 },
      },
    },
    {
      id: "85150dc4-1ee1-4054-a6b2-14b5d12adf5d",
      name: "",
      source: "ee97690e-b888-493e-8ae2-0633a1154f35",
      target: "190d83a7-3b05-4473-b9aa-76c11b6efaf3",
      coordinates: {
        start: { x: 28, y: 6 },
        end: { x: 30, y: 8 },
      },
    },
    {
      id: "66e3b993-6920-4d9b-9b95-80eaef09291c",
      name: "",
      source: "062400f1-ce9f-4bb3-a5a4-ecebad44159c",
      target: "eb7d2e6f-d382-4a05-b5c4-eb629ee5258a",
      coordinates: {
        start: { x: 30, y: 4 },
        end: { x: 32, y: 2 },
      },
    },
    {
      id: "31e8e535-b264-4b42-9da6-cb60917f0054",
      name: "",
      source: "062400f1-ce9f-4bb3-a5a4-ecebad44159c",
      target: "947996f0-3ea5-42ae-9a1c-296ec2662f4e",
      coordinates: {
        start: { x: 30, y: 4 },
        end: { x: 32, y: 6 },
      },
    },
    {
      id: "96cbf933-87a3-4522-930e-8b57a8ef7236",
      name: "",
      source: "190d83a7-3b05-4473-b9aa-76c11b6efaf3",
      target: "947996f0-3ea5-42ae-9a1c-296ec2662f4e",
      coordinates: {
        start: { x: 30, y: 8 },
        end: { x: 32, y: 6 },
      },
    },
    {
      id: "ebeedabb-4373-4e3c-85af-0977f6df00e9",
      name: "",
      source: "190d83a7-3b05-4473-b9aa-76c11b6efaf3",
      target: "3d66e968-70e2-42bd-9460-c3a924447da3",
      coordinates: {
        start: { x: 30, y: 8 },
        end: { x: 32, y: 10 },
      },
    },
    {
      id: "2f11080f-47b9-407b-9fa5-0b64b4c11c1a",
      name: "",
      source: "947996f0-3ea5-42ae-9a1c-296ec2662f4e",
      target: "fd2648ec-8cf9-4d68-80f5-5311298124ef",
      coordinates: {
        start: { x: 32, y: 6 },
        end: { x: 34, y: 6 },
      },
    },
    {
      id: "c1a79329-768d-4522-94b5-d958fb247dd9",
      name: "",
      source: "fd2648ec-8cf9-4d68-80f5-5311298124ef",
      target: "28928320-9522-4f09-bac2-cda7090101ac",
      coordinates: {
        start: { x: 34, y: 6 },
        end: { x: 36, y: 4 },
      },
    },
    {
      id: "bc5db781-8879-495d-918d-75ff36355021",
      name: "",
      source: "fd2648ec-8cf9-4d68-80f5-5311298124ef",
      target: "2684f4c6-07f8-48b9-9b07-dd096f6240b8",
      coordinates: {
        start: { x: 34, y: 6 },
        end: { x: 36, y: 8 },
      },
    },
  ],
};
type Pathway = typeof pathway;
type Node = Pathway["nodes"][number];
type Connection = Pathway["connections"][number];

export { pathway, Pathway, Node, Connection };
