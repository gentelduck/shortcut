import { useShortcut } from './Shortcut'

export const App = () => {
  useShortcut({
    keys: ['Ctrl+a+b'],
    onKeysPressed: () => console.log('Pressed a, b, c'),
  })
  return 'Press a, b, c'
}
