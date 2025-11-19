import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCropSquare = (props: IIcon) => {

  return (
    <Icon
      name='CropSquare'

      short_name='CropSquare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
};

IconMaterialCropSquare.displayName = 'OnesyIconMaterialCropSquare';

export default IconMaterialCropSquare;
