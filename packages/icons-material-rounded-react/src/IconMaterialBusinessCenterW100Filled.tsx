import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusinessCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterW100Filled'

      short_name='BusinessCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-360v-80h80v80h-80Zm-40-308h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48ZM192-172q-26 0-43-17t-17-43v-154h280v24q0 13 8.5 21.5T442-332h76q13 0 21.5-8.5T548-362v-24h280v154q0 26-17 43t-43 17H192Zm-60-242v-194q0-26 17-43t43-17h180v-48q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43v194H548v-24q0-13-8.5-21.5T518-468h-76q-13 0-21.5 8.5T412-438v24H132Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterW100Filled.displayName = 'OnesyIconMaterialBusinessCenterW100Filled';

export default IconMaterialBusinessCenterW100Filled;
