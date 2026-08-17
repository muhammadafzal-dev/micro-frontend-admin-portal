import { Card, Avatar, Badge, InfoMessage } from "@portal/ui";
import { ROUTES } from "@portal/config";
import { getCurrentUser } from "../lib/session";

/**
 * / — the shell's landing page. Public: it adapts to whether a valid session
 * cookie exists, demonstrating that even the host independently reads the
 * shared session.
 */
export default async function Home() {
  const user = await getCurrentUser();

  return (
    <div className="auth-wrap">
      <div className="stack" style={{ maxWidth: 560, width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <div className="sidebar__logo" style={{ margin: "0 auto 14px", width: 44, height: 44, fontSize: 20 }}>
            ◆
          </div>
          <h1 style={{ fontSize: 28 }}>Multi-Tenant Admin Portal</h1>
          <p className="muted">
            Four independently deployed micro-frontends, stitched into one app
            with Next.js Multi-Zones.
          </p>
        </div>

        {user ? (
          <Card>
            <div className="row" style={{ gap: 14, marginBottom: 16 }}>
              <Avatar name={user.name} color={user.avatarColor} size={48} />
              <div>
                <div style={{ fontWeight: 700 }}>Signed in as {user.name}</div>
                <div className="muted">
                  {user.email} · <Badge kind={user.role}>{user.role}</Badge>
                </div>
              </div>
            </div>
            <div className="row">
              <a className="btn btn--primary" href={ROUTES.dashboard}>
                Go to dashboard
              </a>
              <a className="btn btn--secondary" href={ROUTES.settings}>
                Settings
              </a>
              <a className="btn btn--ghost" href={ROUTES.logout}>
                Log out
              </a>
            </div>
          </Card>
        ) : (
          <Card>
            <p style={{ marginBottom: 16 }}>
              Sign in to access the dashboard and settings zones.
            </p>
            <a className="btn btn--primary btn--block" href={ROUTES.login}>
              Sign in
            </a>
          </Card>
        )}

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
          <Zone name="Auth" path="/auth" desc="Login, logout, session" />
          <Zone name="Dashboard" path="/dashboard" desc="Stats, projects, analytics" />
          <Zone name="Settings" path="/settings" desc="Profile, security" />
        </div>

        <InfoMessage>
          <strong>Demo only.</strong> Mock authentication. Try{" "}
          <span className="mono">alice@example.com</span> /{" "}
          <span className="mono">bob@example.com</span> (password{" "}
          <span className="mono">password123</span>).
        </InfoMessage>
      </div>
    </div>
  );
}

function Zone({ name, path, desc }: { name: string; path: string; desc: string }) {
  return (
    <div className="card">
      <div className="card__title">{name}</div>
      <div className="mono muted" style={{ fontSize: 12, marginBottom: 6 }}>
        {path}
      </div>
      <div className="muted" style={{ fontSize: 13 }}>
        {desc}
      </div>
    </div>
  );
}
