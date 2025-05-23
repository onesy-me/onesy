import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmojiFoodBeverageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiFoodBeverageW100'

      short_name='EmojiFoodBeverage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-28h536v28H212Zm0-148v-468h552q26 0 45 17.5t19 43.5v80q0 26-19 43.5T764-586h-80v266H212Zm28-440h416-416Zm444 146h80q15 0 25.5-9.5T800-647v-80q0-14-10.5-23.5T764-760h-80v146Zm-28 266v-412H394v56l66 55v135H300v-135l66-55v-56H240v412h416ZM366-760h28-28Z"/>
    </Icon>
  );
});

IconMaterialEmojiFoodBeverageW100.displayName = 'OnesyIconMaterialEmojiFoodBeverageW100';

export default IconMaterialEmojiFoodBeverageW100;
