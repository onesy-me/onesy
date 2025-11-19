import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModelingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModelingW100'

      short_name='Modeling'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M713-203 587-327l126-124 19 20-91 90h187v28H641l91 90-19 20Zm-581-9v-230h357v230H132Zm28-28h301v-174H160v174Zm87-270-19-20 91-90H132v-28h187l-91-90 19-19 126 123-126 124Zm224-8v-230h357v230H471Zm28-28h301v-174H499v174Zm-38 306v-174 174Zm38-306v-174 174Z"/>
    </Icon>
  );
});

IconMaterialModelingW100.displayName = 'OnesyIconMaterialModelingW100';

export default IconMaterialModelingW100;
