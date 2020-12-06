import { writable } from 'svelte/store';

export const wm = (() => {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    add: (x: { title: string, src: string }) => update(a => {
      if (a.find(({ title }) => title === x.title)) return a;
      return [...a, x];
    }),
    remove: (x: { title: string }) => update(a => a.filter(({ title }) => title !== x.title)),
    clear: () => set([]),
  }
})();
