import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationAwayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAwayW100Filled'

      short_name='LocationAway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M426-172v-46.23q0-12.77 7.5-23.27T452-259q43-26 90.5-38.5T640-310q50 0 97.5 12.5T828-259q11 7 18.5 17.5t7.5 23.27V-172H426Zm-294 0v-402l268-203 143 108q-45 26-71 71t-26 97q0 33 10 63t29 54q-22 8-42.85 17.41Q421.29-357.18 401-345q-35 21-55 54.97-20 33.98-20 72.03v46H132Zm508.12-235q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Z"/>
    </Icon>
  );
});

IconMaterialLocationAwayW100Filled.displayName = 'OnesyIconMaterialLocationAwayW100Filled';

export default IconMaterialLocationAwayW100Filled;
