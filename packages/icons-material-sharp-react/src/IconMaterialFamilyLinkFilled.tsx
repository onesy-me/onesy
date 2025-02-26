import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamilyLinkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyLinkFilled'

      short_name='FamilyLink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M390-40q-51 0-90.5-30.5T246-149q-6-23-25-37t-43-14q-16 0-30 6.5T124-175l-61-51q21-26 51.5-40t63.5-14q51 0 91 30t54 79q6 23 25 37t42 14q19 0 34-10t26-25l1-2-316-437 365-358 365 358L500-88q-18 25-48 36.5T390-40Z"/>
    </Icon>
  );
});

IconMaterialFamilyLinkFilled.displayName = 'OnesyIconMaterialFamilyLinkFilled';

export default IconMaterialFamilyLinkFilled;
