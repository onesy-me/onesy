import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPasskey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Passkey'

      short_name='Passkey'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160q-33 0-56.5-23.5T120-240v-32q0-34 17.5-62.5T184-378q62-31 126-46.5T440-440q14 0 28 .5t28 2.5q11 1 17.5 8.5T520-410q2 47 23 88.5t56 70.5q7 5 11 12.5t4 16.5v22q0 17-11.5 28.5T574-160H200Zm240-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm300 80q17 0 28.5-11.5T780-440q0-17-11.5-28.5T740-480q-17 0-28.5 11.5T700-440q0 17 11.5 28.5T740-400Zm6 346-40-40q-2-2-6-14v-178q-44-13-72-49.5T600-420q0-58 41-99t99-41q58 0 99 41t41 99q0 45-25.5 80T790-290l36 36q6 6 6 14t-6 14l-32 32q-6 6-6 14t6 14l32 32q6 6 6 14t-6 14l-52 52q-6 6-14 6t-14-6Z"/>
    </Icon>
  );
});

IconMaterialPasskey.displayName = 'OnesyIconMaterialPasskey';

export default IconMaterialPasskey;
