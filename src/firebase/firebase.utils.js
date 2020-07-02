import firebase from 'firebase/app';
import 'firebase/firestore';

import config from './config';

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, categories, season, collectionImage} = doc.data();
        return {
            id: doc.id,
            title,
            categories,
            season,
            collectionImage
        };
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export default firebase;