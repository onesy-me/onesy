import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShareReviews = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareReviews'

      short_name='ShareReviews'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M580-360q33 0 56.5-23.5T660-440q0-33-23.5-56.5T580-520q-15 0-28.5 5.5T527-500l-107-54v-12l107-54q11 9 24.5 14.5T580-600q33 0 56.5-23.5T660-680q0-33-23.5-56.5T580-760q-33 0-56.5 23.5T500-680v6l-107 54q-11-9-24.5-14.5T340-640q-33 0-56.5 23.5T260-560q0 33 23.5 56.5T340-480q15 0 28.5-5.5T393-500l107 54v6q0 33 23.5 56.5T580-360ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialShareReviews.displayName = 'OnesyIconMaterialShareReviews';

export default IconMaterialShareReviews;
