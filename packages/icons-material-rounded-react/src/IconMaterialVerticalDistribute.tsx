import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVerticalDistribute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistribute'

      short_name='VerticalDistribute'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h720q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Zm220-340q-25 0-42.5-17.5T280-480q0-25 17.5-42.5T340-540h280q25 0 42.5 17.5T680-480q0 25-17.5 42.5T620-420H340ZM120-800q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H120Z"/>
    </Icon>
  );
});

IconMaterialVerticalDistribute.displayName = 'OnesyIconMaterialVerticalDistribute';

export default IconMaterialVerticalDistribute;
