import { Router } from './routes/router';

import { AuthProvider } from './hooks/useAuth'
import { PostProvider } from './hooks/usePost'

export default function TrocaFiguras() {
  return (
    <AuthProvider>
      <PostProvider>
        <Router />
      </PostProvider>
    </AuthProvider>
  );
}