import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery80W100 = (props: IIcon) => {

  return (
    <Icon
      name='Battery80W100'

      short_name='Battery80'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.35 21.35q-.3 0-.5-.2t-.2-.5V5.35q0-.3.2-.5t.5-.2h2.05V3.9q0-.325.213-.538.212-.212.537-.212h1.7q.325 0 .538.212.212.213.212.538v.75h2.05q.3 0 .5.2t.2.5v15.3q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
};

IconMaterialBattery80W100.displayName = 'OnesyIconMaterialBattery80W100';

export default IconMaterialBattery80W100;
