import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialToolsFlatHeadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsFlatHeadW100Filled'

      short_name='ToolsFlatHead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M379-172q-6 0-10-4t-4-10q0-6 4-10t10-4h202q6 0 10 4t4 10q0 6-4 10t-10 4H379Zm12-68q-11 0-19.5-7.5T361-266l-26-187q-1-6-1-11.5t2-11.5l59-237q2-10 10-16.5t19-6.5h112q11 0 19 6.5t10 16.5l59 237q2 6 2 11.5t-1 11.5l-26 187q-2 11-10.5 18.5T569-240H391Zm-25-242h228l-56-226H422l-56 226Z"/>
    </Icon>
  );
});

IconMaterialToolsFlatHeadW100Filled.displayName = 'OnesyIconMaterialToolsFlatHeadW100Filled';

export default IconMaterialToolsFlatHeadW100Filled;
