import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeatPumpBalanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPumpBalanceW100'

      short_name='HeatPumpBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-636h28v336h132v-336h188v336h132v-376h204l-73-73 19-20 107 107-107 106-19-20 74-72H694v376H506v-336H374v336H186v-364ZM92-148v-320h776v320H92Zm28-28h720v-264H120v264Zm720-264H120h720Z"/>
    </Icon>
  );
});

IconMaterialHeatPumpBalanceW100.displayName = 'OnesyIconMaterialHeatPumpBalanceW100';

export default IconMaterialHeatPumpBalanceW100;
