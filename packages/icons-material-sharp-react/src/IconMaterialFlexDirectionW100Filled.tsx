import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlexDirectionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlexDirectionW100Filled'

      short_name='FlexDirection'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-218h300v218H132Zm0-318v-218h300v218H132Zm28-28h244v-162H160v162Zm505 346L502-375l19-19 130 128v-482h28v482l130-128 19 19-163 163Z"/>
    </Icon>
  );
});

IconMaterialFlexDirectionW100Filled.displayName = 'OnesyIconMaterialFlexDirectionW100Filled';

export default IconMaterialFlexDirectionW100Filled;
