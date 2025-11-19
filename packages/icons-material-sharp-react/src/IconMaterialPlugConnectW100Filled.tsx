import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPlugConnectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlugConnectW100Filled'

      short_name='PlugConnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-212v-46H172v-208H92v-28h80v-208h148v-46h28v536h-28Zm292 0v-145H465v-28h147v-190H465v-28h147v-145h28v46h148v208h80v28h-80v208H640v46h-28Z"/>
    </Icon>
  );
});

IconMaterialPlugConnectW100Filled.displayName = 'OnesyIconMaterialPlugConnectW100Filled';

export default IconMaterialPlugConnectW100Filled;
