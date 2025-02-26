import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialManageSearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageSearchW100Filled'

      short_name='ManageSearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-254v-28h377v28H132Zm0-189v-28h172v28H132Zm0-189v-28h172v28H132Zm676 380L652-405q-21 16-45.5 25t-50.5 9q-62.67 0-106.83-43Q405-457 405-519.5T449.24-625q44.23-43 107-43Q619-668 663-625q44 43 44 105 0 26-9 50.5T672-425l156 153-20 20ZM556-399q51.25 0 87.13-35Q679-469 679-519.5T643.13-605q-35.88-35-87.13-35-51.25 0-87.12 35Q433-570 433-519.5t35.88 85.5q35.87 35 87.12 35Z"/>
    </Icon>
  );
});

IconMaterialManageSearchW100Filled.displayName = 'OnesyIconMaterialManageSearchW100Filled';

export default IconMaterialManageSearchW100Filled;
