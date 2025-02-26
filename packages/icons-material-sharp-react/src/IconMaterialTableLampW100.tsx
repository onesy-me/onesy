import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableLampW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableLampW100'

      short_name='TableLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-146v-28h268v28H520ZM242-588h154v-172h-79l-75 172Zm398 334v-448H424v142H199l100-228h125v58h244v476h-28ZM242-588h154-154Z"/>
    </Icon>
  );
});

IconMaterialTableLampW100.displayName = 'OnesyIconMaterialTableLampW100';

export default IconMaterialTableLampW100;
