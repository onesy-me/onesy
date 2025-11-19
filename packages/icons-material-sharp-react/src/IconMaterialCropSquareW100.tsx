import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropSquareW100 = (props: IIcon) => {

  return (
    <Icon
      name='CropSquareW100'

      short_name='CropSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialCropSquareW100.displayName = 'OnesyIconMaterialCropSquareW100';

export default IconMaterialCropSquareW100;
