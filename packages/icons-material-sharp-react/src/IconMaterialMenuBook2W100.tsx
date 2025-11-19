import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenuBook2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MenuBook2W100'

      short_name='MenuBook2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-148h-40v-28h40v-158h-40v-28h40v-158h-40v-28h40v-148h536v696H212Zm28-28h480v-640H240v120h40v28h-40v158h40v28h-40v158h40v28h-40v120Zm176-136h28v-159q23-5 39.5-22t16.5-40v-147h-28v147h-28v-147h-28v147h-28v-147h-28v147q0 23 16.5 40t39.5 22v159Zm176 0h28v-367q-38 5-63 35t-25 68v104h60v160ZM240-160v-640 640Z"/>
    </Icon>
  );
});

IconMaterialMenuBook2W100.displayName = 'OnesyIconMaterialMenuBook2W100';

export default IconMaterialMenuBook2W100;
