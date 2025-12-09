export const Divider = ({ thick = false }: { thick?: boolean }) => (
  <div className={`${thick ? "h-[5px]" : "h-px"} bg-foreground`} />
);
