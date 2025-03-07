import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrPlusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrPlusW100'

      short_name='HdrPlus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M596-276v-60h-60v-28h60v-60h28v60h60v28h-60v60h-28ZM296-496v-208h28v80h112v-80h28v208h-28v-100H324v100h-28Zm240 0v-208h134l14 14v180l-14 14H536ZM324-324h112v-72H324v72Zm101 108-35-80h-66v80h-28v-208h154l14 14v98l-14 14h-30l36 82h-31Zm139-308h92v-152h-92v152Zm-83.83 392q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialHdrPlusW100.displayName = 'OnesyIconMaterialHdrPlusW100';

export default IconMaterialHdrPlusW100;
