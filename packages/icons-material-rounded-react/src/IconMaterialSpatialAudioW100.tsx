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
      <path d="M663-674q-42-42-66-96t-28-114q-1-7 3.24-12.5 4.23-5.5 10.5-5.5 6.26 0 10.26 4.5t4 11.5q3 54 25.5 104t60.5 88q38 38 88 60.5T875-608q7 0 11.5 4t4.5 10.26q0 6.27-5.5 10.5Q880-579 873-580q-60-4-114-28t-96-66Zm132-132q-15.84-17.01-25.92-37.51Q759-864 756-887q-1-6 3.5-10.5t10.46-4.5q5.62 0 9.83 4t5.21 10q2 17 9.5 33t20.5 29q13 13 29 20.5t33 9.5q6 1 10 5.14t4 10q0 5.86-4.5 10.36Q882-766 876-767q-23-3-43.5-13T795-806ZM405-492q-44.55 0-76.27-31.72Q297-555.45 297-600t31.73-76.28Q360.45-708 405-708t76.27 31.72Q513-644.55 513-600t-31.73 76.28Q449.55-492 405-492ZM137-242v-22q0-26 13-43.5t37-28.5q48-23 106-37.5T405-388q54 0 112 14.5T623-336q24 11 37 28.5t13 43.5v22q0 13-8.5 21.5T643-212H167q-13 0-21.5-8.5T137-242Zm28 2h480v-24q0-18-10.5-29T609-312q-38-20-94.5-34T405-360q-53 0-109.5 14T201-312q-15 8-25.5 19T165-264v24Zm240-280q33 0 56.5-23.5T485-600q0-33-23.5-56.5T405-680q-33 0-56.5 23.5T325-600q0 33 23.5 56.5T405-520Zm0-80Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialSpatialAudioW100.displayName = 'OnesyIconMaterialSpatialAudioW100';

export default IconMaterialSpatialAudioW100;
