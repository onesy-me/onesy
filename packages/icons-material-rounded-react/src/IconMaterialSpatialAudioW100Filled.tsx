import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpatialAudioW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialAudioW100Filled'

      short_name='SpatialAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M663-674q-42-42-66-96t-28-114q-1-7 3-12.5t11-5.5q6 0 10 4.5t4 11.5q3 54 25.5 104t60.5 88q38 38 88 60.5T875-608q7 0 11.5 4t4.5 10q0 7-5.5 11t-12.5 3q-60-4-114-28t-96-66Zm132-132q-16-17-26-37.5T756-887q-1-6 3.5-10.5T770-902q6 0 10 4t5 10q2 17 9.5 33t20.5 29q13 13 29 20.5t33 9.5q6 1 10 5t4 10q0 6-4.5 10.5T876-767q-23-3-43.5-13T795-806ZM405-492q-45 0-76.5-31.5T297-600q0-45 31.5-76.5T405-708q45 0 76.5 31.5T513-600q0 45-31.5 76.5T405-492ZM137-242v-22q0-26 13-43.5t37-28.5q48-23 106-37.5T405-388q54 0 112 14.5T623-336q24 11 37 28.5t13 43.5v22q0 13-8.5 21.5T643-212H167q-13 0-21.5-8.5T137-242Z"/>
    </Icon>
  );
});

IconMaterialSpatialAudioW100Filled.displayName = 'OnesyIconMaterialSpatialAudioW100Filled';

export default IconMaterialSpatialAudioW100Filled;
