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
      <path d="m723-260-57 58q-6 6-6 14t6 14q6 6 14 6t14-6l78-78q12-12 12-28t-12-28l-78-78q-6-6-14-6t-14 6q-6 6-6 14t6 14l58 58H580q-8 0-14 6t-6 14q0 8 6 14t14 6h143ZM680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm-257 0q-24 0-40-18.5T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 22.5-15t24.5-12l9-66q4-26 24-44t46-18h94q26 0 46 18t24 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-8 6q-8 6-17 6.5t-18-3.5q-21-9-42.5-14.5T702-559q-25-2-49.5 2t-49.5 7q-19-32-51-51t-70-19q-58 0-99 41t-41 99q0 38 19 70.5t52 51.5q-7 20-10 41t-3 42q0 42 13.5 81.5T451-119q8 12-1 25.5T423-80Z"/>
    </Icon>
  );
});

IconMaterialSettingsBRollFilled.displayName = 'OnesyIconMaterialSettingsBRollFilled';

export default IconMaterialSettingsBRollFilled;
