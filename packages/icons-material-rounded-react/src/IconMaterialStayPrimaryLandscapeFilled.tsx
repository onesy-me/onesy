import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStayPrimaryLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryLandscapeFilled'

      short_name='StayPrimaryLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h720q33 0 56.5 23.5T920-680v400q0 33-23.5 56.5T840-200H120Zm120-80h480v-400H240v400Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryLandscapeFilled.displayName = 'OnesyIconMaterialStayPrimaryLandscapeFilled';

export default IconMaterialStayPrimaryLandscapeFilled;
