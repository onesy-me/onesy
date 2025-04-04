import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOrderPlay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrderPlay'

      short_name='OrderPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m701-159 102-64q10-6 10-17t-10-17l-102-64q-10-6-20.5-.5T670-304v128q0 12 10.5 17.5t20.5-.5ZM280-600h400q17 0 28.5-11.5T720-640q0-17-11.5-28.5T680-680H280q-17 0-28.5 11.5T240-640q0 17 11.5 28.5T280-600ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40ZM120-85v-675q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v267q-19-9-39-15t-41-9v-243H200v562h243q5 31 15.5 59T486-86q-5 1-10.5-1.5T466-94l-46-46-46 46q-6 6-14 6t-14-6l-46-46-46 46q-6 6-14 6t-14-6l-46-46-46 46-14 9Zm160-195h163q3-21 9-41t15-39H280q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm0-160h244q38-37 88.5-58.5T720-520H280q-17 0-28.5 11.5T240-480q0 17 11.5 28.5T280-440Zm-80 242v-562 562Z"/>
    </Icon>
  );
});

IconMaterialOrderPlay.displayName = 'OnesyIconMaterialOrderPlay';

export default IconMaterialOrderPlay;
