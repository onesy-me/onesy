import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndSquareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndSquareFilled'

      short_name='LineEndSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-260v-180H80v-80h360v-180h440v440H440Z"/>
    </Icon>
  );
});

IconMaterialLineEndSquareFilled.displayName = 'OnesyIconMaterialLineEndSquareFilled';

export default IconMaterialLineEndSquareFilled;
