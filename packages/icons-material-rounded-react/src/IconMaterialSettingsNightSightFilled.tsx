import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsNightSightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsNightSightFilled'

      short_name='SettingsNightSight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm88-114q5-5 2.5-12t-9.5-8q-26-5-48.5-19.5T676-272q-14-24-15.5-51t7.5-52q2-7-2.5-12.5T654-391q-67 12-91.5 76T582-196q35 44 92 45t94-43ZM423-80q-24 0-40-18.5T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 22.5-15t24.5-12l9-66q4-26 24-44t46-18h94q26 0 46 18t24 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-8 6q-8 6-17 6.5t-18-3.5q-21-9-42.5-14.5T702-559q-25-2-49.5 2t-49.5 7q-19-32-51-51t-70-19q-58 0-99 41t-41 99q0 38 19 70.5t52 51.5q-7 20-10 41t-3 42q0 42 13.5 81.5T451-119q8 12-1 25.5T423-80Z"/>
    </Icon>
  );
});

IconMaterialSettingsNightSightFilled.displayName = 'OnesyIconMaterialSettingsNightSightFilled';

export default IconMaterialSettingsNightSightFilled;
