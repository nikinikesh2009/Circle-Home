
'use client';
import { useActionState } from 'react';
import AuthCard from '@/components/AuthCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitButton } from '@/components/SubmitButton';
import { verifyStage2 } from './actions';

const initialState = {
  message: '',
};

export default function Stage2Page() {
  const [state, formAction] = useActionState(verifyStage2, initialState);

  return (
    <AuthCard
      stage={2}
      title="Security Layer 2"
      description="Enter the second-level security password."
      errorMessage={state?.message}
    >
      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="password">Password 2</Label>
          <Input 
            id="password" 
            name="password" 
            type="password" 
            placeholder="Enter 32-character password" 
            required 
            minLength={32}
          />
        </div>
        <SubmitButton />
      </form>
    </AuthCard>
  );
}
