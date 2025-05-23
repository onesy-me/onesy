import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFindInPage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPage'

      short_name='FindInPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m590-160 80 80H160v-800h440l200 240v560h-16L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-120Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialFindInPage.displayName = 'OnesyIconMaterialFindInPage';

export default IconMaterialFindInPage;
