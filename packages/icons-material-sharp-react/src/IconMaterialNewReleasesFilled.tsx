import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewReleasesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewReleasesFilled'

      short_name='NewReleases'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm94-278 226-226-56-58-170 170-86-84-56 56 142 142Z"/>
    </Icon>
  );
});

IconMaterialNewReleasesFilled.displayName = 'OnesyIconMaterialNewReleasesFilled';

export default IconMaterialNewReleasesFilled;
