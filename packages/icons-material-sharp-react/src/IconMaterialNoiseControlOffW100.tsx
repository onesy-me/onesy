import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoiseControlOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoiseControlOffW100'

      short_name='NoiseControlOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-57 0-107.5-17T279-196l20-20q38 26 84 41t97 15q51 0 97-15t84-41l20 20q-43 30-93.5 47T480-132ZM196-279q-30-43-47-93.5T132-480q0-57 17-107.5t47-93.5l20 20q-26 38-41 84t-15 97q0 51 15 97t41 84l-20 20Zm568 0-20-20q26-38 41-84t15-97q0-51-15-97t-41-84l20-20q30 43 47 93.5T828-480q0 57-17 107.5T764-279ZM299-744l-20-20q43-30 93.5-47T480-828q57 0 107.5 17t93.5 47l-20 20q-38-26-84-41t-97-15q-51 0-97 15t-84 41Zm221 478q-30 0-54.5-18T431-331q-4-12-9.5-23T407-374l-54-54q-23-23-35-51.5T306-540q0-65 45-109.5T460-694q59 0 102 38t51 95h-28q-8-46-43-75.5T460-666q-52 0-89 36.5T334-540q0 26 10 49.5t29 42.5l54 54q11 11 18.5 25.5T458-339q7 20 24 32.5t38 12.5q28 0 47-19.5t19-46.5h28q0 38-27.5 66T520-266Zm20-160q-14 0-24-10t-10-24q0-14 10-24t24-10q14 0 24 10t10 24q0 14-10 24t-24 10Z"/>
    </Icon>
  );
});

IconMaterialNoiseControlOffW100.displayName = 'OnesyIconMaterialNoiseControlOffW100';

export default IconMaterialNoiseControlOffW100;
