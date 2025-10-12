
'use client';
import { useFormState } from 'react-dom';
import AuthCard from '@/components/AuthCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitButton } from '@/components/SubmitButton';
import { verifyStage3 } from './actions';

const initialState = {
  message: '',
};

export default function Stage3Page() {
  const [state, formAction] = useFormState(verifyStage3, initialState);

  return (
    <AuthCard
      stage={3}
      title="Security Layer 3"
      description="Enter the third-level security password."
      errorMessage={state?.message}
    >
      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="password">Password 3</Label>
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
