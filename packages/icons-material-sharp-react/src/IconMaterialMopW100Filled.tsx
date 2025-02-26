import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MopW100Filled'

      short_name='Mop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M127-114h149v-120h28v120h162v-120h28v120h162v-120h28v120h149l-64-212H191l-64 212ZM89-86l77-251v-157h230v-296q0-35 24.5-59.5T480-874q35 0 59.5 24.5T564-790v296h230v157l76 251H89Z"/>
    </Icon>
  );
});

IconMaterialMopW100Filled.displayName = 'OnesyIconMaterialMopW100Filled';

export default IconMaterialMopW100Filled;
