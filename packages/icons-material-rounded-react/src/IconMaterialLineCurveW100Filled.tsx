import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineCurveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineCurveW100Filled'

      short_name='LineCurve'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M734-160q-8 0-11.5-4.5T719-180q0-108-43.5-203.5T558.5-552Q485-625 386-670t-210-50q-3 0-9.5-2.5T160-734q0-9 6.5-11.5t9.5-2.5q117 0 220.5 46.5T578-577q78 78 123.5 181T747-180q0 11-2.5 15.5T734-160Z"/>
    </Icon>
  );
});

IconMaterialLineCurveW100Filled.displayName = 'OnesyIconMaterialLineCurveW100Filled';

export default IconMaterialLineCurveW100Filled;
