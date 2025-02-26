import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineStartSquare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartSquare'

      short_name='LineStartSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-340h280v-280H160v280Zm360 80H80v-440h440v180h360v80H520v180ZM300-480Z"/>
    </Icon>
  );
});

IconMaterialLineStartSquare.displayName = 'OnesyIconMaterialLineStartSquare';

export default IconMaterialLineStartSquare;
