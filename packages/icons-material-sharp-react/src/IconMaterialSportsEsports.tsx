import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSportsEsports = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsEsports'

      short_name='SportsEsports'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m65-200 78-560h674l78 560H736L616-320H344L224-200H65Zm127-80 120-120h337l120 120h35l-58-400H214l-57 400h35Zm488-160q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm171-40Z"/>
    </Icon>
  );
});

IconMaterialSportsEsports.displayName = 'OnesyIconMaterialSportsEsports';

export default IconMaterialSportsEsports;
