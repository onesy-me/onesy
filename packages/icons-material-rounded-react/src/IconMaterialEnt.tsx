import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ent'

      short_name='Ent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M469-320h91q17 0 28.5-11.5T600-360q0-17-11.5-28.5T560-400h-83l5-44q2-15 13-25.5t26-10.5h119q17 0 28.5-11.5T680-520q0-17-11.5-28.5T640-560H522q-47 0-81 31t-39 77l-34 328q-2 17 10 30.5T408-80q15 0 26.5-10.5T448-116l21-204Zm-229 68q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v40q0 17-11.5 28.5T560-80q-17 0-28.5-11.5T520-120v-80q0-17 11.5-28.5T560-240h120v-160q0-17 11.5-28.5T720-440h68l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v168q0 17-11.5 28.5T280-80q-17 0-28.5-11.5T240-120v-132Zm254-188Z"/>
    </Icon>
  );
});

IconMaterialEnt.displayName = 'OnesyIconMaterialEnt';

export default IconMaterialEnt;
