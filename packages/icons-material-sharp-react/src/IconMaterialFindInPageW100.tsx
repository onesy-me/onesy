import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFindInPageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageW100'

      short_name='FindInPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m626-160 28 28H212v-696h364l172 206v470L546-354q-17 12-32.56 17-15.55 5-33.44 5-44.55 0-76.27-31.73Q372-395.45 372-440t31.73-76.28Q435.45-548 480-548t76.28 31.72Q588-484.55 588-440q0 20-5.5 35.5T566-374l154 156v-394L562-800H240v640h386ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-120Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialFindInPageW100.displayName = 'OnesyIconMaterialFindInPageW100';

export default IconMaterialFindInPageW100;
