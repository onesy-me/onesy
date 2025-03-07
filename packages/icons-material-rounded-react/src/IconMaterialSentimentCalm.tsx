import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentCalm = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentCalm'

      short_name='SentimentCalm'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-260q34 0 64-12.5t56-35.5q9-8 9-21t-9-21q-9-8-21.5-8t-22.5 8q-17 13-36 21t-40 8q-21 0-40-8t-36-21q-10-8-22.5-8t-21.5 8q-9 8-9 21t9 21q26 22 56 35t64 13Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93ZM340-480q32 0 57.5-20t39.5-49q5-13 .5-25.5T420-590q-11-3-22 2.5T382-571q-7 13-17.5 22t-24.5 9q-14 0-25-9.5T298-572q-5-11-16-16t-22-2q-13 3-17.5 15.5T244-549q12 30 38 49.5t58 19.5Zm280 0q32 0 57.5-20t39.5-49q5-13 .5-25.5T700-590q-11-3-22 2.5T662-571q-7 13-17.5 22t-24.5 9q-14 0-25-9.5T578-572q-5-11-16-16t-22-2q-13 3-17.5 15.5T524-549q12 30 38 49.5t58 19.5Z"/>
    </Icon>
  );
});

IconMaterialSentimentCalm.displayName = 'OnesyIconMaterialSentimentCalm';

export default IconMaterialSentimentCalm;
