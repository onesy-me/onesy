import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInFullW100'

      short_name='OpenInFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-268h28v221l541-541H520v-28h268v268h-28v-221L219-200h221v28H172Z"/>
    </Icon>
  );
});

IconMaterialOpenInFullW100.displayName = 'OnesyIconMaterialOpenInFullW100';

export default IconMaterialOpenInFullW100;
