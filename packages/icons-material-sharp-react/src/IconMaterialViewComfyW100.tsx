import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewComfyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyW100'

      short_name='ViewComfy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm668-282v-226H160v226h640ZM368-240h432v-226H368v226Zm-208 0h180v-226H160v226Z"/>
    </Icon>
  );
});

IconMaterialViewComfyW100.displayName = 'OnesyIconMaterialViewComfyW100';

export default IconMaterialViewComfyW100;
