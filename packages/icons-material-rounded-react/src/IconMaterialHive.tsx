import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hive'

      short_name='Hive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M322-200h-85q-22 0-40.5-11T167-241l-45-80q-11-18-11-39t11-39l46-81-46-81q-11-18-11-39t11-39l45-80q11-19 29.5-30t40.5-11h85l45-79q11-19 29.5-30t40.5-11h86q22 0 40.5 11t29.5 30l45 79h85q22 0 40.5 11t29.5 30l45 80q11 18 11 39t-11 39l-46 81 46 81q11 18 11 39t-11 39l-45 80q-11 19-29.5 30T723-200h-85l-45 79q-11 19-29.5 30T523-80h-86q-22 0-40.5-11T367-121l-45-79Zm316-320h86l44-80-44-80h-86l-45 80 45 80ZM438-400h84l45-80-45-80h-84l-45 80 45 80Zm0-240h84l46-81-45-79h-86l-45 79 46 81Zm-71 40-45-80h-85l-45 80 45 80h85l45-80Zm0 240-45-80h-86l-44 80 45 80h85l45-80Zm71 40-46 81 45 79h86l45-79-46-81h-84Zm200 40h85l45-80-45-80h-85l-45 80 45 80Z"/>
    </Icon>
  );
});

IconMaterialHive.displayName = 'OnesyIconMaterialHive';

export default IconMaterialHive;
