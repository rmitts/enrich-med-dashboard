export type StatusLevel = "normal" | "high" | "low" | "critical"

export interface BloodworkParameter {
  name: string
  reference: string
  note?: string
  values: {
    date: string
    value: number
    status: StatusLevel
  }[]
  trend?: string
  trendDirection?: "up" | "down" | "stable"
}

export interface BloodworkPanel {
  name: string
  parameters: BloodworkParameter[]
}

export const chemistryPanel: BloodworkPanel = {
  name: "Chemistry Panel",
  parameters: [
    {
      name: "BUN",
      reference: "7-30 mg/dL",
      values: [
        { date: "Sept 2025", value: 43, status: "high" },
        { date: "June 2025", value: 38, status: "high" },
      ],
      trend: "13.2%",
      trendDirection: "up",
    },
    {
      name: "Creatinine",
      reference: "0.6-1.6 mg/dL",
      values: [
        { date: "Sept 2025", value: 2.12, status: "high" },
        { date: "June 2025", value: 1.9, status: "high" },
      ],
      trend: "11.6%",
      trendDirection: "up",
    },
    {
      name: "Phosphorus",
      reference: "2.5-6.0 mg/dL",
      note: "Deceptively normal - PTH compensation",
      values: [
        { date: "Sept 2025", value: 4.2, status: "normal" },
        { date: "June 2025", value: 4, status: "normal" },
      ],
      trend: "5%",
      trendDirection: "up",
    },
    {
      name: "Calcium",
      reference: "9.0-11.5 mg/dL",
      values: [
        { date: "Sept 2025", value: 13.3, status: "high" },
        { date: "June 2025", value: 12.8, status: "high" },
      ],
      trend: "3.9%",
      trendDirection: "up",
    },
    {
      name: "ALT",
      reference: "10-90 IU/L",
      values: [
        { date: "Sept 2025", value: 308, status: "critical" },
        { date: "June 2025", value: 245, status: "critical" },
      ],
      trend: "25.7%",
      trendDirection: "up",
    },
    {
      name: "ALP",
      reference: "15-140 IU/L",
      values: [
        { date: "Sept 2025", value: 495, status: "critical" },
        { date: "June 2025", value: 420, status: "critical" },
      ],
      trend: "17.9%",
      trendDirection: "up",
    },
    {
      name: "AST",
      reference: "15-45 IU/L",
      values: [
        { date: "Sept 2025", value: 52, status: "high" },
        { date: "June 2025", value: 48, status: "high" },
      ],
      trend: "8.3%",
      trendDirection: "up",
    },
    {
      name: "GGT",
      reference: "0-9 IU/L",
      values: [
        { date: "Sept 2025", value: 28, status: "high" },
        { date: "June 2025", value: 22, status: "high" },
      ],
      trend: "27.3%",
      trendDirection: "up",
    },
    {
      name: "Cholesterol",
      reference: "130-300 mg/dL",
      values: [
        { date: "Sept 2025", value: 461, status: "high" },
        { date: "June 2025", value: 398, status: "high" },
      ],
      trend: "15.8%",
      trendDirection: "up",
    },
    {
      name: "Albumin",
      reference: "2.3-3.9 g/dL",
      values: [
        { date: "Sept 2025", value: 3.1, status: "normal" },
        { date: "June 2025", value: 3.2, status: "normal" },
      ],
      trend: "3.1%",
      trendDirection: "down",
    },
    {
      name: "Total Protein",
      reference: "5.4-7.5 g/dL",
      values: [
        { date: "Sept 2025", value: 6.8, status: "normal" },
        { date: "June 2025", value: 6.9, status: "normal" },
      ],
      trend: "1.4%",
      trendDirection: "down",
    },
    {
      name: "Globulin",
      reference: "2.7-4.4 g/dL",
      values: [
        { date: "Sept 2025", value: 3.7, status: "normal" },
        { date: "June 2025", value: 3.7, status: "normal" },
      ],
      trend: "—",
      trendDirection: "stable",
    },
    {
      name: "Glucose",
      reference: "76-119 mg/dL",
      values: [
        { date: "Sept 2025", value: 95, status: "normal" },
        { date: "June 2025", value: 102, status: "normal" },
      ],
      trend: "6.9%",
      trendDirection: "down",
    },
    {
      name: "Sodium",
      reference: "142-152 mEq/L",
      values: [
        { date: "Sept 2025", value: 145, status: "normal" },
        { date: "June 2025", value: 146, status: "normal" },
      ],
      trend: "0.7%",
      trendDirection: "down",
    },
    {
      name: "Potassium",
      reference: "3.6-5.5 mEq/L",
      values: [
        { date: "Sept 2025", value: 4.2, status: "normal" },
        { date: "June 2025", value: 4.4, status: "normal" },
      ],
      trend: "4.5%",
      trendDirection: "down",
    },
    {
      name: "Chloride",
      reference: "108-118 mEq/L",
      values: [
        { date: "Sept 2025", value: 106.5, status: "low" },
        { date: "June 2025", value: 109, status: "normal" },
      ],
      trend: "2.3%",
      trendDirection: "down",
    },
    {
      name: "Iron",
      reference: "80-270 ug/dL",
      values: [
        { date: "Sept 2025", value: 74, status: "low" },
        { date: "June 2025", value: 82, status: "normal" },
      ],
      trend: "9.8%",
      trendDirection: "down",
    },
    {
      name: "Anion Gap",
      reference: "12-23 mmol/L",
      values: [
        { date: "Sept 2025", value: 25, status: "high" },
        { date: "June 2025", value: 22, status: "normal" },
      ],
      trend: "13.6%",
      trendDirection: "up",
    },
    {
      name: "Lipemia",
      reference: "0-80",
      values: [
        { date: "Sept 2025", value: 108, status: "high" },
        { date: "June 2025", value: 85, status: "high" },
      ],
      trend: "27.1%",
      trendDirection: "up",
    },
  ],
}

