import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSchemaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SchemaW100'

      short_name='Schema'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M206-116v-88q0-13 8.5-21.5T236-234h50v-172h-50q-13 0-21.5-8.5T206-436v-88q0-13 8.5-21.5T236-554h50v-172h-50q-13 0-21.5-8.5T206-756v-88q0-13 8.5-21.5T236-874h128q13 0 21.5 8.5T394-844v88q0 13-8.5 21.5T364-726h-50v172h50q13 0 21.5 8.5T394-524v30h212v-30q0-13 8.5-21.5T636-554h128q13 0 21.5 8.5T794-524v88q0 13-8.5 21.5T764-406H636q-13 0-21.5-8.5T606-436v-30H394v30q0 13-8.5 21.5T364-406h-50v172h50q13 0 21.5 8.5T394-204v88q0 13-8.5 21.5T364-86H236q-13 0-21.5-8.5T206-116Zm28 2h132v-92H234v92Zm0-320h132v-92H234v92Zm400 0h132v-92H634v92ZM234-754h132v-92H234v92Zm66-46Zm0 320Zm400 0ZM300-160Z"/>
    </Icon>
  );
});

IconMaterialSchemaW100.displayName = 'OnesyIconMaterialSchemaW100';

export default IconMaterialSchemaW100;
