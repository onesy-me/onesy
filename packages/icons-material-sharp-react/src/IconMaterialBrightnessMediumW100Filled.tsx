import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBrightnessMediumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessMediumW100Filled'

      short_name='BrightnessMedium'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-100 367.77-212H212v-155.77L100-480l112-112.22V-748h155.77L480-860l112.22 112H748v155.78L860-480 748-367.77V-212H592.22L480-100Zm0-40 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-180q66 0 113-46.8T640-480q0-66.4-46.8-113.2T480-640v320Z"/>
    </Icon>
  );
});

IconMaterialBrightnessMediumW100Filled.displayName = 'OnesyIconMaterialBrightnessMediumW100Filled';

export default IconMaterialBrightnessMediumW100Filled;
