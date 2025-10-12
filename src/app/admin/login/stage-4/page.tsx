
'use client';
import { useFormState } from 'react-dom';
import AuthCard from '@/components/AuthCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SubmitButton } from '@/components/SubmitButton';
import { verifyStage4 } from './actions';

const initialState = {
  message: '',
};

export default function Stage4Page() {
  const [state, formAction] = useFormState(verifyStage4, initialState);

  return (
    <AuthCard
      stage={4}
      title="Security Layer 4"
      description="Enter the three secret email addresses."
      errorMessage={state?.message}
    >
      <form action={formAction} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email1">Secret Email 1</Label>
          <Input id="email1" name="email1" type="email" placeholder="first@secret.com" required />
        </div>
         <div className="space-y-2">
          <Label htmlFor="email2">Secret Email 2</Label>
          <Input id="email2" name="email2" type="email" placeholder="second@secret.com" required />
        </div>
         <div className="space-y-2">
          <Label htmlFor="email3">Secret Email 3</Label>
          <Input id="email3" name="email3" type="email" placeholder="third@secret.com" required />
        </div>
        <div className="pt-2">
            <SubmitButton />
        </div>
      </form>
    </AuthCard>
  );
}
