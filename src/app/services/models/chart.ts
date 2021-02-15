export interface DataSourceConfigModel {
    url: string,
    type: string,
    body: any,
    params: any,
    headers?: any
};

export interface DataSourceModel {
    id: number,
    dataSourceName: string,
    description?: string,
    metaData?: string,
    createdDate?: number,
    createdBy?: string,
    lastModifiedDate?: number,
    lastModifiedById?: number,
    lastModifiedBy?: string,
    config: DataSourceConfigModel
};

