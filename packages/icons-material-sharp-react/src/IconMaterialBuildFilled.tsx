import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBuildFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildFilled'

      short_name='Build'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M715-103 444-376q-20 8-40.5 12t-43.5 4q-100 0-170-70t-70-170q0-36 10-68.5t28-61.5l146 146 72-72-146-146q29-18 61.5-28t68.5-10q100 0 170 70t70 170q0 23-4 43.5T584-516l273 271-142 142Z"/>
    </Icon>
  );
});

IconMaterialBuildFilled.displayName = 'OnesyIconMaterialBuildFilled';

export default IconMaterialBuildFilled;
