import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHandshake = (props: IIcon) => {

  return (
    <Icon
      name='Handshake'

      short_name='Handshake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M474-40 79-435l302-302 146 146 28-28-214-214L68-560l39 39-57 57-94-94 387-387 124 124 124-124 394 394L474-40Zm1-112 397-399-282-282-67 67 146 146-142 142-146-146-189 189 29 29 149-149 56 56-149 149 28 28 149-149 57 57-149 149 28 28 149-149 56 56-149 149 29 29ZM359-665Z"/>
    </Icon>
  );
};

IconMaterialHandshake.displayName = 'OnesyIconMaterialHandshake';

export default IconMaterialHandshake;
