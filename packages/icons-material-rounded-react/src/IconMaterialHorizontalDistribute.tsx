import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalDistribute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistribute'

      short_name='HorizontalDistribute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-17 0-28.5-11.5T80-120v-720q0-17 11.5-28.5T120-880q17 0 28.5 11.5T160-840v720q0 17-11.5 28.5T120-80Zm360-200q-25 0-42.5-17.5T420-340v-280q0-25 17.5-42.5T480-680q25 0 42.5 17.5T540-620v280q0 25-17.5 42.5T480-280ZM840-80q-17 0-28.5-11.5T800-120v-720q0-17 11.5-28.5T840-880q17 0 28.5 11.5T880-840v720q0 17-11.5 28.5T840-80Z"/>
    </Icon>
  );
});

IconMaterialHorizontalDistribute.displayName = 'OnesyIconMaterialHorizontalDistribute';

export default IconMaterialHorizontalDistribute;
