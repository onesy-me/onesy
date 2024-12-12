import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialUnknownMedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnknownMedW100'

      short_name='UnknownMed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-466v-68h308v68H132Zm387 0v-68h308v68H519Z"/>
    </Icon>
  );
});

IconMaterialUnknownMedW100.displayName = 'OnesyIconMaterialUnknownMedW100';

export default IconMaterialUnknownMedW100;
