import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowClosedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowClosedW100Filled'

      short_name='WindowClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M268-228h424v-238H268v238Zm4 56q-25 0-42.5-17.5T212-232v-496q0-25 17.5-42.5T272-788h416q25 0 42.5 17.5T748-728v496q0 25-17.5 42.5T688-172H272Zm-4-322h184v-13q0-6 4.5-10.5T467-522h26q6 0 10.5 4.5T508-507v13h184v-206q0-14-9-23t-23-9H300q-14 0-23 9t-9 23v206Zm4 294h416q14 0 23-9t9-23v-496q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v496q0 14 9 23t23 9Z"/>
    </Icon>
  );
});

IconMaterialWindowClosedW100Filled.displayName = 'OnesyIconMaterialWindowClosedW100Filled';

export default IconMaterialWindowClosedW100Filled;
