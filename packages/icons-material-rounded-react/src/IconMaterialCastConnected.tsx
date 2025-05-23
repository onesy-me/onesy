import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastConnected = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastConnected'

      short_name='CastConnected'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-600v240q0 17-11.5 28.5T680-320h-65q-17 0-28.5-11.5T575-360q0-17 11.5-28.5T615-400h25v-160H453q-17 0-28.5-11.5T413-600q0-17 11.5-28.5T453-640h227q17 0 28.5 11.5T720-600ZM480-480Zm400-240v480q0 33-23.5 56.5T800-160H638q-17 0-28.5-11.5T598-200q0-17 11.5-28.5T638-240h162v-480H160v6q0 17-11.5 28.5T120-674q-17 0-28.5-11.5T80-714v-6q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720ZM320-160q-16 0-28-9.5T277-195q-11-63-56.5-107T112-357q-15-2-23.5-14.5T80-400q0-17 11-28.5t26-9.5q94 12 160.5 79T357-198q2 16-9 27t-28 11Zm160 0q-17 0-28.5-11T438-199q-14-128-104.5-217T115-518q-16-2-25.5-14T80-560q0-17 10.5-29t25.5-10q161 13 274 125t128 273q2 17-9.5 29T480-160Zm-350 0q-21 0-35.5-14.5T80-210q0-21 14.5-35.5T130-260q21 0 35.5 14.5T180-210q0 21-14.5 35.5T130-160Z"/>
    </Icon>
  );
});

IconMaterialCastConnected.displayName = 'OnesyIconMaterialCastConnected';

export default IconMaterialCastConnected;
