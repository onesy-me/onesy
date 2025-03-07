import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationAwayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAwayW100'

      short_name='LocationAway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M339-471ZM132-172v-402l268-203 143 108q-7 4-13 8t-12 9l-118-90-240 182v360h166v28H132Zm294 0v-46.23q0-12.77 7.5-23.27T452-259q43-26 90.5-38.5T640-310q50 0 97.5 12.5T828-259q11 7 18.5 17.5t7.5 23.27V-172H426Zm28-28h372v-28q-43-25-89.5-39.5T640-282q-50 0-96.5 14.5T454-228v28Zm186.12-207q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Zm-.12-28q27 0 46.5-19.5T706-501q0-27-19.5-46.5T640-567q-27 0-46.5 19.5T574-501q0 27 19.5 46.5T640-435Zm0 235Z"/>
    </Icon>
  );
});

IconMaterialLocationAwayW100.displayName = 'OnesyIconMaterialLocationAwayW100';

export default IconMaterialLocationAwayW100;
