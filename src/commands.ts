interface VimCommand {
  command: string;
  description: string;
}

export const movement: VimCommand[] = [
  {
    command: 'h',
    description: 'Move cursor left',
  },
  {
    command: 'j',
    description: 'Move cursor down',
  },
  {
    command: 'k',
    description: 'Move cursor up',
  },
  {
    command: 'l',
    description: 'Move cursor right',
  },
]

export const insert: VimCommand[] = [
  {
    command: 'i',
    description: 'Insert before the cursor',
  },
  {
    command: 'I',
    description: 'Insert at the beginning of the line',
  },
  {
    command: 'a',
    description: 'Append after the cursor',
  },
  {
    command: 'A',
    description: 'Append at the end of the line',
  },
  {
    command: 'o',
    description: 'Open (append) blank line below current line',
  },
  {
    command: 'O',
    description: 'Open blank line above current line',
  },
]

export const commands: { [key: string]: VimCommand[] } = {
  Movement: movement,
  Insert: insert,
}