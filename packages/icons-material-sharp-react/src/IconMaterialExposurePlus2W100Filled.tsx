import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExposurePlus2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposurePlus2W100Filled'

      short_name='ExposurePlus2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M263-312v-120H143v-28h120v-120h28v120h120v28H291v120h-28Zm270 58v-34l168-172q35-37 51.5-61.5T769-576q0-45-30-73.5T659-678q-36 0-62.5 15.5T555-618l-26-12q20-35 51-55.5t79-20.5q63 0 100.5 38t37.5 92q0 36.3-18.5 66.15Q760-480 723-442L569-284v2h248v28H533Z"/>
    </Icon>
  );
});

IconMaterialExposurePlus2W100Filled.displayName = 'OnesyIconMaterialExposurePlus2W100Filled';

export default IconMaterialExposurePlus2W100Filled;
