import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStayCurrentLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentLandscapeFilled'

      short_name='StayCurrentLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-200v-560h880v560H40Zm200-80h480v-400H240v400Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentLandscapeFilled.displayName = 'OnesyIconMaterialStayCurrentLandscapeFilled';

export default IconMaterialStayCurrentLandscapeFilled;
