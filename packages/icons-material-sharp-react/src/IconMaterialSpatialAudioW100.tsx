import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpatialAudioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialAudioW100'

      short_name='SpatialAudio'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M891-579q-64.59 0-123.79-25Q708-629 663-674q-45-45-70-104.21-25-59.2-25-123.79h29q0 59 22.03 112.52 22.04 53.52 64 95.5Q725-652 778.5-630T891-608v29Zm0-187q-27 0-52-10.5T795-806q-19-19-29.5-44T755-902h29q0 21 8.18 40.96T815-826q15.08 15.06 35.04 23.03Q870-795 891-795v29ZM405-492q-44.55 0-76.27-31.72Q297-555.45 297-600t31.73-76.28Q360.45-708 405-708t76.27 31.72Q513-644.55 513-600t-31.73 76.28Q449.55-492 405-492ZM137-212v-52q0-26 13-43.5t37-28.5q48-23 106-37.5T405-388q54 0 112 14.5T623-336q24 11 37 28.5t13 43.5v52H137Zm28-28h480v-24q0-18-10.5-29T609-312q-38-20-94.5-34T405-360q-53 0-109.5 14T201-312q-15 8-25.5 19T165-264v24Zm240-280q33 0 56.5-23.5T485-600q0-33-23.5-56.5T405-680q-33 0-56.5 23.5T325-600q0 33 23.5 56.5T405-520Zm0-80Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialSpatialAudioW100.displayName = 'OnesyIconMaterialSpatialAudioW100';

export default IconMaterialSpatialAudioW100;
