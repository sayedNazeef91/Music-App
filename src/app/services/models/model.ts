export interface TabConfigModel {
    display?: boolean,
    useComponents?: boolean,
    sortingField?: string,
    sortAsc?: boolean,
    menuConfig?: MenuConfig,
    tabs: TabsModel[],
    tabWrapperClass?: string,
};

export interface MenuConfig {
    display?: boolean,
    text: string,
    matIcon?: string,
    iconSrc?: string,
    tabClass?: string,
    menuWrapperClass?: string
};

export interface TabsModel {
    display?: boolean,
    text: string,
    iconSrc?: string,
    link?: string,
    value: string,
    containerRef?: any,
    sequence?: number,
    isMenuItem?: boolean,
    tabClass?: string
};
