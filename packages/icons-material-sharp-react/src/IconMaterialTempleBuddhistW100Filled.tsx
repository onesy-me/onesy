import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTempleBuddhistW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleBuddhistW100Filled'

      short_name='TempleBuddhist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m334-682 146-195 146 195H334Zm-68 160v-104q-45-9-75.5-36.5T149-733h28q10 33 38 56t64 23h402q36 0 64-23t38-56h28q-8 42-39 69.5T694-626v104H266Zm-80 416v-360q-45-7-76.5-35.5T69-573h28q10 33 38 56t64 23h562q36 0 64-23t38-56h28q-7 42-38.5 70.5T774-466v360H546v-200H414v200H186Z"/>
    </Icon>
  );
});

IconMaterialTempleBuddhistW100Filled.displayName = 'OnesyIconMaterialTempleBuddhistW100Filled';

export default IconMaterialTempleBuddhistW100Filled;
