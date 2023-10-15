import type {
  MaybeRef,
  RemovableRef,
  StorageLikeAsync,
  UseStorageAsyncOptions,
} from '@vueuse/core'
import {
  useStorageAsync,
} from '@vueuse/core'

const storageLocal: StorageLikeAsync = {
  removeItem(key: string) {
    // return new Promise<void>((resolve) => {
    //   chrome.storage.local.remove(key, () => {
    //     resolve()
    //   })
    // })
    // console.log('storageLocal.removeItem', key)

    return chrome.storage.local.remove(key)
  },

  setItem(key: string, value: string) {
    // console.log('storageLocal.setItem', key, value)
    return chrome.storage.local.set({ [key]: value })
    // return new Promise<void>((resolve) => {
    //   chrome.storage.local.set({ [key]: value }, () => {
    //     resolve()
    //   })
    // })
  },

  async getItem(key: string) {
    return new Promise<string>((resolve) => {
      chrome.storage.local.get(key, (result) => {
        resolve(result[key])
      })
    })
  },
}

export function useStorageLocal<T>(key: string, initialValue: MaybeRef<T>, options?: UseStorageAsyncOptions<T>): RemovableRef<T> {
  return useStorageAsync(key, initialValue, storageLocal, options)
}
