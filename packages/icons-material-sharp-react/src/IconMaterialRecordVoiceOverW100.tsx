import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecordVoiceOverW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecordVoiceOverW100'

      short_name='RecordVoiceOver'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m787-372-20-20q41-41 64.5-94.41t23.5-113.5q0-60.09-23.5-113.59T767-808l20-20q44.07 43.58 70.03 102.79Q883-666 883-599.82q0 66.17-26 125Q831-416 787-372ZM653-506l-20-20q15-15 23.5-34t8.5-40q0-23-8.5-41T633-674l20-20q18 18 29 41.5t11 52.5q0 27-11 51.5T653-506Zm-308 14q-44.55 0-76.27-31.72Q237-555.45 237-600t31.73-76.28Q300.45-708 345-708t76.27 31.72Q453-644.55 453-600t-31.73 76.28Q389.55-492 345-492ZM77-212v-52q0-26 13-43.5t37-28.5q48-23 106-37.5T345-388q54 0 112 14.5T563-336q24 11 37 28.5t13 43.5v52H77Zm28-28h480v-24q0-18-10.5-29T549-312q-38-20-94.5-34T345-360q-53 0-109.5 14T141-312q-15 8-25.5 19T105-264v24Zm240-280q33 0 56.5-23.5T425-600q0-33-23.5-56.5T345-680q-33 0-56.5 23.5T265-600q0 33 23.5 56.5T345-520Zm0-80Zm0 360Z"/>
    </Icon>
  );
});

IconMaterialRecordVoiceOverW100.displayName = 'OnesyIconMaterialRecordVoiceOverW100';

export default IconMaterialRecordVoiceOverW100;
