import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RestConnector } from './rest-connector';
import { DataSourceModel, DataSourceConfigModel } from './models/chart';
import { Constants } from './helpers/constants';


@Injectable()
export class DataSourceService {

    constructor(private restConnector: RestConnector, private constants: Constants) { }

    fetchData(dataSourceConfigs: DataSourceModel[]) {

        let dataSource = {};
        for (let i = 0; i < dataSourceConfigs.length; i++) {

            let dataSourceConfig = JSON.parse(JSON.stringify(dataSourceConfigs[i].config));

            if (dataSourceConfigs[i].config.type === this.constants.REST_CONSTANTS.GET) {

                dataSource[dataSourceConfigs[i].dataSourceName] = (dataSourceObj: DataSourceConfigModel): Observable<any> => {

                    let regquestConfig = JSON.parse(JSON.stringify(dataSourceObj || dataSourceConfig));
                    regquestConfig['url'] = this.getActualURL(regquestConfig);
                    regquestConfig['headers'] = new HttpHeaders(dataSourceConfigs[i].config.headers);
                    return this.restConnector.getRequest(regquestConfig['url']);
                }
            } else if (dataSourceConfigs[i].config.type === this.constants.REST_CONSTANTS.POST) {

                dataSource[dataSourceConfigs[i].dataSourceName] = (dataSourceObj: DataSourceConfigModel): Observable<any> => {

                    let regquestConfig = JSON.parse(JSON.stringify(dataSourceObj || dataSourceConfig));
                    regquestConfig['url'] = this.getActualURL(regquestConfig);
                    regquestConfig['headers'] = new HttpHeaders(dataSourceConfigs[i].config.headers);
                    return this.restConnector.postRequest(regquestConfig['url'], regquestConfig['body'], null, null, regquestConfig['headers']);
                };
            }
        }
        return dataSource;
    }

    getActualURL(config: DataSourceConfigModel) {

        let url = config.url;
        let paramsExist = (config.url.indexOf('?') >= 0);
        let paramKeys = Object.keys(config.params || {});
        for (let i = 0; i < paramKeys.length; i++) {

            if (i === 0 || paramsExist) {

                url += '&' + paramKeys[i] + '=' + config.params[paramKeys[i]];
            } else {

                url += '?' + paramKeys[i] + '=' + config.params[paramKeys[i]];
            }
        }

        return url;
    }

}