export const cbcPanel: BloodworkPanel = {
  name: "CBC",
  parameters: [
    {
      name: "WBC",
      reference: "5.0-17.0 K/uL",
      values: [
        { date: "Sept 2025", value: 12.4, status: "normal" },
        { date: "June 2025", value: 11.8, status: "normal" },
      ],
      trend: "5.1%",
      trendDirection: "up",
    },
    {
      name: "RBC",
      reference: "5.5-8.5 M/uL",
      values: [
        { date: "Sept 2025", value: 6.2, status: "normal" },
        { date: "June 2025", value: 6.5, status: "normal" },
      ],
      trend: "4.6%",
      trendDirection: "down",
    },
    {
      name: "Hemoglobin",
      reference: "12-18 g/dL",
      values: [
        { date: "Sept 2025", value: 14.2, status: "normal" },
        { date: "June 2025", value: 14.8, status: "normal" },
      ],
      trend: "4.1%",
      trendDirection: "down",
    },
    {
      name: "Hematocrit",
      reference: "37-55 %",
      values: [
        { date: "Sept 2025", value: 42, status: "normal" },
        { date: "June 2025", value: 44, status: "normal" },
      ],
      trend: "4.5%",
      trendDirection: "down",
    },
    {
      name: "Platelets",
      reference: "150-400 K/uL",
      values: [
        { date: "Sept 2025", value: 285, status: "normal" },
        { date: "June 2025", value: 298, status: "normal" },
      ],
      trend: "4.4%",
      trendDirection: "down",
    },
    {
      name: "MCV",
      reference: "62-74 fL",
      values: [
        { date: "Sept 2025", value: 68, status: "normal" },
        { date: "June 2025", value: 67, status: "normal" },
      ],
      trend: "1.5%",
      trendDirection: "up",
    },
    {
      name: "MCH",
      reference: "22-27 pg",
      values: [
        { date: "Sept 2025", value: 23, status: "normal" },
        { date: "June 2025", value: 23, status: "normal" },
      ],
      trend: "—",
      trendDirection: "stable",
    },
    {
      name: "MCHC",
      reference: "32-36 g/dL",
      values: [
        { date: "Sept 2025", value: 33.8, status: "normal" },
        { date: "June 2025", value: 33.6, status: "normal" },
      ],
      trend: "0.6%",
      trendDirection: "up",
    },
  ],
}

export interface KeyFinding {
  title: string
  description: string
  severity: "warning" | "critical"
}

export const keyFindings: KeyFinding[] = [
  {
    title: "Kidney Function",
    description:
      "BUN (43) and Creatinine (2.12) both elevated, indicating reduced filtration. Phosphorus appears normal but this is deceptive—PTH compensation is masking the severity.",
    severity: "warning",
  },
  {
    title: "Liver Enzymes",
    description:
      "ALT (308) and ALP (495) are severely elevated. GGT (28) elevation in a post-cholecystectomy patient suggests potential cholestasis.",
    severity: "critical",
  },
]

export const availableDates = ["Sept 2025", "June 2025", "March 2025", "Dec 2024"]
