import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMulticookerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MulticookerW100Filled'

      short_name='Multicooker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-734v-34q0-24.75 17.63-42.38Q381.25-828 406-828h148q24.75 0 42.38 17.62Q614-792.75 614-768v34h114q24.75 0 42.38 17.62Q788-698.75 788-674v86H172v-86q0-24.75 17.63-42.38Q207.25-734 232-734h114ZM232-172q-24.75 0-42.37-17.63Q172-207.25 172-232v-328h134v54q0 24.75 17.63 42.37Q341.25-446 366-446h228q24.75 0 42.38-17.63Q654-481.25 654-506v-54h134v328q0 24.75-17.62 42.37Q752.75-172 728-172H232Zm88-100q11 0 19.5-8.5T348-300q0-11-8.5-19.5T320-328q-11 0-19.5 8.5T292-300q0 11 8.5 19.5T320-272Zm160 0q11 0 19.5-8.5T508-300q0-11-8.5-19.5T480-328q-11 0-19.5 8.5T452-300q0 11 8.5 19.5T480-272Zm160 0q11 0 19.5-8.5T668-300q0-11-8.5-19.5T640-328q-11 0-19.5 8.5T612-300q0 11 8.5 19.5T640-272ZM366-474q-14 0-23-9t-9-23v-54h292v54q0 14-9 23t-23 9H366Zm8-260h212v-34q0-14-9-23t-23-9H406q-14 0-23 9t-9 23v34Z"/>
    </Icon>
  );
});

IconMaterialMulticookerW100Filled.displayName = 'OnesyIconMaterialMulticookerW100Filled';

export default IconMaterialMulticookerW100Filled;
