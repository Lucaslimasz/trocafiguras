import { Router } from './routes/router';

import { AuthProvider } from './hooks/useAuth'

export default function TrocaFiguras() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}