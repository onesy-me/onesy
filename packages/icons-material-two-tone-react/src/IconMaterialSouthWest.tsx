import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSouthWest = (props: IIcon) => {

  return (
    <Icon
      name='SouthWest'

      short_name='SouthWest'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M15,19v-2H8.41L20,5.41L18.59,4L7,15.59V9H5v10H15z"/>
    </Icon>
  );
};

IconMaterialSouthWest.displayName = 'OnesyIconMaterialSouthWest';

export default IconMaterialSouthWest;
