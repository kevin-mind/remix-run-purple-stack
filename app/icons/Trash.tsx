export function Trash({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      className={className}
    >
      <path d="M10,2L9,3L4,3L4,5L5,5L5,20C5,21.093063,5.9069372,22,7,22L15,22L15,20L7,20L7,5L17,5L17,15L19,15L19,5L20,5L20,3L19,3L15,3L14,2L10,2zM9,7L9,18L11,18L11,7L9,7zM13,7L13,18L15,18L15,7L13,7zM17.878906,16.929688L16.464844,18.34375L18.585938,20.464844L16.464844,22.585938L17.878906,24L20,21.878906L22.121094,24L23.535156,22.585938L21.414062,20.464844L23.535156,18.34375L22.121094,16.929688L20,19.050781L17.878906,16.929688z" />
    </svg>
  );
}
