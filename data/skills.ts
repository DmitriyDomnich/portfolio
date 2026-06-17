export type AwsService = {
  name: string;
  description: string;
  depends: string[];
};

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python"],
  },
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Redux Toolkit",
      "TanStack Query",
      "Zustand",
    ],
  },
  {
    label: "UI & Styling",
    skills: [
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
      "Ant Design",
      "SCSS / SASS",
      "Framer Motion",
    ],
  },
  {
    label: "Data Visualization",
    skills: ["Highcharts", "ApexCharts", "Chart.js", "Recharts"],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Django",
      "Flask",
      "REST API",
      "WebSockets",
      "Socket.IO",
      "SSE",
    ],
  },
  {
    label: "Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "Redis", "MinIO"],
  },
  {
    label: "Infrastructure & DevOps",
    skills: ["Docker", "Terraform", "GitHub Actions (CI/CD)", "AWS VPC"],
  },
  {
    label: "Testing",
    skills: ["Jest", "React Testing Library", "NestJS Testing Module"],
  },
  {
    label: "Tools & Platforms",
    skills: [
      "Webpack",
      "Vite",
      "npm",
      "PyPI",
      "Jira",
      "GitHub / GitLab / Bitbucket",
    ],
  },
  {
    label: "AI & Dev Tools",
    skills: ["Claude Code", "OpenAI API"],
  },
];

export const awsServices: AwsService[] = [
  {
    name: "VPC",
    description: "Isolated virtual network for all AWS resources",
    depends: [
      "Internet Gateway",
      "Public Subnets",
      "Private Subnets",
      "EIP",
      "NAT Gateway",
      "Route Tables",
    ],
  },
  {
    name: "EC2",
    description: "Virtual machines for compute workloads",
    depends: ["VPC", "Public Subnet", "Security Group", "Key Pair"],
  },
  {
    name: "ECS",
    description: "Container orchestration service for Docker workloads",
    depends: [
      "VPC",
      "Fargate",
      "ECR",
      "ALB",
      "RDS",
      "ElastiCache",
      "Secrets Manager",
      "S3",
      "SES",
      "CloudWatch Logs",
    ],
  },
  {
    name: "Fargate",
    description: "Serverless compute engine for containers - no EC2 management",
    depends: ["ECS", "VPC", "ECR", "Secrets Manager", "CloudWatch Logs"],
  },
  {
    name: "ECR",
    description: "Private Docker container registry",
    depends: ["IAM Policies"],
  },
  {
    name: "RDS",
    description: "Managed relational database (PostgreSQL)",
    depends: ["VPC", "Private Subnets", "Security Groups", "EC2 Bastion"],
  },
  {
    name: "ElastiCache",
    description: "Managed in-memory cache (Redis)",
    depends: ["VPC", "Private Subnets", "Security Groups"],
  },
  {
    name: "ALB",
    description: "Application Load Balancer for HTTP/HTTPS traffic routing",
    depends: [
      "VPC",
      "Public Subnets",
      "Security Groups",
      "ECS",
      "Target Group",
    ],
  },
  {
    name: "Lambda",
    description: "Serverless function execution — event-driven compute",
    depends: ["IAM Role", "ECR", "S3"],
  },
  {
    name: "S3",
    description: "Object storage for files, assets, and backups",
    depends: ["IAM Policies"],
  },
  {
    name: "Secrets Manager",
    description: "Secure storage of credentials and API keys",
    depends: ["ECS", "IAM Policies"],
  },
  {
    name: "SES",
    description: "Scalable email sending service for transactional mail",
    depends: ["IAM Policies", "ECS"],
  },
  {
    name: "Auto Scaling",
    description: "Automatically adjusts ECS capacity based on demand",
    depends: ["ECS Cluster", "ECS Service", "Step Scaling Policies"],
  },
];
