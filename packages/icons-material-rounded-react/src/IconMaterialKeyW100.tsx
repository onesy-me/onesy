import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKeyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyW100'

      short_name='Key'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-440q-16.5 0-28.25-11.75T240-480q0-16.5 11.75-28.25T280-520q16.5 0 28.25 11.75T320-480q0 16.5-11.75 28.25T280-440Zm0 148q-78.33 0-133.17-54.76Q92-401.53 92-479.76 92-558 146.83-613q54.84-55 133.17-55 60 0 108 33.5t68 86.5h361q5.57 0 10.78 2 5.22 2 10.22 7l38 38q5 5 7 10.13 2 5.14 2 11 0 5.87-2 10.87-2 5-7 10l-72 71q-3.68 4.09-8.84 6.55Q790-379 785-379t-10-1.5q-5-1.5-10-4.5l-45-34-54 39q-4 3-8 4t-9 1q-5 0-9-1.5t-8-3.5l-49-32H456q-20 52-68 86t-108 34Zm0-28q60 0 101.5-36t52.5-84h158l57 38h-.5.5l72-51 63 47v-.5.5l74-74-40-40H434q-11-48-52.5-84T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/>
    </Icon>
  );
});

IconMaterialKeyW100.displayName = 'OnesyIconMaterialKeyW100';

export default IconMaterialKeyW100;
