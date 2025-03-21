import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCloudOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudOffW100'

      short_name='CloudOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M826-94 710-212H260q-71 0-119.5-48.5T92-380q0-72 49.5-120T254-548q0-17 9-43.5t21-44.5L132-788l20-20 694 694-20 20ZM260-240h420L304-616q-11 18-17.5 44t-6.5 52h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm231-189Zm337 183-20-20q15-15 23.5-33.19Q840-317.38 840-340q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-27 0-52 6.5T380-693l-20-21q35-20 61.5-27t58.5-7q95.27 0 161.64 66.36Q708-615.27 708-520v52h32q54 0 91 37t37 91q0 24-8.5 47.5T828-246ZM594-479Z"/>
    </Icon>
  );
});

IconMaterialCloudOffW100.displayName = 'OnesyIconMaterialCloudOffW100';

export default IconMaterialCloudOffW100;
