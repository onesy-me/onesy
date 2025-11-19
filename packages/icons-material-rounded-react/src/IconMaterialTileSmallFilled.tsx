import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTileSmallFilled = (props: IIcon) => {

  return (
    <Icon
      name='TileSmallFilled'

      short_name='TileSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-240v-160q0-17 11.5-28.5T160-440h240q17 0 28.5 11.5T440-400v160q0 17-11.5 28.5T400-200H160q-17 0-28.5-11.5T120-240Zm400 0v-160q0-17 11.5-28.5T560-440h240q17 0 28.5 11.5T840-400v160q0 17-11.5 28.5T800-200H560q-17 0-28.5-11.5T520-240ZM120-560v-160q0-17 11.5-28.5T160-760h240q17 0 28.5 11.5T440-720v160q0 17-11.5 28.5T400-520H160q-17 0-28.5-11.5T120-560Zm400 0v-160q0-17 11.5-28.5T560-760h240q17 0 28.5 11.5T840-720v160q0 17-11.5 28.5T800-520H560q-17 0-28.5-11.5T520-560Z"/>
    </Icon>
  );
};

IconMaterialTileSmallFilled.displayName = 'OnesyIconMaterialTileSmallFilled';

export default IconMaterialTileSmallFilled;
