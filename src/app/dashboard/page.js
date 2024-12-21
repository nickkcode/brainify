import ProtectedRoute from '@/components/ProtectedRoute';

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div>Welcome to the dashboard!</div>
    </ProtectedRoute>
  );
};

export default Dashboard;
