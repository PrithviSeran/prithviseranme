export function BentoBox() {
  return (
    <div className="grid grid-cols-4 gap-3 w-full mb-12">
      {/* Large square - top left */}
      <div 
        className="col-span-2 row-span-2 rounded-lg bg-muted overflow-hidden aspect-square hover-elevate"
        data-testid="bento-image-1"
      >
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          Image 1
        </div>
      </div>
      
      {/* Small rectangle - top right */}
      <div 
        className="col-span-2 row-span-1 rounded-lg bg-muted overflow-hidden aspect-[2/1] hover-elevate"
        data-testid="bento-image-2"
      >
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          Image 2
        </div>
      </div>
      
      {/* Two small squares - bottom right */}
      <div 
        className="col-span-1 row-span-1 rounded-lg bg-muted overflow-hidden aspect-square hover-elevate"
        data-testid="bento-image-3"
      >
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          Image 3
        </div>
      </div>
      
      <div 
        className="col-span-1 row-span-1 rounded-lg bg-muted overflow-hidden aspect-square hover-elevate"
        data-testid="bento-image-4"
      >
        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
          Image 4
        </div>
      </div>
    </div>
  );
}
