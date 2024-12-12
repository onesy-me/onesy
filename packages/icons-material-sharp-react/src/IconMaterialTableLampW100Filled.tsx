import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableLampW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableLampW100Filled'

      short_name='TableLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-146v-28h268v28H520Zm120-108v-448H424v142H199l100-228h125v58h244v476h-28Z"/>
    </Icon>
  );
});

IconMaterialTableLampW100Filled.displayName = 'OnesyIconMaterialTableLampW100Filled';

export default IconMaterialTableLampW100Filled;
