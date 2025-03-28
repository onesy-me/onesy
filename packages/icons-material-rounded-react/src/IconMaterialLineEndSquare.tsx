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
      <path d="M520-340h280v-280H520v280Zm-40 80q-17 0-28.5-11.5T440-300v-140H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h320v-140q0-17 11.5-28.5T480-700h360q17 0 28.5 11.5T880-660v360q0 17-11.5 28.5T840-260H480Zm180-220Z"/>
    </Icon>
  );
});

IconMaterialLineEndSquare.displayName = 'OnesyIconMaterialLineEndSquare';

export default IconMaterialLineEndSquare;
