import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicNoiseCancelLow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicNoiseCancelLow'

      short_name='MicNoiseCancelLow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M440 936V216h80v720h-80ZM253 831l-56-56q40-40 61.5-91T280 576q0-57-21.5-108T197 377l56-57q51 51 78.5 117T359 575q0 72-27.5 138.5T253 831ZM141 718l-57-57q17-17 26.5-39.5T120 575q0-24-9.5-46T84 490l57-57q29 28 44.5 65t15.5 77q0 40-15.5 77.5T141 718Zm459-102v-80h240v80H600Z"/>
    </Icon>
  );
});

IconMaterialMicNoiseCancelLow.displayName = 'OnesyIconMaterialMicNoiseCancelLow';

export default IconMaterialMicNoiseCancelLow;
