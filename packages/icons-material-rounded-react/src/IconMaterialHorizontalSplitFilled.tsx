import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHorizontalSplitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitFilled'

      short_name='HorizontalSplit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200q-17 0-28.5-11.5T120-240v-160q0-17 11.5-28.5T160-440h640q17 0 28.5 11.5T840-400v160q0 17-11.5 28.5T800-200H160Zm0-320q-17 0-28.5-11.5T120-560q0-17 11.5-28.5T160-600h640q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520H160Zm0-160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h640q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H160Z"/>
    </Icon>
  );
});

IconMaterialHorizontalSplitFilled.displayName = 'OnesyIconMaterialHorizontalSplitFilled';

export default IconMaterialHorizontalSplitFilled;
