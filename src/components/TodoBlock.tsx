// Placeholder for real content Osama must supply (photos, reviews, price
// figures). Spec hard rule: never invent this content; show exactly what is needed.
// Renders only in local dev — production visitors see nothing until the real
// content replaces the block. Master list: docs/CONTENT_NEEDED.md
const TodoBlock = ({ note }: { note: string }) => {
  if (!import.meta.env.DEV) return null;
  return (
    <div className="border-2 border-dashed border-foreground/40 bg-muted p-6 text-center">
      <p className="font-headline font-bold uppercase tracking-wider text-xs text-muted-foreground">
        TODO: Osama
      </p>
      <p className="font-body text-sm text-muted-foreground mt-1">{note}</p>
    </div>
  );
};

export default TodoBlock;
