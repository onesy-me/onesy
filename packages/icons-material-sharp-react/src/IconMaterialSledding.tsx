import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSledding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sledding'

      short_name='Sledding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M765-40q-19 0-31.5-2T710-48L40-266l18-57 158 51 18-57-157-51 19-57 64 21v-164l219-94q8-4 15.5-5t16.5-1q34 0 55 29.5t10 64.5l-42 130 146-24 109 236 77 25-18 57-133-43-19 57 133 43q8 2 16.5 3.5T765-100q36 0 65.5-29.5T860-195q0-34-16.5-60T790-295l19-57q52 17 81.5 59t29.5 98q0 62-46.5 108.5T765-40ZM539-166l19-58-267-86-18 57 266 87Zm46-112-47-102-159 35 206 67Zm-305-99-4-56 41-127-77 33v137l40 13Zm200-323q-33 0-56.5-23.5T400-780q0-33 23.5-56.5T480-860q33 0 56.5 23.5T560-780q0 33-23.5 56.5T480-700Z"/>
    </Icon>
  );
});

IconMaterialSledding.displayName = 'OnesyIconMaterialSledding';

export default IconMaterialSledding;
