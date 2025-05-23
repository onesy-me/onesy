import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusinessCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterW100'

      short_name='BusinessCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h180v-48q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43v376q0 26-17 43t-43 17H192Zm208-496h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48Zm400 282H548v24q0 13-8.5 21.5T518-332h-76q-13 0-21.5-8.5T412-362v-24H160v154q0 12 10 22t22 10h576q12 0 22-10t10-22v-154Zm-360 26h80v-80h-80v80Zm-280-54h252v-24q0-13 8.5-21.5T442-468h76q13 0 21.5 8.5T548-438v24h252v-194q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v194Zm320 14Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterW100.displayName = 'OnesyIconMaterialBusinessCenterW100';

export default IconMaterialBusinessCenterW100;
