import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropSquare = (props: IIcon) => {

  return (
    <Icon
      name='CropSquare'

      short_name='CropSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialCropSquare.displayName = 'OnesyIconMaterialCropSquare';

export default IconMaterialCropSquare;
