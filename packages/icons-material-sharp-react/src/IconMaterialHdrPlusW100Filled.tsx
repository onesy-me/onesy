import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrPlusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlusW100Filled'

      short_name='HdrPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M596-276h28v-60h60v-28h-60v-60h-28v60h-60v28h60v60ZM296-496h28v-100h112v100h28v-208h-28v80H324v-80h-28v208Zm240 0h134l14-14v-180l-14-14H536v208ZM324-324v-72h112v72H324Zm101 108h31l-36-82h30l14-14v-98l-14-14H296v208h28v-80h66l35 80Zm139-308v-152h92v152h-92Zm-83.83 392q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialHdrPlusW100Filled.displayName = 'OnesyIconMaterialHdrPlusW100Filled';

export default IconMaterialHdrPlusW100Filled;
