import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenuBookW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuBookW100Filled'

      short_name='MenuBook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M494-264q50-29 101-41.5T700-318q36 0 75 7t65 19v-401q-26-16-62.5-22.5T700-722q-54 0-108 16.5T494-656v392Zm-14 40q-49-32-105-49t-115-17q-48 0-92.5 12T92-249v-462q31-18 75-28.5t93-10.5q59 0 115 17.5T480-682q49-33 105-50.5T700-750q49 0 92.5 10.5T868-711v462q-31-17-75.5-29T700-290q-59 0-115 17t-105 49Zm74-356v-28q32-17 69.5-25.5T700-642q21 0 40 2.5t40 7.5v28q-20-6-38.5-8t-41.5-2q-39 0-76.5 8.5T554-580Zm0 218v-30q30-17 69-25.5t77-8.5q21 0 40 2.5t40 7.5v28q-20-6-38.5-8t-41.5-2q-39 0-76.5 9.5T554-362Zm0-108v-30q32-17 69.5-25.5T700-534q21 0 40 2.5t40 7.5v28q-20-6-38.5-8t-41.5-2q-39 0-76.5 9.5T554-470Z"/>
    </Icon>
  );
});

IconMaterialMenuBookW100Filled.displayName = 'OnesyIconMaterialMenuBookW100Filled';

export default IconMaterialMenuBookW100Filled;
