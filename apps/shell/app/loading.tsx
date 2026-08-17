import { Loading } from "@portal/ui";

/** Shown while the shell home resolves. */
export default function ShellLoading() {
  return (
    <div className="auth-wrap">
      <Loading label="Loading…" />
    </div>
  );
}
