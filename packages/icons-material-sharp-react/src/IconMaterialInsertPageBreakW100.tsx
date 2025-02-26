import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInsertPageBreakW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InsertPageBreakW100'

      short_name='InsertPageBreak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-174h28v146h480v-146h28v174H212Zm0-362v-334h374l162 162v172h-28v-158H572v-148H240v306h-28Zm158 108v-28h220v28H370Zm300 0v-28h220v28H670Zm-600 0v-28h220v28H70Zm410-108Zm0 188Z"/>
    </Icon>
  );
});

IconMaterialInsertPageBreakW100.displayName = 'OnesyIconMaterialInsertPageBreakW100';

export default IconMaterialInsertPageBreakW100;
