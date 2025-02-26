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
      <path d="M720-160q0-116-44-218T556-556q-76-76-178-120t-218-44v-28q122 0 229 46t187 126q80 80 126 187t46 229h-28Z"/>
    </Icon>
  );
});

IconMaterialLineCurveW100Filled.displayName = 'OnesyIconMaterialLineCurveW100Filled';

export default IconMaterialLineCurveW100Filled;
