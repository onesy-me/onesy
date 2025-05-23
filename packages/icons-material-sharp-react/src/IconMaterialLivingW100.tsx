import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLivingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LivingW100'

      short_name='Living'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-696h696v696H132Zm28-28h640v-640H160v640Zm72-112h496v-274h-50v-122H282v122h-50v274Zm28-28v-220h80v120h280v-120h80v220H260Zm108-128v-118h-58v-94h340v94h-58v118H368ZM160-160v-640 640Z"/>
    </Icon>
  );
});

IconMaterialLivingW100.displayName = 'OnesyIconMaterialLivingW100';

export default IconMaterialLivingW100;
