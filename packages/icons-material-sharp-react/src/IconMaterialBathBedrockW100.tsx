import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBathBedrockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BathBedrockW100'

      short_name='BathBedrock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M349-568v-11q0-29-9-53.5T309-691q-23-36-33-64.5T266-814v-14h29v11q0 29 9 53.5t31 58.5q23 36 33 64.5t10 58.5v14h-29Zm156 0v-11q0-29-9-53.5T465-691q-23-36-33-64.5T422-814q0-4 .5-7t.5-7h29q0 3-.5 5.5t-.5 5.5q0 29 9 53.5t31 58.5q23 36 33 64.5t10 58.5v14h-29Zm160 0v-11q0-29-9-53.5T625-691q-23-36-33-64.5T582-814q0-4 .5-7t.5-7h29q0 3-.5 5.5t-.5 5.5q0 29 9 53.5t31 58.5q23 36 33 64.5t10 58.5v14h-29ZM388-280v-176h412v176H388Zm28-148v120-120ZM160-172v-28h640v28H160Zm74-108q-32 0-53-21t-21-53q0-32 21-53t53-21q32 0 53 21t21 53q0 32-21 53t-53 21Zm0-28q20 0 33-13t13-33q0-20-13-33t-33-13q-20 0-33 13t-13 33q0 20 13 33t33 13Zm182 0h356v-120H416v120Zm-182-46Z"/>
    </Icon>
  );
});

IconMaterialBathBedrockW100.displayName = 'OnesyIconMaterialBathBedrockW100';

export default IconMaterialBathBedrockW100;
