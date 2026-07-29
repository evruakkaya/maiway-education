type BadgeProps = {
    children: React.ReactNode;
  };
  
  export default function Badge({ children }: BadgeProps) {
    return (
      <div
        className="
          inline-flex
          items-center
          justify-center
          gap-[10px]
          rounded-[24px]
          bg-white/64
          px-3
          py-1
          background-blur-sm
          text-center
          text-[18px]
          font-normal
          leading-[27px]
          tracking-[-1.44px]
          text-[#5A5A5A]
        "
      >
        {children}
      </div>
    );
  }