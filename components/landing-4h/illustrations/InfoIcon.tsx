import { LucideIcon } from "lucide-react";

interface InfoIconProps {
  icon: LucideIcon;
  gradient?: "primary" | "accent" | "success";
}

export function InfoIcon({ icon: Icon, gradient = "primary" }: InfoIconProps) {
  const gradients = {
    primary: "from-[#4A9EFF] to-[#357ABD]",
    accent: "from-[#B197FC] to-[#9775FA]",
    success: "from-[#52D97F] to-[#40C368]"
  };

  return (
    <div className={`relative inline-flex p-6 rounded-2xl bg-gradient-to-br ${gradients[gradient]} shadow-lg`}>
      <Icon className="w-10 h-10 text-white" />
      
      {/* Decorative circles */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/30 rounded-full" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white/20 rounded-full" />
    </div>
  );
}
