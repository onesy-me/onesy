import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHangoutVideoOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HangoutVideoOffW100Filled'

      short_name='HangoutVideoOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M812-84 684-212H132v-536h56l9 9v40L94-802l20-20 718 718-20 20Zm16-137L672-378v-230L544-506v-102H442L302-748h526v527ZM288-352h256L288-608v256Z"/>
    </Icon>
  );
});

IconMaterialHangoutVideoOffW100Filled.displayName = 'OnesyIconMaterialHangoutVideoOffW100Filled';

export default IconMaterialHangoutVideoOffW100Filled;
