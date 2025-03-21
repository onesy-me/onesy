import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCarryOnBagInactive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagInactive'

      short_name='CarryOnBagInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-840v286q0 17-11.5 28.5T560-514q-17 0-28.5-11.5T520-554v-46h-46q-17 0-28.5-11.5T434-640q0-17 11.5-28.5T474-680h46v-120h-40q-17 0-28.5-11.5T440-840q0-17 11.5-28.5T480-880h80q17 0 28.5 11.5T600-840ZM764-84l-48-48q-11 42-42.5 67T600-40q-39 0-69.5-22.5T488-120H280q-33 0-56.5-23.5T200-200v-400q0-11 2.5-20t7.5-18L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM320-200v-326l-40-40v366h40Zm280 100q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM400-200h88q5-14 13-26.5t19-21.5v-78L400-446v246Zm198 42ZM474-600ZM360-323Zm-40 123v-326 326Zm80 0v-246 246Zm200 40Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagInactive.displayName = 'OnesyIconMaterialCarryOnBagInactive';

export default IconMaterialCarryOnBagInactive;
