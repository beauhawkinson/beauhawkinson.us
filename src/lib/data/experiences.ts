interface Experience {
  id: number;
  title: string;
  type: string;
  startDate: string;
  endDate?: string;
}

export const experience: Experience[] = [
  {
    id: 1,
    title: "Software Engineer",
    type: "Full-time",
    startDate: "2024-09-23",
  },
  {
    id: 2,
    title: "Software Engineer",
    type: "Contract",
    startDate: "2024-08-01",
    endDate: "2024-09-22",
  },
];
