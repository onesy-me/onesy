import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsBRollFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBRollFilled'

      short_name='SettingsBRoll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m680-160 120-120-120-120-28 28 72 72H560v40h163l-71 72 28 28Zm0 80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm-310 0-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 22.5-15t24.5-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-74 56q-30-15-62-23t-66-8q-20 0-38.5 3.5T604-548q-19-33-51.5-52.5T482-620q-58 0-99 41t-41 99q0 38 18.5 70t50.5 51q-6 20-8.5 41.5T400-275q1 56 22.5 106.5T484-80H370Z"/>
    </Icon>
  );
});

IconMaterialSettingsBRollFilled.displayName = 'OnesyIconMaterialSettingsBRollFilled';

export default IconMaterialSettingsBRollFilled;
