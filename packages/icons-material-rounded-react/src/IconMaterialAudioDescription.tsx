import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAudioDescription = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AudioDescription'

      short_name='AudioDescription'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-242q-17 0-28.5-11.5T758-282q0-8 3.5-15.5T770-310q32-33 51-76.5t19-93.5q0-50-19-93t-51-76q-6-5-9-13t-3-16q0-17 11.5-28.5T798-718q8 0 16 3.5t13 8.5q44 44 68.5 102T920-480q0 66-25 123.5T826-255q-5 5-12.5 9t-15.5 4ZM686-356q-17 0-29-11.5T645-396q0-8 3.5-16.5T658-426q11-11 16.5-24.5T680-480q0-16-5.5-29.5T658-534q-6-5-9.5-13.5T645-564q0-17 12-28.5t29-11.5q8 0 15.5 3.5T715-591q21 22 33 50.5t12 60.5q0 32-12 60.5T715-369q-5 6-12.5 9.5T686-356ZM80-320q-17 0-28.5-11.5T40-360v-200q0-33 23.5-56.5T120-640h80q33 0 56.5 23.5T280-560v200q0 17-11.5 28.5T240-320q-17 0-28.5-11.5T200-360v-40h-80v40q0 17-11.5 28.5T80-320Zm40-160h80v-80h-80v80Zm270 160q-13 0-21.5-8.5T360-350v-260q0-13 8.5-21.5T390-640h130q33 0 56.5 23.5T600-560v160q0 33-23.5 56.5T520-320H390Zm50-80h80v-160h-80v160Z"/>
    </Icon>
  );
});

IconMaterialAudioDescription.displayName = 'OnesyIconMaterialAudioDescription';

export default IconMaterialAudioDescription;
