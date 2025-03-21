import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommunitiesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommunitiesW100'

      short_name='Communities'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-346q23 0 38.5-15.5T414-400q0-23-15.5-38.5T360-454q-23 0-38.5 15.5T306-400q0 23 15.5 38.5T360-346Zm240 0q23 0 38.5-15.5T654-400q0-23-15.5-38.5T600-454q-23 0-38.5 15.5T546-400q0 23 15.5 38.5T600-346ZM480-546q23 0 38.5-15.5T534-600q0-23-15.5-38.5T480-654q-23 0-38.5 15.5T426-600q0 23 15.5 38.5T480-546Zm.17 414q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Zm-.17-28q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialCommunitiesW100.displayName = 'OnesyIconMaterialCommunitiesW100';

export default IconMaterialCommunitiesW100;
