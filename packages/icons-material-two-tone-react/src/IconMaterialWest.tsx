import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWest = (props: IIcon) => {

  return (
    <Icon
      name='West'

      short_name='West'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M9,19l1.41-1.41L5.83,13H22V11H5.83l4.59-4.59L9,5l-7,7L9,19z"/>
    </Icon>
  );
};

IconMaterialWest.displayName = 'OnesyIconMaterialWest';

export default IconMaterialWest;
