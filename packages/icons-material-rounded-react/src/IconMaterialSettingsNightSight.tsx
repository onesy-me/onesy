import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsNightSight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsNightSight'

      short_name='SettingsNightSight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm88-114q5-5 2.5-12t-9.5-8q-26-5-48.5-19.5T676-272q-14-24-15.5-51t7.5-52q2-7-2.5-12.5T654-391q-67 12-91.5 76T582-196q35 44 92 45t94-43ZM423-80q-27 0-41.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-24 18q-13 11-29 8.5T752-536q-11-13-9-29t15-27l19-14-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q17 17 36.5 30.5T400-275q1 44 14.5 83.5T451-119q8 12-1 25.5T423-80Zm57-400Zm0 0Zm2-140q-58 0-99 40.5T342-480q0 21 6 41t18 38q11 15 28.5 19t31.5-7q14-10 16.5-26.5T434-444q-6-8-9-16.5t-3-19.5q0-25 17.5-42.5T482-540q10 0 19.5 3.5T519-527q12 9 27 6.5t25-16.5q10-14 6.5-31T560-596q-14-12-34-18t-44-6Z"/>
    </Icon>
  );
});

IconMaterialSettingsNightSight.displayName = 'OnesyIconMaterialSettingsNightSight';

export default IconMaterialSettingsNightSight;
