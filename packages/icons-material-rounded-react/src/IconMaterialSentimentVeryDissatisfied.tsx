import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSentimentVeryDissatisfied = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SentimentVeryDissatisfied'

      short_name='SentimentVeryDissatisfied'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m356-522 21 22q8 8 20.5 8t21.5-9q8-8 8-20.5t-8-21.5l-21-21 22-23q8-8 7.5-20.5T419-629q-9-8-21.5-8t-20.5 8l-21 21-24-22q-8-8-20.5-7.5T290-628q-8 8-8.5 20.5T290-587l22 23-22 22q-8 8-8 20.5t9 21.5q8 8 20.5 8.5T332-500l24-22Zm248 0 23 23q8 8 20.5 7.5T669-501q8-8 8-20.5t-8-21.5l-21-21 22-23q8-8 7.5-20.5T668-629q-8-8-20.5-8.5T627-629l-23 21-22-21q-8-8-20.5-8t-21.5 9q-8 8-8.5 20.5T540-587l22 23-22 22q-8 8-8 20.5t9 20.5q8 9 20.5 9t21.5-9l21-21ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-155.5t85.5-127q54-54.5 127-86T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 83-31.5 156t-86 127q-54.5 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93T800-480q0-133-93.5-226.5T480-800q-134 0-227 93.5T160-480q0 134 93 227t227 93Zm0-260q-57 0-107 28t-80 77q-6 12 1 23.5t21 11.5h329q14 0 21-11.5t1-23.5q-30-49-79.5-77T480-420Z"/>
    </Icon>
  );
});

IconMaterialSentimentVeryDissatisfied.displayName = 'OnesyIconMaterialSentimentVeryDissatisfied';

export default IconMaterialSentimentVeryDissatisfied;
