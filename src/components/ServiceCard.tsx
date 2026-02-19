"use client";

import { useState, type ButtonHTMLAttributes, type HTMLAttributes } from "react";

/**
 * cn utility - Tailwind class merger
 */
function cn(...classes: (string | undefined | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

// ============================================================================
// COMPONENTS (Simplified shadcn-style for demo)
// ============================================================================

/**
 * Button Component - Website Mastery: shadcn-style Button
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary";
}

function Button({ 
  variant = "default", 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500",
    outline: "border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-slate-100 focus:ring-slate-500",
    secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 focus:ring-slate-500"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * Badge Component - Website Mastery: shadcn-style Badge
 */
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    secondary: "bg-slate-800 text-slate-300 border-slate-700",
    outline: "border-slate-600 text-slate-400"
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

// ============================================================================
// MAIN COMPONENT: ServiceCard
// ============================================================================

/**
 * Featured Service Card Component
 * 
 * A polished, interactive card for showcasing agent services.
 * Applies Website Mastery standards:
 * - shadcn-style components (Button, Badge)
 * - Dark cyber-luxury theme
 * - Hover animations
 * - Expandable details
 * 
 * @component
 * @example
 * <ServiceCard
 *   title="Swarm-as-a-Service"
 *   description="Custom AI agent swarms"
 *   price="$15 USDC"
 *   features={["3 Agents", "Custom personalities", "Memory system"]}
 * />
 */
interface ServiceCardProps {
  /** Service title */
  title: string;
  /** Brief service description */
  description: string;
  /** Price in USDC */
  price: string;
  /** Feature list */
  features: string[];
  /** Optional badge text */
  badge?: string;
  /** Callback when select is clicked */
  onSelect?: () => void;
  /** Initial expanded state */
  defaultExpanded?: boolean;
}

/**
 * ServiceCard - Interactive service showcase component
 * 
 * Website Mastery Standards Applied:
 * - shadcn-style components (Button, Badge)
 * - CSS transitions for smooth animations
 * - Dark theme with cyber-luxury aesthetic
 * - Responsive design (mobile-first)
 * - TypeScript strict typing
 */
export function ServiceCard({
  title,
  description,
  price,
  features,
  badge,
  onSelect,
  defaultExpanded = false,
}: ServiceCardProps) {
  // State: Track expanded state
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  // Handler: Toggle expansion
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(
        // Base: Dark theme, border, overflow hidden
        "relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50",
        // Animation: Smooth transitions
        "transition-all duration-300 ease-out",
        // Hover: Subtle glow effect
        "hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10",
        // Expanded: Slight scale
        isExpanded && "scale-[1.02]"
      )}
    >
      {/* Background gradient effect - appears when expanded */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent",
          "opacity-0 transition-opacity duration-300",
          isExpanded && "opacity-100"
        )}
      />

      <div className="relative p-6">
        {/* Header: Badge + Title + Price */}
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-2">
            {badge && (
              <Badge variant="secondary">
                {badge}
              </Badge>
            )}
            <h3 className="text-xl font-bold text-slate-50">
              {title}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-emerald-400">
              {price}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 mb-4">
          {description}
        </p>

        {/* Features - Expandable */}
        <div 
          className={cn(
            // Grid transition for smooth expand/collapse
            "grid transition-all duration-300",
            isExpanded ? "grid-rows-[1fr] opacity-100 mb-4" : "grid-rows-[0fr] opacity-0 mb-0"
          )}
        >
          <div className="overflow-hidden">
            <ul className="space-y-2 pt-2 border-t border-slate-800">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <span className="text-emerald-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            onClick={handleToggle}
            variant="outline"
            className="flex-1"
          >
            {isExpanded ? "Show Less" : "View Details"}
          </Button>
          <Button
            onClick={onSelect}
            className="flex-1"
          >
            Select
          </Button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// TEST CASES
// ============================================================================

/**
 * ServiceCard Test Cases:
 * 
 * 1. Default render - shows title, price, description
 * 2. Click "View Details" - expands to show features  
 * 3. Click "Show Less" - collapses features
 * 4. Click "Select" - triggers onSelect callback
 * 5. badge prop - renders badge when provided
 * 6. defaultExpanded=true - starts in expanded state
 */
