






export interface GluegunPrint {
  /* Colors as seen from colors.js. */

  /* A green checkmark. */
  checkmark: string
  /* A red X marks the spot. */
  xmark: string
  /* Prints a message to stdout. */
  info: (message: any) => void
  /* Prints a warning-colored message. */
  warning: (message: any) => void
  /* Prints a success-colored message. */
  success: (message: any) => void
  /* Prints a highlighted (cyan) message. */
  highlight: (message: any) => void
  /* Prints a muted (grey) message. */
  muted: (message: any) => void
  /* Prints an error-colored message. */
  error: (message: any) => void
  /* Prints debug information about any data, with an optional title. */
  debug: (value: any, title?: string) => void
  /* DEPRECATED: prints a normal line of text. */
  fancy: (value: string) => void
  /* Prints a divider. */
  divider: () => void
  /* Finds the column widths for a table */

  /* Prints a newline. */
  newline: () => void
  /* An `ora`-powered spinner. */


}
