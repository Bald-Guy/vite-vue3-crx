import type { MaybeRef, RemovableRef, StorageLikeAsync, UseStorageAsyncOptions } from '@vueuse/core'
import {
  useStorageAsync,
} from '@vueuse/core'

const storageLocal: StorageLikeAsync = {
  async getItem(key: string) {
    return (await chrome.storage.local.get(key))[key]
  },

  setItem(key: string, value: string) {
    return chrome.storage.local.set({ [key]: value })
  },

  removeItem(key: string) {
    chrome.storage.local.remove(key)
  },
}

export function useStorageLocal<T>(key: string, initialValue: MaybeRef<T>, options?: UseStorageAsyncOptions<T>): RemovableRef<T> {
  return useStorageAsync(key, initialValue, storageLocal, options)
}
