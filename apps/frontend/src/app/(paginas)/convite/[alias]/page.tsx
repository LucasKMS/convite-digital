interface PaginaConviteProps {
  params: {
    alias: string;
  };
}

export default function PaginaConvite(props: PaginaConviteProps) {
  return (
    <div>
      <span>{props.params.alias}</span>
    </div>
  );
}
