import { portfolioData } from "@/data/portfolio";

export function BentoBox() {
  const { bentoImages } = portfolioData;
  
  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2 aspect-square";
      case "wide":
        return "col-span-2 row-span-1 aspect-[2/1]";
      case "small":
        return "col-span-1 row-span-1 aspect-square";
      default:
        return "col-span-1 row-span-1 aspect-square";
    }
  };

  return (
    <div className="grid grid-cols-4 gap-3 w-full mb-12">
      {bentoImages.map((image) => (
        <div
          key={image.id}
          className={`rounded-lg bg-muted overflow-hidden hover-elevate ${getSizeClasses(image.size)}`}
          data-testid={`bento-image-${image.id}`}
        >
          {image.src ? (
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              {image.alt}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
