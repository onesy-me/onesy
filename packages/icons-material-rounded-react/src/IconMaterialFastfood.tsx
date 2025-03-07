import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFastfood = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Fastfood'

      short_name='Fastfood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M533-440q-32-45-84.5-62.5T340-520q-56 0-108.5 17.5T147-440h386ZM340-600q46 0 93.5 11.5t88 35.5q40.5 24 69.5 60t39 85q4 19-8 33.5T591-360H89q-19 0-31-14.5T50-408q10-49 39.5-85t70-60q40.5-24 87.5-35.5t93-11.5ZM80-200q-17 0-28.5-11.5T40-240q0-17 11.5-28.5T80-280h520q17 0 28.5 11.5T640-240q0 17-11.5 28.5T600-200H80ZM788-40h-28q-17 0-28.5-11.5T720-80q0-17 11.5-28.5T760-120h16l56-560H488q-17 0-28.5-11.5T448-720q0-17 11.5-28.5T488-760h152v-120q0-17 11.5-28.5T680-920q17 0 28.5 11.5T720-880v120h156q18 0 30 13t10 31L854-98q-3 25-22 41.5T788-40Zm-68-80h56-56ZM80-40q-17 0-28.5-11.5T40-80q0-17 11.5-28.5T80-120h520q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40H80Zm260-400Z"/>
    </Icon>
  );
});

IconMaterialFastfood.displayName = 'OnesyIconMaterialFastfood';

export default IconMaterialFastfood;
