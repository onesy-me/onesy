import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSpatialAudioOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialAudioOff'

      short_name='SpatialAudioOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M890-512q-8 0-15.5-3.5T862-524q-29-28-45-65t-16-78q0-41 16-77t45-65q5-5 12.5-8t15.5-3q17 0 28.5 11t11.5 28q0 8-3.5 16t-8.5 13q-17 17-27 39t-10 47q0 25 10 47t27 39q5 5 8.5 12.5T930-552q0 17-11.5 28.5T890-512ZM778-398q-8 0-15.5-3.5T750-410q-51-51-80-117.5T641-666q0-72 29-139t80-118q5-5 12.5-8t15.5-3q17 0 28.5 11.5T818-894q0 8-3 16t-9 13q-40 40-62.5 91T721-666q0 57 22.5 108.5T806-466q5 5 8.5 12.5T818-438q0 17-11.5 28.5T778-398Zm-378-42q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-200v-32q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v32q0 33-23.5 56.5T640-120H160q-33 0-56.5-23.5T80-200Zm80 0h480v-32q0-11-5.5-20T620-266q-36-18-92.5-36T400-320q-71 0-127.5 18T180-266q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T480-600q0-33-23.5-56.5T400-680q-33 0-56.5 23.5T320-600q0 33 23.5 56.5T400-520Zm0-80Zm0 400Z"/>
    </Icon>
  );
});

IconMaterialSpatialAudioOff.displayName = 'OnesyIconMaterialSpatialAudioOff';

export default IconMaterialSpatialAudioOff;
