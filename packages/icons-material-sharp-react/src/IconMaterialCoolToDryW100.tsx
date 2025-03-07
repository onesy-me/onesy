import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCoolToDryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoolToDryW100'

      short_name='CoolToDry'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-195q-97-14-162.5-87T212-455q0-57 21.5-103t56.5-84l190-186 190 186q27 29 46.5 64.5T744-501h-28q-7-34-23.5-64T650-620L480-788 310-620q-35 33-52.5 75T240-455q0 87 57.5 152.5T440-223v28Zm38-311Zm62 171-11-25q22-11 45-17.5t46-6.5q21 0 42 5t41 13q20 8 39.5 14.5T784-345q22 0 42-6t39-15l11 26q-22 11-45.5 17t-46.5 6q-21 0-42-5t-41-13q-20-8-39.5-14.5T620-356q-22 0-41.5 6T540-335Zm0 100-11-25q22-11 45-17.5t46-6.5q21 0 42 5t41 13q20 8 39.5 14.5T784-245q22 0 42-6t39-15l11 26q-22 11-45.5 17t-46.5 6q-21 0-42-5t-41-13q-20-8-39.5-14.5T620-256q-22 0-41.5 6T540-235Zm0 100-11-25q22-11 45-17.5t46-6.5q21 0 42 5t41 13q20 8 39.5 14.5T784-145q22 0 42-6t39-15l11 26q-22 11-45.5 17t-46.5 6q-21 0-42-5t-41-13q-20-8-39.5-14.5T620-156q-22 0-41.5 6T540-135Z"/>
    </Icon>
  );
});

IconMaterialCoolToDryW100.displayName = 'OnesyIconMaterialCoolToDryW100';

export default IconMaterialCoolToDryW100;
