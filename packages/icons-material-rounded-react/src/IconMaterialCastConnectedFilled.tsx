import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastConnectedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastConnectedFilled'

      short_name='CastConnected'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-600v240q0 17-11.5 28.5T680-320h-87q-8 0-14.5-4.5T569-337q-29-81-81.5-147T364-596q-16-10-11.5-27t21.5-17h306q17 0 28.5 11.5T720-600ZM320-160q-16 0-28-9.5T277-195q-11-63-56.5-107T112-357q-15-2-23.5-14.5T80-400q0-17 11-28.5t26-9.5q94 12 160.5 79T357-198q2 16-9 27t-28 11Zm160 0q-17 0-28.5-11T438-199q-14-128-104.5-217T115-518q-16-2-25.5-14T80-560q0-17 10.5-29t25.5-10q161 13 274 125.5T518-201q2 17-9.5 29T480-160Zm-340 0q-25 0-42.5-17.5T80-220q0-25 17.5-42.5T140-280q25 0 42.5 17.5T200-220q0 25-17.5 42.5T140-160Zm740-560v480q0 33-23.5 56.5T800-160H638q-17 0-28.5-11.5T598-200q0-17 11.5-28.5T638-240h162v-480H160v6q0 17-11.5 28.5T120-674q-17 0-28.5-11.5T80-714v-6q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Z"/>
    </Icon>
  );
});

IconMaterialCastConnectedFilled.displayName = 'OnesyIconMaterialCastConnectedFilled';

export default IconMaterialCastConnectedFilled;
