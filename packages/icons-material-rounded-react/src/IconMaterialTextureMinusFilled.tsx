import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextureMinusFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureMinusFilled'

      short_name='TextureMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M131-131q-11-11-12-27t13-30l641-641q15-15 31-13t27 13q11 11 12 27t-14 30L187-131q-14 14-29.5 12.5T131-131Zm469-69q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h240q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200H600ZM131-439q-11-11-12-27t13-30l332-332q14-14 29.5-12.5T520-828q11 11 12.5 26.5T520-772L187-439q-14 14-29.5 12.5T131-439Zm605 67q-14 14-29.5 12.5T680-372q-11-11-12.5-26.5T680-428l93-93q14-14 29-12t26 13q11 11 12.5 26.5T828-464l-92 92ZM154-714q-10 10-22 5t-12-19v-72q0-17 11.5-28.5T160-840h72q14 0 19 12t-5 22l-92 92Zm314 594q-17 0-28-11.5T429-160q0-17 11-28t28-11q17 0 28.5 11t11.5 28q0 17-11.5 28.5T468-120Z"/>
    </Icon>
  );
});

IconMaterialTextureMinusFilled.displayName = 'OnesyIconMaterialTextureMinusFilled';

export default IconMaterialTextureMinusFilled;
