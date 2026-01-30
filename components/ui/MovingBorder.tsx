export const AnimatedBorderLine = () => {
  return (
    <div className="relative h-px w-full overflow-hidden">
      {/* Static base line */}
      <div className="absolute inset-0 bg-white/[0.01]" />

      {/* Moving border */}
      <div className="absolute inset-0">
        <div className="h-full w-[200%] animate-borderMove bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>
    </div>
  );
};
