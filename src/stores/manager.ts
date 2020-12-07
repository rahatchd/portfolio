import { writable } from 'svelte/store';

export const wm = (() => {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    add: (x: { title: string; comp: any; src: string; }) => update(a => {
      const found = a.find(({ title }) => title === x.title);
      if (found) {
        // const {  }
        console.dir(found)
        return a.map(({ zidx, ...rest }) => ({
          ...rest,
          zidx: zidx < found ? zidx : (zidx > found ? zidx - 1 : a.length - 1),
        }));
      }
      return [...a, { ...x, zidx: a.length } ];
    }),
    remove: (x: { title: string }) => update(a => a.filter(({ title }) => title !== x.title)),
    clear: () => set([]),
  }
})();
