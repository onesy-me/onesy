import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrOffSelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffSelectW100Filled'

      short_name='HdrOffSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M836-96v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Zm-300 0v-208h168v126h-44l36 82h-30l-36-80h-66v80h-28Zm28-108h112v-72H564v72ZM16-96v-208h28v80h112v-80h28v208h-28v-100H44v100H16Zm260 0v-208h154l14 14v180l-14 14H276Zm28-28h112v-152H304v152Zm353-452L417-817q14-5 30-8t33-3q78.33 0 133.17 54.83Q668-718.33 668-640q0 15-2.5 32t-8.5 32Zm1 154-67-67q-22 17-49.5 27T480-452q-78.33 0-133.17-54.83Q292-561.67 292-640q0-30 9-59t28-52l-69-67 20-22 398 398-20 20Z"/>
    </Icon>
  );
});

IconMaterialHdrOffSelectW100Filled.displayName = 'OnesyIconMaterialHdrOffSelectW100Filled';

export default IconMaterialHdrOffSelectW100Filled;
