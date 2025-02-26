import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoodBad = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoodBad'

      short_name='MoodBad'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-260q-57 0-107 28t-80 77q-6 12 1 23.5t21 11.5h329q14 0 21-11.5t1-23.5q-30-49-79.5-77T480-420Z"/>
    </Icon>
  );
});

IconMaterialMoodBad.displayName = 'OnesyIconMaterialMoodBad';

export default IconMaterialMoodBad;
