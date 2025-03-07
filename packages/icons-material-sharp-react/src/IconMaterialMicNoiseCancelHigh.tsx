import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicNoiseCancelHigh = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicNoiseCancelHigh'

      short_name='MicNoiseCancelHigh'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m253 831-56-56q40-40 61.5-91T280 576q0-57-21.5-108T197 377l56-57q51 51 78.5 117T359 575q0 72-27.5 138.5T253 831ZM141 718l-57-57q17-17 26.5-39.5T120 575q0-24-9.5-46T84 490l57-57q29 28 44.5 65t15.5 77q0 40-15.5 77.5T141 718Zm299 218V216h80v720h-80Zm320-320v-80h80v80h-80Zm-160 0v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialMicNoiseCancelHigh.displayName = 'OnesyIconMaterialMicNoiseCancelHigh';

export default IconMaterialMicNoiseCancelHigh;
