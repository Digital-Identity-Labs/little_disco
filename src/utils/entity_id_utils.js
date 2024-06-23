import sha1 from 'crypto-js/sha1';

const sha1_regex = new RegExp("^([0-9a-f]{6})([0-9a-f]{34})$");

function hash(uri_id) {
    return sha1(uri_id).toString();
}

function normalize(id) {
    if (sha1_regex.test(id)) {
        return id;
    } else {
        return hash(id);
    }
}

function transform(uriID) {
    if (uriID.startsWith('{sha1}')) {
        return uriID;
    }
    const shaHash = normalize(uriID);
    return `{sha1}${shaHash}`;
}

export {hash, normalize, transform};
