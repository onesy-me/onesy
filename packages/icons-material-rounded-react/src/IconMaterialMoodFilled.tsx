import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoodFilled'

      short_name='Mood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-180q58 0 107-28t79-76q6-12-1-24t-21-12H316q-14 0-21 12t-1 24q30 48 79.5 76T480-260Z"/>
    </Icon>
  );
});

IconMaterialMoodFilled.displayName = 'OnesyIconMaterialMoodFilled';

export default IconMaterialMoodFilled;
