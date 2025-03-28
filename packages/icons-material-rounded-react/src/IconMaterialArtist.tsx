import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArtist = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Artist'

      short_name='Artist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-160q-42 0-71-29t-29-71q0-42 29-71t71-29q8 0 18 1.5t22 6.5v-168q0-17 11.5-28.5T780-560h60q17 0 28.5 11.5T880-520q0 17-11.5 28.5T840-480h-40v220q0 42-29 71t-71 29Zm-540 0q-17 0-28.5-11.5T120-200v-72q0-35 17.5-63t46.5-43q62-31 126-46.5T440-440q23 0 47 1.5t47 6.5q21 4 29 18t6 29q-2 15-14 26t-31 7q-21-4-41.5-6t-42.5-2q-57 0-112 14t-108 40q-9 5-14.5 14t-5.5 20v32h293q20 0 30 12.5t10 27.5q0 15-10 27.5T493-160H160Zm280-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T520-640q0-33-23.5-56.5T440-720q-33 0-56.5 23.5T360-640q0 33 23.5 56.5T440-560Zm0-80Zm0 400Z"/>
    </Icon>
  );
});

IconMaterialArtist.displayName = 'OnesyIconMaterialArtist';

export default IconMaterialArtist;
