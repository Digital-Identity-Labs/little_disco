
import  * as entityIDUtils from './entity_id_utils';
import  * as backend from './backend';

const base_path = "/Shibboleth.sso/";

function sessionDataPath() {
    return base_path + 'SessionData';
}

function sessionData(dataPath = sessionDataPath()) {
    return backend.fetchData(dataPath);
}

export {
    sessionDataPath,
    sessionData
};
