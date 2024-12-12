import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLineCurve = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineCurve'

      short_name='LineCurve'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-160q0-116-44-218T556-556q-76-76-178-120t-218-44v-80q132 0 248.5 50.5T612-612q87 87 137.5 203.5T800-160h-80Z"/>
    </Icon>
  );
});

IconMaterialLineCurve.displayName = 'OnesyIconMaterialLineCurve';

export default IconMaterialLineCurve;
