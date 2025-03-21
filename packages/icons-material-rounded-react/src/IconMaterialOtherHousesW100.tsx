import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOtherHousesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherHousesW100'

      short_name='OtherHouses'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-232v-303l-68 53q-5 4-10 3t-9-6q-4-5-3.5-10t5.5-9l316-243q8-6 17.5-9t19.5-3q10 0 19 3t17 9l317 243q5 4 5.5 9t-3.5 10q-4 5-9 6t-10-3l-68-53v303q0 25-17.5 42.5T688-172H272q-25 0-42.5-17.5T212-232Zm60 32h416q14 0 23-9t9-23v-324L499-724q-8-7-19-7t-19 7L240-556v324q0 14 9 23t23 9Zm48-172q11 0 19.5-8.5T348-400q0-11-8.5-19.5T320-428q-11 0-19.5 8.5T292-400q0 11 8.5 19.5T320-372Zm160 0q11 0 19.5-8.5T508-400q0-11-8.5-19.5T480-428q-11 0-19.5 8.5T452-400q0 11 8.5 19.5T480-372Zm160 0q11 0 19.5-8.5T668-400q0-11-8.5-19.5T640-428q-11 0-19.5 8.5T612-400q0 11 8.5 19.5T640-372ZM272-200h-32 480-448Z"/>
    </Icon>
  );
});

IconMaterialOtherHousesW100.displayName = 'OnesyIconMaterialOtherHousesW100';

export default IconMaterialOtherHousesW100;
