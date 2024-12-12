import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFindInPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageW100Filled'

      short_name='FindInPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-696h364l172 206v432L566-374q11-15 16.5-30.5T588-440q0-44.55-31.72-76.28Q524.55-548 480-548t-76.27 31.72Q372-484.55 372-440t31.73 76.27Q435.45-332 480-332q17.89 0 33.44-5Q529-342 546-354l202 201v21H212Zm268-228q-33 0-56.5-23.5T400-440q0-33 23.5-56.5T480-520q33 0 56.5 23.5T560-440q0 33-23.5 56.5T480-360Z"/>
    </Icon>
  );
});

IconMaterialFindInPageW100Filled.displayName = 'OnesyIconMaterialFindInPageW100Filled';

export default IconMaterialFindInPageW100Filled;
