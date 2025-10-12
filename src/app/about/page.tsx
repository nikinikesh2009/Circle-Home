import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">About Circle</h1>
        <p className="text-lg text-muted-foreground mt-2">Connecting people with shared passions.</p>
      </header>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-lg">
          <p>
            At Circle, our mission is to create a vibrant and inclusive community where individuals can connect with others who share their interests and passions. We believe that meaningful connections are built on common ground, and our platform is designed to make finding your circle easier than ever before.
          </p>
        </CardContent>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Our Vision</CardTitle>
        </CardHeader>
        <CardContent className="text-lg">
          <p>
            We envision a world where everyone can find their tribe, a place where they feel they belong. Whether you're a painter, a coder, a gamer, or a gardener, Circle is the place to meet, share, and grow with like-minded people.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
