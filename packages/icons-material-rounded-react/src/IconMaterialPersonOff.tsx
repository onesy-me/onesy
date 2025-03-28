import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonOff'

      short_name='PersonOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m763-84-77-76H240q-33 0-56.5-23.5T160-240v-32q0-34 17.5-62.5T224-378q45-23 91.5-37t94.5-21L83-763q-12-12-11.5-28.5T84-820q12-12 28.5-12t28.5 12l679 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84ZM240-240h366L486-360h-6q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm496-138q29 14 46 42.5t18 61.5L666-408q18 7 35.5 14t34.5 16ZM568-506l-59-59q23-9 37-29.5t14-45.5q0-33-23.5-56.5T480-720q-25 0-45.5 14T405-669l-59-59q23-34 58-53t76-19q66 0 113 47t47 113q0 41-19 76t-53 58Zm38 266H240h366ZM457-617Z"/>
    </Icon>
  );
});

IconMaterialPersonOff.displayName = 'OnesyIconMaterialPersonOff';

export default IconMaterialPersonOff;
