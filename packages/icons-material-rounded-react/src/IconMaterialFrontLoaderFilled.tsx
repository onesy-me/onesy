import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrontLoaderFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontLoaderFilled'

      short_name='FrontLoader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M159-169q-50 0-84.5-35T40-289v-240q0-33 23.5-56.5T120-609h200v-160q0-17 11.5-28.5T360-809h160q50 0 85 35t35 85v160h39v-47q0-16 6.5-31t17.5-26l39-38q14-14 33.5-11t29.5 21l123 233q11 20-.5 39.5T893-369H759q-33 0-56.5-23.5T679-449h-40v70q20 17 30.5 40.5T680-289q0 50-35 85t-85 35q-38 0-69-22t-45-58H273q-14 36-45 58t-69 22Zm0-80q17 0 29-11.5t12-28.5q0-17-11.5-28.5T160-329q-17 0-28.5 11.5T120-289q0 17 11 28.5t28 11.5Zm401 0q17 0 28.5-11.5T600-289q0-17-11.5-28.5T560-329q-17 0-28.5 11.5T520-289q0 17 11.5 28.5T560-249Zm267-200-67-127v127h67Zm-427-80h160v-160q0-17-11.5-28.5T520-729H400v200Z"/>
    </Icon>
  );
});

IconMaterialFrontLoaderFilled.displayName = 'OnesyIconMaterialFrontLoaderFilled';

export default IconMaterialFrontLoaderFilled;
