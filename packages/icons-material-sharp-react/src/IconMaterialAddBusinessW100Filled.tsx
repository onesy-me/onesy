import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddBusinessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBusinessW100Filled'

      short_name='AddBusiness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-92v-120H600v-28h120v-120h28v120h120v28H748v120h-28Zm-576-94v-240H92v-28l48-200h532l48 200v28h-52v134h-28v-134H452v240H144Zm28-28h252v-212H172v212Zm-32-532v-28h532v28H140Z"/>
    </Icon>
  );
});

IconMaterialAddBusinessW100Filled.displayName = 'OnesyIconMaterialAddBusinessW100Filled';

export default IconMaterialAddBusinessW100Filled;
