import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConnectWithoutContactW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectWithoutContactW100'

      short_name='ConnectWithoutContact'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-132v-83q-48-11-84-44t-48-81h28q15 44 52 72t86 28h120q14 0 24 10t10 24v74H640Zm94-200q-23 0-38.5-15.5T680-386q0-23 15.5-38.5T734-440q23 0 38.5 15.5T788-386q0 23-15.5 38.5T734-332Zm-334-94q0-106 74-179.5T654-679v28q-94 0-160 65.5T428-426h-28Zm108 0q0-61 42.5-103.5T654-572v28q-49 0-83.5 34.5T536-426h-28Zm-376-94v-74q0-14 10-24t24-10h120q49 0 86-28t52-72h29q-10 46-46.5 80T320-603v83H132Zm94-200q-23 0-38.5-15.5T172-774q0-23 15.5-38.5T226-828q23 0 38.5 15.5T280-774q0 23-15.5 38.5T226-720Z"/>
    </Icon>
  );
});

IconMaterialConnectWithoutContactW100.displayName = 'OnesyIconMaterialConnectWithoutContactW100';

export default IconMaterialConnectWithoutContactW100;
