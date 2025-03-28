import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuietTimeActiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeActiveW100'

      short_name='QuietTimeActive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m768-271-21-21q22.29-18.72 40.64-40.36Q806-354 820-380q-86-8-163-44t-138-97q-61-61-97-137.5T379-821q-26 14-48 32.5T291-748l-20-20q27-32 61-56t74-40q0 92 34 176t99 149q65 65 149 99t176 34q-16 40-40 74t-56 61Zm10 162L673-214q-32 13-65.5 20t-68.5 7q-73.09 0-137.05-27.5Q338-242 290-290t-75.5-111.95Q187-465.91 187-539q0-35 7-68.5t20-65.5L110-777l20-20 668 668-20 20ZM539-215q29 0 58-5t55-15L235-652q-10 27-15 55.42-5 28.43-5 57.58 0 135 94.5 229.5T539-215Zm-96-229Zm76-76Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeActiveW100.displayName = 'OnesyIconMaterialQuietTimeActiveW100';

export default IconMaterialQuietTimeActiveW100;
