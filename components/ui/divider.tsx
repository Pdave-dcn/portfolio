export const Divider = ({
  thick = false,
  muted = false,
}: {
  thick?: boolean;
  muted?: boolean;
}) => (
  <div
    className={`${thick ? "h-[5px]" : "h-px"} ${
      muted ? "bg-muted-foreground opacity-70" : "bg-foreground"
    }`}
  />
);
