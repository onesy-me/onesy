import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopW100'

      short_name='Stop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-640v320-320Zm-28 348v-376h376v376H292Zm28-28h320v-320H320v320Z"/>
    </Icon>
  );
});

IconMaterialStopW100.displayName = 'OnesyIconMaterialStopW100';

export default IconMaterialStopW100;
