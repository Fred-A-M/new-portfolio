'use client';

export default function BurgerIcon() {
  return (
    <div className="flex flex-col gap-[6px]">
      <span 
        className="block w-7 h-[3px] bg-foreground rounded-full"
      />
      <span 
        className="block w-7 h-[3px] bg-foreground rounded-full"
      />
      <span 
        className="block w-7 h-[3px] bg-foreground rounded-full"
      />
    </div>
  );
};