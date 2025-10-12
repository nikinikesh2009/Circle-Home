
'use client';
import { useFormState } from 'react-dom';
import { z } from 'zod';
import AuthCard from '@/components/AuthCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitButton } from '@/components/SubmitButton';
import { verifyStage1 } from './actions';


const initialState = {
  message: '',
};

export default function Stage1Page() {
  const [state, formAction] = useFormState(verifyStage1, initialState);

  return (
    <AuthCard
      stage={1}
      title="Security Layer 1"
      description="Enter the first-level security password."
      errorMessage={state?.message}
    >
      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="password">Password 1</Label>
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
