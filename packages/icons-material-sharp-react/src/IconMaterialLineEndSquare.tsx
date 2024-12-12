import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineEndSquare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndSquare'

      short_name='LineEndSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-340h280v-280H520v280Zm-80 80v-180H80v-80h360v-180h440v440H440Zm220-220Z"/>
    </Icon>
  );
});

IconMaterialLineEndSquare.displayName = 'OnesyIconMaterialLineEndSquare';

export default IconMaterialLineEndSquare;
