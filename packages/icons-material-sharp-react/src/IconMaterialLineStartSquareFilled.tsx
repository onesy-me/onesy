import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartSquareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartSquareFilled'

      short_name='LineStartSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-260H80v-440h440v180h360v80H520v180Z"/>
    </Icon>
  );
});

IconMaterialLineStartSquareFilled.displayName = 'OnesyIconMaterialLineStartSquareFilled';

export default IconMaterialLineStartSquareFilled;
