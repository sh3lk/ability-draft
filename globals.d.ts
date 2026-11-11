/** A value that may be absent. Declared here with no import or export, so every file sees it. */
type Optional<T> = T | undefined

/** A place the mod keeps empty on purpose holds null. */
type Nullable<T> = T | null
