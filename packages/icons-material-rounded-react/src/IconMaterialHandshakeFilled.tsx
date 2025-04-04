import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHandshakeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandshakeFilled'

      short_name='Handshake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M484-120q-17 0-28.5-11.5T444-160q0-7 3-14.5t9-13.5l171-171q6-6 6-14.5t-6-14.5q-6-6-14.5-5.5T598-387L428-217q-6 6-13 9t-15 3q-17 0-28.5-11.5T360-245q0-10 3-16.5t8-11.5l171-171q6-6 6-14t-6-14q-6-6-14-6t-14 6L343-302q-6 6-13 9t-16 3q-16 0-28-12t-12-28q0-8 3-15t9-13l170-170q6-6 6-14.5t-6-14.5q-6-6-14-6t-14 6L258-386q-5 5-12 8t-17 3q-17 0-28.5-11.5T189-415q0-8 3-15t9-13l196-196q11-11 27.5-10t27.5 12l122 122q11 11 26 17.5t30 6.5q32 0 56-22.5t24-57.5q0-14-5-29t-18-28L550-765q-11-11-14.5-24t3.5-25q9-15 23-22t31-7q21 0 43 10t40 28l169 170q18 18 26.5 40t8.5 51q0 20-9 40.5T845-466L512-132q-8 8-14 10t-14 2ZM116-475q-19-14-28.5-33.5T78-550q0-23 9.5-45t27.5-40l169-170q17-17 37.5-26t43.5-9q25 0 48.5 9t40.5 26l205 205q5 5 8.5 12.5T671-572q0 17-11.5 28.5T631-532q-8 0-15.5-3.5T603-544L480-666q-23-23-56.5-23T367-666L179-478q-13 13-30.5 13.5T116-475Z"/>
    </Icon>
  );
});

IconMaterialHandshakeFilled.displayName = 'OnesyIconMaterialHandshakeFilled';

export default IconMaterialHandshakeFilled;
