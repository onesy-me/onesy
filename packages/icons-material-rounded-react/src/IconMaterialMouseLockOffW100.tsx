import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMouseLockOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseLockOffW100'

      short_name='MouseLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-595Zm27 27Zm-93 61Zm-21-61Zm87 0Zm28-28Zm-14-228q95 0 161.5 66.5T708-596v90q-7-1-14-1.5t-14-.5v-60H493l-27-27v-201q-40 2-74.5 19.5T331-730l-20-20q32-35 75-54.5t94-19.5ZM268-679l111 111h-99v208q0 83 58.5 141.5T480-160h1v28h-1q-95 0-161.5-66.5T252-360v-236q0-22.27 4-42.64Q260-659 268-679Zm226 83h186q0-81-54.5-138T494-796v200Zm309 492L107-800q-4-4-4.5-9.5T107-820q5-5 10-5t10 5l696 696q4 4 4.5 9.5T823-104q-5 5-10 5t-10-5Zm-194-28q-14 0-25-11t-11-25v-110q0-12.75 8.63-21.38Q590.25-308 603-308h36l148 148q-3 11-13 19.5t-21 8.5H609Zm140-180-28-27.69V-348q0-17-11.5-28.5T681-388q-2 0-3.5.5t-3.5.5l-22-22q7-3 14.1-5 7.09-2 14.9-2 29 0 48.5 19.5T749-348v36Z"/>
    </Icon>
  );
});

IconMaterialMouseLockOffW100.displayName = 'OnesyIconMaterialMouseLockOffW100';

export default IconMaterialMouseLockOffW100;
