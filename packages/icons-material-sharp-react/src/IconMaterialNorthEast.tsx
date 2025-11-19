import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNorthEast = (props: IIcon) => {

  return (
    <Icon
      name='NorthEast'

      short_name='NorthEast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/>
    </Icon>
  );
};

IconMaterialNorthEast.displayName = 'OnesyIconMaterialNorthEast';

export default IconMaterialNorthEast;
