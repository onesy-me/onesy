import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseboat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Houseboat'

      short_name='Houseboat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-80q38 0 56-20t77-20q58 0 78 20t55 20q38 0 56.5-20t77.5-20q59 0 77.5 20t56.5 20q35 0 55-20t78-20q59 0 77 20t56 20v80q-57 0-78-20t-56-20q-36 0-56 20t-77 20q-59 0-77-20t-56-20q-38 0-56 20t-77 20q-57 0-77-20t-56-20q-35 0-56 20t-78 20Zm10-250 56-56 67 66h67v-135l-53 39-47-64 300-220 300 220-47 65-53-39v134h67l67-66 56 56-90 90H180l-90-90Zm270 10h80v-80h80v80h80v-193l-120-88-120 88v193Zm0 0h240-240Z"/>
    </Icon>
  );
});

IconMaterialHouseboat.displayName = 'OnesyIconMaterialHouseboat';

export default IconMaterialHouseboat;
