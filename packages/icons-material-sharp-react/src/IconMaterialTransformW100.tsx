import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransformW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransformW100'

      short_name='Transform'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M624-96 500-220l20-20 90 88v-171H382q-26 0-43-17t-17-43v-228H132v-28h190v-169l-90 88-20-20 124-124 124 124-20 20-90-88v425q0 12 10 22t22 10h446v28H638v171l90-88 20 20L624-96Zm-14-335v-148q0-12-10-22t-22-10H430v-28h148q26 0 43 17t17 43v148h-28Z"/>
    </Icon>
  );
});

IconMaterialTransformW100.displayName = 'OnesyIconMaterialTransformW100';

export default IconMaterialTransformW100;
