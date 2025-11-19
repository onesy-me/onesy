import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallReceived = (props: IIcon) => {

  return (
    <Icon
      name='CallReceived'

      short_name='CallReceived'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15 17H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"/>
    </Icon>
  );
};

IconMaterialCallReceived.displayName = 'OnesyIconMaterialCallReceived';

export default IconMaterialCallReceived;
