import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricalServicesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricalServicesFilled'

      short_name='ElectricalServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-360v-80h120v80H720Zm0 160v-80h120v80H720Zm-240 40v-80h-80v-160h80v-80h200v320H480ZM120-280v-320h280v-120H160v-80h320v280H200v160h160v80H120Z"/>
    </Icon>
  );
});

IconMaterialElectricalServicesFilled.displayName = 'OnesyIconMaterialElectricalServicesFilled';

export default IconMaterialElectricalServicesFilled;
