import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNewReleases = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewReleases'

      short_name='NewReleases'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/>
    </Icon>
  );
});

IconMaterialNewReleases.displayName = 'OnesyIconMaterialNewReleases';

export default IconMaterialNewReleases;
