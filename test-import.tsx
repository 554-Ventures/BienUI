// Test file to verify our library import pattern works
import { Button, Card, Text, Input } from '@bien/ui';

console.log('Testing component imports:');
console.log('Button:', Button);
console.log('Card:', Card);
console.log('Text:', Text);
console.log('Input:', Input);

export function TestApp() {
  return (
    <div>
      <Text>Hello from @bien/ui!</Text>
      <Button>Click me</Button>
      <Card>
        <Text>Card content</Text>
        <Input placeholder="Type here..." />
      </Card>
    </div>
  );
}