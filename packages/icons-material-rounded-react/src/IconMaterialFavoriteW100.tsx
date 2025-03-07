import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFavoriteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FavoriteW100'

      short_name='Favorite'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-211q-11 0-21.5-4T439-227l-39-35q-107-97-187.5-187.5T132-634q0-71 48.5-119.5T300-802q41 0 88.5 22t91.5 90q44-68 91.5-90t88.5-22q71 0 119.5 48.5T828-634q0 97-85 189.5T559-262l-39 35q-8 8-19 12t-22 4Zm-13-449q-38-63-78.5-88.5T300-774q-60 0-100 40t-40 100q0 42 21.5 85t61 90q39.5 47 94.5 99t122 113q9 8 21 8t21-8q67-61 122-113t94.5-99q39.5-47 61-90t21.5-85q0-60-40-100t-100-40q-47 0-87.5 25.5T494-660q-2 4-6 6t-8 2q-4 0-8-2t-6-6Zm14 155Z"/>
    </Icon>
  );
});

IconMaterialFavoriteW100.displayName = 'OnesyIconMaterialFavoriteW100';

export default IconMaterialFavoriteW100;
