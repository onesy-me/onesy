import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGoToLineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoToLineFilled'

      short_name='GoToLine'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q-25 0-42.5-17.5T420-740q0-25 17.5-42.5T480-800q25 0 42.5 17.5T540-740q0 25-17.5 42.5T480-680Zm0 520q-25 0-42.5-17.5T420-220q0-25 17.5-42.5T480-280q25 0 42.5 17.5T540-220q0 25-17.5 42.5T480-160Z"/>
    </Icon>
  );
});

IconMaterialGoToLineFilled.displayName = 'OnesyIconMaterialGoToLineFilled';

export default IconMaterialGoToLineFilled;
