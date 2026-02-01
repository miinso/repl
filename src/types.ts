import type { InjectionKey, ToRefs } from 'vue'
import { Props } from './Repl.vue'

export type EditorMode = 'js' | 'css' | null
export interface EditorProps {
  value: string
  filename: string
  readonly?: boolean
  mode?: EditorMode
}

export interface EditorEmits {
  (e: 'change', code: string): void
}

export const injectKeyProps: InjectionKey<
  ToRefs<Required<Props & { autoSave: boolean }>>
> = Symbol('props')
