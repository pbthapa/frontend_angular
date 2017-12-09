import { TableColumnConf } from '../../app-utils/xDatatable/table/column.conf.datatable';

export const ColumnConfig: Array<TableColumnConf> = [
    { key: '$index', mapto: '$index', name: 'SN.', sort: { enabled: true } },
    {
        key: 'subject',
        name: 'Subject Area',
        sort: { enabled: true },
        search: true
    },
    {
        key: 'active',
        name: 'Active',
        sort: { enabled: true },
        search: true
    },    
    {
        key: 'html',
        sort: { enabled: false },
        name: 'Action',
        type: 'html',
        value: '<button class="btn btn-default" value="delete"><i value="delete" class="fa fa-trash"></i></button><button class="btn btn-default" value="view"><i value="view" class="fa fa-eye"></i></button><button class="btn btn-default" value="edit"><i value="edit" class="fa fa-edit"></i></button>',
        events: { click: true }
    }

];
