import Image from "next/image";

export const skills = [
  {
    name: "HTML5",
    icon: <Image src={"/html.png"} width={70} height={70} alt="html" />,
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
  {
    name: "CSS3",
    icon: <Image src={"/css.svg"} width={70} height={70} alt="css" />,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Tailwind",
    icon: <Image src={"/tailwind.svg"} width={70} height={70} alt="tailwind" />,
    color: "from-teal-400 to-blue-500",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    textColor: "text-teal-600 dark:text-teal-400",
  },
  {
    name: "Bootstrap",
    icon: (
      <Image src={"/bootstrap.svg"} width={70} height={70} alt="bootstrap" />
    ),
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-700 dark:text-purple-400",
  },
  {
    name: "JavaScript",
    icon: <Image src={"/js.svg"} width={70} height={70} alt="javascript" />,
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    textColor: "text-yellow-600 dark:text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: <Image src={"/ts.svg"} width={70} height={70} alt="typescript" />,
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "React.js",
    icon: <Image src={"/react.svg"} width={70} height={70} alt="react" />,
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    name: "Next.js",
    icon: <Image src={"/nextJs.svg"} width={70} height={70} alt="next" />,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-50 dark:bg-gray-800/20",
    textColor: "text-gray-700 dark:text-gray-300",
  },
  {
    name: "Redux Toolkit",
    icon: <Image src="/redux.svg" width={70} height={70} alt="Redux Toolkit" />,
    color: "from-rose-500 to-purple-600",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    textColor: "text-rose-700 dark:text-rose-400",
  },
  {
    name: "Zustand",
    icon: <Image src="/zustand.svg" width={70} height={70} alt="Zustand" />,
    color: "from-zinc-600 to-gray-800",
    bgColor: "bg-zinc-50 dark:bg-zinc-900/20",
    textColor: "text-zinc-700 dark:text-zinc-400",
  },
];
