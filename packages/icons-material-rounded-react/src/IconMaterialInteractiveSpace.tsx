import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInteractiveSpace = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InteractiveSpace'

      short_name='InteractiveSpace'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-634q6 6 14 6t14-6l52-52q6-6 6-14t-6-14l-52-52q-6-6-14-6t-14 6l-52 52q-6 6-6 14t6 14l52 52Zm214-26ZM160-400q-33 0-56.5-23.5T80-480v-360q0-33 23.5-56.5T160-920h640q33 0 56.5 23.5T880-840v360q0 33-23.5 56.5T800-400h-81q-17 0-28-11.5T680-440q0-17 11.5-28.5T720-480h80v-360H160v360h80q17 0 28.5 11.5T280-440q0 17-11.5 28.5T240-400h-80Zm500-280q25 0 42.5-17.5T720-740q0-25-17.5-42.5T660-800q-25 0-42.5 17.5T600-740q0 25 17.5 42.5T660-680ZM240-40q-17 0-28.5-11.5T200-80v-44q0-35 19.5-65t51.5-45q49-23 102-34.5T480-280q54 0 107 11.5T689-234q32 15 51.5 45t19.5 65v44q0 17-11.5 28.5T720-40H240Zm40-80h400v-4q0-12-7-22t-18-15q-42-19-86-29t-89-10q-45 0-89 10t-86 29q-11 5-18 15t-7 22v4Zm200-200q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T540-460q0-25-17.5-42.5T480-520q-25 0-42.5 17.5T420-460q0 25 17.5 42.5T480-400Zm0-60Zm0 340Z"/>
    </Icon>
  );
});

IconMaterialInteractiveSpace.displayName = 'OnesyIconMaterialInteractiveSpace';

export default IconMaterialInteractiveSpace;
