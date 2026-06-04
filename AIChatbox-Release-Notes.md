# AIChatbox Release Notes

Date: 2026-05-16
Component: AIChatbox

## Summary
This update improves AIChatbox usability, extensibility, and content rendering. The component now supports markdown in message bubbles, customizable assistant-state rendering, optional empty-state/suggestion visibility, and file attachments via drag-and-drop or file picker.

## Highlights
- Added markdown rendering for string message content using `react-markdown` with `remark-gfm`.
- Improved layout and scroll behavior so transcript scrolls correctly while composer remains anchored.
- Added file attachment support in the composer:
  - Drag and drop files into the composer area.
  - File picker support via paperclip icon button.
- Added new customization controls for empty-state and suggestions visibility.
- Added assistant-state slot support so consumers can fully replace the default thinking/streaming UI.
- Updated Storybook with upload/drag-and-drop demos and new controls.

## API Changes
### New Props
- `showEmptyState?: boolean` (default: `true`)
- `showSuggestions?: boolean` (default: `true`)
- `onFilesSelected?: (files: File[]) => void`
- `fileAccept?: string`
- `fileMultiple?: boolean` (default: `true`)
- `assistantState?: React.ReactNode | ((status: 'thinking' | 'streaming') => React.ReactNode)`

### Behavior Notes
- If `assistantState` is provided, it replaces the built-in thinking/streaming indicator rendering.
- If `onFilesSelected` is not provided, upload UI is hidden and drag/drop is inactive.
- The composer now shows visual drag-active feedback and a drop hint while dragging files.

## UX and Visual Updates
- Transcript scrolling behavior and flex layout were hardened for long conversations.
- Composer visual treatment was refined and drag-active state styling added.
- Upload action moved to a compact icon-only paperclip button.
- Assistant avatar defaults use built-in avatar conventions.
- Clear action icon updated for stronger visual clarity.

## Storybook Updates
- Added controls for:
  - `showEmptyState`
  - `showSuggestions`
  - `fileAccept`
  - `fileMultiple`
- Added `FileUploadAndDrop` story demonstrating:
  - Upload button flow
  - Drag-and-drop flow
  - `onFilesSelected` callback behavior

## Migration Notes
- To enable attachments, pass `onFilesSelected` and optionally `fileAccept`/`fileMultiple`.
- To fully customize thinking/streaming UI, pass `assistantState`.
- If no customization is provided, default assistant-state rendering remains available.

## Files Updated (AIChatbox Scope)
- `src/components/Feedback/AIChatbox.tsx`
- `src/styles/ui/chatbox.css`
- `src/stories/AIChatbox.stories.tsx`
- `src/components/Icons/icons.tsx` (paperclip icon)
