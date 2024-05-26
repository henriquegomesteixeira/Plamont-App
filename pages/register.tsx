import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, cpf }),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      console.error('Failed to register');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>CPF</label>
        <input 
          type="text" 
          value={cpf}
          onChange={(e) => setCpf(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
