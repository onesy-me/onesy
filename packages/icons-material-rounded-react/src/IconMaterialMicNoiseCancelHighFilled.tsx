import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicNoiseCancelHighFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicNoiseCancelHighFilled'

      short_name='MicNoiseCancelHigh'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 936q-17 0-28.5-11.5T440 896V256q0-17 11.5-28.5T480 216q17 0 28.5 11.5T520 256v640q0 17-11.5 28.5T480 936ZM113 730q-17 0-29-11.5T72 690q0-9 3.5-17t9.5-13q17-17 26-39t9-46q0-24-9-45.5T85 491q-6-5-9.5-13T72 461q0-17 12-28.5t29-11.5q8 0 15.5 3.5T141 433q29 28 44.5 65t15.5 77q0 40-15.5 77.5T141 718q-5 5-12.5 8.5T113 730Zm112 113q-17 0-28.5-11.5T185 803q0-8 3.5-15.5T197 775q40-40 61.5-91T280 576q0-57-21.5-108T197 377q-5-5-8.5-13t-3.5-16q0-17 11.5-28t28.5-11q8 0 15.5 3t12.5 8q51 52 78.5 117.5T359 575q0 72-27.5 138.5T253 831q-5 5-12.5 8.5T225 843Zm415-227q-17 0-28.5-11.5T600 576q0-17 11.5-28.5T640 536q17 0 28.5 11.5T680 576q0 17-11.5 28.5T640 616Zm160 0q-17 0-28.5-11.5T760 576q0-17 11.5-28.5T800 536q17 0 28.5 11.5T840 576q0 17-11.5 28.5T800 616Z"/>
    </Icon>
  );
});

IconMaterialMicNoiseCancelHighFilled.displayName = 'OnesyIconMaterialMicNoiseCancelHighFilled';

export default IconMaterialMicNoiseCancelHighFilled;
