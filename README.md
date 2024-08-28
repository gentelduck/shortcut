# `@ahmedayob/email-toolkit`

A lightweight React component for easily binding and handling keyboard shortcuts in your React applications.

## Features

- **Easy Integration**: Integrate keyboard shortcuts into your React application effortlessly. Simply use the `useShortcut` hook and pass the required props to handle key combinations or sequences.
- **Support for Key Combinations**: Handle key combinations like `Ctrl+S` or `Command+K` with ease. The component can take a single string or an array of key combinations.
- **Support for Key Sequences**: React to key sequences such as `Up Up Down Down Left Right B A Enter`. You can define these sequences as strings or arrays.
- **Mixed Key Combinations and Sequences**: Combine both key combinations and sequences to define more complex shortcuts.
- **Global Keyboard Event Listener**: The component adds a global keyboard event listener that works anywhere in the component tree without preventing events from bubbling or capturing.
- **TypeScript Support**: Fully implemented in TypeScript with type definitions, ensuring a smooth development experience with type safety.
- **Case Insensitivity**: The component handles key shortcuts in a case-insensitive manner, so you don’t need to worry about key case.
- **No Conflict with Other Components**: Use multiple instances of `useShortcut` for different shortcuts without conflicts.

## Installation

To install the toolkit, use npm or yarn:

```bash
npm install @ahmedayob/duck-shortcut
# or
yarn add @ahmedayob/duck-shortcut
```

## Usage

Here's a quick guide on how to use the library:

```tsx
import { useShortcut } from '@ahmedayob/duck-shortcut'

const App = () => {
  useShortcut({
    keys: ['ctrl+s'], // Key combinations or sequences
    onKeysPressed: () => {
      console.log('Ctrl+S was pressed!')
    },
  })

  return <div>Press Ctrl+S to trigger the shortcut</div>
}
```

### Handling Multiple Shortcuts

You can handle multiple key combinations or sequences by passing them as an array:

```typescript
import { useShortcut } from '@ahmedayob/duck-shortcut'
const App = () => {
  useShortcut({
    keys: ['ctrl+s', 'command+k'], // Multiple shortcuts
    onKeysPressed: () => {
      console.log('Ctrl+S or Command+K was pressed!')
    },
  })
  return <div>Press Ctrl+S or Command+K to trigger the shortcut</div>
}
```

## API Reference

Here’s an API reference for `@ahmedayob/duck-shortcut` in MDX format, detailing the types and usage of the `useShortcut` hook:

## `useShortcut`

The `useShortcut` hook allows you to bind keyboard shortcuts to callback functions in your React components.

### Importing

```jsx
import { useShortcut } from '@ahmedayob/duck-shortcut'
```

### Usage

```jsx
useShortcut({
  keys: /* Key combinations or sequences */,
  onKeysPressed: /* Callback function */,
});
```

### Parameters

#### `keys`

- **Type**: `string | string[]`
- **Description**: Defines the keyboard shortcuts to listen for. You can specify key combinations (e.g., `'ctrl+s'`, `'command+k'`) or key sequences (e.g., `'Up Up Down Down Left Right B A Enter'`).

##### Example

```jsx
keys: 'ctrl+s'
```

or

```jsx
keys: ['ctrl+s', 'command+k']
```

or

```jsx
keys: 'Up Up Down Down Left Right B A Enter'
```

#### `onKeysPressed`

- **Type**: `() => void`
- **Description**: Callback function that gets called when the specified key combinations or sequences are pressed.

##### Example

```jsx
onKeysPressed: () => {
  console.log('Shortcut triggered!')
}
```

### Example

```jsx
import { useShortcut } from '@ahmedayob/duck-shortcut'

const App = () => {
  useShortcut({
    keys: ['ctrl+s', 'command+k'], // Define your shortcuts
    onKeysPressed: () => {
      // Callback when shortcuts are pressed
      console.log('Shortcut triggered!')
    },
  })

  return <div>Press Ctrl+S or Command+K</div>
}
```

### Notes

- **Key Combinations**: These are key presses that need to happen simultaneously (e.g., `'ctrl+s'`, `'command+shift+P'`).
- **Key Sequences**: These are key presses that need to happen in sequence (e.g., `'Up Up Down Down Left Right B A Enter'`).
- **Case Sensitivity**: Key names are case-insensitive.

## Type Definitions

### `ShortcutProps`

```typescript
interface ShortcutProps {
  keys: string | string[] // Key combinations or sequences
  onKeysPressed: () => void // Callback when shortcuts are pressed
}
```

### `useShortcut`

```typescript
declare function useShortcut(props: ShortcutProps): void
```

## License

This library is available under the [MIT License](LICENSE).

## Contributing

This reference includes type definitions for `ShortcutProps`, as well as detailed information on how to use the `useShortcut` hook.

Contributions are welcome! Please open issues and pull requests on the [GitHub repository](https://github.com/ahmedayob/email-toolkit).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
