# Development Guide

## Setting Up Your Development Environment

### Prerequisites
- Node.js 16 or higher
- npm or yarn
- Git

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/cyberdudeuk/govukOS.git
cd govukOS

# Install dependencies
npm install

# Verify setup
npm run test
npm run build
```

## Common Development Tasks

### Running the Development Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Running Tests
```bash
# Run all tests once
npm run test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch
```

### Linting and Formatting

```bash
# Check code style
npm run lint

# Automatically fix style issues
npm run format

# Type checking
npm run type-check
```

## Code Style Guide

### TypeScript

- Use `const` by default, `let` when needed
- Prefer arrow functions
- Use descriptive variable names
- Add JSDoc comments for public APIs
- Keep functions small and focused

### Example:

```typescript
/**
 * Initializes a new component
 * @param options - Configuration options
 * @returns The initialized component
 */
export function createComponent(options: ComponentOptions): Component {
  // Implementation
}
```

### Testing

- Write tests alongside features
- Test behavior, not implementation
- Use descriptive test names
- Aim for 70%+ code coverage

### Example:

```typescript
describe('Component', () => {
  test('should render with correct title', () => {
    const component = createComponent({ title: 'Test' });
    expect(component.title).toBe('Test');
  });
});
```

## Git Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation
- `chore/description` - Maintenance tasks

### Commit Messages

Follow conventional commits:
```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only
- `style`: Changes that don't affect meaning
- `refactor`: Code change without feature/fix
- `perf`: Performance improvement
- `test`: Adding/updating tests
- `chore`: Build process, dependencies, etc.

Example:
```
feat(core): add initialization function

Add a new init function to the core module that
initializes the govukOS system.

Closes #42
```

## Debugging

### Using VS Code

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "preLaunchTask": "tsc: build",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

## Troubleshooting

### Port already in use
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
npm run type-check
```

## Resources

- [GOV.UK Design System](https://design-system.service.gov.uk/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

Need help? Open an issue or check [CONTRIBUTING.md](CONTRIBUTING.md).
