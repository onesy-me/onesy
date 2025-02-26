import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricalServicesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricalServicesW100'

      short_name='ElectricalServices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-386v-28h120v28H694Zm0 160v-28h120v28H694Zm-188 40v-80h-80v-108h80v-80h148v268H506ZM146-306v-268h280v-172H186v-28h268v228H174v212h212v28H146Z"/>
    </Icon>
  );
});

IconMaterialElectricalServicesW100.displayName = 'OnesyIconMaterialElectricalServicesW100';

export default IconMaterialElectricalServicesW100;
