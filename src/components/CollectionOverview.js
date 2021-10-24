import React, { useState } from 'react';
import './CollectionOverview.scss';
import CollectionItem_51 from './CollectionItem';
import items from './Collection-iten-date';

const CollectionOverview_51 = ({ title1, title2 }) => {
  const [collectionItems, setCollectionItems] = useState(items);
  console.log('collectionItems', collectionItems);
  const hatsItem = collectionItems.slice(0, 4);
  console.log('hatsItem', hatsItem);
  const mensItem = collectionItems.slice(4);
  console.log('mensItem', mensItem);
  return (
    <div className="collection-overview">
      <div className="collection-preview">
        <h2 className="title">{title1}</h2>
        <div className="preview">
          {mensItem.map((item) => {
            const { id, remoteUrl, name, price } = item;
            return (
              <CollectionItem_51
                key={id}
                remoteUrl={remoteUrl}
                name={name}
                price={price}
              />
            );
          })}
        </div>
      </div>
      <div className="collection-preview">
        <h2 className="title">{title2}</h2>
        <div className="preview">
          {hatsItem.map((item) => {
            const { id, remoteUrl, name, price } = item;
            return (
              <CollectionItem_51
                key={id}
                remoteUrl={remoteUrl}
                name={name}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollectionOverview_51;
