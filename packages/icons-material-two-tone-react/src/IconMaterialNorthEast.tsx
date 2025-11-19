import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNorthEast = (props: IIcon) => {

  return (
    <Icon
      name='NorthEast'

      short_name='NorthEast'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z"/>
    </Icon>
  );
};

IconMaterialNorthEast.displayName = 'OnesyIconMaterialNorthEast';

export default IconMaterialNorthEast;
