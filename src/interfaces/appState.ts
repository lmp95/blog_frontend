export interface AppStateInterface {
    loading: boolean;
    alertDialog: {
        isShow: boolean;
        message?: string | null;
    };
    sidebar: boolean | null;
    tab: string | null | undefined;
}
