type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    onClick?: () => void;
  };
  
  export default function Button({
    children,
    variant = "primary",
    className = "",
    onClick,
  }: ButtonProps) {
    const variants = {
      primary: `
        bg-[#0053F1]
        text-white
        hover:bg-[#003291]
        active:bg-[#003291]
      `,
  
      secondary: `
        bg-white
        text-black
        shadow-[0_0_16px_rgba(0,0,0,0.04)]
        hover:bg-[#E7E7E7]
        active:bg-[#959595]
        active:text-[#5A5A5A]
      `,
    };
  
    return (
      <button
        type="button"
        onClick={onClick}
        className={`
          inline-flex
          items-center
          justify-center
          gap-[10px]
          rounded-[24px]
          px-6
          py-3
          text-[20px]
          font-semibold
          leading-[26px]
          tracking-[-1.6px]
          transition-colors
          duration-200
          ${variants[variant]}
          ${className}
        `}
      >
        {children}
      </button>
    );
  }