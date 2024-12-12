import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintDisabledW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintDisabledW100Filled'

      short_name='PrintDisabled'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M794-126 668-252v80H292v-160H162v-276h150L126-794l20-20 668 668-20 20Zm-474-74h320v-80L532-388H320v188Zm420-132L464-608h334v276h-58Zm-72-304H436L316-756h352v120Zm32 156q17 0 28.5-11.5T740-520q0-17-11.5-28.5T700-560q-17 0-28.5 11.5T660-520q0 17 11.5 28.5T700-480Z"/>
    </Icon>
  );
});

IconMaterialPrintDisabledW100Filled.displayName = 'OnesyIconMaterialPrintDisabledW100Filled';

export default IconMaterialPrintDisabledW100Filled;
