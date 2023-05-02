import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/main')}>메인 이동</button>
    </div>
  );
}
