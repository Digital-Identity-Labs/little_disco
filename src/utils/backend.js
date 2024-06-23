import {normalize} from './entity_id_utils';
import wretch from 'wretch';
import {throttlingCache, dedupe, retry} from 'wretch/middlewares';

const base_path = "/data/";

function fetchData(url) {

    return wretch(url).get().json();

}

function fetchFile(url) {

    return wretch(url).get().text();

}

export {
    fetchData,
    fetchFile
};
