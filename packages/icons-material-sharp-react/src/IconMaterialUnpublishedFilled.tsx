import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnpublishedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnpublishedFilled'

      short_name='Unpublished'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M819-28 701-146q-48 32-103.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-62 17-117.5T146-701L27-820l57-57L876-85l-57 57Zm-4-232L602-474l104-104-56-56-104 105-286-286q48-31 103.5-48T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 61-17 116.5T815-260Zm-391-36 64-64-56-56-8 8-114-114-56 56 170 170Z"/>
    </Icon>
  );
});

IconMaterialUnpublishedFilled.displayName = 'OnesyIconMaterialUnpublishedFilled';

export default IconMaterialUnpublishedFilled;
