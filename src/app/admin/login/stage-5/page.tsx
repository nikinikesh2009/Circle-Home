
'use client';
import { useActionState } from 'react';
import AuthCard from '@/components/AuthCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitButton } from '@/components/SubmitButton';
import { verifyStage5 } from './actions';

const initialState = {
  message: '',
};

export default function Stage5Page() {
  const [state, formAction] = useActionState(verifyStage5, initialState);

  return (
    <AuthCard
      stage={5}
      title="Security Layer 5"
      description="Enter the two backup codes."
      errorMessage={state?.message}
    >
      <form action={formAction} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="code1">Backup Code 1</Label>
          <Input 
            id="code1" 
            name="code1" 
            type="text" 
            placeholder="XXXX-XXXX-XXXX" 
            required 
          />
        </div>
         <div className="space-y-2">
          <Label htmlFor="code2">Backup Code 2</Label>
          <Input 
            id="code2" 
            name="code2" 
            type="text"
            placeholder="XXXX-XXXX-XXXX" 
            required 
          />
        </div>
        <div className="pt-2">
            <SubmitButton />
        </div>
      </form>
    </AuthCard>
  );
}
