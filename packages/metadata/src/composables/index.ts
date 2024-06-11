import { ItemType, toItem } from '..';

export const composables: ItemType[] = toItem([
    { name: 'usePrimeVue', as: 'usePrimeVue', from: 'primevue/config' },
    { name: 'useStyle', as: 'useStyle', from: 'primevue/usestyle' },
    { name: 'useConfirm', as: 'useConfirm', from: 'primevue/useconfirm' },
    { name: 'useToast', as: 'useToast', from: 'primevue/usetoast' },
    { name: 'useDialog', as: 'useDialog', from: 'primevue/usedialog' }
]);
