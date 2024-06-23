import  * as entityIDUtils from './entity_id_utils';

function mdqEntityURL(serviceURL, entityID) {

    if (!entityID) {
        return '';
    }

    const id = entityIDUtils.transform(entityID);
    const path = 'entities/' + id;
    const absoluteUrl = new URL(path, serviceURL);
    return absoluteUrl.toString();
}

function mdqAllURL(serviceURL) {
    const path = 'entities/';
    const absoluteUrl = new URL(path, serviceURL);
    return absoluteUrl.toString();
}

function filename(entityID) {
   const name = entityIDUtils.normalize(entityID);
   return name + '.xml';
}

export {mdqEntityURL, mdqAllURL, filename};
