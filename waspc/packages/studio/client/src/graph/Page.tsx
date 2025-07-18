import { Handle, NodeProps, Position } from "reactflow";

export const PageNode = ({
  data,
  isConnectable,
  targetPosition = Position.Right,
}: NodeProps) => (
  <div className="rounded bg-sky-900 px-6 py-3 text-white">
    <Handle
      type="target"
      position={targetPosition}
      isConnectable={isConnectable}
    />
    <div className="absolute -top-1 left-1/2 flex -translate-x-1/2 items-center rounded bg-sky-300 px-1 text-xs text-sky-900">
      <span className="mr-1">Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    </div>
    <div className="font-bold">
      {data?.label}
      {data.authRequired ? (
        <span className="ml-1" role="img" aria-label="Auth Required">
          🔒
        </span>
      ) : null}
    </div>
  </div>
);
