export interface ItemType {
    name?: string;
    as?: string;
    from?: string;
    use?: {
        as?: string;
    };
}

export const toItem = (arr?: any[]): ItemType[] | undefined => {
    return arr?.map((item) => {
        const it = typeof item === 'string' ? { name: item } : item;
        it.from ??= it?.name?.toLowerCase();

        return it;
    });
};

export * from './components/index';
export * from './composables/index';
export * from './directives/index';
