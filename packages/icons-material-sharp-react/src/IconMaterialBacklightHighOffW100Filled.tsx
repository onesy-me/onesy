import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBacklightHighOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BacklightHighOffW100Filled'

      short_name='BacklightHighOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M72-386v-28h128v28H72Zm394-294v-168h28v168h-28Zm220 91-19-20 93-91 19 20-93 91Zm74 203v-28h128v28H760Zm34 260L628-292H306v-68h254L126-794l20-20 668 668-20 20Z"/>
    </Icon>
  );
});

IconMaterialBacklightHighOffW100Filled.displayName = 'OnesyIconMaterialBacklightHighOffW100Filled';

export default IconMaterialBacklightHighOffW100Filled;
