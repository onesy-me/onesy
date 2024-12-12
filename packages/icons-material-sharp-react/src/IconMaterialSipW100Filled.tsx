import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SipW100Filled'

      short_name='Sip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-376h28v-208h-28v208Zm110 0h28v-80h140v-128H576v208Zm-360 0h168v-118H244v-62h140v-28H216v118h140v62H216v28Zm388-108v-72h112v72H604ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialSipW100Filled.displayName = 'OnesyIconMaterialSipW100Filled';

export default IconMaterialSipW100Filled;
