import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTouchpadMouseOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouseOff'

      short_name='TouchpadMouseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-359Zm0 0ZM791-57 55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM660-359Zm0 0Zm0 279q-92 0-156-64t-64-156v-120q0-23 4.5-43.5T457-504l144 144h-81v60q0 58 41 99t99 41q29 0 54.5-11t44.5-31l57 57q-30 30-70 47.5T660-80Zm180-160q-17 0-28.5-11.5T800-280v-80h-85l-95-95v-99q-11 3-20.5 8.5T580-534q-14 8-29.5 4.5T527-547q-9-15-4.5-32t19.5-27q26-17 56-25.5t62-8.5q92 0 156 64t64 156v140q0 17-11.5 28.5T840-240ZM700-440h99q-6-41-33.5-72T700-554v114ZM397-564ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h1l80 80h-81v480h160q17 0 28.5 11.5T360-200q0 17-11.5 28.5T320-160H160Zm179-560q-17 0-28.5-11.5T299-760q0-17 11.5-28.5T339-800h501q17 0 28.5 11.5T880-760q0 17-11.5 28.5T840-720H339Zm107 91Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseOff.displayName = 'OnesyIconMaterialTouchpadMouseOff';

export default IconMaterialTouchpadMouseOff;
